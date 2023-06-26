import "./index.css";
import { useState } from "react";

const Dino = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div
      className={isActive ? "dino dino__active" : "dino"}
      onClick={handleToggle}
    >
      🦖
    </div>
  );
};
export default Dino;
