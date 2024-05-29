import { Box, Button, MenuItem, Modal, Select, Skeleton, Snackbar, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { storage } from "@/firebase/SettingFirebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import {
  uriToBlob,
  requestStoragePermission,
  pickDocument,
  formatDate,
} from "../others/utils";
const NoteModal = ({
  visible,
  triggerfun,
  type,
  btntxt,
  approverData,
  sendtoApproval,
  noteID,
}) => {
  const { userData } = useSelector((state) => state.user);
  // console.log("USer Data: ",userData);
  var CreationDate = formatDate(new Date());
const [dataToast, setdataToast] = useState("");
  const [file, setFile] = useState(null);
const [toastopen, settoastopen] = useState(false);
  const [newApprover, setNewApprover] = useState([]);
  const [remarkText, setRemarkText] = useState("");
  const [visiblemenu, setVisible] = useState(false);
  const [returnTo, setreturnTo] = useState(null);
  const [Modvisible, setModvisible] = useState(false);
  const [pdfNote, setPdfNote] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const hideModal = () => triggerfun();
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };
console.log("Mod Visible :", Modvisible);

  let approverList = [];
  if (userData.designation.slice(0, 2) == "Ch" && type == "compliance") {
    approverList = [
      "GM - I",
      "GM - II",
      "GM - III",
      "GM - IT",
      "GM - Vig",
      "CM - IT",
      "CM - HR",
      "CM - Credit",
      "CM - FI",
      "CM - Planning",
    ];

    // approverData
    //   .filter(data => Object.keys(data)[0] != 'Chairman')
    //   .map(data => {
    //     approverList.push(Object.keys(data)[0]);
    //   });
  } else if (userData.designation.slice(0, 2) == "GM") {
    approverList = ["Initiator"];
    approverData
      .filter(
        (data) =>
          Object.keys(data)[0] != "Chairman" &&
          Object.keys(data)[0].slice(0, 2) != "GM"
      )
      .map((data) => {
        approverList.push(Object.keys(data)[0]);
      });
  } else if (userData.designation.slice(0, 2) == "Ch") {
    approverList = ["Initiator"];
    approverData
      .filter((data) => Object.keys(data)[0] != "Chairman")
      .map((data) => {
        approverList.push(Object.keys(data)[0]);
      });
  } else if (userData.designation.slice(0, 2) == "CM") {
    approverList = ["Initiator"];
  }

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log("File DAta: ",file);
    uploadFile();
  };

