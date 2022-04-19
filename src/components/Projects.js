import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const projects = {
      "Anti-Covid Intelligent Machine": {
        desc:
          "Codes on ESP/Raspberry Pi/Jetson Nano for the machine of the TechGenius Competition.",
        techStack: "Python, C++, ESP, Raspberry Pi, Jetson Nano",
        link: "https://github.com/ihatecfishes/Intelligent-Anti-Covid-Machine",
        open: ""
      },
      "Portfolio": {
        desc:
          "What you are currently in - Huge inspiration by Gazi Jarin.",
        techStack: "Javascript, HTML / CSS, Node.js, React.js",
        link: "https://github.com/ihatecfishes/portfolio",
        open: ""
      },
      Hexhell: {
        desc:
          "A simple game made on Unity.",
        techStack: "C#",
        link: "https://github.com/ihatecfishes/hexhell",
        open: ""
      },
      "Face-Tracking Camera": {
        desc:
          "A camera that follows your face in both axes.",
        techStack: "Python, Raspberry Pi",
        link: "https://github.com/ihatecfishes/Face-Tracking_Raspberry-pi",
        open: ""
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>

        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <span className="external-links">
                      <a className="github-icon" href={projects[key]["link"]}>
                        <GitHubIcon
                          style={{
                            fontSize: 20,
                            color: "var(--lightest-slate)"
                          }}
                        ></GitHubIcon>
                      </a>
                      {projects[key]["open"] && (
                        <a className="open-icon" href={projects[key]["open"]}>
                          <OpenInBrowserIcon
                            style={{
                              fontSize: 25,
                              color: "var(--lightest-slate)"
                            }}
                          ></OpenInBrowserIcon>
                        </a>
                      )}
                    </span>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
