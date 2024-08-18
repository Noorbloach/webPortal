import React, { useState } from "react";
import { Box, Card, Typography, InputLabel, MenuItem, FormControl, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import styles from "./AllProjects.module.css"; // Adjusted import path

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#757FEF" : "#308fe8",
  },
}));

const AllProjects = () => {
  const [select, setSelect] = useState("");

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <Card sx={{ boxShadow: "none", borderRadius: "10px", p: "25px", mb: "15px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "10px",
          marginBottom: "15px",
        }}
        className="for-dark-bottom-border"
      >
        <Typography as="h3" sx={{ fontSize: 18, fontWeight: 500 }}>
          All Projects
        </Typography>
        <Box>
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small" sx={{ fontSize: "14px" }}>
              Select
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={select}
              label="Select"
              onChange={handleChange}
              sx={{ fontSize: "14px" }}
              className="select"
            >
              <MenuItem value={0} sx={{ fontSize: "13px" }}>
                Today
              </MenuItem>
              <MenuItem value={1} sx={{ fontSize: "13px" }}>
                Last 7 Days
              </MenuItem>
              <MenuItem value={2} sx={{ fontSize: "13px" }}>
                This Month
              </MenuItem>
              <MenuItem value={3} sx={{ fontSize: "13px" }}>
                Last 12 Months
              </MenuItem>
              <MenuItem value={4} sx={{ fontSize: "13px" }}>
                All Time
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <TableContainer component={Paper} sx={{ boxShadow: "none", maxHeight: "370px", overflowY: "auto" }}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table" className="dark-table">
          <TableHead sx={{ background: "#F7FAFF" }}>
            <TableRow>
              <TableCell sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}>
                Project Name
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}>
                Members
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }} align="center">
                Budget
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }} align="center">
                Status
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}>
                Completion
              </TableCell>
              <TableCell sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }} align="right">
                Due Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[{ img: "/images/project-logo1.png", title: "Product UI/UX Design", members: ["/images/user1.png", "/images/user2.png", "/images/user3.png"], budget: "$14,000", status: "Active", completion: 70, dueDate: "08 Mar 2021" },
              { img: "/images/project-logo2.png", title: "Public Beta Release", members: ["/images/user4.png", "/images/user5.png"], budget: "$14,000", status: "Complete", completion: 100, dueDate: "17 Apr 2021" },
              { img: "/images/project-logo3.png", title: "SEO Marketing", members: ["/images/user6.png", "/images/user7.png"], budget: "$12,000", status: "Complete", completion: 100, dueDate: "10 Sep 2021" },
              { img: "/images/project-logo4.png", title: "New Office Building", members: ["/images/user1.png", "/images/user2.png", "/images/user3.png"], budget: "$9,000", status: "Pending", completion: 0, dueDate: "06 Aug 2022" },
              { img: "/images/project-logo5.png", title: "Product Development", members: ["/images/user7.png", "/images/user8.png", "/images/user9.png"], budget: "$16,000", status: "Active", completion: 80, dueDate: "08 Mar 2022" }
            ].map((project, index) => (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={project.img} alt="Image" width="25px" />
                    <Typography as="h5" fontWeight="500" fontSize="13px" className="ml-1">
                      {project.title}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <div className={styles.members}>
                    {project.members.map((member, idx) => (
                      <img key={idx} src={member} alt="Image" width="28px" height="28px" />
                    ))}
                  </div>
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  {project.budget}
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 500, borderBottom: "1px solid #F7FAFF", fontSize: "11px" }}>
                  <span className={`statusBadge ${project.status.toLowerCase()}`}>{project.status}</span>
                </TableCell>
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">{project.completion}%</Typography>
                    {/* Ensure project.completion is a number */}
                    <BorderLinearProgress variant="determinate" value={Number(project.completion)} />
                  </Box>
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}>
                  {project.dueDate}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default AllProjects;
