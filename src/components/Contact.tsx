import React from "react";
import "../assets/styles/Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>

          <p>
            I'm currently open to new job opportunities, exciting projects, or
            tech collaborations. Feel free to reach out — I'd love to connect!
          </p>

          <div className="direct-contact">
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{" "}
              <a href="mailto:durgapavan3393@gmail.com">
                durgapavan3393@gmail.com
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong>{" "}
              <a href="tel:+19132071826">+1 (913)-207-1826</a>
            </p>
            <p>
              <FontAwesomeIcon icon={faLinkedin} /> <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/durga-pavan-pailla/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/durga-pavan-pailla
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} /> <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/Durgapavankumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Durgapavankumar
              </a>
            </p>
            <p>
              <FontAwesomeIcon icon={faFilePdf} /> <strong>Resume:</strong>{" "}
              <a
                href="https://drive.google.com/file/d/1CoUnFhPJ5Dmsa8Di7hlloapiON5_WzWH/view?usp=sharing" //
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume (PDF)
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
