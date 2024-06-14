"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/SettingFirebase";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";
import Logo from "../public/logo-no-background.PNG";

const Login = () => {
  const login = useSelector((state) => state.auth.isLoading);
  const route = useRouter();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const loginCheck = async () => {
      if (login === "logged") {
        route.replace("/");
      } else if (login === "noLogged") {
        setisLoading(false);
      }
    };
    loginCheck();
  }, [login, route]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    var email = data.email + "@tgbhyd.in";
    try {
      await signInWithEmailAndPassword(auth, email, data.password);
      toast.success(" Login Success !", {
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
      if (error instanceof Error) {
        toast.error(" Wrong Credentials !", {
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
    }
  };
  // console.log(watch("email"));
  return (
    <>
      <Head>
        <title>Easy Approval-Login</title>
        <meta
          name="description"
          content="Used for raising and approving the Easy Approval"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-no-background.PNG" />
      </Head>
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src={Logo} height={100} width={100} style={{ marginBottom:"10px" }} alt="Logo"/>
            
            <Typography component="h1" variant="h5">
              Sign IN
            </Typography>
            <Box sx={{ mt: 1 }}>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="User ID"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>ID Field is required</span>
                )}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <>
                    <span style={{ color: "red" }}>Password is required</span>
                  </>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </form>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Login;
