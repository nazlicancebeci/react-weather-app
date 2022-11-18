import React from "react";
import "./Weather.css";

export default function Weather() {
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
                <button
                  type="submit"
                  className="btn btn-success"
                  id="current-button"
                >
                  C
                </button>
              </div>
            </div>
          </form>    </div>
  );
}
