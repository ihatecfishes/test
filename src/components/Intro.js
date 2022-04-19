import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import GaziModel from "./GaziModel";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <div id="intro">
        <div id="gazi-model">
          <GaziModel></GaziModel>
        </div>
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"Welcome to "}
            <span className="intro-name">{"Hao"}</span>
            {"'s Portfolio"}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">Nothing is impossible to they who will try.</div>
          <div className="intro-desc">
            I'm a highschool student at Nguyen Thi Minh Khai Highschool. I have profound fascination 
            in Artificial Intelligence, Computer Science, Computer Vision, 
            and everything related.
          </div>
          <a
            href="mailto:haowangbright@gmail.com"
            className="intro-contact"
          >
            <EmailRoundedIcon></EmailRoundedIcon>
            {"  " + "Say hello"}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
