import { useState, useEffect } from 'react';

async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return {
    name: data.name,
    number: data.id,
    types: data.types.map(type => type.type.name).join(', ')
  };
}

export default function Pokemon({ id }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(id)
      .then(setPokemon)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Number: {pokemon.number}</p>
      <p>Type(s): {pokemon.types}</p>
    </div>
  );
}
