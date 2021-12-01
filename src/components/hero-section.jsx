import React, { Component } from "react";
import "../scss/hero-section.scss";

export default class HeroSection extends Component {
  render() {
    return (
      <div className="hero-section" >
          <p className="hello">Hello I'm</p>
          <p className="name">Chandra Prakash</p>
          <p className="line-1">I build things for the web.</p>
          <p className="line-2">I'm an India-based software engineer who specializes
           in building exceptional digital experiences. Currently, 
           I'm a full stack engineer at Cisco Systems focused on building a web applications to enable users to have help experiences.</p>
      </div>
    );
  }
}
