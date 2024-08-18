// components/_App/TopNavbar/TopNavbar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Typography,
  Tooltip,
} from "@mui/material";
import SearchForm from "./SearchForm.jsx";
import Notification from "./Notification.jsx";
import Profile from "./Profile.jsx";
import CurrentDate from "./CurrentDate.jsx";

const TopNavbar = ({ toogleActive }) => {
  return (
    <AppBar
      color="inherit"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0px 4px 20px rgba(47, 143, 232, 0.07)",
        py: "6px",
        mb: "30px",
        position: "sticky",
      }}
      className="top-navbar-for-dark"
    >
      <Toolbar>
        <Tooltip title="Hide/Show" arrow>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            onClick={toogleActive}
          >
            <i className="ri-align-left"></i>
          </IconButton>
        </Tooltip>

        {/* Search form */}
        <SearchForm />

        <Typography component="div" sx={{ flexGrow: 1 }}></Typography>

        <Stack direction="row" spacing={2}>
          {/* CurrentDate */}
          <CurrentDate />

          {/* Notification */}
          <Notification />

          {/* Profile */}
          <Profile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
