import React from "react";
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
        <div className="project">
          <a
            href="https://github.com/durgapavankumar/TicketNest"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock01} className="zoom" alt="TicketNest" width="100%" />
          </a>
          <a
            href="https://github.com/durgapavankumar/TicketNest"
            target="_blank"
            rel="noreferrer"
          >
            <h2>TicketNest</h2>
          </a>
          <p>
            A full-stack movie booking platform for 10+ locations and 500+
            weekly bookings. Built with React, Vue.js, Node.js, and MongoDB.
            Integrated Stripe for secure payments and deployed on AWS EC2 with
            auto scaling.
          </p>
        </div>

        <div className="project">
          <a
            href="https://github.com/durgapavankumar/SmartCarParking"
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
          <a
            href="https://github.com/durgapavankumar/SmartCarParking"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Smart Car Parking System</h2>
          </a>
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
