import styles from './page.module.css';

export default function LandingPage() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Bienvenido a Edutech-Trial</h1>
        <p>Descubre las maravillas de aprender online.</p>
      </div>

      <div className={styles.buttons}>
        <a href="/login" className={styles.button}>
          Login
        </a>
       <a href="/register" className={styles.button}>Register</a>
      </div>
    </main>
  );
}
