import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span>Delhi</span>
        <span>21.04.2024</span>
      </div>
      <div className="flex-row">
        <div className="flex">
          <h1 className="text-9xl">20</h1>
          <div className="pt-16">
            <h6>6.1mph</h6>
            <h6>90%</h6>
          </div>
        </div>
        <div>
          {/* <h6>Feels like 19</h6> */}
          <h2 className="text-3xl">Cloudy</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
