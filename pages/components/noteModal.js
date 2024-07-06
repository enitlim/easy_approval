import { Box, Button, InputLabel, MenuItem, Modal, Select, Skeleton, Snackbar, TextField } from "@mui/material";
import React, { useState, useContext } from "react";
import { storage } from "@/firebase/SettingFirebase";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { useSelector, useDispatch } from "react-redux";
import {
  uriToBlob,
  requestStoragePermission,
  pickDocument,
  formatDate,
} from "@/utilities/utils";
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
  const [remarkText, setRemarkText] = useState("");
  const [visiblemenu, setVisible] = useState(false);
  const [returnTo, setreturnTo] = useState(null);
  const [Modvisible, setModvisible] = useState(false);
  const [pdfNote, setPdfNote] = useState(false);

  const closeMenu = () => setVisible(false);
  const hideModal = () => triggerfun();

  let approverList = [];
  if (userData.designation.slice(0, 2) == "Ch" && type == "compliance") {
    approverList = [
      "GM - I",
      "GM - II",
      "GM - III",
      "GM - IT",
      "GM - Vig",
      "CM - IT",
      "CM - PER",
      "CM - REC",
      "CM - FI",
      "CM - VIG",
      "CM - AC",
      "CM - ADV",
      "CM - RECON",
      "CM - AUDIT",
      "CM - BO",
      "CM - PND",
      "CM - FA"
    
    ];

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
    // console.log("File DAta: ",file);
    uploadFile();
  };

const uploadFile = async () => {
  setModvisible(true);
  const remoteFilePath = `easyApproval/${noteID}`;

  const storageRef = ref(storage, `${remoteFilePath}/RemarkNote`);
  try {
    const snapshot = await uploadBytes(storageRef, file);
    // console.log(snapshot);
    // console.log("Uploaded a blob or file!");

    // Get the download URL
    const url = await getDownloadURL(storageRef);
    // console.log("File available at", url);
      setPdfNote(url);

    setModvisible(false);
    setdataToast("File is loaded successfully");
    settoastopen(true);
  } catch (error) {
    // console.log(error.message);
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
        chairmanRemark: remarkText,
        createdOn: CreationDate,
        complianceTo: returnTo,
        cmRemark: null,
        dateofAck: null,
      },
    ];
    // console.log(addrecord);
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
      <Box sx={{ width: "200px" }}>
        <Modal open={visible} onClose={hideModal}>
          <Box sx={style}>
            {Modvisible ? (
              <Skeleton />
            ) : type === "compliance" ? (
              <>
                <TextField
                  fullWidth
                  label="Type your message"
                  onChange={(text) => setRemarkText(text.target.value)}
                  variant="outlined"
                  multiline
                  rows={4}
                  style={{ height: 150 }}
                />
                <InputLabel  id="demo-simple-select-label">Select HOD</InputLabel>

                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={returnTo}
                  label="Return to"
                  onChange={(e) => {
                    setreturnTo(e.target.value);
                    closeMenu();
                  }}
                >
                  {approverList.map((data) => (
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  fullWidth
                  rows={4}
                  style={margins}
                  disabled
                  label="Send for Compliance to "
                  value={returnTo ? returnTo : "Select whom to return"}
                />
                <Button
                  disabled={returnTo ? false : true}
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
                  fullWidth
                  rows={4}
                  label="Reason for Return"
                  onChange={(text) => setRemarkText(text.target.value)}
                  variant="outlined"
                  multiline
                  style={{ height: 150 }}
                />
                <Select
                  fullWidth
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
                    <MenuItem key={data} value={data}>
                      {data}
                    </MenuItem>
                  ))}
                </Select>
                <TextField
                  fullWidth
                  rows={4}
                  style={margins}
                  disabled
                  label="Returned to "
                  value={returnTo ? returnTo : "Select whom to return"}
                />
                <Button
                  style={margins}
                  variant="outlined"
                  onClick={handleReturn}
                >
                  Return
                </Button>
              </>
            ) : type === "remark" ? (
              <>
                <TextField
                  fullWidth
                  rows={4}
                  label="Remarks"
                  onChange={(text) => setRemarkText(text.target.value)}
                  variant="outlined"
                  multiline
                  style={{ height: 150 }}
                />
                <TextField type="file" onChange={onFileChange} />

                <Button
                  style={{ marginTop: 10 }}
                  color="success"
                  variant="contained"
                  onClick={handleRemark}
                >
                  Submit
                </Button>
              </>
            ) : type === "reject" ? (
              <>
                <TextField
                  fullWidth
                  rows={4}
                  label="Rejection Remarks"
                  onChange={(text) => setRemarkText(text.target.value)}
                  variant="outlined"
                  multiline
                  style={{ height: 150 }}
                />
                <Button
                  style={{ marginTop: 10 }}
                  color="error"
                  variant="contained"
                  onClick={handleReject}
                >
                  Submit
                </Button>
              </>
            ) : (
              <>
                <TextField
                  fullWidth
                  rows={4}
                  label="Remarks"
                  onChange={(text) => setRemarkText(text.target.value)}
                  variant="outlined"
                  multiline
                  style={{ height: 150 }}
                />
                <Button
                  style={{ marginTop: 10 }}
                  color="success"
                  variant="contained"
                  onClick={handleRecommended}
                >
                  Submit
                </Button>
              </>
            )}
          </Box>
        </Modal>
      </Box>
    </>
  );
};
 const margins= {
    marginTop: 10,
    marginBottom: 10,
  }
 
   const style = {
     position: "absolute",
     top: "45%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: "75%",
     bgcolor: "background.paper",
     border: "2px solid grey",
     boxShadow: 24,
     borderRadius:8,
     p: 4,
     maxHeight: "90vh",
     overflowY: "auto",
   };
export default NoteModal;
