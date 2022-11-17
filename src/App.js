import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Weather from "./Weather";
import WeatherDetails from "./WeatherDetails";
import "./WeatherDetails.css"
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <WeatherDetails />
      </div>
      <Footer />
    </div>
  );
}
