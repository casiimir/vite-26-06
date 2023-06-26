import "./index.css";

const Prize = () => {
  const onHandleClick = () => alert("Ahah fregato");

  return (
    <div className="Prize">
      <p>CONGRATULAZIONI HAI VINTO UN IPHONE XX</p>
      <p>
        CLICCA{" "}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          onClick={onHandleClick}
        >
          QUI
        </a>{" "}
        PER RITIRARE IL TUO MAGNIFICO PREMIO
      </p>
    </div>
  );
};

export default Prize;
