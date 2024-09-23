import React from "react";

const ForcastComponent = ({ enableBorder, data }) => {
  const formatDay = (dateString) => {
    const options = { weekday: "short" };
    const date = new Date(dateString * 1000);
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <div
      className={`text-center p-2 outline-gray-300 outline-1 rounded-xl h-fit cursor-pointer forcastWidth ${
        enableBorder ? "outline" : "hover:outline"
      }`}
    >
      <h6 className="font-medium">{formatDay(data?.time)}</h6>
      {data?.condition?.icon_url && (
        <img
          className="day-icon"
          src={data?.condition?.icon_url}
          alt={data?.condition?.description}
        />
      )}
      <h6 className="text-xl py-3">
        {Math.round(data?.temperature?.minimum)}
        <span>°</span>/ <span>{Math.round(data?.temperature?.maximum)}°</span>
      </h6>
    </div>
  );
};

export default ForcastComponent;
