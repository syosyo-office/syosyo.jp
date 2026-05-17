import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";

import LoginButton from "../LoginButton";
import RegisterButton from "../RegisterButton";
import styles from "./index.module.css";

export default async function Header() {
  const session = await auth();
  const user = session?.user;

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
        {user ? (
          <>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="お知らせ"
            >
              <span className={styles.notificationIcon}>
                <Image
                  src="/notification.svg"
                  alt=""
                  width={44}
                  height={44}
                  className={styles.searchImage}
                  aria-hidden="true"
                />
                <span className={styles.notificationDot} />
              </span>
            </button>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="サイト検索"
            >
              <Image
                src="/search.svg"
                alt=""
                width={44}
                height={44}
                className={styles.searchImage}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className={styles.iconButton}
              aria-label="本棚"
            >
              <Image
                src="/booklist.svg"
                alt=""
                width={44}
                height={44}
                className={styles.searchImage}
                aria-hidden="true"
              />
            </button>
            <Link href="/mypage" className={styles.profileLink} aria-label="マイページ">
              {user.image ? (
                <Image
                  src={user.image}
                  alt="プロフィール画像"
                  width={72}
                  height={72}
                  className={styles.profileImage}
                />
              ) : (
                <span className={styles.profileFallback}>
                  {user.name?.slice(0, 1) ?? "M"}
                </span>
              )}
            </Link>
          </>
        ) : (
          <>
            <LoginButton className={styles.loginButton} />
            <RegisterButton className={styles.registerButton} />
            <button
              type="button"
              className={styles.iconButton}
              aria-label="サイト検索"
            >
              <Image
                src="/search.svg"
                alt=""
                width={44}
                height={44}
                className={styles.searchImage}
                aria-hidden="true"
              />
            </button>
          </>
        )}
      </div>
    </header>
  );
}
