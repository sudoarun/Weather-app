import React, { useEffect, useState } from "react";
import ForcastComponent from "./ForcastComponent";
import { getCurrentWeatherForcast, GetFiveDayForcast } from "../utils/API";

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
    <div className="pt-6 flex gap-3">
      {data?.map((el) => (
        <ForcastComponent data={el} key={el.time} />
      ))}
    </div>
  );
};

export default ForcastMainComponent;
