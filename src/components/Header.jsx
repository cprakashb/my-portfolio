import React, { Component } from "react";
import "../scss/header.scss";

import downloadFile from '../../resume/Chandra_Prakash_FE_Developer.pdf';
export default class Header extends Component {
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  onKeyDown(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="header">
        <a href="#" class="logo">
          Chandra Prakash
        </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label
          class="menu-icon"
          for="menu-btn"
          onKeyDown={(e) => this.onKeyDown(e)}
        >
          <span class="navicon"></span>
        </label>
        <ul class="nav-menu menu">
          <li class="nav-menu-items">
            <a href="#about-me">About Me</a>
          </li>
          <li class="nav-menu-items">
            <a href="#skills">Skills</a>
          </li>
          <li class="nav-menu-items ">
            <a className="contact-me" href="#contact">
              Contact me
            </a>
          </li>
          <li>
            <a href={downloadFile} target="_blank" rel="noreferrer">
              <img src="https://img.icons8.com/ios/50/000000/open-resume.png"  alt="view-resume"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
