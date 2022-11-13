import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  let weatherData = {
    wind: 8,
    humidity: 60,
    temperature: 19,
    city: "Rome",
    date: "Sunday, 13:23 pm",
    description: "Sunny",
    img: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
  };
  return (
    <div className="today-body">
      <h1 id="city"> {weatherData.city} </h1>
      <h2>{weatherData.date}</h2>
      <h3 id="description">{weatherData.description}</h3>

      <div className="row">
        <div className="col-8 today-weather">
          <span>
            <img
              src={weatherData.img}
              id="icon"
              alt="clear sky"
              width="50"
              className="weather-icon"
            />
          </span>
          <strong className="temperature" id="temperature"></strong>
          <span
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              checked
            />
            <label className="btn btn-outline-primary btn-sm" for="btnradio1">
              {weatherData.temperature}°C
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label className="btn btn-outline-primary btn-sm" for="btnradio2">
              °F
            </label>
          </span>
        </div>
        <div className="col-3 today-weather-details">
          Humidity: <span id="humidity">{weatherData.humidity}</span>%<br />
          Wind: <span id="wind">{weatherData.wind}</span> km/h
        </div>
      </div>
    </div>
  );
}
