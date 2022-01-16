import React, { Component } from "react";
import "../scss/contact.scss";

export default class Contact extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="contact-section" id="contact">
        <p className="logo">
          <h2>Chandra Prakash</h2>
        </p>
        <p className="call-me">
          <a href="tel:+91-9014243818">
            <img
              class="phone-icon"
              alt="phone-icon"
              src="./images/telephone.svg"
            ></img>
            <div class="contact-info">
              <h5>Mobile:</h5>
              <h6>+91-9014243818</h6>
            </div>
          </a>
        </p>
        <p className="email-me">
          <a className="email-link" href="mailto:chandraprakashb15@gmail.com">
            <img
              class="mail-icon"
              alt="mail-icon"
              src="./images/mail.svg"
            ></img>
            <div class="contact-info">
              <h5>Email:</h5>
              <h6>chandraprakashb15@gmail.com</h6>
            </div>
          </a>
        </p>
        <p className="follow-me">
          <a href="https://www.linkedin.com/in/chandub15/">
            <img
              class="linkedin-icon follow-icon"
              alt="linkedin-icon"
              src="./images/linkedin.svg"
            ></img>{" "}
          </a>
          <div class="contact-info">
            <h5>Follow me</h5>
          </div>
        </p>
      </div>
    );
  }
}
