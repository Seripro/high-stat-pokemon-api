import type { Pokemon } from "../../domain/Pokemon.js";

export interface PokemonPort {
  getPokemons(): Promise<Pokemon[]>;
}
