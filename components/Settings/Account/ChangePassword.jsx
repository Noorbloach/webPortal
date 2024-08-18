import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ChangePassword() {
  const [formData, setFormData] = React.useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    email: '',
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    console.log(formData);
    // Handle form submission logic here, e.g., API call to update password
  };

  return (
    <Box>
      <Box
        sx={{
          borderBottom: '1px solid #eee',
          paddingBottom: '10px'
        }}
        className="for-dark-bottom-border"
      >
        <Typography component="h1" fontWeight="500" fontSize="18px">
          Security
        </Typography>

        <Typography fontSize="13px">
          Update your password here.
        </Typography>
      </Box>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
            >
              Old Password
            </Typography>
            <TextField
              autoComplete="current-password"
              name="oldPassword"
              fullWidth
              id="oldPassword" 
              type="password"
              value={formData.oldPassword}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
            >
              New Password
            </Typography>
            <TextField
              autoComplete="new-password"
              name="newPassword"
              fullWidth
              id="newPassword" 
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
            >
              Confirm Password
            </Typography>
            <TextField
              autoComplete="new-password"
              name="confirmPassword"
              fullWidth
              id="confirmPassword" 
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
            >
              Email Address
            </Typography>

            <TextField
              fullWidth
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          sx={{
            mt: 2,
            textTransform: "capitalize",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "14px",
            padding: "12px 30px",
            color: "#fff !important"
          }}
        >
          Change Password
        </Button>
      </Box>
    </Box> 
  );
}
