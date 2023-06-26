import { useState } from "react";
<<<<<<< HEAD

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Pokedex from "./components/Pokedex";
=======
import "./App.css";
import Navbar from "./components/Navbar";
>>>>>>> 8cbc7b35608f9ce52661b3d4add0e12a80590c2c
import Toggle from "./components/Toggle";
import Prize from "./components/Prize";
import Magic from "./components/Magic";
import Dino from "./components/Dino";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pokedex />

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
<<<<<<< HEAD

      <Toggle />

      <h1>Vite + React</h1>

=======
      <Magic />
      <Toggle />
      <h1>Ciao Belli</h1>
>>>>>>> 8cbc7b35608f9ce52661b3d4add0e12a80590c2c
      <div className="card">
<<<<<<< HEAD
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
=======
        <button onClick={() => setCount((count) => count - 0.23)}>
          count is {count}
        </button>
>>>>>>> fac8d8151cf1b7c33e2414b3a59b8d4f019f712a
      </div>
<<<<<<< HEAD

      <Prize />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
      <Dino />
      <Prize />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
>>>>>>> 8cbc7b35608f9ce52661b3d4add0e12a80590c2c
    </>
  );
}

export default App;
