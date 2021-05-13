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
          <a href="#home" className="active">
            Home
          </a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#" className="icon" onClick={() => this.myFunction()}>
            <FaBars />
          </a>
        </div>
      </div>
    );
  }
}
