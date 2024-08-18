import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import styles from "@/components/_App/ControlPanelModal/DarkAndLightMode.module.css";

const OnlyTopNavbarDark = () => {
  // Light/Dark Mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the user's preference from local storage
    const storedPreference = localStorage.getItem("topNavbarDarkTheme");
    if (storedPreference === "TopNavbarDark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggle = () => {
    setIsDarkMode(prevState => !prevState);
  };

  useEffect(() => {
    // Update the user's preference in local storage
    localStorage.setItem("topNavbarDarkTheme", isDarkMode ? "TopNavbarDark" : "light");

    // Update the class on the <top-navbar> element to apply the selected mode
    const topNavbarElement = document.querySelector(".top-navbar");
    if (topNavbarElement) {
      if (isDarkMode) {
        topNavbarElement.classList.add("dark");
      } else {
        topNavbarElement.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  return (
    <div className={styles.darkModeBox}>
      <h3>Only Top Navbar Dark/Light Mode</h3>

      <Button
        onClick={handleToggle}
        variant="contained"
        sx={{ textTransform: 'capitalize' }}
        className="whiteColor"
      >
        Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default OnlyTopNavbarDark;
