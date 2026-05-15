import Link from "next/link";

import styles from "./page.module.css";

export default function PhoneLoginPage() {
  return (
    <div className={styles.stack}>
      <p className={styles.eyebrow}>Phone login</p>
      <h1 className={styles.title}>電話番号でログイン</h1>
      <p className={styles.lead}>
        電話番号認証は準備中です。実装時はこの画面からSMS認証コード送信と確認フローへ接続します。
      </p>

      <div className={styles.panel}>
        <h2 className={styles.panelTitle}>実装イメージ</h2>
        <ol className={styles.steps}>
          <li>電話番号を入力する</li>
          <li>SMSで6桁前後の認証コードを送信する</li>
          <li>認証コード確認後にログインを完了する</li>
        </ol>
      </div>

      <p className={styles.note}>
        実際の接続時は Firebase Authentication や Twilio Verify
        などのSMS送信基盤と、セッション作成処理の追加が必要です。
      </p>

      <p className={styles.footer}>
        <Link href="/login" className={styles.backLink}>
          ログイン方法に戻る
        </Link>
      </p>
    </div>
  );
}
