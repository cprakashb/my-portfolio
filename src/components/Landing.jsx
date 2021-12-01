import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";
import Contact from "./Contact";
import { StaticImage } from "gatsby-plugin-image"
import Events from "./Events";
import HeroSection from "./hero-section";

export default class Landing extends Component {

  componentDidMount(){
    // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  render() {
    return (
      <div  id="home">
        <Header></Header>
        <HeroSection></HeroSection>
        {/* <div class="landing">
          <StaticImage className="hero-image" src="../../static/images/PMV_2756.png" alt="A dinosaur" />
        </div>
        <Events></Events>
        <Contact></Contact> */}
      </div>
    );
  }
}
