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
          Click below to enter the Pokedex:
        </p>

        <div className={styles.grid}>
          <Link href="/pokedex" className={styles.card}>
            <h3>Enter Pokedex &rarr;</h3>
            <p>View the Pokedex with Pokemon details</p>
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
