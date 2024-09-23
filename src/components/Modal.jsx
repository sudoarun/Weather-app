import React, { useContext } from "react";
import { Modal } from "antd";
import { State } from "../Context/globalState";
const ModalComponent = ({ search, setSearch }) => {
  const state = useContext(State);

  const handleCancel = () => {
    state.setGlobalState((prev) => ({ ...prev, isModelOpen: false }));
    setSearch("");
  };

  return (
    <>
      <Modal
        open={state.globalState.isModelOpen}
        footer={false}
        closeIcon={false}
        onCancel={handleCancel}
      >
        <input
          placeholder="Enter Location"
          value={search}
          className="w-full mt-3 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Modal>
    </>
  );
};
export default ModalComponent;
