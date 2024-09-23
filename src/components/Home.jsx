import React, { useContext, useEffect, useState } from "react";
import WeatherDetails from "./WeatherDetails";
import ModalComponent from "./Modal";
import Navbar from "./Navbar";
import { getCurrentWeather } from "../utils/API";
import { State } from "../Context/globalState";
import ForcastMainComponent from "./ForcastMainComponent";
import Loader from "./loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [city, setCity] = useState("faridabad");
  const state = useContext(State);
  const checkWeather = (weather) => {
    const weatherVideos = {
      clear: "/clear-sky.mp4",
      sunny: "/clear-sky.mp4",
      cloudy: "/cloudy-sky.mp4",
      scattered: "/cloudy-sky.mp4",
      rain: "/rain-sky.mp4",
      mist: "/fog.mp4",
    };

    for (let key in weatherVideos) {
      if (weather.includes(key)) {
        setVideoURL(weatherVideos[key]);
        return;
      }
    }

    console.log(`No video found for ${weather}`);
    return null;
  };
  const fetchCurrentWeather = async () => {
    try {
      const response = await getCurrentWeather(city);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      state.setGlobalState((prev) => ({ ...prev, currentWeather: result }));
      checkWeather(result?.current?.condition.text.toLowerCase());
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentWeather();
  }, [city]);
  useEffect(() => {
    if (search) {
      setCity(search);
      return;
    } else if (state?.globalState?.location) {
      setCity(state?.globalState?.location);
    }
  }, [search]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex relative justify-center items-center h-dvh text-white">
      <div className=" p-5 md:p-16 blur-bg w-full sm:w-fit">
        <Navbar />
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-full md:w-fit">
            <WeatherDetails />
            <ForcastMainComponent city={city} />
          </div>
          <ModalComponent search={search} setSearch={setSearch} />
        </div>
      </div>
      <div className="w-full h-dvh absolute -z-10">
        <video
          className="h-full w-full object-cover"
          src={videoURL && videoURL}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Home;
