import { API_KEY } from "./ApiKey";

const baseURL = "http://api.weatherapi.com/v1";

export const getCurrentWeather = (city) => {
  return fetch(`${baseURL}/current.json?key=${API_KEY}&q=${city}&units=metric`);
};
export const getCurrentWeatherForcast = async (city, days) => {
  return await fetch(
    `${baseURL}/forecast.json?key=${API_KEY}&q=${city}&days=${days ? days : 7}`
  );
};
export const fetchLocationAPI = (city) => {
  return fetch(
    `http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=okayUser`
  );
};
