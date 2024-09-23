import { API_KEY } from "./ApiKey";

const baseURL = "https://api.shecodes.io/weather/v1";

export const getCurrentWeather = (city) => {
  return fetch(`${baseURL}/current?query=${city}&key=${API_KEY}&units=metric`);
};
export const getCurrentWeatherForcast = async (city, days) => {
  return await fetch(`${baseURL}/forecast?query=${city}&key=${API_KEY}`);
};
