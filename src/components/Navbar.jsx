import React, { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { State } from "../Context/globalState";

const Navbar = ({ data }) => {
  const { location } = data;
  const state = useContext(State);
  const HandleModal = () => {
    state.setGlobalState((prev) => ({
      ...prev,
      isModelOpen: true,
    }));
  };
  const [date, setDate] = useState("");
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    let fullDate = `${day}.${month + 1}.${year}`;
    return setDate(fullDate);
  };
  useEffect(() => {
    getDate();
  }, []);
  return (
    <div className="flex justify-between items-center">
      <span className="font-medium">
        {data?.city}, {data?.country}
      </span>
      <span
        className="border rounded-full p-2 cursor-pointer hover:bg-gray-200"
        onClick={HandleModal}
      >
        <FaLocationDot />
      </span>
      <span className="font-medium">{date}</span>
    </div>
  );
};

export default Navbar;
