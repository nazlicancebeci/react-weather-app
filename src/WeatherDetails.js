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
        <div className="col-6 today-weather">
            <img
              src={weatherData.img}
              id="icon"
              alt="clear sky"
              width="50"
              className="weather-icon"
            />
            {""} 10°C
        </div>
        <div className="col-6 today-weather-details">
          Humidity: <span id="humidity">{weatherData.humidity}</span>%<br />
          Wind: <span id="wind">{weatherData.wind}</span> km/h
        </div>
      </div>
    </div>
  );
}
