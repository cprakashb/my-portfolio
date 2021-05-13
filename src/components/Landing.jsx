import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div class="landing">
          <img class="hero-image" src="/images/PMV_2756.png" />
        </div>
      </div>
    );
  }
}
