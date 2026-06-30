import type { Pokemon } from "../domain/Pokemon.js";
import type { PokemonDriver } from "../driver/pokemonDriver.js";
import type { PokemonPort } from "../usecase/port/PokemonPort.js";

export class PokemonGateway implements PokemonPort {
  constructor(private readonly driver: PokemonDriver) {}

  async getPokemons(): Promise<Pokemon[]> {
    const pokemons = await this.driver.getPokemons();
    return pokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      stats: {
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        special_attack: pokemon.stats[3].base_stat,
        special_defense: pokemon.stats[4].base_stat,
        speed: pokemon.stats[5].base_stat,
      },
    }));
  }
}
