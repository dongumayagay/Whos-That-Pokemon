import { get } from "svelte/store";
import { pokemonNames } from "./pokemonNames.json";
import {
  pokemon_id,
  hidePokemon,
  pokemon,
  selectedGenerations,
  maxPokemonPerGeneration,
  totalPokemon,
  choices,
} from "./store";

export function getRandomPokemon() {
  hidePokemon.set(true);
  const random_id = get(pokemon_id);
  const names = getNames(random_id);
  pokemon.set({ id: random_id, name: names[0] });
  choices.set(shuffleChoices(names));
}

function getName(id) {
  return pokemonNames[id - 1];
}

function selectRandomGeneration() {
  const items = get(selectedGenerations);
  if (items.length === 0) selectedGenerations.set([1]);
  const item = items[Math.floor(Math.random() * items.length)];
  return item - 1;
}

export function selectRandomPokemonIdFromGen() {
  const random_generation = selectRandomGeneration();
  const max_id = maxPokemonPerGeneration[random_generation];
  const ran_id_in_generation = Math.floor(Math.random() * max_id) + 1;
  const id = ran_id_in_generation + getOffset(random_generation);
  pokemon_id.set(id);
}
function getRandomPokmeonId() {
  return Math.floor(Math.random() * totalPokemon) + 1;
}
function getOffset(index) {
  let offset = 0;
  for (let i = 0; i < index; i += 1) {
    offset += maxPokemonPerGeneration[i];
  }
  return offset;
}

function getNames(id) {
  let choice_id = [id, getRandomPokmeonId(), getRandomPokmeonId()];
  // return await Promise.all(choice_id.map(async (id) => await getName(id)));
  return choice_id.map((temp_id) => getName(temp_id));
}

function shuffleChoices(names) {
  return names.sort((a, b) => 0.5 - Math.random());
}
