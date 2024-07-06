import React from "react";
import {
  Card,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@mui/material";
import { useRouter } from "next/router";
const NoteDetails = ({data }) => {
  console.log("Inside the Detail: ",data);
const router=useRouter();
  const {
    noteId,
    notetitle,
    doc,
    ini,
    approver,
    recommender,
    level,
    dept,
    notefile,
    noteref,
    noteannex,
    workflow,
    approvedpdf,
  } = data;
  const ViewNote = async (url) => {
     const newTabUrl = `${
       window.location.origin
     }/viewNote?uri=${encodeURIComponent(url)}`;
     window.open(newTabUrl, "_blank", "noopener,noreferrer");
    // router.push({pathname:"../viewNote", query:{ uri: url }});
  };
  // console.log(approvedpdf);
  const statusLevel = {
    1: "Submitted to CM",
    2: "Submitted to GM",
    3: "Submitted to Chairman",
    4: "Approved",
    99: "Rejected",
  };
  return (
    <div style={{ padding: 5 }}>
      <Table size="small">
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>Note Number</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>{noteId}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>Date of Creation</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>{doc}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>Initiated By</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>{ini}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>Recommender</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            {recommender
              .filter(
                (recommendation) => Object.keys(recommendation) != "Chairman"
              )
              .map((recommend, index) => (
                <Typography style={noteDetail} key={index}>
                  {`Recommender ${++index} - ${Object.keys(recommend)} - ${
                    Object.values(recommend) == 0 ? "Pending" : "Recommended"
                  }`}
                </Typography>
              ))}
            {/* {recommender. ((recommend) => 
            (
              <Typography style={noteDetail}>
                {Object.keys(recommend)}
              </Typography>
            )
            )} */}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>Approver</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>{approver}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>Level</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>{statusLevel[level]}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>Department</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>{dept}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ flex: 0.5 }}>
            <Typography style={noteDetail}>View Note</Typography>
          </TableCell>
          <TableCell style={{ flex: 0.5 }}>
            <Button mode="contained" onClick={() => ViewNote(notefile)}>
              View
            </Button>
          </TableCell>
        </TableRow>
        {noteref ? (
          <TableRow>
            <TableCell style={{ flex: 0.5 }}>
              <Typography style={noteDetail}>View Note Reference</Typography>
            </TableCell>
            <TableCell style={{ flex: 0.5 }}>
              <Button mode="contained" onClick={() => ViewNote(noteref)}>
                View
              </Button>
            </TableCell>
          </TableRow>
        ) : null}
        {noteannex ? (
          <TableRow>
            <TableCell style={{ flex: 0.5 }}>
              <Typography style={noteDetail}>View Note Annexures</Typography>
            </TableCell>
            <TableCell style={{ flex: 0.5 }}>
              <Button mode="contained" onClick={() => ViewNote(noteannex)}>
                View
              </Button>
            </TableCell>
          </TableRow>
        ) : null}
        {level >= 4 ? (
          <TableRow>
            <TableCell style={{ flex: 0.5 }}>
              <Typography style={noteDetail}>View Approved Note</Typography>
            </TableCell>
            <TableCell style={{ flex: 0.5 }}>
              <Button mode="contained" onClick={() => ViewNote(approvedpdf)}>
                View
              </Button>
            </TableCell>
          </TableRow>
        ) : null}
        {/* <TableRow>
          <TableCell style={{flex: 0.5}}>
            <Typography style={noteDetail}>Test Deisgn Note</Typography>
          </TableCell>
          <TableCell style={{flex: 0.5}}>
            <Button
              mode="contained"
              onClick={() =>
                navigation.navigate('Note PDF', {
                  approver: workflow,
                  noteId: noteId,
                  notetitle: notetitle,
                  notedate: doc,
                  note: notefile,
                })
              }>
              Design
            </Button>
          </TableCell>
        </TableRow> */}
      </Table>
    </div>
  );
};
// const style = StyleSheet.create({
 const  noteDetail= {
    textAlign: "left",
    fontSize: 14,
    color: "black",
  }
// });

export default NoteDetails;
