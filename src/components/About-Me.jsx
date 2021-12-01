import React, { Component } from "react";
import "../scss/about-me.scss";

export default class AboutMe extends Component {
  render() {

    const recentTechnologies = ['JavaScript (ES6+)', 'TypeScript', 'Next.js', 'Gatsby.js', 'React', 'Redux', 'Angular', 'Node.js', 'AWS']
    return (
      <div className="about-me" id="about-me">
        <div className="content">
          <h1>
            About Me
          </h1>
          <p>
            Hello! My name is Chandra Prakash and I am a full stack engineer.
          </p>
          <p>
            I have worked with big clients on their Digital transformation journey.
            I've had the privilege of building products for the corporations like IBM, Cisco Systems.
            My main focus these days is building accessible, inclusive products
            and digital experiences..
          </p>
          <h6>
            Here are a few technologies I've been working
            with recently:
          </h6>
          <div className="technologies">
            {recentTechnologies.map(technology => {
              return (
                <div>
                  <img src="./images/tick-mark.svg" />
                  <p className="technology-name">{technology}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="picture">

        </div>
      </div>
    );
  }
}
