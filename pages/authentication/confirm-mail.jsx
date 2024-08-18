import { Typography, Button, Box } from "@mui/material";

const ConfirmMail = () => (
  <div className="authenticationBox">
    <Box
      component="main"
      sx={{
        padding: "70px 0 100px",
      }}
    >
      <Box
        sx={{
          background: "#fff",
          padding: "30px 20px",
          borderRadius: "10px",
          maxWidth: "510px",
          margin: "0 auto",
          textAlign: "center",
        }}
        className="bg-black"
      >
        <Box>
          <img src="/images/logo.png" alt="Black logo" className="black-logo" />
          <img src="/images/logo-white.png" alt="White logo" className="white-logo" />
        </Box>

        <Box mt={4} mb={4}>
          <img src="/images/message.png" alt="Message" />
        </Box>

        <Typography variant="h1" fontSize="20px" fontWeight="500" mb={1}>
          Success!
        </Typography>
        <Typography>
          An email has been sent to{" "}
          <a
            href="mailto:envytheme@info.com"
            className="primaryColor text-decoration-none"
          >
            envytheme@info.com
          </a>
          . Please check for an email from the company and click on the included
          link to reset your password.
        </Typography>

        <Button
          href="/"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            textTransform: "capitalize",
            borderRadius: "8px",
            fontWeight: "500",
            fontSize: "16px",
            padding: "12px 10px",
            color: "#fff !important",
          }}
        >
          Back To Home
        </Button>
      </Box>
    </Box>
  </div>
);

export default ConfirmMail;
