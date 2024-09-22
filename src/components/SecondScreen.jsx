import React from "react";
import WeatherDetails from "./WeatherDetails";
import ForcastComponent from "./ForcastComponent";

const SecondScreen = () => {
  const forcast = [
    {
      temp: 23,
      type: "Cloudy",
      time: "1 PM",
    },
    {
      temp: 26,
      type: "Rainy",
      time: "1 PM",
    },
    {
      temp: 23,
      type: "Cloudy",
      time: "1 PM",
    },
    {
      temp: 23,
      type: "Cloudy",
      time: "1 PM",
    },
    {
      temp: 23,
      type: "Cloudy",
      time: "1 PM",
    },
    {
      temp: 23,
      type: "Cloudy",
      time: "1 PM",
    },
  ];
  return (
    <div className="w-[500px] bg-gray-100 h-svh p-6">
      <div className="text-center">
        <h3 className="text-3xl">Good Morning</h3>
        <h5 className="text-2xl pt-3">12:30 PM</h5>
      </div>
      <div className="flex justify-center pt-2">
        <WeatherDetails size={true} />
      </div>
      <div className="pt-3">
        <h3 className="text-center font-semibold">Hourly Forcast</h3>
        <div className="pt-4">
          <div className="grid grid-cols-3 gap-3">
            {forcast.map((el) => (
              <ForcastComponent key={el.temp} enableBorder={true} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondScreen;
