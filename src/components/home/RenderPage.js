import React from "react";
import Login from "../forms/Login";
import Signup from "../forms/Signup";
import Verification from "../forms/Verification";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const RenderPage = ({
  page,
  handleLoginClick,
  handleSignupClick,
  handleVerificationClick,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      minHeight="100vh"
    >
      <Box mt={4}>
        <h1>Patient Authentication</h1>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={4}
      >
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              onClick={handleLoginClick}
              sx={{
                backgroundColor: "#02bceb",
                "&:hover": {
                  backgroundColor: "#014e63",
                },
              }}
            >
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleSignupClick}
              sx={{
                backgroundColor: "#027f9e",
                "&:hover": {
                  backgroundColor: "#014e63",
                },
              }}
            >
              Signup
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={handleVerificationClick}
              sx={{
                backgroundColor: "#016178",
                "&:hover": {
                  backgroundColor: "#014e63",
                },
              }}
            >
              Verification
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RenderPage;
