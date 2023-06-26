import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Prize from "./components/Prize";

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
      <Prize />
    </>
  );
}

export default App;
