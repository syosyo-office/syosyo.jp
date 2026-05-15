import EmailLoginLink from "./_components/EmailLoginLink";
import GoogleSignInButton from "./_components/GoogleSignInButton";
import AppleLoginLink from "./_components/AppleLoginLink";
import PhoneLoginLink from "./_components/PhoneLoginLink";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <div className={styles.stack}>
      <p className={styles.eyebrow}>Sign in</p>
      <h1 className={styles.title}>ログイン</h1>
      <p className={styles.lead}>
        Google アカウントですぐに続けるか、登録済みのメールアドレスとパスワードでログインできます。電話番号認証と Apple
        ログインの導線も先に用意しています。
      </p>

      <div className={styles.buttonGroup}>
        <GoogleSignInButton />
        <EmailLoginLink />
        <PhoneLoginLink />
        <AppleLoginLink />
      </div>
    </div>
  );
}
