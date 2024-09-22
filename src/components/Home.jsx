import React from "react";
import SecondScreen from "./SecondScreen";
import WeatherDetails from "./WeatherDetails";
import ForcastComponent from "./ForcastComponent";
import ModalComponent from "./Modal";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-full h-dvh p-6">
        <Navbar />
        <div className="h-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <WeatherDetails />
            <div className="pt-6 flex gap-3">
              <ForcastComponent enableBorder={true} />
              <ForcastComponent />
              <ForcastComponent />
              <ForcastComponent />
              <ForcastComponent />
              <ForcastComponent />
            </div>
          </div>
          <ModalComponent />
        </div>
      </div>
      <SecondScreen />
    </div>
  );
};

export default Home;
