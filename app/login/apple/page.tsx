import Link from "next/link";

import styles from "./page.module.css";

export default function AppleLoginPage() {
  return (
    <div className={styles.stack}>
      <p className={styles.eyebrow}>Apple login</p>
      <h1 className={styles.title}>Appleでログイン</h1>
      <p className={styles.lead}>
        Appleアカウントでのログインは準備中です。実装時はこの画面から認証フローへ接続します。
      </p>

      <p className={styles.note}>
        現時点では Apple Developer Program の登録後に、NextAuth の Apple
        Provider と環境変数を追加する想定です。
      </p>

      <p className={styles.footer}>
        <Link href="/login" className={styles.backLink}>
          ログイン方法に戻る
        </Link>
      </p>
    </div>
  );
}
