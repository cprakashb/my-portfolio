import React, { Component } from "react";
import "../scss/aboutme.scss";


export default class AboutMe extends Component {
  render() {

    const recentTechnologies = ['JavaScript', 'TypeScript', 'Next.js', 'Gatsby.js', 'React', 'Redux', 'Angular', 'Node.js', 'AWS']
    return (
      <div className="about-me" id="about-me" >
        <img className="circle" src="./images/circle.svg" alt="circle"/>
        <img className="triangle-3" src="./images/triangle2.svg" alt="triangle"/>
        <div className="content">
          <h1>
            About Me
          </h1>
          <p>
            Hello! My name is Chandra Prakash and I am a full stack engineer.
          </p>
          <p>
            I have worked with multiple organizations on their Digital transformation journey.
            I've had the privilege of building products for the corporations like <b>IBM, Cisco Systems</b>.
            My main focus these days is building accessible, responsive and inclusive products
          </p>
          <p className="recent-tech">
            Here are a few technologies I've been working
            with recently:
          </p>
          <div className="technologies">
            {recentTechnologies.map(technology => {
              return (
                <div>
                  <img className="tick-mark" src="./images/tick-mark_white.svg" alt="tick-mark" />
                  <p className="technology-name">{technology}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="picture">
          {/* <img  className="prf-background" src="./images/profile-background.svg" alt="profile"/> */}
          <img className="prf-pic" src="./images/profile_new.jpg" alt="profile"/>
        </div>
      </div>
    );
  }
}
