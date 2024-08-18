import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';

export default function Profile() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    file: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Handle form submission logic here, e.g., API call to update profile
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
          Profile
        </Typography>

        <Typography fontSize="13px">
          Update your photo and personal details here.
        </Typography>
      </Box>

      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
            >
              First Name
            </Typography>
            <TextField
              autoComplete="given-name"
              name="firstName"
              fullWidth
              id="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              autoFocus
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              component="label"
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                mb: "10px",
                display: "block",
              }}
            >
              Last Name
            </Typography>

            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              autoComplete="family-name"
              value={formData.lastName}
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
              autoComplete="email"
              value={formData.email}
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
              Upload Image
            </Typography>
            
            <Input
              required
              fullWidth
              name="file"
              type="file"
              id="file"
              onChange={handleChange}
            />

            <Box mt={1}>
              {formData.file && (
                <img 
                  src={URL.createObjectURL(formData.file)} 
                  alt="profile" 
                  className="borRadius100"
                  width="50px"
                  height="50px"
                />
              )}
            </Box>
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
          Update
        </Button>
      </Box>
    </Box> 
  );
}
