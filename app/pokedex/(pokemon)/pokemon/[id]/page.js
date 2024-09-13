import Pokemon from '../../../../../components/Pokemon';

export async function generateMetadata({ params }) {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`).then(res => res.json());
  return {
    title: `${pokemon.name} - Pokemon Details`,
    description: `View details for ${pokemon.name}, a ${pokemon.types.map(t => t.type.name).join('/')} type Pokemon.`
  };
}

export default function PokemonPage({ params }) {
  return (
    <div>
      <h1>Pokemon Details</h1>
      <Pokemon id={params.id} />
    </div>
  );
}
