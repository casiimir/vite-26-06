import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Prize from "./components/Prize";
import Magic from "./components/Magic";
import Dino from "./components/Dino";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
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
      <Dino />
      <Prize />
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
