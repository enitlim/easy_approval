import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { auth } from "@/firebase/SettingFirebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/logo-no-background.PNG";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";


export default function MenuAppBar({appBarTitle, appBarLink}) {

  const router=useRouter();
  const [authenticated, setAuthenticated] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuthenticated(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "80px" }}>
      <AppBar position="absolute">
        <Toolbar>
          <Image
            src={Logo}
            height={50}
            width={50}
            style={{ marginRight: "10px" }}
            alt="logo"
            onClick={() => {
              router.push("/");
            }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer", textAlign: "center" }}
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Easy Approval
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              aria-label="te"
              onClick={() => router.push("/complianceNote")}
            >
              <PrivacyTipIcon sx={{ color: "red" }} />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  cursor: "pointer",
                  textAlign: "center",
                  color: "red",
                }}
              >
                Compliance
              </Typography>
            </IconButton>
          </Box>

          {authenticated && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    router.push("/profilePage");
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem onClick={() => signOut(auth)}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
