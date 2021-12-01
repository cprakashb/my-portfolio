import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";
import HeroSection from "./hero-section";
import AboutMe from "./About-Me";
import Skills from "./Skills";
import Contact from "./Contact";


export default class Landing extends Component {

  componentDidMount(){
  }
  render() {
    return (
      <div  id="home">
        <Header></Header>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    );
  }
}
