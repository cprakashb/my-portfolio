import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";
import HeroSection from "./hero-section";
import AboutMe from "./About-Me";
import Skills from "./Skills";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import { Helmet } from "react-helmet";

export default class Landing extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="home">
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Chandra Prakash Bommadevara Portfolio"
          />
          <meta
            name="keywords"
            content="Chandra, Prakash, chandub15, bommadevara, Bommadevara, Chandra Prakash Bommadevara"
          />
          <meta name="author" content="Chandra Prakash Bommadevara" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Helmet>
        <Header></Header>
        <HeroSection></HeroSection>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <GetInTouch></GetInTouch>
        <Contact></Contact>
      </div>
    );
  }
}
