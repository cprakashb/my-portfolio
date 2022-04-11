import React, { Component } from "react";
import "../scss/contact.scss";

export default class Contact extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="contact-section" id="contact">
        <p className="logo">
          Chandra Prakash
        </p>
        <p className="call-me">
          <a className="call-link"  href="tel:+91-9014243818">
            <img
              class="phone-icon"
              alt="phone-icon"
              src="./images/telephone_black.svg"
            ></img>
            <span class="contact-info">
              <span className="contact-heading">Mobile:</span>
              <span className="contact-value">+91-9014243818</span>
            </span>
          </a>
        </p>
        <p className="email-me">
          <a className="email-link" href="mailto:chandraprakashb15@gmail.com">
            <img
              class="mail-icon"
              alt="mail-icon"
              src="./images/mail_black.svg"
            ></img>
            <span class="contact-info">
              <span className="contact-heading">Email:</span>
              <span className="contact-value">chandraprakashb15@gmail.com</span>
            </span>
          </a>
        </p>
        <p className="follow-me">
          <a className="social-media-links"  href="https://www.linkedin.com/in/chandub15/">
            <img
              class="linkedin-icon follow-icon"
              alt="linkedin-icon"
              src="./images/linkedin_black.svg"
            ></img>
          </a>
          <span class="contact-info">
            <span className="contact-heading">Follow me</span>
          </span>
        </p>
      </div>
    );
  }
}
