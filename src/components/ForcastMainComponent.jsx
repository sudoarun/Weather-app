import React, { useEffect, useState } from "react";
import ForcastComponent from "./ForcastComponent";
import { getCurrentWeatherForcast } from "../utils/API";
import Loader from "./loader";

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
      setData(result.forecast.forecastday);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    GetForcastFiveDay();
  }, [city]);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="w-full md:w-fit">
      <h4 className="font-medium pt-6 pb-3">
        Weekly <span className="underline">Forcast</span>
      </h4>
      <div className=" flex gap-3 w-full md:w-fit p-1 md:p-2 overflow-scroll md:overflow-hidden">
        {data?.map((el) => (
          <ForcastComponent data={el} key={el.date_epoch} enableBorder={true} />
        ))}
      </div>
    </div>
  );
};

export default ForcastMainComponent;
