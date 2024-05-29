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

const NoteDetails = ({ navigation, data }) => {
  // console.log("Inside the Detail: ",data);

  const {
    noteId,
    notetitle,
    doc,
    ini,
    approver,
    status,
    level,
    dept,
    notefile,
    noteref,
    noteannex,
    workflow,
    approvedpdf,
  } = data;
  const ViewNote = async (url) => {
    navigation.navigate("Note View", { uri: url });
  };
  // console.log(approvedpdf);
  const statusLevel = {
    1: "Pending at CM",
    2: "Pending at GM",
    3: "Pending at Chairman",
    4: "Approved",
    99: "Rejected",
  };
  return (
    <div style={{ padding: 10 }}>
      <Table>
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
            <Button mode="contained" onPress={() => ViewNote(notefile)}>
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
              <Button mode="contained" onPress={() => ViewNote(noteref)}>
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
              <Button mode="contained" onPress={() => ViewNote(noteannex)}>
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
              <Button mode="contained" onPress={() => ViewNote(approvedpdf)}>
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
              onPress={() =>
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
    fontSize: 20,
    color: "black",
  }
// });

export default NoteDetails;
