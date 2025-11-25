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
          date="2023 – 2024"
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
          date="2019 – 2023"
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
            Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Travelers – Houston, USA
          </h4>
            <ul>
              <li>
                Designed and implemented scalable REST wrapper APIs with API
                gateway optimization in personal insurance microservices to
                streamline claims and onboarding workflows, reducing P90 latency
                by 92%.
              </li>
              <li>
                Collaborated on the development of a scalable audit logging
                service using Amazon DynamoDB to track sensitive user actions,
                supporting compliance and regulatory requirements, and enabling
                a 60% increase in claims processing throughput.
              </li>
              <li>
                Integrated OAuth2 and JWT authentication for personal insurance
                microservices using Spring Security to enable secure, role-based
                access.
              </li>
              <li>
                Revamped the Personal Insurance module by integrating Material
                UI, React Context API, and Redux, and led the end-to-end
                implementation of a Dark Mode feature across the entire tab,
                significantly enhancing user experience.
              </li>
              <li>
                Integrated AWS KMS for encryption of sensitive policyholder
                data, ensuring compliance and improving data privacy.
              </li>
              <li>
                Achieved 85% code coverage for personal insurance for UI and
                backend repositories from 4%, enhancing test coverage and code
                quality.
              </li>
              <li>
                Utilized AI code agents (Copilot, Claude, Llama) for faster
                development, debugging, and automation during sprint planning
                and code review cycles.
              </li>
            </ul>
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
            <ul>
              <li>
                Developed RESTful APIs in Spring Boot for booking and reporting
                modules and connected them with React + TypeScript components
                using Fetch.
              </li>
              <li>
                Implemented Redis-based caching strategy to optimize read-heavy
                workflows under high-traffic conditions, resulting in an 80%
                reduction in API errors and downtime.
              </li>
              <li>
                Contributed to third-party API integrations using GraphQL for
                internal tooling, enabling flexible, efficient, and
                schema-driven data retrieval, enhancing developer productivity
                and reduced over-fetching in client applications.
              </li>
              <li>
                Worked on AWS tasks involving S3, EC2, and IAM setup, monitored
                applications using AWS CLI and CloudWatch alerts.
              </li>
              <li>
                Used PostgreSQL for database operations and optimized patient
                info queries, resulting in faster data retrieval and claim
                creation.
              </li>
              <li>
                Integrated monitoring tools like Prometheus to track API health
                and performance metrics.
              </li>
              <li>
                Automated CI/CD pipelines using GitHub Actions and Docker,
                reducing manual deployment effort of claims operations portal
                and enabling weekly production releases.
              </li>
              <li>
                Added tests for UI repositories reducing bugs and maintaining
                code quality.
              </li>
            </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;
