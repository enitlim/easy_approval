import React, { useState, useEffect, useContext } from "react";
import NoteDetails from "./components/noteDetails";
import NoteHistory from "./components/noteHistory";
import { db } from "@/firebase/SettingFirebase";
import NoteModal from "./components/noteModal";
import { doc, onSnapshot, getDoc, setDoc } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatDate, mergePDFs } from "@/utilities/utils";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  Modal,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import MenuAppBar from "./components/appbar";
const NoteApproval = () => {
  const router = useRouter();
  const { userData } = useSelector((state) => state.user);
  const [screenToggle, setScreenToggle] = useState(true);
  const [docDetails, setdocDetails] = useState(null);
  const [noteHistory, setnoteHistory] = useState(null);
  const [noteApprover, setnoteApprover] = useState(null);
  const [onlyApprover, setonlyApprover] = useState(null);
  const [ButtonName, setButtonName] = useState("Recommend with Remark");
  const [ButtonNameWithoutRemark, setButtonNameWithoutRemark] =
    useState("Recommend");
  const [showbar, setshowbar] = useState(true);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(false);
  const [btn, setbtn] = useState(null);
  const [propDetail, setpropDetail] = useState(null);
  const [approvedPdf, setapprovedPdf] = useState(null);
  const [Modvisible, setModvisible] = useState(false);

  const { docID, fy } = router.query;

  useEffect(() => {
    const getNoteDetails = async () => {
      onSnapshot(doc(db, "easyApproval", "FY", `${fy}`, `${docID}`), (doc) => {
        setdocDetails(doc?.data());
        setnoteHistory(doc?.data()?.noteHistory);
        setnoteApprover(doc?.data()?.approvers);
        let appArr = [];
        for (let index = 0; index < doc?.data()?.approvers.length; index++) {
          let element = doc?.data().approvers[index];
          // console.log("appArr: ", Object.keys(element));
          appArr.push(Object.keys(element)[0]);
        }
        setonlyApprover(appArr);
      });
    };
    getNoteDetails();
  }, []);
  // console.log("Approver Change List", onlyApprover);
  // console.log("Approver Check: ", noteApprover);

  useEffect(() => {
    if (onlyApprover && noteApprover) {
      //if chairman then check approval
      if (userData.designation === "Chairman") {
        if (docDetails.approval === "Chairman") {
          setButtonName("Approve with Remark");
          setButtonNameWithoutRemark("Approve");
        } else {
          setButtonName("Noted  with Remark");
          setButtonNameWithoutRemark("Noted");
        }
      } else if (userData.designation === docDetails.approval) {
        setButtonName("Approve  with Remark");
        setButtonNameWithoutRemark("Approve");
      }
      console.log(userData.designation ,"===", docDetails.approval);
      // if (userData.designation === 'Chairman' && docDetails.level === 4) {
      //   setcompliance(true);
      // }
      //if GM matches then
      //validation if Approval button should appear
      let varCheck1 = false;
      let varCheck2 = false;
      let varCheck3 = false;
      const showbar = () => {
        if (onlyApprover.find((appr) => appr === userData.designation)) {
          //if user Designation is available
          varCheck1 = true;
        }
        noteApprover.forEach((appr) => {
          //check if the user Designation has approved or not
          if (appr[userData?.designation] === 0) {
            varCheck2 = true;
          }
        });
        if (
          //checking if the User Designation and level of the Document mathces with correct order
          (userData.designation.slice(0, 2) === "GM" &&
            docDetails?.level === 2) ||
          (userData.designation.slice(0, 2) === "CM" &&
            docDetails?.level === 1) ||
          (userData.designation.slice(0, 2) === "Ch" && docDetails?.level === 3)
        ) {
          varCheck3 = true;
        }
        // console.log(noteApprover);
        console.log("Button Check: ", varCheck1, varCheck2, varCheck3);
        if (varCheck1 && varCheck2 && varCheck3) {
          //show the data only if all the values are positive
          setshowbar(true);
          if (userData.designation === docDetails.approval) {
            let temp = docDetails.approvers.filter(
              (appr) =>
                Object.keys(appr)[0] != userData.designation &&
                Object.keys(appr)[0].slice(0, 2) == "GM" &&
                Object.values(appr)[0] == 0
            );
            // console.log(docDetails.approvers);
            // console.log(temp);
            if (temp.length === 0) {
              setshowbar(true);
            } else {
              setshowbar(false);
            }
          }
        } else {
          setshowbar(false);
        }
      };
      showbar();
    }
  }, [noteApprover, onlyApprover]);

  useEffect(() => {
    propDetailData();
  }, [docDetails, noteHistory]);

  const propDetailData = () => {
    let detail;
    // console.log("Before Props: ",docDetails);
    if (docDetails && noteHistory) {
      detail = {
        noteId: docDetails.noteId,
        notetitle: docDetails.title,
        doc: docDetails.CreationDate,
        ini: docDetails.CreatedByName,
        recommender: docDetails.approvers,
        approver: docDetails.approval,
        status: docDetails.Status,
        level: docDetails.level,
        dept: docDetails.DeptName,
        notefile: docDetails.notefile,
        noteref: docDetails.noteref,
        noteannex: docDetails.noteannex,
        workflow: noteHistory,
        approvedpdf: docDetails.approvedPdf,
      };
      console.log("Doc Detail: ", docDetails);
      console.log("Detail before passing to the Details page: ", detail);
      setpropDetail(detail);
    }
  };
  const showModal = (type, btntxt) => {
    setVisible(true);
    setType(type);
    setbtn(btntxt);
  };
  const hideModal = () => setVisible(false);
  // console.log('Upload Data: ', docDetails);
  async function urlToBase64(url) {
    const response = await fetch(url);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((resolve, reject) => {
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
    });
  }

  const addWithoutRemark = (btntxt) => {
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
        detail: statusText,
        postDate: formatDate(new Date()),
        status: statusText,
      },
    ];

    console.log("addrecord: ", addrecord);
    // return;
    dataFromModal(addrecord);
  };
  //Data from the Modal. This is where all the operation occurs.
  const dataFromModal = async (data) => {
    console.log("Here");
    setModvisible(true);
    console.log("ModVisible", Modvisible);
    //if Compliance
    if (data[0].status === "compliance") {
      const ComplianceData = {
        ...data[1],
        approvedPdf: docDetails.approvedPdf,
        noteTitle: docDetails.title,
        noteId: docDetails.noteId,
        DeptName: docDetails.DeptName,
      };
      let complianceNotes = [];

      console.log("FY : ", fy);
      const docData = await getDoc(
        doc(db, "easyApproval", "dashboard", `${fy}`, "ComplianceNote")
      );
      console.log("Compliance Data: ", docData.data());
      if (docData.exists && docData.data().complianceNotes != undefined) {
        complianceNotes = [...docData.data().complianceNotes, ComplianceData];
        await setDoc(
          doc(db, "easyApproval", "dashboard", `${fy}`, "ComplianceNote"),
          { complianceNotes }
        );
      } else {
        const complianceNotes = [ComplianceData];
        await setDoc(
          doc(db, "easyApproval", "dashboard", `${fy}`, "ComplianceNote"),
          { complianceNotes }
        );
      }
      toast.success(" Sent for Compliance!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // const docDataData=
      // console.log("Doc detail: ",docDetails );
      setModvisible(false);
    } else {
      // else go with normal flow
      //fetching data from the Total note Summary
      const noteSummary = await getDoc(
        doc(db, "easyApproval", "dashboard", `${fy}`, "totalNote")
      );

      let notes;
      let noteSummaryData = JSON.parse(
        JSON.stringify(noteSummary.data().notes)
      ); //deep copying

      let uploadData = docDetails;
      console.log("Upload Data: ", uploadData);
      const newNoteHistory = [...noteHistory, data[2]]; //NoteHistory from the main Doc is Updated
      const approver = data[1].approveTo; //Getting who approved
      let updatedApprover = [];

      // console.log('newNoteHistory:', newNoteHistory);
      //if recommended/rejected/returned then add to the noteHistory and update the approver and the level
      if (data[0].status === "recommended") {
        noteApprover.map((data) => {
          if (Object.keys(data)[0] === approver) {
            //IF approver is found from the list then update
            data[approver] = 1;
          }
          updatedApprover.push(data); //push to new temp array
        });

        uploadData["noteHistory"] = newNoteHistory; //update the upload data with new note history
        uploadData["approvers"] = updatedApprover; //update the upload data with new approver list
        let noteApproved = true; //boolean indicating the level update
        if (userData.designation.slice(0, 2) === "CM") {
          updatedApprover.forEach((element) => {
            if (
              Object.keys(element)[0].slice(0, 2) === "CM" &&
              Object.values(element)[0] === 0
            ) {
              noteApproved = false; //if any approver with CM has not approved than dont update the level
            }
          });
          if (noteApproved) {
            //if all the approver with the same level is approved the update the level
            uploadData["level"] = 2;
            notes = noteSummaryData.map((note) => {
              //updating the level of totalNotes
              if (note.docID === docID) {
                return { ...note, level: 2, approvers: updatedApprover };
              }
              return note;
            });
          } else {
            notes = noteSummaryData.map((note) => {
              //updating the level of totalNotes
              if (note.docID === docID) {
                return { ...note, approvers: updatedApprover };
              }
              return note;
            });
          }
        } else if (userData.designation.slice(0, 2) === "GM") {
          updatedApprover.forEach((element) => {
            if (
              Object.keys(element)[0].slice(0, 2) === "GM" &&
              Object.values(element)[0] === 0
            ) {
              noteApproved = false;
            }
          });
          if (noteApproved) {
            uploadData["level"] = 3;
            notes = noteSummaryData.map((note) => {
              if (note.docID === docID) {
                return { ...note, level: 3, approvers: updatedApprover };
              }
              return note;
            });
          } else {
            notes = noteSummaryData.map((note) => {
              //updating the level of totalNotes
              if (note.docID === docID) {
                return { ...note, approvers: updatedApprover };
              }
              return note;
            });
          }
        } else if (userData.designation.slice(0, 2) === "Ch") {
          updatedApprover.forEach((element) => {
            if (
              Object.keys(element)[0].slice(0, 2) === "Ch" &&
              Object.values(element)[0] === 0
            ) {
              noteApproved = false;
            }
          });
          if (noteApproved) {
            //Update the PDF code here

            const logo = await urlToBase64(
              "https://firebasestorage.googleapis.com/v0/b/tgb-app-e24e1.appspot.com/o/assets%2FCapture.PNG?alt=media&token=8423ee39-47b3-42f6-83f2-4a60ae03cb78"
            );

            try {
              let approvedPdf = await mergePDFs(
                docDetails.notefile,
                docDetails.noteannex,
                docDetails.noteref,
                newNoteHistory,
                docDetails.noteId,
                docDetails.title,
                docDetails.CreationDate,
                "Approved",
                logo
              );
              console.log(approvedPdf);
              //updating the main note Document
              uploadData["level"] = 4;
              uploadData["approvedPdf"] = approvedPdf;
              uploadData["Status"] = "Approved";
            } catch (error) {
              console.error("Error:", error);
            }

            // for updating the Dashboard note
            notes = noteSummaryData.map((note) => {
              if (note.docID === docID) {
                return { ...note, level: 4, approvers: updatedApprover };
              }
              return note;
            });
          } else {
            notes = noteSummaryData.map((note) => {
              //updating the level of totalNotes
              if (note.docID === docID) {
                return { ...note, approvers: updatedApprover };
              }
              return note;
            });
          }
        } else {
          uploadData["level"] = 1;
          notes = noteSummaryData.map((note) => {
            if (note.docID === docID) {
              return { ...note, level: 1 };
            }
            return note;
          });
        }
      } else if (data[0].status === "rejected") {
        const logo = await urlToBase64(
          "https://firebasestorage.googleapis.com/v0/b/tgb-app-e24e1.appspot.com/o/assets%2FCapture.PNG?alt=media&token=8423ee39-47b3-42f6-83f2-4a60ae03cb78"
        );

        let approvedPdf = await mergePDFs(
          docDetails.notefile,
          docDetails.noteannex,
          docDetails.noteref,
          newNoteHistory,
          docDetails.noteId,
          docDetails.title,
          docDetails.CreationDate,
          "Rejected",
          logo
        );
        let updatedApprover = [];
        //updating the main note Document
        noteApprover.map((data) => {
          if (Object.keys(data)[0] === approver) {
            //IF approver is found from the list then update
            data[approver] = 1;
          }
          updatedApprover.push(data); //push to new temp array
        });

        uploadData["noteHistory"] = newNoteHistory; //update the upload data with new note history
        uploadData["approvers"] = updatedApprover;
        uploadData["level"] = 99;
        uploadData["approvedPdf"] = approvedPdf;
        uploadData["Status"] = "Rejected";
        // for updating the Dashboard note
        notes = noteSummaryData.map((note) => {
          if (note.docID === docID) {
            return { ...note, level: 99, approvers: updatedApprover };
          }
          return note;
        });
      } else {
        // if returned then send the data to the user level directly
        if (data[3].level === 0) {
          //If returned to intiator then update all the approver a not approved. means the process witll start from the start
          noteApprover.map((data) => {
            data[Object.keys(data)[0]] = 0;
            updatedApprover.push(data);
          });
        } else {
          //else whomever level is returned only that person's approval is updated to 0 as not approved
          noteApprover.map((data) => {
            if (Object.keys(data)[0] === approver) {
              data[approver] = 0;
            }
            updatedApprover.push(data);
          });
        }

        uploadData["noteHistory"] = newNoteHistory; //updating the note history
        uploadData["approvers"] = updatedApprover; //updating the approver
        uploadData["level"] = data[3].level; //updating the level
        uploadData["approverPdf"] = approvedPdf;
        notes = noteSummaryData.map((note) => {
          //updating the level of totalNotes
          if (note.docID === docID) {
            return {
              ...note,
              level: data[3].level,
              approvers: updatedApprover,
            };
          }
          return note;
        });
      }

      console.log("Upload Main Note", uploadData);
      console.log("Update Dashboard Notes", { notes });

      //Updating the Total Notes Document
      try {
        await setDoc(
          doc(db, "easyApproval", "dashboard", `${fy}`, "totalNote"),
          { notes }
        );

        console.log("Updated Successfully");
      } catch (error) {
        console.log("Encountered error", error.message);
      }

      //Updating the Main Notes Document
      try {
        await setDoc(
          doc(db, "easyApproval", "FY", `${fy}`, `${docID}`),
          uploadData
        );

        console.log("Updated Successfully");
        toast.success(" Updated Successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } catch (error) {
        console.log("Encountered error", error.message);
        toast.error(`Error: ${error.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
      setModvisible(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason && reason === "backdropClick") {
      return;
    }
    setModvisible(false);
  };

  return (
    <div>
      <MenuAppBar />
      <Modal open={Modvisible} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h4">Uploading</Typography>
          <Skeleton></Skeleton>
        </Box>
      </Modal>
      <ToastContainer />

      {noteApprover ? (
        <NoteModal
          triggerfun={hideModal}
          visible={visible}
          type={type}
          btntxt={btn}
          approverData={noteApprover}
          sendtoApproval={dataFromModal}
          noteID={docDetails.noteId}
        />
      ) : null}

      {docDetails ? (
        <div style={{ flex: 1 }}>
          <div p={10}>
            <Typography
              style={{ color: "black", fontWeight: "bold", fontSize: 25 }}
            >
              Note Title- {docDetails.title}
            </Typography>
          </div>

          {userData.emp_id == docDetails.CreatedByID &&
          docDetails.level == 0 ? (
            <div
              style={{
                position: "relative",
                left: 0,
                right: 0,
                bottom: 0,
                // backgroundColor: 'white',
                padding: 10,
                alignItems: "center",
              }}
            >
              <Button
                style={{ width: "40%", borderRadius: 10 }}
                mode="contained"
                color="primary"
                onClick={() => showModal("remark")}
              >
                Add Remark
              </Button>
            </div>
          ) : null}

          {showbar && (
            <div
              style={{
                position: "relative",
                left: 0,
                right: 0,
                bottom: 0,
                // backgroundColor: 'white',
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Stack
                direction="row"
                spacing={2}
                style={{ justifyContent: "space-evenly" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => showModal("return", "Return")}
                >
                  Return
                </Button>
                {userData.designation === "Chairman" ||
                userData.designation.slice(0, 2) === "GM" ? (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => showModal("reject", `Reject`)}
                  >
                    <Typography>Reject</Typography>
                  </Button>
                ) : null}
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => addWithoutRemark(ButtonNameWithoutRemark)}
                >
                  <Typography>{ButtonNameWithoutRemark}</Typography>
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => showModal("recommend", `${ButtonName}`)}
                >
                  <Typography>{ButtonName}</Typography>
                </Button>
              </Stack>
            </div>
          )}

          <Stack
            spacing={2}
            direction="row"
            style={{ justifyContent: "space-evenly", paddingBottom: "10px" }}
          >
            <Button
              fullWidth
              variant="text"
              onClick={() => setScreenToggle(true)}
            >
              Detail
            </Button>
            {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
            <Button
              fullWidth
              variant="text"
              onClick={() => setScreenToggle(false)}
            >
              History
            </Button>
          </Stack>
          <Divider />
          <div>
            {propDetail ? (
              <>
                {screenToggle ? (
                  <NoteDetails data={propDetail} />
                ) : (
                  <NoteHistory detail={noteHistory} />
                )}
              </>
            ) : null}
          </div>

          {/* //Buttton to send to compliance */}
          {userData.designation == "Chairman" && docDetails.level == 4 ? (
            <div
              style={{
                width: "100%",
                position: "relative",
                left: 0,
                right: 0,
                bottom: 0,
                padding: 10,
                marginTop: 10,
              }}
            >
              <Button
                style={{ width: "20%", borderRadius: 10 }}
                variant="contained"
                color="success"
                onClick={() => showModal("compliance")}
              >
                <Typography>Send For Compliance</Typography>
              </Button>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
const modalStyle = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  bgcolor: "background.paper",
  border: "2px solid grey",
  boxShadow: 24,
  borderRadius: 8,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};
export default NoteApproval;
