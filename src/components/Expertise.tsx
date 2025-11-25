import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faAws, faJava } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFullStack = [
  "Java",
  "Spring Boot",
  "Spring Security",
  "Hibernate",
  "JPA",
  "React.js",
  "Redux Toolkit",
  "Next.js",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Python",
  "SQL",
  "C/C++",
  "Material UI",
  "PostgreSQL",
  "MongoDB",
  "Stripe API",
];

const labelsDevOps = [
  "AWS (EC2, S3, Lambda, RDS, KMS, SQS)",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "GitLab CI/CD",
  "Terraform",
  "CloudFormation",
  "Prometheus",
  "CloudWatch",
  "SonarQube",
  "Redis",
  "Kafka",
  "RabbitMQ",
  "Linux",
];

const labelsCertifications = [
  "AWS Certified Solutions Architect",
  "AWS Certified AI Practitioner",
  "IEEE Publication",
  "Microsoft Learn Vibe Coding",
  "OpenAI API",
  "LangChain",
  "GenAI Enthusiast",
  "LLM Exploration",
  "Streamlit",
  "Hugging Face",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {/* Full Stack */}
          <div className="skill">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Full-Stack Development</h3>
            <p>
              I specialize in building scalable, secure, and production-ready
              web applications using Java, Spring Boot, and React. My project
              work spans REST API development, JWT/OAuth2 authentication, Stripe
              integrations, and responsive UI design.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech Stack:</span>
              {labelsFullStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Cloud & DevOps</h3>
            <p>
              Hands-on experience deploying and maintaining microservices on
              AWS. I automate CI/CD pipelines using GitHub Actions and Docker,
              monitor systems via Prometheus and CloudWatch, and handle
              infrastructure with Terraform and Kubernetes.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tools & Services:</span>
              {labelsDevOps.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Certifications & Interests */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Certifications & Interests</h3>
            <p>
              I’m passionate about cloud computing, GenAI, and applied research.
              I hold an AWS Solutions Architect certification and published IEEE
              research in secure wireless systems. I'm currently exploring LLM
              frameworks and OpenAI integrations.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Highlights:</span>
              {labelsCertifications.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
