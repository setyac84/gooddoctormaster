import { useState , useEffect } from "react";
import pokemonStore from "../../../components/store/pokemonStore";
import axios from "axios";
import {Pokemon} from "../../../models/pokemon";

export default function Test() {

  const [name, setName] = useState("");
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      console.log(response.data.name);
    } catch (error) {
      console.error(`error ${error}`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await pokemonStore.getPokemonFromApi({});
      console.log(pokemonStore.pokemonList);
      setPokemonList(pokemonStore.pokemonList);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      console.log(pokemonList[0]);
    }
  }, [pokemonList]);

  return (
    <>
     <input type="text" value={name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Load Pokemon Name</button>
    </>
  );
}
