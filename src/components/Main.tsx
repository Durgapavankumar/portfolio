import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/profile_photo.jpg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Durgapavankumar"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/durga-pavan-pailla/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Durga Pavan Kumar Pailla</h1>
          <p>Software Engineer</p>
          <p className="summary">
            Software Engineer with 3+ years of experience building scalable web
            applications and backend services using Java, Spring Boot, and
            React. Proficient in cloud-native architectures on AWS, and
            passionate about leveraging Python and AI technologies to drive
            innovation.
          </p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Durgapavankumar"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/durga-pavan-pailla/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
