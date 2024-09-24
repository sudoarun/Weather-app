import React, { useContext, useEffect, useState } from "react";
import { Modal } from "antd";
import { State } from "../Context/globalState";
import { fetchLocationAPI } from "../utils/API";
const ModalComponent = ({ search, setSearch }) => {
  const state = useContext(State);
  const [value, setValue] = useState("");
  const [cities, setCities] = useState([]);

  const handleCancel = () => {
    state.setGlobalState((prev) => ({ ...prev, isModelOpen: false }));
    setValue("");
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    let location = `${cities[0]?.name},${cities[0]?.countryCode}`;
    setSearch(location);
    handleCancel();
  };
  const fetchCity = async () => {
    try {
      let response = await fetchLocationAPI(value);
      const result = await response.json();
      setCities(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    let TimeOut = setTimeout(() => {
      fetchCity();
    }, 300);
    return () => clearTimeout(TimeOut);
  }, [value]);
  return (
    <>
      <Modal
        open={state.globalState.isModelOpen}
        footer={false}
        closeIcon={false}
        onCancel={handleCancel}
      >
        <form className="flex items-center" onSubmit={onSearchSubmit}>
          <input
            placeholder="Enter Location"
            value={value}
            className="w-full mt-3 outline-none"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-2 py-1 mt-3 rounded-lg hover:bg-green-600 cursor-pointer"
            type="submit"
          >
            Search
          </button>
        </form>
        {value && (
          <ul className="flex-row gap-2 mt-2 h-[200px] overflow-y-scroll cursor-pointer text-black">
            {cities?.map((el) => (
              <li
                key={el?.id}
                className="bg-gray-50 hover:bg-gray-100 py-1 my-1 px-2"
                onClick={() => {
                  let location = `${el?.name},${el?.countryCode}`;
                  setValue(location);
                  setSearch(location);
                  handleCancel();
                }}
              >
                {el?.name}, {el?.countryCode}
              </li>
            ))}
          </ul>
        )}
      </Modal>
    </>
  );
};
export default ModalComponent;
