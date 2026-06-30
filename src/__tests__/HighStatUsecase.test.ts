import { expect, test } from "vitest";
import type { PokemonPort } from "../usecase/port/PokemonPort.js";
import { HighStatUseCase } from "../usecase/HighStatUsecase.js";

test("種族値の合計が600以上のポケモンがハイスタッツポケモンとして返る", async () => {
  const mockUserPort: PokemonPort = {
    getPokemons: async () => [
      {
        id: 1,
        name: "poke",
        stats: {
          hp: 100,
          attack: 100,
          defense: 100,
          special_attack: 100,
          special_defense: 100,
          speed: 100,
        },
      },
      {
        id: 1,
        name: "poke2",
        stats: {
          hp: 50,
          attack: 100,
          defense: 100,
          special_attack: 100,
          special_defense: 100,
          speed: 100,
        },
      },
    ],
  };

  const useCase = new HighStatUseCase(mockUserPort);

  const expected = [
    {
      id: 1,
      name: "poke",
      total_stat: 600,
    },
  ];

  const actual = await useCase.execute();
  expect(actual).toEqual(expected);
});
