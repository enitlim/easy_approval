// components/ChangePassword.js
import React, { useState } from "react";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  getAuth,
  updatePassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChangePassword = ({cancelPasswordChange}) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const auth = getAuth();
    const user = auth.currentUser;

    try {
      // Re-authenticate the user
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);

      // Update the password
      await updatePassword(user, newPassword);
      setSuccess("Password updated successfully!");
      toast.success("Password updated successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      setError(error.message);
      toast.error(`${error.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const handleCancel=()=>{
    cancelPasswordChange();
  }
  return (
    <div>
      <ToastContainer/>
      <Typography variant="h5" gutterBottom>
        Change Password
      </Typography>
      {/* {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>} */}
      <form onSubmit={handleChangePassword}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Current Password"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="New Password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" type="submit" >
              Change Password
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="error" onClick={handleCancel}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default ChangePassword;
