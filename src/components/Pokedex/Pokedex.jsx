import { useState, useEffect } from "react";
import "./index.css";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState([]);
  let randomNum = Math.floor(Math.random() * 500);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }, []);

  return (
    <div className="Pokedex">
      <h2>{pokemon.name}</h2>
      <img
        src={pokemon?.sprites?.front_default}
        alt="pokemon image"
        className="Pokemon__Image"
      />
    </div>
  );
};

export default Pokedex;
