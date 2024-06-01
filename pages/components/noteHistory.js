import { Avatar, Card, CardActions, CardContent, CardHeader, Typography, Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";
const badge = {
  Initiated: { badgeIcon: "I", backGr: "#E9E9E9", badgeStyle: "#545050" },
  Recommended: { badgeIcon: "R", backGr: "#B9F4FF", badgeStyle: "#0398B4" },
  Approved: { badgeIcon: "A", backGr: "#D6FFAB", badgeStyle: "#59921C" },
  Noted: { badgeIcon: "N", backGr: "#FCFF95", badgeStyle: "#D1D607" },
  Rejected: { badgeIcon: "R", backGr: "#DDB1B5", badgeStyle: "#9F0412" },
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
  const router=useRouter();
  const LeftContent = (userId, color) => (
    <Avatar
    sx={{bgcolor: color }}
      
    >{userId}
      </Avatar>
  );
  // console.log('Using Null check: ', badge[status]?.badgeStyle);
  return (
    <Card 
      elevation={3}
      style={{
        margin: 5,
        paddingBottom: 10,
        backgroundColor: `${badge[status]?.backGr}`,
      }}
    >
      <CardHeader
      avatar={
          <Avatar
    sx={{bgcolor: badge[status]?.badgeStyle }}
      
    >{badge[status]?.badgeIcon}
      </Avatar>
     
        }
        title={username}
        subheader={`${userId}- ${desig}`}
       
      />
      <CardContent>
        <Typography variant="titleLarge" style={{ color: "black" }}>
          Date: {remarkDate}
        </Typography>
        <Typography variant="titleLarge" style={{ color: "black" }}>
          Remarks: {remark}
        </Typography>
        <Typography variant="bodyMedium" style={{ color: "black" }}>
          Status {status}
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
  const contentContainer= {
    paddingVertical: 10,
    margin: 10,
    padding: 10,
  }
// });
export default NoteHistory;
