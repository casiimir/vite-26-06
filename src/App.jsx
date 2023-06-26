import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Prize from "./components/Prize";
import ClickMe from "./components/ClickMe";
import Dino from "./components/Dino/Dino";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
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
