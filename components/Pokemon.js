import { use } from 'react';

async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return {
    name: data.name,
    number: data.id,
    types: data.types.map(type => type.type.name).join(', '),
    image: data.sprites.front_default
  };
}

export default function Pokemon({ id }) {
  const pokemon = use(fetchPokemon(id));

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Number: {pokemon.number}</p>
      <p>Type(s): {pokemon.types}</p>
    </div>
  );
}
