import React from "react";
import { Box, Typography, Card } from "@mui/material";
import IssuesSummaryChart from "./IssuesSummaryChart"; // Ensure this path is correct

const IssuesSummary = () => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        borderRadius: "10px",
        p: "25px",
        mb: "15px",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "10px",
          mb: "20px",
        }}
        className="for-dark-bottom-border"
      >
        <Typography
          component="h3" // Ensure the correct prop name is used for MUI v5
          sx={{
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Issues Summary
        </Typography>
      </Box>
      
      {/* IssuesSummaryChart */}
      <IssuesSummaryChart />
    </Card>
  );
};

export default IssuesSummary;
