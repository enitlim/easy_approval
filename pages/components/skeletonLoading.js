import {
  Box,
  Card,
  Divider,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

function skeletonLoading() {
  return (
    <>
      <Skeleton></Skeleton>
    </>
  );
}
const DashboardCardSkeleton = ({ title, bgColor }) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: `${bgColor}` }}>
      <Box sx={{ p: 2, width: "100%" }}>
        <Stack spacing={2} style={{ justifyContent: "space-evenly" }}>
          <Typography variant="h6">{title}</Typography>
          <Divider style={{ backgroundColor: "black" }} />
          <Skeleton variant="rectangular" width={40} height={40} />
        </Stack>
      </Box>
    </Card>
  );
};

const DashboardTableSkeleton = () => {
  return (
    <>
      <Card sx={{ p: 1, mb: 5, overflowX: "auto", width: "100%" }}>
        {/* <Typography variant="subtitle1">{title}</Typography> */}
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Note Title</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Dept</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </>
  );
};
export default DashboardCardSkeleton;
export { DashboardCardSkeleton, DashboardTableSkeleton };
