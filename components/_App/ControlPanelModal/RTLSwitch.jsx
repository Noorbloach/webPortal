import React from "react";
import Button from '@mui/material/Button';
import styles from "@/components/_App/ControlPanelModal/RTLSwitch.module.css";

const RTLSwitch = () => {
  return (
    <div className={styles.darkModeBox}>
      <h3>LTR/RTL Demos</h3>

      <div className={styles.langSidebar}>
        <Button 
          variant="contained"
          sx={{ textTransform: 'capitalize' }}
          className={`${styles.whiteColor} ${styles.mr10px}`}
          href="/"
        >
          Switch to LTR
        </Button>

        <Button 
          variant="contained"
          color="secondary"
          sx={{ textTransform: 'capitalize' }}
          className={styles.whiteColor}
          href="/ar"
        >
          Switch to RTL
        </Button>
      </div>
    </div>
  );
};

export default RTLSwitch;
