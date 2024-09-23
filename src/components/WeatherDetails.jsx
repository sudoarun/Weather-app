import React, { useContext } from "react";
import { FiWind } from "react-icons/fi";
import { BsDroplet } from "react-icons/bs";
import { State } from "../Context/globalState";

const WeatherDetails = ({ size }) => {
  const state = useContext(State);
  const { temperature, condition, wind } = state.globalState?.currentWeather;

  return (
    <div className="flex-row">
      <div className="flex">
        <h1 className={`${size ? "text-6xl" : "text-9xl"} relative`}>
          {Math.round(temperature?.current)}
          <span>°</span>
        </h1>
        <div className={`${size ? "pt-2 ps-2" : "pt-16"}`}>
          <h6 className={`flex items-center gap-1 ${size ? "text-sm" : ""}`}>
            <FiWind />
            {wind?.speed} mph
          </h6>
          <h6 className={`flex items-center gap-1 ${size ? "text-sm" : ""}`}>
            <BsDroplet />
            {temperature?.humidity}%
          </h6>
        </div>
      </div>
      <div className="">
        <h6 className={`${size ? "text-center text-sm py-2" : "hidden"}`}>
          Feels like {temperature?.feels_like}
          <span>°</span>
        </h6>
        <h2 className={`${size ? "text-xl" : "text-3xl"} text-center`}>
          {condition?.description}
        </h2>
      </div>
    </div>
  );
};

export default WeatherDetails;
