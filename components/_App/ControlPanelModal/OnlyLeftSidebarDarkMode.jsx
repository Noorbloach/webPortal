import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styles from "@/components/_App/ControlPanelModal/DarkAndLightMode.module.css";

const OnlyLeftSidebarDarkMode = () => {
  // Light/Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("leftSidebarTheme");
    if (storedPreference === "leftsidebardark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(prevState => !prevState);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("leftSidebarTheme", isDarkMode ? "leftsidebardark" : "light");

    // Update the class on the <leftsidebardark> element to apply the selected mode
    const sidebarElement = document.querySelector(".left-sidebar");
    if (sidebarElement) {
      if (isDarkMode) {
        sidebarElement.classList.add("leftsidebardark");
      } else {
        sidebarElement.classList.remove("leftsidebardark");
      }
    }
  }, [isDarkMode]);

  return (
    <div className={styles.darkModeBox}>
      <h3>Only Left Sidebar Dark/Light Mode</h3>

      <Button
        onClick={handleToggle}
        variant="contained"
        sx={{ textTransform: "capitalize" }}
        className="whiteColor"
      >
        Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default OnlyLeftSidebarDarkMode;
