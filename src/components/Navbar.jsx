import React, { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { State } from "../Context/globalState";

const Navbar = () => {
  const state = useContext(State);
  const { location } = state.globalState.currentWeather;
  const HandleModal = () => {
    state.setGlobalState((prev) => ({
      ...prev,
      isModelOpen: true,
    }));
  };
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const getDate = () => {
    //setup current date
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    let fullDate = `${day}.${month + 1}.${year}`;
    return setDate(fullDate);
  };

  const getLocation = () => {
    //get User geoLocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let mergeLocation = `${position.coords.latitude},${position.coords.longitude}`;

          state.setGlobalState((prev) => ({
            ...prev,
            location: mergeLocation,
          }));
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getDate();
    getLocation();
  }, []);
  return (
    <div className="flex justify-between items-center pb-2">
      <span className="font-medium">
        {location?.name}, {location?.country}
      </span>
      <button
        className="border rounded-full p-2 cursor-pointer hover:bg-gray-200 hover:text-black"
        onClick={HandleModal}
      >
        <FaLocationDot />
      </button>
      <span className="font-medium">{date}</span>
    </div>
  );
};

export default Navbar;
