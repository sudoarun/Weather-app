import React from "react";
import { FiWind, FiCircle } from "react-icons/fi";
import { BsDroplet } from "react-icons/bs";

const WeatherDetails = ({ size }) => {
  return (
    <div className="flex-row">
      <div className="flex">
        <h1 className={`${size ? "text-6xl" : "text-9xl"} relative`}>
          20
          <span>°</span>
        </h1>
        <div className={`${size ? "pt-2 ps-2" : "pt-16"}`}>
          <h6 className={`flex items-center gap-1 ${size ? "text-sm" : ""}`}>
            <FiWind />
            6.1mph
          </h6>
          <h6 className={`flex items-center gap-1 ${size ? "text-sm" : ""}`}>
            <BsDroplet />
            90%
          </h6>
        </div>
      </div>
      <div className="">
        <h6 className={`${size ? "text-center text-sm py-2" : "hidden"}`}>
          Feels like 19
          <span>°</span>
        </h6>
        <h2 className={`${size ? "text-xl" : "text-3xl"} text-center`}>
          Cloudy
        </h2>
      </div>
    </div>
  );
};

export default WeatherDetails;
