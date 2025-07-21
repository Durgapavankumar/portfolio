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
      <VerticalTimeline lineColor="#5000ca">
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#272822" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2023 – 2024"
          iconStyle={{ background: "#5000ca", color: "#fff" }}
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
          date="2019 – 2023"
          iconStyle={{ background: "#5000ca", color: "#fff" }}
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
      <VerticalTimeline lineColor="#5000ca">
        <VerticalTimelineElement
          contentStyle={{ background: "white", color: "#272822" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="May 2024 – Present"
          iconStyle={{ background: "#5000ca", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Travelers – Houston, USA
          </h4>
          <p>
            REST APIs, Spring Boot, React, JWT/OAuth2, AWS (KMS, DynamoDB),
            CI/CD, Dark Mode UI, Logging Services
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Jan 2022 – Jun 2023"
          iconStyle={{ background: "#5000ca", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sogeti (Capgemini) – Hyderabad, India
          </h4>
          <p>
            Spring Boot APIs, React + TypeScript, Redis Caching, AWS S3/EC2,
            GraphQL, CI/CD, PostgreSQL, Monitoring
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
