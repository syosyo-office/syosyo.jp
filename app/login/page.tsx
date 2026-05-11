import EmailLoginLink from "./_components/EmailLoginLink";
import GoogleSignInButton from "./_components/GoogleSignInButton";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.stack}>
      <p className={styles.eyebrow}>Sign in</p>
      <h1 className={styles.title}>ログイン</h1>
      <p className={styles.lead}>
        Google アカウントですぐに続けるか、登録済みのメールアドレスとパスワードでログインできます。
      </p>

      <div className={styles.buttonGroup}>
        <GoogleSignInButton />
        <EmailLoginLink />
      </div>
    </div>
  );
}
