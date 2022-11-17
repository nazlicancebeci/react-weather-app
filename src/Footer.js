import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <a
        href="https://github.com/nazlicancebeci/react-weather-app"
        target="_blank"
        rel="noreferrer"
        class="open-source"
      >
        {" "}
        Open-sourced code on GitHub
      </a>
      , by{" "}
      <a href="https://www.linkedin.com/in/nazlican-cebeci/">Nazlican Cebeci</a>
    </div>
  );
}
