import React, { Component } from "react";
import "../scss/header.scss";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
export default class Header extends Component {



  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  render() {
    return (
      <div className="header">
        <a href="#" class="logo">
          Chandra Prakash
          </a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="nav-menu menu">
          <li class="nav-menu-items">
            <a href="#about-me">About Me</a>
          </li>
          <li class="nav-menu-items">
            <a href="#skills">Skills</a>
          </li>
          <li class="nav-menu-items ">
            <a className="contact-me" href="#about">Contact me</a>
          </li>
        </ul>
      </div >
    );
  }
}
