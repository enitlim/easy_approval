import React, { useState, useEffect, useContext } from "react";
import { doc, setDoc,addDoc, getDoc, collection } from "firebase/firestore";
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";

import { formatDate } from "./others/utils";
import { db, storage } from "@/firebase/SettingFirebase";
import {
  Autocomplete,
  Button,
  Checkbox,
  MenuItem,
  Modal,
  Select,
  Skeleton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { CheckBoxOutlineBlankOutlined } from "@mui/icons-material";
import { CheckBox } from "@mui/icons-material";
const icon = <CheckBoxOutlineBlankOutlined fontSize="small" />;
const checkedIcon = <CheckBox fontSize="small" />;
const checkedIcon2 = <CheckBox fontSize="small" />;
export default function AddNote() {
  const approversList = [
    "Chairman",
    "GM - I",
    "GM - II",
    "GM - III",
    "GM - IT",
    "GM - Vig",
  ];

  const { userData } = useSelector((state) => state.user);
//   console.log("userData: ", userData);

  const userId = userData?.emp_id;
  const userDept = userData?.userDept;
  const CreatedByName = userData?.emp_name;
  const createdByDesig = userData?.designation;
  const [file, setFile] = useState(null);

  const [selectedRecommenders, setSelectedRecommenders] = useState([]);
  const [selectedApprover, setSelectedApprover] = useState("");
  const [selectedGM, setSelectedGM] = useState([]);
  const [pdfNote, setPdfNote] = useState(null);
  const [title, setTitle] = useState("");
  const [reference, setReference] = useState(null);
  const [annexure, setAnnexure] = useState(null);
  const [notecount, setnotecount] = useState(null);
  const [noteID, setNoteID] = useState(null);
  const [FY, setFY] = useState(null);
  const [docID, setDocID] = useState(null);
  const [visible, setVisible] = useState(false);
  const [Modvisible, setModvisible] = useState(false);
  const [gmlist, setgmlist] = useState([]);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    color: "black",
  };

  const onDismissSnackBar = () => {
    setVisible(false);
    navigation.navigate("Dashboard");
  };

  useEffect(() => {
    let temp = [];
    const listGM = () => {
      approversList
        .filter(
          (approver) => approver != selectedApprover && approver != "Chairman"
        )
        .map((approver) => {
          temp.push({ name: approver, id: approver });
        });
      // console.log('GM triggered: ', temp);
      setgmlist(temp);
      setSelectedGM([]);
    };
    listGM();
  }, [selectedApprover]);

  useEffect(() => {
    const FY = () => {
      //Calculating Financial Year
      var year;
      var dateNote = new Date();
      var month = dateNote.getMonth() + 1;
      if (month < 4) {
        year = dateNote.getFullYear() - 1 + "-" + dateNote.getFullYear();
      } else {
        year = dateNote.getFullYear() + "-" + (dateNote.getFullYear() + 1);
      }
      setFY(year);
      return year;
    };

    const fetchData = async () => {
      //Getting the Currenct Count for the Department
      let countValue = 1; // Default value if no documents are found
      let docID = userDept;
      try {
        const curFYValue = FY();
                console.log("Before Query: ", curFYValue);
                console.log("USer Dept: ", userDept);

        const querySnapshot = await getDoc(
          doc(db, "easyApproval", "dashboard", `${curFYValue}`, `${userDept}`)
        );
        console.log("After Query");
        console.log("Query Snapshot: ",querySnapshot.data());
        // Check if there are any documents returned by the query
        if (!querySnapshot.empty) {
            const data = querySnapshot.data();
             if (data && data.count) {
               countValue = Number(data.count) + 1;
               docID = doc.id;
             }
        
        }
      } catch (error) {
        console.error("Error fetching count:", error);
      }
      setnotecount(countValue);
      setDocID(docID);
      
    };

    fetchData();
  }, []);
  console.log('NoteCount:', notecount);
  // console.log('FY:', FY);
  useEffect(() => {
    if (notecount && FY) {
      const funNoteId = () => {
        // Setting the Note ID for the new note
        // console.log(userDept, '/', FY, '/', notecount);
        const noteIDTemp = `E-${userDept}/${FY}/${notecount}`;
        setNoteID(noteIDTemp);
      };
      funNoteId();
    }
  }, [noteID, notecount, FY]);

  var CreationDate = formatDate(new Date());

  // console.log('NoteID: ', noteID);
  // console.log('DocID : ', docID);
  const onFileChange = async (e) => {
    setFile(e.target.files[0]);
  }
  const uploadDocument = async (noteType) => {
    const remoteFilePath = `easyApproval/${noteID}`;

    const storageRef = ref(storage, `${remoteFilePath}/${noteType}`);
    try {
      await uploadBytes(storageRef, file);
      //   console.log(snapshot);
      console.log("Uploaded a blob or file!");

      // Get the download URL
      const url = await getDownloadURL(storageRef);
      console.log("File available at", url);
      if (noteType === "mainNote") {
        setPdfNote(url);
      } else if (noteType === "noteAnnexure") {
        setReference(url);
      } else {
        setAnnexure(url);
      }
      setPdfNote(url);

      setModvisible(false);
      setdataToast("File is loaded successfully");
      settoastopen(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  const  handleUpload = async (noteType) => {
    setModvisible(true);

    try {
      const storageRef = storage().ref();
      const remoteFilePath = `easyApproval/${noteID}`;
      if (noteType === "mainNote") {
        const documentRef = storageRef.child(`${remoteFilePath}/MainNote`);
        // Upload the blob to Firebase Storage using put method
        await documentRef.put(blob);
        const url = await documentRef.getDownloadURL();
        setPdfNote(url);
      } else if (noteType === "noteAnnexure") {
        const documentRef = storageRef.child(`${remoteFilePath}/Annexure`);
        // Upload the blob to Firebase Storage using put method
        await documentRef.put(blob);
        const url = await documentRef.getDownloadURL();
        setReference(url);
      } else {
        const documentRef = storageRef.child(`${remoteFilePath}/Reference`);
        // Upload the blob to Firebase Storage using put method
        await documentRef.put(blob);
        const url = await documentRef.getDownloadURL();
        setAnnexure(url);
      }
      setModvisible(false);
      toast.show({
        placement: "top",
        render: ({ id }) => {
          const toastId = "toast" + id;
          return (
            <CustomToast
              toastId={toastId}
              action="success"
              variant="solid"
              title="Uploaded"
              message="File is loaded successfully"
            />
          );
        },
      });
      console.log(`Document ${name} uploaded successfully.`);
    } catch (error) {
      // console.error('Error uploading document Final:', error);
      setModvisible(false);
      toast.show({
        placement: "top",
        render: ({ id }) => {
          const toastId = "toast" + id;
          return (
            <CustomToast
              toastId={toastId}
              action="error"
              variant="solid"
              title="Error Uploading"
              // message={error}
              message="Error uploading document"
            />
          );
        },
      });
    }
  };

  const submitData = async () => {
    console.log("Title: ",title);
    console.log("Recommenders: ",selectedRecommenders);
    console.log("Approver: ",selectedApprover);
    console.log("PDF Note: ",pdfNote);
    if (
      title &&
      selectedRecommenders.length > 0 &&
      selectedApprover &&
      // selectedGM.length > 0 &&
      pdfNote
    ) {
      setModvisible(true);
      let tempAppr = [selectedApprover];
      const approverslist = [
        ...selectedRecommenders,
        ...selectedGM,
        ...tempAppr,
        "Chairman",
      ];
      let approvers = [];
      approverslist.forEach((element) => {
        let obj = {};
        obj[element] = 0;
        approvers.push(obj);
      });
      // console.log(approvers);

      var submitData = {
        // upload the File and get the URL and update the setFile usestate and proceed with the saving of the data
        noteId: noteID,
        title: title,
        DeptName: userDept,
        level: 1,
        Status: "Pending",
        CreationDate: CreationDate,
        CreatedByID: userId,
        CreatedByName: CreatedByName,
        createdByDesig: createdByDesig,
        notefile: pdfNote,
        noteannex: annexure,
        noteref: reference,
        approval: selectedApprover,
        approvers: approvers,
        noteHistory: [
          {
            userId: userId,
            username: CreatedByName,
            desig: createdByDesig,
            status: "Initiated",
            detail: "Submitted for Approval",
            postDate: CreationDate,
          },
        ],
      };
      console.log(submitData);
      // return;
      try {
        const saveDoc = await addDoc(
          collection(db, "easyApproval", "FY", `${FY}`),
          submitData
        );
                      console.log("Main Doc Saved");
                      console.log(saveDoc);

        if (saveDoc) {
          // console.log('Doc Detail: ', saveDoc);
          console.log('Doc Id: ', saveDoc.id);
          const updateCount = await setDoc(
            doc(db, "easyApproval", "dashboard", `${FY}`, `${docID}`),
            {
              count: notecount,
              dept: userDept,
            }
          );

          if (updateCount) {
            let newTotalNotes = [];

            //fetch the current Detail form this document
            try {
              let totalNoteData = await getDoc(
                doc(db, "easyApproval", "dashboard", `${FY}`, "totalNote")
              );
              console.log("Main Doc Saved");
              // console.log('Pending Note Date : => ', pendingNoteData.data().notes);
              newTotalNotes = totalNoteData.data().notes;
              // console.log('Pending Note Date : => ', newTotalNotes);
            } catch (error) {
              console.log(error.message);
            }

            const totalNote = {
              notes: [
                ...newTotalNotes,
                {
                  title: title,
                  docID: saveDoc.id,
                  dept: userDept,
                  createdOn: CreationDate,
                  level: 1,
                  approvers: approvers,
                },
              ],
            };

            //Append the doc with new data
            await setDoc(
              doc(db, "easyApproval", "dashboard", `${FY}`, "totalNote"),
              totalNote
            );
              console.log("Dashboard Doc Saved");

            //add to the total Note List
            console.log('Document saved');
            setModvisible(false);
            setVisible(true);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
        console.log("Unable to Submit");
    //   toast.show({
    //     placement: "top",
    //     render: ({ id }) => {
    //       const toastId = "toast" + id;
    //       return (
    //         <CustomToast
    //           toastId={toastId}
    //           action="error"
    //           variant="solid"
    //           title="Unable to Submit"
    //           message="Please fill up all required field"
    //         />
    //       );
    //     },
    //   });
    }
  };
  return (
    <div style={container}>
      {/* <Modal
        open={Modvisible}
        onClose={()=>setModvisible(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Skeleton />
        <Typography style={{ color: "black", textAlign: "center" }}>
          Uploading...
        </Typography>
      </Modal> */}

      <Snackbar
        style={{ backgroundColor: "lightgreen" }}
        elevation="5"
        duration={2000}
        visible={visible}
        onDismiss={onDismissSnackBar}
      >
        <Typography style={{ color: "black" }}>
          {" "}
          New Note is successfully added
        </Typography>
      </Snackbar>
      {/* <TextField
          mode="outlined"
          label="Department "
          value={userDept}
          editable={false}
          // onChangeText={dept => setDept(dept)}
        /> */}
      <TextField
      fullWidth
        mode="outlined"
        label="Note Title *"
        //   value={title}
        onChange={(title) => setTitle(title.target.value)}
      />
      <Typography style={{ color: "black" }}>Select Approver</Typography>
      <Select
        fullWidth="true"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedApprover}
        label="Approver"
        onChange={(event) => setSelectedApprover(event.target.value)}
      >
        {approversList.map((data) => (
          <MenuItem value={data}>{data}</MenuItem>
        ))}
      </Select>

      <Typography style={{ color: "black" }}>Select Recommenders</Typography>
      <Autocomplete
        multiple
        id="gmlist-checkbox"
        options={cmlist}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        onChange={(event, newvalue) => {
          setSelectedRecommenders(newvalue.map((item) => item.name));
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="General Manager"
            placeholder="Add More"
          />
        )}
      />
      <Autocomplete
        multiple
        id="gmlist-checkbox"
        options={gmlist}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        onChange={(event, newvalue) => {
          setSelectedGM(newvalue.map((item) => item.name));
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="General Manager"
            placeholder="Add More"
          />
        )}
      />

      <Typography style={{ color: "black" }}>Select General Manager</Typography>

      <Stack space="md">
        <TextField
          type="file"
          accept="application/pdf"
          onChange={onFileChange}
        />

        <Button mode="contained" onClick={() => uploadDocument("mainNote")}>
          Upload Note
        </Button>
        <TextField
          type="file"
          accept="application/pdf"
          onChange={onFileChange}
        />

        <Button mode="contained" onClick={() => uploadDocument("noteAnnexure")}>
          Upload Annexure
        </Button>
        <TextField
          type="file"
          accept="application/pdf"
          onChange={onFileChange}
        />

        <Button
          mode="contained"
          onClick={() => uploadDocument("noteReference")}
        >
          Upload Reference
        </Button>

        <Button mode="elevated" onClick={submitData} buttonColor="lightgreen">
          Submit
        </Button>
      </Stack>
    </div>
  );
}

const container = {
  flex: 1,
  backgroundColor: "#fff",
  justifyContent: "flex-start",
  padding: 24,
};
const modalContent = {
  backgroundColor: "white",
  padding: 20,
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  // Semi-transparent background
};

const cmlist = [
  { name: "CM - IT", id: "CM - IT" },
  { name: "CM - PER", id: "CM - PER" },
  { name: "CM - REC", id: "CM - REC" },
  { name: "CM - FI", id: "CM - FI" },
  { name: "CM - VIG", id: "CM - VIG" },
  { name: "CM - AC", id: "CM - AC" },
  { name: "CM - ADV", id: "CM - ADV" },
  { name: "CM - Recon", id: "CM - Recon" },
  { name: "CM - Audit", id: "CM - Audit" },
  { name: "CM - BO", id: "CM - BO" },
  { name: "CM - PnD", id: "CM - PnD" },
];