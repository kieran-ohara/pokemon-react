import { useState, useEffect } from 'react';

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
      <img src={pokemon.image} alt={pokemon.name} />
      <p>Number: {pokemon.number}</p>
      <p>Type(s): {pokemon.types}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
    const pokemon = await fetchPokemon(id);
    return { props: { pokemon } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}
