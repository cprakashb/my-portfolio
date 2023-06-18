import React, { Component } from "react";
import Header from "./Header";
import "../scss/home.scss";
import AboutMe from "./About-Me";
import Skills from "./Skills";
import { Helmet } from "react-helmet";
import WorkHistory from "./Work-History";
import Footer from "./Footer";

export default class Landing extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="home">
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
        >
          <meta charSet="utf-8" />
          <title>Chandra Prakash Bommadevara</title>
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
           <link rel="icon" type="image/x-icon" href="/images/profile.jpg"></link>
        </Helmet>
        <div className="d-flex flex-column" style={{gap:"40px"}}> 
        <Header></Header>
        <AboutMe></AboutMe>
        <WorkHistory></WorkHistory>
        <Skills></Skills>
     
        </div>
        <Footer></Footer>

      </div>
    );
  }
}
