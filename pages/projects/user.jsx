import * as React from "react";
import { Box, Typography, Button, TextField, Grid, IconButton, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import styles from '@/styles/PageTitle.module.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// Styled Dialog component
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <ClearIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function UsersList(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

UsersList.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, userName, image, email, rolls, status, badgeClass, projects) {
  return {
    name,
    userName,
    image,
    email,
    rolls,
    status,
    badgeClass,
    projects
  };
}

const rows = [
  createData(
    "Evangelina Mcclain",
    "@jstevenson5c",
    "/images/user1.png",
    "jordansteve@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "165"
  ),
  createData(
    "Candice Munoz",
    "@candice3unoz",
    "/images/user2.png",
    "candicemunoz@gmail.com",
    "Administrator",
    "Active",
    "successBadge",
    "120"
  ),
  createData(
    "Mike Mcclain",
    "@mike4mcclain",
    "/images/user3.png",
    "mikemcclain@gmail.com",
    "Contributor",
    "Active",
    "successBadge",
    "220"
  ),
  createData(
    "Bernard Langley",
    "@bernardlangley",
    "/images/user4.png",
    "bernardlangley@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "122"
  ),
  createData(
    "Kristie Hall",
    "@kristie7hall",
    "/images/user5.png",
    "kristiehall@gmail.com",
    "Contributor",
    "Active",
    "successBadge",
    "360"
  ),
  createData(
    "Bolton Obrien",
    "@bolton4obrien",
    "/images/user6.png",
    "boltonobrien@gmail.com",
    "Administrator",
    "Active",
    "successBadge",
    "250"
  ),
  createData(
    "Dee Alvarado",
    "@dee3alvarado",
    "/images/user7.png",
    "deealvarado@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "140"
  ),
  createData(
    "Cervantes Kramer",
    "@cervantes4kramer",
    "/images/user8.png",
    "cervantes4kramer@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "345"
  ),
  createData(
    "Dejesus Michael",
    "@dejesus1michael",
    "/images/user9.png",
    "dejesusmichael@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "323"
  ),
  createData(
    "Alissa Nelson",
    "@alissa1nelson",
    "/images/user10.png",
    "alissa1nelson@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "451"
  ),
  createData(
    "Milton",
    "@milton",
    "/images/user11.png",
    "milton@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "432"
  ),
  createData(
    "Claude",
    "@claude",
    "/images/user12.png",
    "claude@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "543"
  ),
  createData(
    "Joshua",
    "@joshua",
    "/images/user13.png",
    "joshua@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "543"
  ),
  createData(
    "Harvey",
    "@harvey",
    "/images/user14.png",
    "harvey@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "432"
  ),
  createData(
    "Antonio",
    "@antonio",
    "/images/user15.png",
    "antonio@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "765"
  ),
  createData(
    "Julian",
    "@julian",
    "/images/user16.png",
    "julian@gmail.com",
    "Agent",
    "Active",
    "successBadge",
    "678"
  ),
  createData(
    "Harold",
    "@harold",
    "/images/user17.png",
    "harold@gmail.com",
    "Agent",
    "Deactive",
    "dangerBadge",
    "165"
  ),
  createData(
    "Kingston",
    "@kingston",
    "/images/user18.png",
    "kingston@info.com",
    "Agent",
    "Active",
    "successBadge",
    "165"
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));

export default function User() {
  const [open, setOpen] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const handleClickOpen = (data) => {
    setUserData(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserData(null);
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box>
      <Card sx={{ padding: 2 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="div">Users List</Typography>
          <Tooltip title="Add User">
            <IconButton onClick={() => handleClickOpen(null)} color="primary">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Rolls</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Projects</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>
                      <Checkbox {...label} />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.userName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.rolls}</TableCell>
                    <TableCell>
                      <Box component="span" className={row.badgeClass}>
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell>{row.projects}</TableCell>
                    <TableCell>
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleClickOpen(row)} color="primary">
                          <DriveFileRenameOutlineIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={8}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={UsersList}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      <BootstrapDialog
        onClose={handleClose}
        open={open}
        fullWidth
        maxWidth="sm"
      >
        <BootstrapDialogTitle onClose={handleClose}>
          {userData ? 'Edit User' : 'Add User'}
        </BootstrapDialogTitle>
        <Box sx={{ p: 3 }}>
          <TextField
            autoFocus
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            type="text"
            variant="outlined"
            value={userData?.name || ''}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Username"
            type="text"
            variant="outlined"
            value={userData?.userName || ''}
            onChange={(e) => setUserData({ ...userData, userName: e.target.value })}
          />
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            value={userData?.email || ''}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <TextField
            margin="normal"
            fullWidth
            id="rolls"
            label="Rolls"
            type="text"
            variant="outlined"
            value={userData?.rolls || ''}
            onChange={(e) => setUserData({ ...userData, rolls: e.target.value })}
          />
          <TextField
            margin="normal"
            fullWidth
            id="status"
            label="Status"
            type="text"
            variant="outlined"
            value={userData?.status || ''}
            onChange={(e) => setUserData({ ...userData, status: e.target.value })}
          />
          <TextField
            margin="normal"
            fullWidth
            id="projects"
            label="Projects"
            type="text"
            variant="outlined"
            value={userData?.projects || ''}
            onChange={(e) => setUserData({ ...userData, projects: e.target.value })}
          />
          <Button
            onClick={handleClose}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Save
          </Button>
        </Box>
      </BootstrapDialog>
    </Box>
  );
}
