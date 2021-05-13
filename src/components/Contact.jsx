import React, { Component } from "react";
import Header from "./Header";
import "../scss/contact.scss";
import { FaInstagram, FaMobileAlt } from "react-icons/fa";

export default class Contact extends Component {
  componentDidMount() {
    // document.addEventListener('coxwntextmenu', event => event.preventDefault());
  }
  render() {
    return (
      <div id="contact">
        <div className="contact-card">
          <div className="card">
            <div className="card-body">
              {/* <h5 className="card-title">Contact me</h5> */}
              <div>
                <FaInstagram className="insta-icon" />{" "}
                <a
                  className="insta-id"
                  href="https://www.instagram.com/5theyephotography/?hl=en"
                  target="_blank"
                >
                  @5theyePhotography
                </a>
              </div>
              <div className="mobile">
              <FaMobileAlt className="mobile-icon"/>
              <span className="mobile-no">+91-9705004538</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
