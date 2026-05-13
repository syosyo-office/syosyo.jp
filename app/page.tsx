import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>読者と作家の秘密空間</p>
          <h1 className={styles.title}>しょしょへようこそ</h1>
          <div className={styles.searchRow}>
            <div className={styles.searchField}>
              <span className={styles.searchText}>書籍・作家名で検索</span>
            </div>
            <button type="button" className={styles.barcodeButton} aria-label="バーコード検索">
              <Image
                src="/barcode.svg"
                alt=""
                width={42}
                height={42}
                className={styles.iconImage}
                aria-hidden="true"
              />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
