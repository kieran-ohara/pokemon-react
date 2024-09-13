import Link from 'next/link';

export default function PokedexLayout({ children }) {
  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link href="/pokedex" style={{ marginRight: '10px' }}>Pokedex Home</Link>
        <Link href="/pokedex/pokemon/25" style={{ marginRight: '10px' }}>Pikachu</Link>
        <Link href="/pokedex/pokemon/1" style={{ marginRight: '10px' }}>Bulbasaur</Link>
        <Link href="/pokedex/pokemon/4" style={{ marginRight: '10px' }}>Charmander</Link>
        <Link href="/pokedex/pokemon/7">Squirtle</Link>
      </nav>
      {children}
    </div>
  );
}
