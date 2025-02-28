import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import fb from "../assets/fb.png";
import yt from "../assets/yt.png";
import git from "../assets/git.png";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Secure MERN Authentication</h2>
          <p>Secure authentication with JWT, OTP, and password management.</p>

        </div>
        <div className="footer-social">
          <h3>Contact Me</h3>
          <div className="social-icons">
  
            <Link
              to="http://www.linkedin.com/in/reetika-kumari-51573b230"
              target="_blank"
              className="social-link"
            >
              <img src={linkedin} alt="LinkedIn" />
            </Link>
            <Link
              to="https://github.com/Reetikakumari308"
              target="_blank"
              className="social-link"
            >
              <img src={git} alt="GitHub" />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 MERN Authentication. All Rights Reserved.</p>
        <p>Designed by Reetika Kumari</p>
      </div>
    </footer>
  );
};

export default Footer;
