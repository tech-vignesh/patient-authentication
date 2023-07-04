import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonSearchRoundedIcon from "@mui/icons-material/PersonSearchRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CognitoIdentityServiceProvider } from "aws-sdk";
import AWS from "aws-sdk";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";

const defaultTheme = createTheme();

const VerifyEmail = ({ email }) => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [confirmationStatus, setConfirmationStatus] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  AWS.config.update({
    region: "eu-north-1",
  });

  const handleConfirm = (event) => {
    event.preventDefault();

    const clientId = "532k44t4ksvp0q2kk5mbqbtcaa";
    const username = email;

    const params = {
      ClientId: clientId,
      ConfirmationCode: confirmationCode,
      Username: username,
    };

    const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

    cognitoIdentityServiceProvider.confirmSignUp(params, (err, data) => {
      if (err) {
        console.error(err);
        setConfirmationStatus("Error confirming user");
        setSnackbarSeverity("error");
        setSnackbarMessage(err.message);
      } else {
        console.log("User confirmed successfully");
        setConfirmationStatus("User confirmed successfully");
        setSnackbarSeverity("success");
        setSnackbarMessage("User confirmed successfully");
      }
      setSnackbarOpen(true);
    });
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <PersonSearchRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Verify User
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            style={{ textAlign: "center" }}
          >
            Please enter the verification code receieved in you email !
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleConfirm}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  value={email}
                  variant="outlined"
                  disabled
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmationCode"
                  label="Confirmation Code"
                  name="confirmationCode"
                  autoComplete="off"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify User!
            </Button>
          </Box>
          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              severity={snackbarSeverity}
              onClose={handleSnackbarClose}
              icon={
                snackbarSeverity === "success" ? (
                  <CheckCircleOutline fontSize="inherit" />
                ) : (
                  <ErrorOutline fontSize="inherit" />
                )
              }
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default VerifyEmail;
