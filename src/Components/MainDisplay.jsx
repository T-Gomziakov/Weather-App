import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";

import SuccessfulDisplay from "./SuccessfulDisplay";
import "../stylesheet.css";

export default function MainDisplay() {
  let [formValue, setFormValue] = useState("");
  let [city, setCity] = useState("");
  let [country, setCountry] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    // geocoding
    const geocodeURL = `http://api.openweathermap.org/geo/1.0/direct?q=${formValue}&limit=1&appid=${
      import.meta.env.VITE_TOKEN
    }`;
    const geoResponse = await fetch(geocodeURL);
    const geoJSON = await geoResponse.json();
    console.log(geoJSON);

    const geoCity = geoJSON[0]?.name;
    const geoLat = geoJSON[0]?.lat;
    const geoLon = geoJSON[0]?.lon;
    console.log(geoLat + geoCity + geoLon);

    // check for length of the return to debug

    // weather api
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${geoLat}&lon=${geoLon}&units=imperial&appid=${
      import.meta.env.VITE_TOKEN
    }`;

    const weatherResponse = await fetch(weatherURL);
    const weatherJSON = await weatherResponse.json();
    console.log(weatherJSON);

    const weatherTemp = weatherJSON?.main?.temp;
    const weatherHumidity = weatherJSON?.main?.humidity;
    console.log(weatherTemp + " " + weatherHumidity);
  }

  function handleInput(event) {
    setFormValue(event.target.value);
  }

  return (
    <main id="mainWindow">
      <h1>Weather App</h1>
      <form className="locationForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="cityInput"
          onChange={handleInput}
          value={formValue}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="resultDisplay">
        <SuccessfulDisplay city={city} country={country} />
      </div>
    </main>
  );
}
