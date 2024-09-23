import React, { useContext, useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import ModalComponent from "./Modal";
import Navbar from "./Navbar";
import { getCurrentWeather } from "../utils/API";
import { State } from "../Context/globalState";
import ForcastMainComponent from "./ForcastMainComponent";

const Home = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Delhi");
  const state = useContext(State);
  const fetchCurrentWeather = async () => {
    try {
      const response = await getCurrentWeather(city);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      state.setGlobalState((prev) => ({ ...prev, currentWeather: result }));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    let timeOut = setTimeout(() => {
      fetchCurrentWeather();
    }, 500);
    return () => clearTimeout(timeOut);
  }, [city]);
  useEffect(() => {
    if (search) {
      setCity(search);
      return;
    }
  }, [search]);
  return (
    <div className="flex">
      <div className="w-full h-dvh p-6">
        <Navbar data={data} />
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <WeatherDetails />
            <ForcastMainComponent city={city} />
          </div>
          <ModalComponent search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
};

export default Home;
