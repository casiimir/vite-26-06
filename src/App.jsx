import { useState } from "react";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Pokedex from "./components/Pokedex";
import "./App.css";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Prize from "./components/Prize";
import Magic from "./components/Magic";
import Dino from "./components/Dino";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Pokedex />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Magic />
      <Toggle />
      <h1>Ciao Belli</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count - 0.23)}>
          count is {count}
        </button>
      </div>
      <Dino />
      <Prize />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
