import {
  Card,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const NoteComplianceTable = ({ detail, fy, title, totalNote }) => {
  const router = useRouter();
  const tableData = detail;
  const showDetail = (item, detail) => {
    let completeDoc = JSON?.stringify(detail);

    let jsonItem = JSON.stringify(item);
    router.push({
      pathname: "/complianceDetail",
      query: { docDetailJSON: jsonItem, completeDocument: completeDoc, fy: fy },
    });
  };
  return (
    <Card sx={{ p: 2 }}>
      <Typography variant="h5" font-weight="bold" sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Note Title</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Dept</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Remark</TableCell>
          </TableRow>
        </TableHead>

        {tableData.map((item, index) => (
          <TableRow
            key={item.docID}
            onClick={() => showDetail(item, totalNote)}
          >
            <TableCell style={{ flex: 0.5, justifyContent: "center" }}>
              {item.noteTitle}
            </TableCell>
            <TableCell style={{ flex: 0.1, alignContent: "flex-end" }}>
              {item.DeptName}
            </TableCell>
            <TableCell numeric style={{ flex: 0.25, alignContent: "flex-end" }}>
              {item.createdOn.split(",")[0]}
            </TableCell>
            <TableCell style={{ flex: 0.25 }} numeric>
              {item.chairmanRemark}
            </TableCell>
          </TableRow>
        ))}
      </Table>
    </Card>
  );
};

export default NoteComplianceTable;
