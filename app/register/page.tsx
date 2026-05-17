import Image from "next/image";
import Link from "next/link";

import { signIn } from "@/auth";
import wideButtonStyles from "@/app/_components/wideButton.module.css";
import styles from "./page.module.css";

export default function RegisterPage() {
  const primaryButtonClassName = [
    styles.primaryButton, 
    wideButtonStyles.wideButton
  ]
    .filter(Boolean)
    .join(" ");
  const secondaryButtonClassName = [
    styles.secondaryButton,
    wideButtonStyles.wideButton,
  ]
    .filter(Boolean)
    .join(" ");
  const oauthButtonClassName = [
    styles.oauthButton, 
    wideButtonStyles.wideButton
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main className={styles.page}>
      <div className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>会員登録</h1>
          <Link href="/register/author" className={styles.authorLink}>
            作家の方
          </Link>
        </header>

        <div className={styles.actions}>
          <Link href="/register/phone" className={primaryButtonClassName}>
            <span className={styles.iconWrap} aria-hidden="true">
              <Image
                src="/phone-icon.svg"
                alt=""
                width={40}
                height={40}
                className={styles.icon}
              />
            </span>
            <span>電話番号で登録</span>
          </Link>

          <Link href="/register/email" className={secondaryButtonClassName}>
            <span className={styles.iconWrap} aria-hidden="true">
              <Image
                src="/mail-icon.svg"
                alt=""
                width={40}
                height={40}
                className={styles.icon}
              />
            </span>
            <span>メールで登録</span>
          </Link>

          <form
            action={async () => {
              "use server";
              await signIn(
                "google",
                {
                  redirectTo: "/mypage",
                },
                {
                  prompt: "select_account",
                }
              );
            }}
            className={styles.googleButton}
          >
            <button type="submit" className={oauthButtonClassName}>
              <span className={styles.iconWrap} aria-hidden="true">
                <Image
                  src="/google-icon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.icon}
                />
              </span>
              <span>Googleで登録</span>
            </button>
          </form>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <footer className={styles.footer}>
          <Link href="/login" className={styles.loginLink}>
            ログインはこちら
          </Link>
        </footer>
      </div>
    </main>
  );
}
