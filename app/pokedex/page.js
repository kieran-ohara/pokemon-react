import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function PokedexHome() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Welcome to the Pokedex!
        </h1>

        <p className={styles.description}>
          Select a Pokemon to see its details:
        </p>

        <div className={styles.grid}>
          <Link href="/pokedex/(pokemon)/pokemon/25" className={styles.card}>
            <h3>Pikachu &rarr;</h3>
            <p>View details for Pikachu (ID: 25)</p>
          </Link>

          <Link href="/pokedex/(pokemon)/pokemon/1" className={styles.card}>
            <h3>Bulbasaur &rarr;</h3>
            <p>View details for Bulbasaur (ID: 1)</p>
          </Link>

          <Link href="/pokedex/(pokemon)/pokemon/4" className={styles.card}>
            <h3>Charmander &rarr;</h3>
            <p>View details for Charmander (ID: 4)</p>
          </Link>

          <Link href="/pokedex/(pokemon)/pokemon/7" className={styles.card}>
            <h3>Squirtle &rarr;</h3>
            <p>View details for Squirtle (ID: 7)</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
