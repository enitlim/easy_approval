import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import ComplianceModal from "./components/complianceModal";
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
  const [screenToggle, setScreenToggle] = useState(true);
  const [docDetails, setdocDetails] = useState(null);
  const [noteHistory, setnoteHistory] = useState(null);
  const [noteApprover, setnoteApprover] = useState(null);
  const [onlyApprover, setonlyApprover] = useState(null);
  const [ButtonName, setButtonName] = useState("Recommend");
  const [showbar, setshowbar] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(false);
  const [btn, setbtn] = useState(null);
  const [propDetail, setpropDetail] = useState(null);
  const [approvedPdf, setapprovedPdf] = useState(null);
  const [Modvisible, setModvisible] = useState(false);

  const { docDetailJSON, completeDocument, fy } = router.query;
  const docDetail = JSON.parse(docDetailJSON);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    color: "black",
  };

  const showModal = (type, btntxt) => {
    setVisible(true);
    setType(type);
    setbtn(btntxt);
  };
  const ViewNote = async (url) => {
    router.push({
      pathname: "./viewNote",
    query: { uri: url }});
  };
  const hideModal = () => setVisible(false);
  // console.log('Upload Data: ', docDetails);

  //Data from the Modal. This is where all the operation occurs.
  const dataFromModal = async (data) => {
    // setModvisible(true);
    // console.log('Data from Compliance Modal : ', data);
    // console.log('Complete Compliance Modal : ', completeDocument);
    // console.log("NoteId ",docDetail.noteId);
    // console.log(fy);
    let complianceNotes = completeDocument.map((note) => {
      // console.log("Iterated Note : ",note);
      if (note.noteId === docDetail.noteId) {
        return { ...note, ...data };
      }
      return note;
    });
    // console.log("Updated News : ",complianceNotes);
    //if Compliance
    await firestore()
      .collection("easyApproval")
      .doc("dashboard")
      .collection(`${fy}`)
      .doc("ComplianceNote")
      .set({ complianceNotes });

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
            message="Response Submitted successfully"
          />
        );
      },
    });
  };
  // console.log('Showbar', showbar);
  return (
    <>
      <MenuAppBar />

      <ToastContainer />
      {/* <Modal open={Modvisible}>
        <Skeleton />
        <Typography style={{ color: "black", textAlign: "center" }}>
          Updating...
        </Typography>
      </Modal> */}

      {docDetail ? (
        <ComplianceModal
          triggerfun={hideModal}
          visible={visible}
          sendtoCompliance={dataFromModal}
        />
      ) : null}
      {docDetail ? (
        <Box style={{ flex: 1 }}>
          <Box p={10}>
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
                padding: 10,
                alignItems: "center",
              }}
            >
              <Button
                sx={{ width: "70%", borderRadius: 10 }}
                mode="contained"
                buttonColor="skyblue"
                onPress={() => showModal("ackRemark")}
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

export default ComplianceDetail;
