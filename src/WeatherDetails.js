import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherDetails.css";
import axios from "axios";

export default function WeatherDetails(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].main,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="today-body">
        <h1 id="city"> {weatherData.city} </h1>
        <h3><FormattedDate date={weatherData.date} /></h3>
        <img
          src={weatherData.icon}
          alt={weatherData.description}
          className="weather-icon"
        />
        <h2>
          <span className="temperature"> {weatherData.temperature} </span>
          <span className="unit">°C</span>
        </h2>
        <h4>{weatherData.description}</h4>
        <div className="row">
          <div className="col-6 humidity">
            Humidity: {weatherData.humidity}%
          </div>
          <div className="col-6 wind">Wind: {weatherData.wind} km/h</div>
        </div>
      </div>
    );
  } else {
    const apiKey = "526170583083865a59eff139fc057ae5";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
