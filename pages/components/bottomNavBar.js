import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DescriptionIcon from "@mui/icons-material/Description";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
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
          sx={{ alignItems: "center" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            console.log("New Value", newValue);
            console.log("URL: ", window.location.href);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            icon={<DescriptionIcon />}
            onClick={() => {
              console.log("Home Clicked");
              router.push("/");
            }}
          />
          <BottomNavigationAction
            label="Compliance"
            icon={<PrivacyTipIcon />}
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
