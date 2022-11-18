import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherDetails.css";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1> {props.data.city} </h1>
      <h3>
        <FormattedDate date={props.data.date} />
      </h3>
      <img
        src={props.data.icon}
        alt={props.data.description}
        className="weather-icon"
      />
      <h2>
        <span className="temperature"> {props.data.temperature} </span>
        <span className="unit">°C</span>
      </h2>
      <h4>{props.data.description}</h4>
      <div className="row">
        <div className="col-6 humidity">Humidity: {props.data.humidity}%</div>
        <div className="col-6 wind">Wind: {props.data.wind} km/h</div>
      </div>
    </div>
  );
}
