import React from "react";

const ForcastComponent = ({ enableBorder }) => {
  return (
    <div
      className={`text-center p-2 outline-gray-300 outline-1 rounded-xl h-fit cursor-pointer forcastWidth ${
        enableBorder ? "outline" : "hover:outline"
      }`}
    >
      <h6 className="font-medium">1 PM</h6>
      <h6 className="text-3xl py-3">
        20
        <span>°</span>
      </h6>
      <h6 className="text-slate-400">Cloudy</h6>
    </div>
  );
};

export default ForcastComponent;
