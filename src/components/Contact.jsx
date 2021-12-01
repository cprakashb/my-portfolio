import React, { Component } from "react";
import Header from "./Header";
import "../scss/contact.scss";

export default class Contact extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="contact-section" id="contact">
        <p className="logo">
          <h2>Chandra Prakash</h2>
        </p>
        <p className="call-me">
          <img class="phone-icon" src="./images/telephone.svg"></img>
          <h4>Call me :</h4>
          <h6>+91-9014243818</h6>
        </p>
        <p className="email-me">
          <img class="mail-icon" src="./images/mail.svg"></img>
          <h4>Email me :</h4>
          <h6>chandraprakashb15@gmail.com</h6>
        </p>
        <p className="follow-me">
          <h4>Follow me :</h4>
          <a href="https://www.linkedin.com/in/chandub15/"><img class="linkedin-icon" src="./images/linkedin.svg"></img> </a>
        </p>
      </div>
    );
  }
}
