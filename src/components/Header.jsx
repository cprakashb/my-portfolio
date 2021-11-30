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
        <div className="topnav" id="myTopnav">
          <ul class="nav-menu">

            <li class="nav-menu-items">
              <a href="#home" className="active">
                Chandra Prakash
          </a>
            </li>

            <li class="nav-menu-items">
              <a href="#events">About</a>

            </li>
            <li class="nav-menu-items">
              <a href="#contact">Skills</a>

            </li>
            <li class="nav-menu-items contact-me">
              <a className="" href="#about">Contact me</a>
            </li>
          </ul>

          {/* <a href="#" className="icon" onClick={() => this.myFunction()}>
              <FaBars />
            </a> */}
        </div>
      </div >
    );
  }
}
