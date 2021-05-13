import React, { Component } from "react";
import "../scss/header.scss";

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
          <a href="#news">Bookings</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a href="#" className="icon" onClick={()=>this.myFunction()}>
            {/* <i className="fa fa-bars"></i> */}
            M
          </a>
        </div>
      </div>
    );
  }
}
