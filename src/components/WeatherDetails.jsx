import React, { useContext, useState } from "react";
import { State } from "../Context/globalState";

const WeatherDetails = () => {
  const state = useContext(State);
  const { current } = state.globalState?.currentWeather;
  const [converted, setConverted] = useState(false);
  const [value, setvalue] = useState("");
  const handleCalculation = () => {
    if (converted) {
      let c = ((current?.temp_c - 32) * 5) / 9;
      setvalue(c);
      setConverted(false);
      return;
    }
    let f = (current?.temp_c * 9) / 5 + 32;
    setvalue(Math.round(f));
    setConverted(true);
  };

  return (
    <div className="flex-row">
      <div className="flex items-center">
        <h1
          className={`${"text-9xl"} relative cursor-pointer`}
          onClick={handleCalculation}
        >
          {converted ? value : Math.round(current?.temp_c)}
          <span>°</span>
        </h1>
        <div className={``}>
          {current?.condition?.icon && (
            <img
              src={`https:${current?.condition?.icon}`}
              alt={current?.condition?.text}
            />
          )}
          <h6 className="text-center text-2xl">{current?.condition?.text}</h6>
        </div>
      </div>
      <div className="">
        <h6 className={`text-center`}>
          {converted ? "fahrenheit " : "celsius"}
        </h6>
      </div>
    </div>
  );
};

export default WeatherDetails;
