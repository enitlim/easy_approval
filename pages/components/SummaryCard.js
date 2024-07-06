import React from "react";
import { Card, Box, Typography, Divider, Stack } from "@mui/material";

const SummaryCard = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: props.bgColor,
      }}
    >
      <Box sx={{ p: 2, width: "100%" }}>
        {/* Set the Box width to 100% */}
        <Stack spacing={2} style={{ justifyContent: "space-evenly" }}>
          <Typography variant="h6">{props.heading}</Typography>
          <Divider style={{ backgroundColor: "black" }} />
          <Typography size="2xl" bold>
            {props.count}
          </Typography>

          {/* <Center> */}
          {/* <Icon as={props.icon} size="xl" /> */}
          {/* </Center> */}
        </Stack>
      </Box>
    </Card>
  );
};

export default SummaryCard;
