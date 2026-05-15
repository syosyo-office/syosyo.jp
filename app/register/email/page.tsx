import Link from "next/link";

import { registerUser } from "../actions";
import styles from "./page.module.css";

export default function EmailRegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>Email sign up</p>
        <h1 className={styles.title}>メールで会員登録</h1>
        <p className={styles.lead}>
          メールアドレスとパスワードを使ってアカウントを作成します。
        </p>

        <form action={registerUser} className={styles.form}>
          <label className={styles.field}>
            <span className={styles.label}>名前</span>
            <input
              type="text"
              name="name"
              placeholder="しょしょ 太郎"
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>メールアドレス</span>
            <input
              type="email"
              name="email"
              placeholder="name@example.com"
              required
              className={styles.input}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>パスワード</span>
            <input
              type="password"
              name="password"
              placeholder="8文字以上を推奨"
              required
              className={styles.input}
            />
          </label>

          <button type="submit" className={styles.submitButton}>
            登録する
          </button>
        </form>

        <p className={styles.footer}>
          <Link href="/register" className={styles.backLink}>
            会員登録方法に戻る
          </Link>
        </p>
      </div>
    </main>
  );
}
