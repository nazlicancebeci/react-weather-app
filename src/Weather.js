import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form className="row g-3" id="search-form">
            <div className="col-7">
              <input
                type="search"
                class="form-control"
                placeholder="Enter a city"
                id="type-city"
                autofocus="on"
                autocomplete="off"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary mb-3"
              />
            </div>
            <div className="col-2">
              <button
                type="submit"
                className="btn btn-success mb-3"
                id="current-button"
              >
                Current
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}