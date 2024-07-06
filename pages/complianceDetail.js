import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import ComplianceModal from "./components/complianceModal";
import { db } from "@/firebase/SettingFirebase";
import { setDoc, doc } from "firebase/firestore";
import {
  Box,
  Button,
  Divider,
  Modal,
  Skeleton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import MenuAppBar from "./components/appbar";
const ComplianceDetail = () => {
  const router = useRouter();
  const { userData } = useSelector((state) => state.user);

  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(false);
  const [btn, setbtn] = useState(null);

  const [Modvisible, setModvisible] = useState(false);

  const { docDetailJSON, completeDocument, fy } = router.query;
  const docDetail = JSON.parse(docDetailJSON);
  let completeDocumentJSON=""
  completeDocument!=""? completeDocumentJSON = JSON?.parse(completeDocument):null;
  
 

  const showModal = (type, btntxt) => {
    setVisible(true);
    setType(type);
    setbtn(btntxt);
  };
  const ViewNote = async (url) => {
    const newTabUrl = `${
      window.location.origin
    }/viewNote?uri=${encodeURIComponent(url)}`;
    window.open(newTabUrl, "_blank", "noopener,noreferrer");
    
  };
  const hideModal = () => setVisible(false);

  //Data from the Modal. This is where all the operation occurs.
  const dataFromModal = async (data) => {
    let complianceNotes = completeDocumentJSON.map((note) => {
      // console.log("Iterated Note : ",note);
      if (note.noteId === docDetail.noteId) {
        return { ...note, ...data };
      }
      return note;
    });
    await setDoc(doc(db, "easyApproval", "dashboard", `${fy}`, "ComplianceNote"), {
      complianceNotes,
    });
    
    setModvisible(false);
toast.success(" Response Submitted Successfully !", {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
});
  };

   const handleClose = (event, reason) => {
     if (reason && reason === "backdropClick") {
       return;
     }
     setModvisible(false);
   };
  // console.log('Showbar', showbar);
  return (
    <>
      <MenuAppBar />
      <ToastContainer />
      <Modal open={Modvisible} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h4">Uploading</Typography>
          <Skeleton></Skeleton>
        </Box>
      </Modal>

      {docDetail ? (
        <ComplianceModal
          triggerfun={hideModal}
          visible={visible}
          sendtoCompliance={dataFromModal}
        />
      ) : null}
      {docDetail ? (
        <Box style={{ flex: 1 }}>
          <Box p={2}>
            <Typography
              sx={{ color: "black", fontWeight: "bold", fontSize: 25 }}
            >
              Note Title- {docDetail.noteTitle}
            </Typography>
          </Box>

          {userData.designation == docDetail.complianceTo ? (
            <Box
              sx={{
                position: "relative",
                left: 0,
                right: 0,
                bottom: 0,
                padding: 2,
                alignItems: "center",
              }}
            >
              <Button
                sx={{ width: "100%", borderRadius: 10 }}
                variant="contained"
                color="primary"
                onClick={() => showModal("ackRemark")}
              >
                Acknowledge Remark
              </Button>
            </Box>
          ) : null}

          <Divider />
          <Box>
            <Table>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>Note Number</Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>{docDetail.noteId}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>Compliance sent on</Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>{docDetail.createdOn}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>Department name</Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>{docDetail.DeptName}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>Chairman Remark</Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>
                    {docDetail.chairmanRemark}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>Compliance Sent to</Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>
                    {docDetail.complianceTo}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>Compliance Comment</Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>
                    {docDetail.cmRemark ? docDetail.cmRemark : "NA"}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>
                    Compliance Acknowledgement Date
                  </Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>
                    {docDetail.dateofAck ? docDetail.dateofAck : "NA"}
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ flex: 0.5 }}>
                  <Typography sx={noteDetail}>View Approved Note</Typography>
                </TableCell>
                <TableCell style={{ flex: 0.5 }}>
                  <Button
                    mode="contained"
                    onClick={() => ViewNote(docDetail.approvedPdf)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            </Table>
          </Box>
        </Box>
      ) : null}
    </>
  );
};
const noteDetail = {
  textAlign: "left",
  fontSize: 20,
  color: "black",
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
export default ComplianceDetail;
