import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";
import Contact from "./Contact";
import { StaticImage } from "gatsby-plugin-image"

export default class Landing extends Component {

  componentDidMount(){
    // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  render() {
    return (
      <div class="landing-main">
        <Header></Header>
        <div class="landing">
          <img class="hero-image" src="/images/PMV_2756.png"/>
          <StaticImage src="../images/PMV_2756.png" alt="A dinosaur" />
        </div>
        
        <Contact></Contact>
      </div>
    );
  }
}
