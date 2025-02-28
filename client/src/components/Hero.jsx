import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img1.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        {/* <h4>Hello, {user ? user.name : "Developer"}</h4> */}
        <h4>Hello, Everyone</h4>

        <h1>Welcome to Secure Auth System</h1>
        <p>
         Welcome to a complete authentication solution built using the MERN stack. This project features JWT authentication, OTP verification (Email & Phone) using Twilio & Nodemailer, password reset, and automation to enhance security.
        </p>
      </div>
    </>
  );
};

export default Hero;
