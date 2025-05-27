import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import OtpVerification from "./pages/OtpVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "./main";

const App = () => {
  const { setIsAuthenticated, setUser, isAuthenticated } = useContext(Context);

  useEffect(() => {
    const getUser = async () => {
      const baseURL = process.env.REACT_APP_BACKEND_URL;

      if (!baseURL) {
        console.error("❌ REACT_APP_BACKEND_URL is not defined!");
        return;
      }

      try {
        const res = await axios.get(`${baseURL}/api/v1/user/me`, {
          withCredentials: true,
        });
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (err) {
        setUser(null);
        setIsAuthenticated(false);
      }
    };

    getUser();
  }, [setUser, setIsAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? <Home /> : <Navigate to="/auth" replace />
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/otp-verification/:email/:phone"
            element={<OtpVerification />}
          />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
        </Routes>
        <ToastContainer theme="colored" />
      </Router>
    </>
  );
};

export default App;
