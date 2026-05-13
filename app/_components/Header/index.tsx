import Image from "next/image";
import LoginButton from "../LoginButton";
import RegisterButton from "../RegisterButton";
import styles from "./index.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src="/logo.svg"
            alt="ロゴ"
            width={1600}
            height={1600}
            className={styles.logo}
          />
        </Link>
        <Link href="/" className={styles.titleLink}>
          <span className={styles.title}>しょしょ</span>
        </Link>
      </div>
      <div className={styles.actions}>
        <LoginButton className={styles.loginButton} />
        <RegisterButton className={styles.registerButton} />
        <button type="button" className={styles.searchButton} aria-label="サイト検索">
          <Image
            src="/search.svg"
            alt=""
            width={44}
            height={44}
            className={styles.searchImage}
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
}
