import React, { useState } from "react";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";
import Verification from "./components/forms/Verification";
import VerifyEmail from "./components/forms/VerifyEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const App = () => {
  const [page, setPage] = useState("");

  const handleLoginClick = () => {
    setPage("login");
  };

  const handleSignupClick = () => {
    setPage("signup");
  };

  const handleVerificationClick = () => {
    setPage("verification");
  };

  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      case "verification":
        return <Verification />;
      default:
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
    }
  };

  return <div>{renderPage()}</div>;
};

export default App;
