import React from "react";
import { Card, Box, Typography, Divider, Stack } from "@mui/material";

const SummaryCard = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{ backgroundColor: props.bgColor, maxWidth: 200 }}
    >
      <Stack space="lg" style={{ justifyContent: "space-between" }}>
        <Box>
          <Typography size="xl">{props.heading}</Typography>
          <Divider style={{ backgroundColor: "black" }} />
          <Typography size="2xl" bold>
            {props.count}
          </Typography>
        </Box>
        {/* <Center> */}
        {/* <Icon as={props.icon} size="xl" /> */}
        {/* </Center> */}
      </Stack>
    </Card>
  );
};

export default SummaryCard;
