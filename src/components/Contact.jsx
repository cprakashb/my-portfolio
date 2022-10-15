import React, { Component } from "react";
import "../scss/contact.scss";

export default class Contact extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="contact-section" id="contact">
        <p className="email-me">
          <a className="email-link" href="mailto:chandraprakashb15@gmail.com">
            <img
              class="mail-icon"
              alt="mail-icon"
              src="./images/mail_black.svg"
            ></img>
            <span class="contact-info">
              <span className="contact-heading">Email:</span>
              <span className="contact-value">cprakashb.dev@gmail.com</span>
            </span>
          </a>
        </p>
        <p className="follow-me">
          <a className="social-media-links"  href="https://ca.linkedin.com/in/chandraprakashb">
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
