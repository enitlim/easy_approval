import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Button,
  Tooltip,
  Grid,
} from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
const badge = {
  Initiated: { badgeIcon: "I", backGr: "#E9E9E9", badgeStyle: "#545050" },
  Recommended: { badgeIcon: "R", backGr: "#B9F4FF", badgeStyle: "#0398B4" },
  Approved: { badgeIcon: "A", backGr: "#D6FFAB", badgeStyle: "#59921C" },
  Noted: { badgeIcon: "N", backGr: "#FCFF95", badgeStyle: "#D1D607" },
  Rejected: { badgeIcon: "X", backGr: "#DDB1B5", badgeStyle: "#9F0412" },
  Returned: { badgeIcon: "R", backGr: "#DDB1B5", badgeStyle: "#9F0412" },
  Remarked: { badgeIcon: "I", backGr: "#E9E9E9", badgeStyle: "#545050" },
};
const CardHistory = ({
  userId,
  username,
  desig,
  remarkDate,
  remark,
  status,
  pdflink,
}) => {
  // console.log('card USer', status);
  const router = useRouter();

  // console.log('Using Null check: ', badge[status]?.badgeStyle);
  return (
    <Card
      elevation={3}
      style={{
        width: "100%",
        maxWidth: 700,
        margin: 15,
        paddingBottom: 10,
        backgroundColor: `${badge[status]?.backGr}`,
      }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={3} md={2}>
            <Tooltip title={status}>
              <Avatar sx={{ bgcolor: badge[status]?.badgeStyle }}>
                {badge[status]?.badgeIcon}
              </Avatar>
            </Tooltip>
          </Grid>
          <Grid item xs={9} md={7}>
            <Typography variant="subtitle1" style={{ color: "black" }}>
              {username}
            </Typography>
            <Typography variant="subtitle2" style={{ color: "black" }}>
              {`${userId}- ${desig}`}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle2" style={{ color: "black" }}>
              Date: {remarkDate}
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="subtitle2" style={{ color: "black" }}>
          STATUS: {status}
        </Typography>
        <Typography variant="button" style={{ color: "black" }}>
          Remarks: {remark}
        </Typography>
      </CardContent>
      {pdflink ? (
        <CardActions>
          <Button
            variant="outlined"
            onClick={() => {
              router.push("../viewNote", { uri: pdflink });
            }}
          >
            View
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
};
const NoteHistory = ({ detail }) => {
  // console.log(detail);
  return (
    // <ScrollView style={{padding: 20}}>

    <div style={contentContainer}>
      {/* <View style={{height: ht}}> */}
      {detail.map((data, index) => (
        <CardHistory
          key={index}
          userId={data.userId}
          username={data.username}
          desig={data.desig}
          remarkDate={data.postDate}
          remark={data.detail}
          status={data.status}
          pdflink={data.supportingDocument}
        />
      ))}
      {/* </View> */}
    </div>
  );
};
// const styles = StyleSheet.create({
const contentContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 10,
  margin: 10,
  padding: 10,

  alignItem: "center",
  paddingVertical: 10,
  margin: 10,
  padding: 10,
};
// });
export default NoteHistory;
