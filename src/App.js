import React, { useState } from "react";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";
import Verification from "./components/forms/Verification";
import VerifyEmail from "./components/forms/VerifyEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import RenderPage from "./components/home/RenderPage";
import {useNavigate} from 'react-router-dom';

const App = () => {
  const [page, setPage] = useState("");

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleVerificationClick = () => {
    navigate("/verify");
  };

  return (
    <div>
      
      <Routes>
        <Route
          exact
          path="/"
          element={
            <RenderPage
              page={page}
              handleLoginClick={handleLoginClick}
              handleSignupClick={handleSignupClick}
              handleVerificationClick={handleVerificationClick}
            />
            
          }
        />
        <Route exact path="/login" element={<Login />}/>
        <Route exact path="/signup" element={<Signup />}/>
        <Route exact path="/signup/verify" element={<VerifyEmail />}/>
        <Route exact path="/verify" element={<Verification />}/>

      </Routes>
    </div>
  );
};

export default App;
