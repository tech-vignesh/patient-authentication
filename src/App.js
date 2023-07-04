import React, { useState } from "react";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";
import Verification from "./components/forms/Verification";
import VerifyEmail from "./components/forms/VerifyEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <div>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleSignupClick}>Signup</button>
            <button onClick={handleVerificationClick}>Verification</button>
          </div>
        );
    }
  };

  return (
    <Router>
      <div>
        <h1>Patient Authentication</h1>
        <Routes>
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
        {renderPage()}
      </div>
    </Router>
  );
};

export default App;
