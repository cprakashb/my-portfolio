import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";
import Contact from "./Contact";

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
        </div>
        
        <Contact></Contact>
      </div>
    );
  }
}
