import React from "react";
import sentinelImg from "../assets/images/sentinel.png";
import apiGatewayImg from "../assets/images/api_gateway.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/Durgapavankumar"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sentinelImg} className="zoom" alt="Sentinel" width="100%" />
          </a>
          <a
            href="https://github.com/Durgapavankumar"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Sentinel – Distributed Event Monitoring System</h2>
          </a>
          <p>
            Built a distributed backend system using Spring Boot microservices and
            Kafka to process high-volume event streams with low-latency ingestion.
            Implemented Redis-based sliding window logic and asynchronous
            persistence to PostgreSQL for real-time anomaly detection and auditing.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/Durgapavankumar"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={apiGatewayImg}
              className="zoom"
              alt="Resilient API Gateway"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Durgapavankumar"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Resilient API Gateway and Rate Limiter</h2>
          </a>
          <p>
            Developed a custom API gateway with distributed rate limiting using
            Redis to protect backend services from traffic spikes. Integrated
            circuit breaker patterns with Resilience4j and exposed metrics via
            Prometheus to prevent cascading failures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
