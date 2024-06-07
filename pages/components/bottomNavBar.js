import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Paper } from "@mui/material";
import { useRouter } from "next/router";
export default function BottomNavBar() {
    const router=useRouter();
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Box sx={{ width: "100%" }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log("New Value", newValue);
            console.log("URL: ",window.location.href);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<RestoreIcon />}
            onClick={() => {
              console.log("Home Clicked");
              router.push("/")
            }}
          />
          <BottomNavigationAction
            label="Compliance"
            icon={<FavoriteIcon />}
            onClick={() => {
              console.log("Compliance Clicked");
              router.push("/complianceNote");
            }}
          />
          {/* <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} /> */}
        </BottomNavigation>
      </Box>
    </Paper>
  );
}
