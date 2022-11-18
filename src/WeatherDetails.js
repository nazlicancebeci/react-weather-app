import React, { useState} from "react";
import "./WeatherDetails.css";
import axios from "axios";


export default function WeatherDetails() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
function handleResponse(response) {
  setWeatherData({
    temperature: Math.round(response.data.main.temp),
    city: response.data.name,
    wind: response.data.wind.speed,
    humidity: response.data.main.humidity
  });
  setReady(true);
}

if (ready) {
return (
  <div className="Weather">
    <form id="search-form">
      <div className="row">
        <div className="col-7">
          <input
            type="search"
            className="form-control"
            placeholder="Enter a city"
            id="type-city"
            autofocus="on"
            autocomplete="off"
          />
        </div>
        <div className="col-3">
          <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success" id="current-button">
            C
          </button>
        </div>
      </div>
    </form>
    <div className="today-body">
      <h1 id="city"> {weatherData.city} </h1>
      <h3>Friday, 17:04</h3>
      <img
        src="http://www.clker.com/cliparts/Z/B/s/a/T/h/sun-clipart-md.png"
        id="icon"
        alt="clear sky"
        width="50"
        className="weather-icon"
      />
      <h2>
        <span className="temperature"> {weatherData.temperature} </span>
        <span className="unit">°C</span>
      </h2>
      <h4 id="description">{weatherData.description}</h4>
      <div className="row">
        <div className="col-6 humidity">
          Humidity: {weatherData.humidity}%
          <br />
        </div>
        <div className="col-6 wind"> Wind: {weatherData.wind} km/h</div>
      </div>
    </div>
  </div>
);
} else {
const apiKey = "526170583083865a59eff139fc057ae5";
let city = "Rome";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}



}
