import React from "react";
import "../styles/Instructor.css";
import instructorImage from "../assets/mee.jpg";

const Instructor = ({ user }) => {
  return (
    <div className="instructor-page">
      <div className="instructor-card">
        <div className="instructor-image">
          <img src={instructorImage} alt="Instructor" />
        </div>
        <div className="instructor-info">
          <h1>Reetika Kumari</h1>

          <h4>Full-Stack Developer | MERN Enthusiast</h4>
          <p>
            Hello! I'm Reetika Kumari, a passionate MERN stack developer.
            I love building scalable, robust, and secure applications that enhance user experience. 
            With expertise in JavaScript, React, Node.js, Express, and MongoDB, I focus on creating 
            efficient authentication systems using JWT, OTP verification, and password management.
            <br />
            <br />
            This project is a complete authentication solution, ensuring secure user access 
            with modern security protocols. Join me in exploring advanced authentication 
            techniques in the MERN stack!
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Reetikakumari308"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="http://www.linkedin.com/in/reetika-kumari-51573b230"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
