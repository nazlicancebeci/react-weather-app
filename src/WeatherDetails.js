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
      <h3>{weatherData.date}</h3>
      <img
        src={weatherData.img}
        id="icon"
        alt="clear sky"
        width="50"
        className="weather-icon"
      />
      <h2>
        <span className="temperature">10</span><span className="unit">°C</span>
      </h2>
      <h4 id="description">{weatherData.description}</h4>
      <div className="row">
        <div className="col-6 humidity">
          Humidity: {weatherData.humidity}%<br />
        </div>
        <div className="col-6 wind"> Wind: {weatherData.wind} km/h</div>
      </div>
    </div>
  );
}
