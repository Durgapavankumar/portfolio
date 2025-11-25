import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import avatar from "../assets/images/avatar1.jpg";

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
          <p>Software Developer</p>
          <p className="summary">
            With over 3+ years of experience in building scalable web
            applications and backend services using Java, Spring Boot, and
            React. Proficient in designing REST APIs, implementing OAuth2/JWT
            authentication, and deploying containerized apps to AWS using Docker
            and Kubernetes.
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
