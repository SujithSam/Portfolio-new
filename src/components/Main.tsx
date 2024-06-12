import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import dpImage from "../components/Dp.jpeg";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={dpImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/SujithSam"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sujith-joseph-85130a1bb/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Sujith Sam Joseph</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/SujithSam"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/sujith-joseph-85130a1bb/"
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
