import React from 'react';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import NavBar from './components/Settings/NavBar'; // Adjusted path for Vite
import ChangePassword from './components/Settings/Account/ChangePassword'; // Adjusted path for Vite

export default function Account() {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        padding: "25px",
        marginBottom: "15px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: 18,
          fontWeight: 500,
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "5px",  
          marginBottom: "15px",
        }}
      >
        Settings
      </Typography>

      {/* NavBar */}
      <NavBar />
      
      {/* ChangePassword */}
      <ChangePassword />
    </Card>
  );
}
