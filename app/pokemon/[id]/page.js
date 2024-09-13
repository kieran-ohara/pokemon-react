import Pokemon from '../../../components/Pokemon';

export default function PokemonPage({ params }) {
  return (
    <div>
      <h1>Pokemon Details</h1>
      <Pokemon id={params.id} />
    </div>
  );
}
