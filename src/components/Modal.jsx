import React, { useContext, useState } from "react";
import { Modal } from "antd";
import { State } from "../Context/globalState";
const ModalComponent = () => {
  const state = useContext(State);
  const [search, setSearch] = useState("");

  const handleCancel = () => {
    state.setGlobalState((prev) => ({ ...prev, isModelOpen: false }));
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
