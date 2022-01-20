import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I'm currently a <b>Highschool Student</b> at{" "}
        <b> Nguyen Thi Minh Khai Highschool </b>, with a focus in Computer Science and
        Artificial Intelligence. Recently, I parcitipated in the{" "}
        <a href="https://www.event.rmit.edu.vn/techgenius2021-en">TechGenius Competition</a> and won{" "}
        <b>Second Prize</b> in Engineering category.
      </p>
    );
    const two = (
      <p>
        I'm into any sort of <b>software development</b> that requires
        creativity and logic. My other areas of interest include <b>machine learning</b>,{" "}
        <b>computer vision</b>,{" "} <b>competitive programming</b> and <b>game development</b>. 
        I also like digital drawing and video editing. In my free time, I enjoy 
        gourmet plates and play games.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:haowangbright@gmail.com">
          haowangbright@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Python",
      "HTML & CSS",
      "Node.js",
      "React.js",
      "Tensorflow",
      "Keras"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);
    var image = require("./assets/me.jpg");

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {desc_items}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
            </div>
            <div className="about-image">
              <img src={image} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
