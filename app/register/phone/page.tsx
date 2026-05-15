import Link from "next/link";

import styles from "./page.module.css";

export default function PhoneRegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Phone sign up</p>
        <h1 className={styles.title}>電話番号で会員登録</h1>
        <p className={styles.lead}>
          会員登録時の電話番号認証導線を先に用意しています。実装時はSMS認証後にプロフィール入力へ進ませる想定です。
        </p>

        <div className={styles.panel}>
          <h2 className={styles.panelTitle}>大枠の流れ</h2>
          <ol className={styles.steps}>
            <li>電話番号を入力して認証コード送信</li>
            <li>SMSコード確認後にアカウント仮作成</li>
            <li>表示名などの初期情報を入力して登録完了</li>
          </ol>
        </div>

        <p className={styles.actions}>
          <Link href="/register" className={styles.backLink}>
            会員登録画面に戻る
          </Link>
        </p>
      </div>
    </main>
  );
}
