// components/SplashScreen.js
import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const SplashScreen = ({ logo }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Box
        sx={{ width: "100px", height: "100px", position: "relative", mb: 2 }}
      >
        <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
      </Box>
      <Typography variant="h4" component="h1">
        Welcome to MyApp
      </Typography>
    </Box>
  );
};

export default SplashScreen;
