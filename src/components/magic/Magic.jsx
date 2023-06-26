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
          <iframe
            loading="lazy"
            src="https://www.youtube.com/embed/QH2-TGUlwu4"
            width="560"
            height="315"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Magic;
