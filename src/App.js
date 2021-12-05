// import styles from "./App.module.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/weather-icons/css/weather-icons.css";

import { getWeatherData } from "./api";
import { useEffect, useState } from "react";

import { Options, Graphics, Header } from "./components";

function App() {
  const [data, setData] = useState();

  const fetchAPI_weather = async (searchedTerm) => {
    const weatherData = await getWeatherData(searchedTerm);
    setData(weatherData);
  }

  return (
    <div className="App">
      <div className="container py-5 p-md-5">
        <Header />
        <Options fetchAPI_weather={fetchAPI_weather} setData={setData} />
        <Graphics data={data}  />
      </div>
    </div>
  );
}

export default App;
