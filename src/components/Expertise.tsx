import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SQL",
  "Java",
  "Angular",
  "Spring Boot",
];

const labelsSecond = [
  "Git",
  "Docker",
  "AWS",
  "Linux",
  "Postman",
  "One Jira",
  "Oracle SQL Developer",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            {/* <FontAwesomeIcon icon={faReact} size="3x" /> */}
            <h3>Full Stack Web Development</h3>
            <p>
              I have been working as a Full Stack Web developer for nearly four
              years.I worked on numerous functionalities and also proficient in
              the SDLC process with frontend + backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <h3>Associated Technologies</h3>
            <p>
              Also comfortable with the modern architecture and as well as the
              best practices of web development that uses modern tools.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/*
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
