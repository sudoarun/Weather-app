import React, { useEffect, useState } from "react";
import ForcastComponent from "./ForcastComponent";
import { getCurrentWeatherForcast } from "../utils/API";

const ForcastMainComponent = ({ city }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const GetForcastFiveDay = async () => {
    try {
      const response = await getCurrentWeatherForcast(city);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result.daily);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const time = setTimeout(() => {
      GetForcastFiveDay();
    }, 600);
    return () => clearTimeout(time);
  }, [city]);
  return (
    <div className="w-full md:w-fit">
      <h4 className="font-medium pt-6 pb-3">
        Weekly <span className="underline">Forcast</span>
      </h4>
      <div className=" flex gap-3 overflow-x-scroll md:overscroll-none w-full md:w-fit">
        {data?.map((el) => (
          <ForcastComponent data={el} key={el.time} enableBorder={true} />
        ))}
      </div>
    </div>
  );
};

export default ForcastMainComponent;
