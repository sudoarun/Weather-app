import { createContext, useContext, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import { State } from "./Context/globalState";

function App() {
  const [globalState, setGlobalState] = useState({
    isModelOpen: false,
    location: "",
  });

  return (
    <State.Provider value={{ globalState, setGlobalState }}>
      <Home />
    </State.Provider>
  );
}

export default App;
