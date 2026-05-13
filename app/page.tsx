import styles from "./page.module.css";
import Header from "./_components/Header";
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <span className={styles.subtitle}>私の物語へ</span>
        <h1 className={styles.title}>しょしょへようこそ</h1>

      </main>
    </div>
  );
}
