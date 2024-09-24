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
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "9458e9a060msh94ba37abb40daf3p199152jsn9274bdb88648",
      "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    },
  };
  return fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${city}`,
    options
  );
};
