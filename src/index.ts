import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { highStatUseCase } from "./container.js";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/high-stat", async (c) => {
  const highStatPokemons = await highStatUseCase.execute();
  return c.json(
    highStatPokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      total_stat: pokemon.total_stat,
    })),
  );
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
