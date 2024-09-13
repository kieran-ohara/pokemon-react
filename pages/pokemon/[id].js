import { useRouter } from 'next/router';
import Pokemon from '../../components/Pokemon';

export default function PokemonPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Pokemon Details</h1>
      {id && <Pokemon id={id} />}
    </div>
  );
}
