import Link from "next/link";

import styles from "./page.module.css";

export default function AuthorRegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>For authors</p>
        <h1 className={styles.title}>作家向け登録</h1>
        <p className={styles.lead}>
          作家向け導線はまだ準備中です。実装時はここから専用の登録フローへ接続します。
        </p>

        <p className={styles.footer}>
          <Link href="/register" className={styles.backLink}>
            会員登録に戻る
          </Link>
        </p>
      </div>
    </main>
  );
}
