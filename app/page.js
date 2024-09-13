import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>
          Welcome to the Pokemon App!
        </h1>

        <p className={styles.description}>
          Enter a Pokemon ID to see its details:
        </p>

        <div className={styles.grid}>
          <Link href="/pokemon/25" className={styles.card}>
            <h3>Pikachu &rarr;</h3>
            <p>View details for Pikachu (ID: 25)</p>
          </Link>

          <Link href="/pokemon/1" className={styles.card}>
            <h3>Bulbasaur &rarr;</h3>
            <p>View details for Bulbasaur (ID: 1)</p>
          </Link>

          <Link href="/pokemon/4" className={styles.card}>
            <h3>Charmander &rarr;</h3>
            <p>View details for Charmander (ID: 4)</p>
          </Link>

          <Link href="/pokemon/7" className={styles.card}>
            <h3>Squirtle &rarr;</h3>
            <p>View details for Squirtle (ID: 7)</p>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
