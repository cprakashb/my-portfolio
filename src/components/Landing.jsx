import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";
import Contact from "./Contact";
import { StaticImage } from "gatsby-plugin-image"
import Events from "./About-Me";
import HeroSection from "./hero-section";
import AboutMe from "./About-Me";
import Skills from "./Skills";


export default class Landing extends Component {

  componentDidMount(){
    // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  render() {
    return (
      <div  id="home">
        <Header></Header>
        <HeroSection></HeroSection>
        {/* <AboutMe></AboutMe> */}
        <Skills></Skills>
        {/* <Contact></Contact> */}
      </div>
    );
  }
}