const uploadFile = async () => {
  setModvisible(true);
  const remoteFilePath = `easyApproval/${noteID}`;

  // Check if the file is a PDF
  // if (file.type !== "application/pdf") {
  //   console.log("Please upload a PDF file");
  //   setdataToast("Please upload a PDF file");
  //   settoastopen(true);
  //   return;
  // }

  const storageRef = ref(storage, `${remoteFilePath}/RemarkNote`);
  try {
    const snapshot = await uploadBytes(storageRef, file);
    console.log(snapshot);
    console.log("Uploaded a blob or file!");

    // Get the download URL
    const url = await getDownloadURL(storageRef);
    console.log("File available at", url);
      setPdfNote(url);

    setModvisible(false);
    setdataToast("File is loaded successfully");
    settoastopen(true);
  } catch (error) {
    console.log(error.message);
  }
};

  const uploadDocument = async () => {
    setModvisible(true);
    // console.log('easyApproval/', noteID);
    try {
      await requestStoragePermission();
      const documentInfo = await pickDocument();

      // console.log('Document info: ', documentInfo);
      const { uri, name } = documentInfo[0];
      // console.log('URI: ', uri);

      // Convert the URI to a Blob using XMLHttpRequest
      const blob = await uriToBlob(uri);

      const storageRef = storage().ref();
      const remoteFilePath = `easyApproval/${noteID}`;
      // console.log(remoteFilePath);
      const documentRef = storageRef.child(`${remoteFilePath}/RemarkNote`);
      // Upload the blob to Firebase Storage using put method
      await documentRef.put(blob);
      const url = await documentRef.getDownloadURL();
      setPdfNote(url);

      setModvisible(false);
       setdataToast("File is loaded successfully");
       settoastopen(true);
    
      // console.log(`Document ${name} uploaded successfully.`);
    } catch (error) {
      // console.error('Error uploading document Final:', error);
      setModvisible(false);
    setdataToast("Error uploading document");
settoastopen(true);
    }
  };
  const handleReturn = () => {
    let level;
    if (returnTo === "Initiator") {
      level = 0;
    }
    if (returnTo.slice(0, 2) === "CM") {
      level = 1;
    }
    if (returnTo.slice(0, 2) === "GM") {
      level = 2;
    }
    const addrecord = [
      { status: "returned" },
      { approveTo: returnTo },
      {
        userId: userData.emp_id,
        username: userData.emp_name,
        desig: userData.designation,
        detail: remarkText,
        postDate: CreationDate,
        status: "Returned",
      },
      { level: level },
    ];
    sendtoApproval(addrecord);
    setRemarkText("");
    hideModal();
  };

  const handleCompliance = () => {
    const addrecord = [
      { status: "compliance" },
      {
        chairmanRemark: text,
        createdOn: CreationDate,
        complianceTo: returnTo,
        cmRemark: null,
        dateofAck: null,
      },
    ];
    console.log(addrecord);
    sendtoApproval(addrecord);
    hideModal();
  };

  const handleRecommended = () => {
    let statusText;
    if (btntxt == "Approve") {
      statusText = "Approved";
    } else if (btntxt == "Noted") {
      statusText = "Noted";
    } else {
      statusText = "Recommended";
    }
    const addrecord = [
      { status: "recommended" },
      { approveTo: userData.designation },
      {
        userId: userData.emp_id,
        username: userData.emp_name,
        desig: userData.designation,
        detail: remarkText,
        postDate: CreationDate,
        status: statusText,
      },
    ];
    sendtoApproval(addrecord);
    setRemarkText("");

    hideModal();
  };
  const handleReject = () => {
    const addrecord = [
      { status: "rejected" },
      { approveTo: userData.designation },
      {
        userId: userData.emp_id,
        username: userData.emp_name,
        desig: userData.designation,
        detail: remarkText,
        postDate: CreationDate,
        status: "Rejected",
      },
    ];
    sendtoApproval(addrecord);
    setRemarkText("");

    hideModal();
  };
  const handleRemark = () => {
    const addrecord = [
      { status: "recommended" },
      { approveTo: userData.designation },
      {
        userId: userData.emp_id,
        username: userData.emp_name,
        desig: userData.designation,
        detail: remarkText,
        postDate: CreationDate,
        supportingDocument: pdfNote,
        status: "Remarked",
      },
    ];
    sendtoApproval(addrecord);
    setRemarkText("");

    hideModal();
  };
  return (
    <>
      <Snackbar
        // anchorOrigin={{ bottom, center }}
        open={toastopen}
        // onClose={handleClose}
        autoHideDuration={2000}
        message={dataToast}
      />
      <Modal
        open={visible}
        onClose={hideModal}
        sx={{ backgroundColor: "white", padding: 20, margin: 20 }}
      >
        <Box sx={style}>
          {Modvisible ? (
            <Skeleton />
          ) : type === "compliance" ? (
            <>
              <TextField
                label="Type your message"
                onChange={(text) => setRemarkText(text.target.value)}
                variant="outlined"
                multiline
                maxRows={4}
                style={{ height: 150 }}
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={setreturnTo}
                label="Return to"
                onChange={() => {
                  setreturnTo(data);
                  closeMenu();
                }}
              >
                {approverList.map((data) => (
                  <MenuItem value={data}>{data}</MenuItem>
                ))}
              </Select>
              <TextField
                style={margins}
                disabled
                label="Returned to "
                value={returnTo ? returnTo : "Select whom to return"}
              />
              <Button
                style={margins}
                variant="outlined"
                onClick={handleCompliance}
              >
                Send For Compliance
              </Button>
            </>
          ) : type === "return" ? (
            <>
              <TextField
                label="Reason for Return"
                onChange={(text) => setRemarkText(text.target.value)}
                variant="outlined"
                multiline
                maxRows={4}
                style={{ height: 150 }}
              />
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={setreturnTo}
                label="Return to"
                onChange={(event) => {
                  setreturnTo(event.target.value);
                  closeMenu();
                }}
              >
                {approverList.map((data) => (
                  <MenuItem value={data}>{data}</MenuItem>
                ))}
              </Select>
              <TextField
                style={margins}
                disabled
                label="Returned to "
                value={returnTo ? returnTo : "Select whom to return"}
              />
              <Button style={margins} variant="outlined" onClick={handleReturn}>
                Return
              </Button>
            </>
          ) : type === "remark" ? (
            <>
              <TextField
                label="Remarks"
                onChange={(text) => setRemarkText(text.target.value)}
                variant="outlined"
                multiline
                maxRows={4}
                style={{ height: 150 }}
              />
              <TextField type="file" onChange={onFileChange}/>
          
              <Button
                style={{ marginTop: 10 }}
                buttonColor="lightgreen"
                variant="contained"
                onClick={handleRemark}
              >
                Submit
              </Button>
            </>
          ) : type === "reject" ? (
            <>
              <TextField
                label="Rejection Remarks"
                onChange={(text) => setRemarkText(text.target.value)}
                variant="outlined"
                multiline
                maxRows={4}
                style={{ height: 150 }}
              />
              <Button
                style={{ marginTop: 10 }}
                buttonColor="red"
                variant="contained"
                disabled={remarkText.length > 0 ? false : true}
                onClick={handleReject}
              >
                Submit
              </Button>
            </>
          ) : (
            <>
              <TextField
                label="Remarks"
                onChange={(text) => setRemarkText(text.target.value)}
                variant="outlined"
                multiline
                maxRows={4}
                style={{ height: 150 }}
              />
              <Button
                style={{ marginTop: 10 }}
                buttonColor="lightgreen"
                variant="contained"
                disabled={remarkText.length > 0 ? false : true}
                onClick={handleRecommended}
              >
                Submit
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};
 const margins= {
    marginTop: 10,
    marginBottom: 10,
  }
  const TextInput= {
    height: 150,
    marginTop: 10,
    marginBottom: 10,
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
export default NoteModal;
