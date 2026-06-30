type PokemonJson = {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
  }[];
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
};

export class PokemonDriver {
  async getPokemons(): Promise<PokemonJson[]> {
    const pokemons = [];
    for (let id = 1; id <= 151; id++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = await res.json();
      pokemons.push(pokemon);
    }
    return pokemons;
  }
}
