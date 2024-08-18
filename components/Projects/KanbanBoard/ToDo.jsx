import React, { useState } from "react";
import { Box, Typography, Card, Menu, MenuItem, IconButton, Checkbox, Tooltip, Avatar, AvatarGroup } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const newProjects = [
  {
    id: 1,
    projectName: "Mobile App Development",
    category: "Mobile App",
    totalTask: "10/50",
    teamMembers: [
      { id: 1, image: "/images/member1.png" },
      { id: 2, image: "/images/member2.png" },
      { id: 3, image: "/images/member3.png" },
      { id: 4, image: "/images/member4.png" },
      { id: 5, image: "/images/member5.png" },
      { id: 6, image: "/images/member6.png" },
    ],
  },
  // other projects...
];

const ToDo = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "15px",
        }}
      >
        <Typography variant="h3" sx={{ fontSize: 18, fontWeight: 500 }}>
          To Do
        </Typography>

        <Box>
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MoreHorizIcon />
          </IconButton>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem sx={{ fontSize: '14px' }}>Create Project</MenuItem>
          <MenuItem sx={{ fontSize: '14px' }}>Open Project</MenuItem>
          <MenuItem sx={{ fontSize: '14px' }}>Overview</MenuItem>
        </Menu>
      </Box>

      {/* Card */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: '20px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "58px",
              height: "58px",
              lineHeight: "58px",
              background: "#757FEF",
              color: "#fff",
              fontSize: "30px",
              borderRadius: "8px",
              textAlign: "center",
              mr: "10px",
            }}
          >
            <i className="ri-briefcase-line"></i>
          </Box>

          <Box>
            <Typography variant="h1" sx={{ fontSize: 25, fontWeight: 700, mb: '4px' }}>
              50
            </Typography>

            <Typography sx={{ fontSize: "13px" }}>
              Added: 13 Projects this month
            </Typography>
          </Box>
        </Box>

        <Box>
          <span
            className="successBadge"
            style={{ fontSize: "13px" }}
          >
            5.80%
            <i
              className="ri-arrow-up-s-fill"
              style={{
                fontSize: "13px",
                position: "relative",
                top: "2px",
                lineHeight: "1",
                fontWeight: "bold",
              }}
            ></i>
          </span>
        </Box>
      </Box>

      {/* Project Cards */}
      {newProjects.map((project) => (
        <Box
          sx={{
            background: '#F7F8F7',
            borderRadius: '15px',
            p: '20px 15px',
            mt: '15px',
          }}
          key={project.id}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '20px',
            }}
          >
            <Checkbox {...label} />

            <Box>
              <Tooltip title="Remove" placement="top">
                <IconButton
                  aria-label="remove"
                  size="small"
                  color="danger"
                  sx={{ background: '#fff', ml: '5px' }}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>

              <Tooltip title="Rename" placement="top">
                <IconButton
                  aria-label="rename"
                  size="small"
                  color="primary"
                  sx={{ background: '#fff', ml: '5px' }}
                >
                  <DriveFileRenameOutlineIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: 500, mb: "5px" }}>
            {project.projectName}
          </Typography>

          <Typography sx={{ fontSize: "13px" }}>
            {project.category}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '15px',
            }}
          >
            <Typography>
              {project.totalTask}
            </Typography>

            <AvatarGroup max={4}>
              {project.teamMembers.map((member) => (
                <Avatar key={member.id} src={member.image} alt="Member" />
              ))}
            </AvatarGroup>
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default ToDo;
