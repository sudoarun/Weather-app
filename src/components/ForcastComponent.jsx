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
      <h6 className="font-medium">{formatDay(data?.date_epoch)}</h6>
      <div className="flex justify-center">
        {data?.day?.condition?.icon && (
          <img
            src={`https:${data?.day?.condition?.icon}`}
            alt={data?.day?.condition?.text}
          />
        )}
      </div>
      <h6 className="text-xl py-3">
        {Math.round(data?.day?.maxtemp_c)}
        <span>°</span>/ <span>{Math.round(data?.day?.mintemp_c)}°</span>
      </h6>
    </div>
  );
};

export default ForcastComponent;
