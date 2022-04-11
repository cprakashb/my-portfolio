import React, { Component } from "react";
import "../scss/get-in-touch.scss";

export default class GetInTouch extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="get-in-touch-section" id="contact">
        <img className="skills-circle" src="./images/circle.svg" alt="circle"/>
        <h1>Get In Touch</h1>
        <p className="line-1">Want to know how I may help you? or you have a question or just want to say hi,
           My inbox is always open. I'll try my best to get back to you!</p>
        <a className="say-hello" href="mailto:chandraprakashb15@gmail.com" target="_blank" rel="noreferrer">Say hello</a>
      </div>
    );
  }
}
