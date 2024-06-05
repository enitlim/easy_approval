// pages/profile.js

import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import MenuAppBar from "./components/appbar";

const ProfilePage = () => {
  const { userData } = useSelector((state) => state.user);

  return (
    <Container maxWidth="md">
      <MenuAppBar />

      <Box sx={{ mt: 4, mb: 4 }}>
        <Card sx={{ p: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={3}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "primary.main",
                  margin: "0 auto",
                }}
              >
                <PersonIcon sx={{ fontSize: 60 }} />
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography variant="h4" gutterBottom>
                {userData.emp_name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {userData.designation}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {userData.email}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Details
              </Typography>
              <Typography variant="body2">
                <strong>Gender:</strong> {userData.emp_gender}
              </Typography>
              <Typography variant="body2">
                <strong>Date of Birth:</strong> {userData.dob}
              </Typography>
              <Typography variant="body2">
                <strong>Date of Joining:</strong> {userData.doj}
              </Typography>
              <Typography variant="body2">
                <strong>Status:</strong> {userData.status}
              </Typography>
              <Typography variant="body2">
                <strong>Region:</strong> {userData.region}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Work Details
              </Typography>
              <Typography variant="body2">
                <strong>Role:</strong> {userData.role}
              </Typography>
              <Typography variant="body2">
                <strong>Level:</strong> {userData.level}
              </Typography>
              <Typography variant="body2">
                <strong>Department:</strong> {userData.department}
              </Typography>
              <Typography variant="body2">
                <strong>User Department:</strong> {userData.userDept}
              </Typography>
              <Typography variant="body2">
                <strong>Grade:</strong> {userData.grade}
              </Typography>
              <Typography variant="body2">
                <strong>Branch Name:</strong> {userData.br_name}
              </Typography>
              <Typography variant="body2">
                <strong>Branch Code:</strong> {userData.br_code}
              </Typography>
              <Typography variant="body2">
                <strong>Employee ID:</strong> {userData.emp_id}
              </Typography>
              <Typography variant="body2">
                <strong>CUG:</strong> {userData.CUG}
              </Typography>
              <Typography variant="body2">
                <strong>AMH:</strong> {userData.amh}
              </Typography>
              <Typography variant="body2">
                <strong>Is AMH:</strong> {userData.isAMH}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfilePage;
