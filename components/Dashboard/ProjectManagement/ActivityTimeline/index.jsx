import React from "react";
import { Box, Typography, Card, Menu, MenuItem, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "./ActivityTimeline.module.css"; // Adjust the path as needed

const ActivityTimelineData = [
  {
    id: "1",
    image: '/images/pdf-icon.png',
    title: "Donald updated the status",
    time: "54 min ago",
  },
  {
    id: "2",
    image: '/images/man.png',
    title: "Design new UI and check sales",
    time: "10 hours ago",
  },
  {
    id: "3",
    title: "James Bangs Client Meeting",
    image: '/images/small-product-img.png',
    time: "5 min ago",
  },
  {
    id: "4",
    title: "Joseph Rust opened new showcase",
    image: '/images/small-product-img2.png',
    time: "10 min ago",
  },
  {
    id: "5",
    title: "Brust opened new showcase",
    image: '/images/small-product-img3.png',
    time: "15 min ago",
  },
  {
    id: "6",
    title: "Create a new project for client",
    image: '/images/man.png',
    time: "20 min ago",
  },
];

const ActivityTimeline = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
          borderBottom: "1px solid #EEF0F7",
          paddingBottom: "10px",
          mb: "20px",
        }}
      >
        <Typography
          component="h3"
          sx={{
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Activity Timeline
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
            <MenuItem>Last 15 Days</MenuItem>
            <MenuItem>Last Month</MenuItem>
            <MenuItem>Last Year</MenuItem>
          </Menu>
        </Box>
      </Box>

      <div className={styles.timelineList}>
        {ActivityTimelineData.map((timeline) => (
          <div className={styles.tList} key={timeline.id}>
            <div className={styles.content}>
              <img src={timeline.image} alt="Icon" />
              <h5>{timeline.title}</h5>
            </div>
            <p className={styles.date}>{timeline.time}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ActivityTimeline;
