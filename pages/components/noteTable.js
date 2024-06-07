import { Card, Typography, Table, TableHead, TableRow, TableCell,TableBody } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NoteTable = ({ detail, fy, title }) => {
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
  
   const showDetail = (key) => {
    //  console.log(key);
     router.push({
       pathname: "/noteApproval",
       query: { docID: key, fy: fy },
     });
   };
  return (
    <Card sx={{ p: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Note Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Dept</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
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
