import React, { useContext, useState } from "react";
import { Modal } from "antd";
import { State } from "../Context/globalState";
const ModalComponent = ({ search, setSearch }) => {
  const state = useContext(State);
  const [value, setValue] = useState("");

  const handleCancel = () => {
    state.setGlobalState((prev) => ({ ...prev, isModelOpen: false }));
    setValue("");
  };
  const onSearchSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    handleCancel();
  };

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
      </Modal>
    </>
  );
};
export default ModalComponent;
