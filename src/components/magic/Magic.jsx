import { useState } from "react";
import "./Magic.css";

const Magic = () => {
  const [isModalOn, setIsModalOn] = useState(false);

  const onHandleClick = () => {
    setIsModalOn(true);
  };

  return (
    <>
      <button className="MagicButton" onClick={onHandleClick}>
        Magic button!
      </button>
      <div className={`${isModalOn ? "isModalOn" : ""} MagicModal`}>
        <div className="MagicModal--video">
          <img className="MagicModal--image" src="https://media.tenor.com/2roX3uxz_68AAAAC/cat-space.gif" alt="nyanCat" />
        </div>
      </div>
    </>
  );
};

export default Magic;
