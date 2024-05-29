import { Card, Typography, Table, TableHead, TableRow, TableCell,TableBody } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NoteTable = ({ detail, fy, navigation, title }) => {
  // console.log('Title : ', title);
const router=useRouter();
  const tableData = detail;


  const statusLevel = {
    1: "at CM",
    2: "at GM",
    3: "Chairman",
    4: "Approved",
    99: "Rejected",
  };
  // console.log(statusLevel[item.level]);
  // console.log('From - To : ', from, to);
  // console.log('No of Pages', Math.ceil(tableData.length / itemsPerPage));
 
   const showDetail = (key) => {
     console.log(key);
     router.push({
       pathname: "/noteApproval",
       query: { docID: key, fy: fy },
     });
   };
  return (
    <Card>
      <Typography>{title}</Typography>
      <Table>
        <TableHead style={{ bold: true }}>
          <TableRow>
            <TableCell style={{ flex: 0.5 }}>Note Title</TableCell>
            <TableCell style={{ flex: 0.15, alignContent: "flex-end" }}>
              Dept
            </TableCell>
            <TableCell numeric style={{ flex: 0.25 }}>
              Date
            </TableCell>
            <TableCell numeric style={{ flex: 0.25 }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>

        {tableData.map((item, index) => (
          <TableRow key={item.docID} onClick={() => showDetail(item.docID)}>
              <TableCell style={{ flex: 0.5, justifyContent: "center" }}>
                {item.title}
              </TableCell>
            <TableCell style={{ flex: 0.1, alignContent: "flex-end" }}>
              {item.dept}
            </TableCell>
            <TableCell numeric style={{ flex: 0.25, alignContent: "flex-end" }}>
              {item.createdOn.split(",")[0]}
            </TableCell>
            <TableCell style={{ flex: 0.25 }} numeric>
              {statusLevel[item.level]}
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Card>
  );
};

export default NoteTable;
