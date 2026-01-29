import React from "react";
import sentinelImg from "../assets/images/sentinel.png";
import apiGatewayImg from "../assets/images/api_gateway.png";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import foodFireMock from "../assets/images/mock03.png";
import devConnectImg from "../assets/images/mock04.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {/* New Backend Projects */}
        <div className="project">
          <a
            href="https://github.com/Durgapavankumar/Sentinel"
            target="_blank"
            rel="noreferrer"
          >
            <img src={sentinelImg} className="zoom" alt="Sentinel" width="100%" />
          </a>
          <a
            href="https://github.com/Durgapavankumar/Sentinel"
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
            href="https://github.com/Durgapavankumar/Resilient-API-Gateway"
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
            href="https://github.com/Durgapavankumar/Resilient-API-Gateway"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Resilient API Gateway and Rate Limiter</h2>
          </a>
          <p>
            Developed a custom API gateway with distributed rate limiting using
            Redis to protect backend services from traffic spikes and downstream
            failures. Integrated circuit breaker patterns with Resilience4j and
            exposed application metrics via Prometheus for improved observability.
          </p>
        </div>

        {/* Restored Old Projects */}
        <div className="project">
          <a
            href="https://durgapavankumar.github.io/TicketNest"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="TicketNest" width="100%" />
          </a>
          <div className="flex-links">
             <a
                href="https://github.com/Durgapavankumar/TicketNest"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <h2>TicketNest</h2>
              </a>
              <span className="separator">|</span>
              <a
                href="https://durgapavankumar.github.io/TicketNest"
                target="_blank"
                rel="noreferrer"
                className="live-link"
              >
                Live Demo
              </a>
          </div>
          <p>
            A full-stack movie booking platform for 10+ locations and 500+
            weekly bookings. Built with React, Vue.js, Node.js, and MongoDB.
            Integrated Stripe for secure payments and deployed on AWS EC2 with
            auto scaling.
          </p>
        </div>

        <div className="project">
          <a
            href="https://durgapavankumar.github.io/SmartCarParking"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={mock02}
              className="zoom"
              alt="Smart Parking"
              width="100%"
            />
          </a>
           <div className="flex-links">
             <a
                href="https://github.com/Durgapavankumar/SmartCarParking"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                <h2>Smart Car Parking System</h2>
              </a>
              <span className="separator">|</span>
              <a
                href="https://durgapavankumar.github.io/SmartCarParking"
                target="_blank"
                rel="noreferrer"
                className="live-link"
              >
                Live Demo
              </a>
          </div>
          <p>
            Built a real-time parking slot reservation system using Spring Boot,
            React, and PostgreSQL. Integrated Stripe API for secure booking
            payments and invoices. Focused on availability tracking and improved
            parking efficiency.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Durgapavankumar/FoodFire"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={foodFireMock}
              className="zoom"
              alt="FoodFire"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Durgapavankumar/FoodFire"
            target="_blank"
            rel="noreferrer"
          >
            <h2>FoodFire</h2>
          </a>
          <p>
            A modern food delivery app inspired by DoorDash, built with
            React.js, Redux, and Tailwind CSS. It uses real Swiggy APIs and
            supports routing, shimmer UI, and custom hooks. Cleanly architected
            for learning and scalability.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/Durgapavankumar/DevConnect-Backend"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={devConnectImg}
              className="zoom"
              alt="DevConnect"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/Durgapavankumar/DevConnect-Frontend"
            target="_blank"
            rel="noreferrer"
          >
            <h2>DevConnect</h2>
          </a>
          <p>
            A full-stack MERN developer social platform inspired by LinkedIn.
            Users can sign up, build profiles, send connection requests, and
            explore a paginated developer feed. Built with React, Redux Toolkit,
            Node.js, Express, and MongoDB with JWT authentication and protected
            routes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
