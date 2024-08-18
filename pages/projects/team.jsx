import React from "react";
import { Box, Typography, Card, Grid, Menu, MenuItem, IconButton, Avatar, AvatarGroup, Button, LinearProgress } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from 'next/link';
import { styled } from "@mui/material/styles";
import styles from '@/styles/PageTitle.module.css';

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

const TeamMembers = [
  // ... Your TeamMembers data here ...
];

const Team = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Team</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Team</li>
        </ul>
      </div>

      <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}>
        {TeamMembers.map((member) => (
          <Grid item xs={12} md={6} lg={6} xl={4} key={member.id}>
            <Card sx={{ boxShadow: "none", borderRadius: "10px", p: "20px", mb: "15px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={member.image}
                    alt="Member"
                    width="55px"
                    height="55px"
                    className="borRadius100"
                  />
                  <Box className="ml-1">
                    <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
                      {member.name}
                    </Typography>
                    <Typography sx={{ fontSize: 13 }}>
                      {member.designation}
                    </Typography>
                  </Box>
                </Box>

                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ background: '#fafafa' }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <MoreHorizIcon />
                </IconButton>
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
                  <MenuItem sx={{ fontSize: '14px' }}>Open Project</MenuItem>
                  <MenuItem sx={{ fontSize: '14px' }}>Edit</MenuItem>
                  <MenuItem sx={{ fontSize: '14px' }}>Delete</MenuItem>
                </Menu>
              </Box>

              <Box mb={2}>
                <Typography sx={{ fontSize: 16, fontWeight: 500, mb: "5px" }}>
                  {member.teamName}
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  {member.introText}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} mb={2}>
                <AvatarGroup max={4}>
                  {member.teamMemberLists.map((team) => (
                    <Avatar key={team.id} src={team.image} alt="Team member" />
                  ))}
                </AvatarGroup>

                <Link href={member.viewDetailsLink} className="text-decoration-none">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ borderRadius: '4px', textTransform: "capitalize", color: "#fff !important" }}
                  >
                    View Details
                  </Button>
                </Link>
              </Box>

              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }} mb={1}>
                  <Box>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, mb: "5px" }}>
                      {member.projectName}
                    </Typography>
                    <Typography sx={{ fontSize: 13 }}>
                      {member.totalTask}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography sx={{ fontSize: 13 }}>
                      {member.taskProgress}% Completed
                    </Typography>
                  </Box>
                </Box>

                <BorderLinearProgress variant="determinate" value={member.taskProgress} />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Team;
