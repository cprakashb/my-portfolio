import React, { Component } from "react";
import Header from "./Header";
import "../scss/contact.scss";

export default class Contact extends Component {
  componentDidMount() {
    // document.addEventListener('contextmenu', event => event.preventDefault());
  }
  render() {
    return (
      <div id="contact">
        <div class="contact-card">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Contact me</h5>
              <div class="row " >
                <div class="col-6"><p>Email </p>manuvishal@gmail.com </div>
                <div class="col-6"><p>Contact </p>9705004538 </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
