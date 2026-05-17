import Image from "next/image";
import Link from "next/link";

import wideButtonStyles from "@/app/_components/wideButton.module.css";
import PasswordField from "./_components/PasswordField";
import { loginWithCredentials, loginWithGoogle } from "./actions";
import styles from "./page.module.css";

const errorMessages = {
  missing: "メールアドレスとパスワードを入力してください。",
  invalid: "メールアドレスまたはパスワードが正しくありません。",
} as const;

function resolveErrorMessage(error: string | string[] | undefined) {
  if (typeof error !== "string") {
    return null;
  }

  return errorMessages[error as keyof typeof errorMessages] ?? null;
}

export default async function LoginPage(props: PageProps<"/login">) {
  const { error } = await props.searchParams;
  const errorMessage = resolveErrorMessage(error);
  const inputClassName = [styles.input, wideButtonStyles.wideButton]
    .filter(Boolean)
    .join(" ");
  const passwordInputClassName = [styles.passwordInput, wideButtonStyles.wideButton]
    .filter(Boolean)
    .join(" ");
  const submitButtonClassName = [styles.submitButton, wideButtonStyles.wideButton]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={styles.page}>
      <div className={styles.main}>
        <h1 className={styles.title}>ログイン</h1>

        <div className={styles.socialActions}>
          <Link href="/login/phone" className={styles.phoneButton} aria-label="電話番号でログイン">
            <Image
              src="/phone-icon.svg"
              alt=""
              width={24}
              height={24}
              className={styles.phoneIcon}
              aria-hidden="true"
            />
          </Link>

          <form action={loginWithGoogle} className={styles.googleForm}>
            <button type="submit" className={styles.googleButton} aria-label="Googleでログイン">
              <Image
                src="/google-icon.svg"
                alt=""
                width={28}
                height={28}
                className={styles.googleIcon}
                aria-hidden="true"
              />
            </button>
          </form>
        </div>

        <form action={loginWithCredentials} className={styles.form}>
          <input
            className={inputClassName}
            type="email"
            name="email"
            placeholder="mail@example.com"
            autoComplete="email"
            required
          />

          <PasswordField
            className={styles.passwordField}
            inputClassName={passwordInputClassName}
            toggleClassName={styles.passwordToggle}
          />

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}

          <div className={styles.helpLinks} aria-label="ログインサポート">
            <span className={styles.helpText}>パスワードを忘れた方</span>
            <span className={styles.helpDivider}>/</span>
            <span className={styles.helpText}>ログインでお困りの方</span>
          </div>

          <button type="submit" className={submitButtonClassName}>
            ログイン
          </button>
        </form>

        <div className={styles.divider} aria-hidden="true" />

        <footer className={styles.footer}>
          <Link href="/register" className={styles.registerLink}>
            会員登録はこちら
          </Link>
        </footer>
      </div>
    </main>
  );
}
