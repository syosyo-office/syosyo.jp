import Image from "next/image";
import Link from "next/link";

import { signIn } from "@/auth";
import styles from "./page.module.css";

export default function RegisterPage() {
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
          <Link href="/register/phone" className={styles.primaryButton}>
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

          <Link href="/register/email" className={styles.secondaryButton}>
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
            <button type="submit" className={styles.oauthButton}>
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
