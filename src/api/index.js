import { api_key } from "./config.js";
import axios from "axios";

export const getWeatherData = async (searchedTerm) => {
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchedTerm}&appid=${api_key}&units=metric&type=accurate&mode=json`);
    return weather.data;
};
