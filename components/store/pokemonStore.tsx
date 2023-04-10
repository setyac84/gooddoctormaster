import axios from "axios";

import { Pokemon } from "../../models/pokemon";

class PokemonStore {
  pokemonList: Pokemon[] = [];

  getPokemonFromApi = async (data: any) => {
    try {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon";
      let pokemonListFromApi = await axios.get(apiUrl);
      this.pokemonList = pokemonListFromApi.data;
      console.log(data);
    } catch (error) {
      console.error(`error ${error}`);
    }
  };

  addPokemonToApi = async (pokemon: Pokemon) => {
    try {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon";
      await axios.post(apiUrl, pokemon);
      console.log("Pokemon added successfully.");
    } catch (error) {
      console.error(`error ${error}`);
    }
  };
}

const pokemonStore = new PokemonStore();
export default pokemonStore;
