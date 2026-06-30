import { PokemonDriver } from "./driver/pokemonDriver.js";
import { PokemonGateway } from "./gateway/pokemonGateway.js";
import { HighStatUseCase } from "./usecase/HighStatUsecase.js";

const driver = new PokemonDriver();
const pokemonGateway = new PokemonGateway(driver);
export const highStatUseCase = new HighStatUseCase(pokemonGateway);
