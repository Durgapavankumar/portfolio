import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history" className="items-container">
      {/* Education Section */}
      <h1>Education</h1>
      <VerticalTimeline lineColor="#8a2be2">
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#272822" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="Dec 2024"
          iconStyle={{ background: "#8a2be2", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Central Missouri
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Warrensburg, MO, USA
          </h4>
          <p>Master of Science in Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="May 2023"
          iconStyle={{ background: "#8a2be2", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            NIT Andhra Pradesh
          </h3>
          <h4 className="vertical-timeline-element-subtitle">India</h4>
          <p>B.Tech in Electronics and Communication Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Work Experience Section */}
      <h1>Work Experience</h1>
      <VerticalTimeline lineColor="#8a2be2">
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#272822" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="May 2024 – Present"
          iconStyle={{ background: "#8a2be2", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Travelers – Houston, USA
          </h4>
          <p>
            Designed and developed scalable microservices for a personal
            insurance platform serving 2M+ policyholders, contributing to high
            availability and secure, identity-based access. Optimized backed
            workflows using AWS serverless functions and Redis caching, while
            enhancing frontend usability with React and Material UI.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jan 2022 – Jun 2023"
          iconStyle={{ background: "#8a2be2", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sogeti (Capgemini) – Hyderabad, India
          </h4>
          <p>
            Developed Java Spring Boot REST APIs for booking and reporting
            modules and integrated them with React frontends. Implemented
            caching strategies and optimized database queries to improve
            performance, while automating deployments via CI/CD pipelines.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
