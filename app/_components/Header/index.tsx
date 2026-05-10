import Image from "next/image";
import LoginButton from "../LoginButton";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Image
          src="/logo.svg"
          alt="ロゴ"
          width={1600}
          height={1600}
          className={styles.logo}
        />
        <span className={styles.title}>しょしょ</span>
      </div>
      <LoginButton />
    </header>
  );
}
