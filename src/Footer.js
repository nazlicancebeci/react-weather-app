import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div class="footer">
      <a
        href="https://github.com/nazlicancebeci/vanilla-weather-app"
        target="_blank"
        rel="noreferrer"
        class="open-source"
      >
        {" "}
        Open-source code
      </a>
      , by{" "}
      <a href="https://www.linkedin.com/in/nazlican-cebeci/">Nazlican Cebeci</a>
    </div>
  );
}
