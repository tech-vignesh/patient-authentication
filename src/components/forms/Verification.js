import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CognitoIdentityServiceProvider } from "aws-sdk";
import AWS from 'aws-sdk';


const defaultTheme = createTheme();

const Verification = () => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [email, setEmail] = useState('');
  const [confirmationStatus, setConfirmationStatus] = useState("");

  AWS.config.update({
    region: 'eu-north-1',
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
      } else {
        console.log("User confirmed successfully");
        setConfirmationStatus("User confirmed successfully");
      }
    });
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
          <Box
            component="form"
            noValidate
            onSubmit={handleConfirm}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
          </Box>
      </Container>
    </ThemeProvider>

  )
};

export default Verification;
