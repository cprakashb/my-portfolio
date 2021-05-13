import React, { Component } from "react";
import "../scss/events.scss";

export default class Events extends Component {
  render() {
    let events = [
      "Wedding Photography",
      "Pre-wedding shoot",
      "Birthday Events",
    ];
    console.log(events);
    return (
      <div className="eventsList" id="events">
        {events.map((eachEvent) => {
         return <div key={eachEvent} className="event">{eachEvent}</div>;
        })}
      </div>
    );
  }
}
