import { expect, test } from "vitest";
import { isHighStat } from "../domain/Pokemon.js";

test("種族値の合計が600以上ならハイスタッツと判定される", () => {
  const pokemon = {
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
  };
  expect(isHighStat(pokemon)).toBe(true);
});

test("種族値の合計が600未満ならハイスタッツでないと判定される", () => {
  const pokemon = {
    id: 1,
    name: "poke",
    stats: {
      hp: 50,
      attack: 100,
      defense: 100,
      special_attack: 100,
      special_defense: 100,
      speed: 100,
    },
  };
  expect(isHighStat(pokemon)).toBe(false);
});
