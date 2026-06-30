import { isHighStat } from "../domain/Pokemon.js";
import type { PokemonPort } from "./port/PokemonPort.js";

type HighStatPokemonResult = {
  id: number;
  name: string;
  total_stat: number;
};

export class HighStatUseCase {
  constructor(private readonly pokemonPort: PokemonPort) {}

  async execute(): Promise<HighStatPokemonResult[]> {
    const pokemons = await this.pokemonPort.getPokemons();

    const highStatPokemons = pokemons.filter((pokemon) => isHighStat(pokemon));

    return highStatPokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      total_stat:
        pokemon.stats.hp +
        pokemon.stats.attack +
        pokemon.stats.defense +
        pokemon.stats.special_attack +
        pokemon.stats.special_defense +
        pokemon.stats.speed,
    }));
  }
}
