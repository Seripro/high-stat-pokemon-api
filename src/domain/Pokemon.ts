export type Pokemon = {
  id: number;
  name: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
  };
};

export function isHighStat(pokemon: Pokemon): boolean {
  const totalStat =
    pokemon.stats.hp +
    pokemon.stats.attack +
    pokemon.stats.defense +
    pokemon.stats.special_attack +
    pokemon.stats.special_defense +
    pokemon.stats.speed;
  return totalStat >= 600;
}
