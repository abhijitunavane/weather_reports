import { api_key } from "./config.js";
import axios from "axios";

export const getWeatherData = async (searchedTerm) => {
    const weather = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${searchedTerm}&appid=${api_key}&units=metric&type=accurate&mode=json`);
    return weather.data;
};

export const getCitiesData = async () => {
    const cities = await axios.get(`https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json`);
    
    return cities.data;
};