import React, { Component } from "react";
import "../scss/aboutme.scss";


export default class AboutMe extends Component {
  render() {

    const recentTechnologies = ['JavaScript', 'TypeScript', 'Angular','Next.js', 'Gatsby.js', 'React', 'Redux', 'Node.js', 'AWS','React Testing Library','Jest','Playwright']
    return (
      <div className="about-me d-flex flex-column align-items-center gap-3 pb-5" id="about-me" >
        <div className="frame">
        <div className="photo">
          <div className="picture">
          </div>
        </div>
        </div>
        <div className="content mt-4">
          <h1 className="name text-center text-lg-left">
            Chandra Prakash
          </h1>
          <h4 className="role text-center text-lg-left mb-5">
            Web Developer - Full Stack
          </h4>
          <p>
            Experienced web developer proficient in JavaScript, HTML, and CSS.
            Skilled in front-end frameworks like React and Angular, with expertise in back-end development using Node.js and databases such as MongoDB and MySQL.
            Committed to delivering high-quality, user-friendly web applications.
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

      </div>
    );
  }
}
