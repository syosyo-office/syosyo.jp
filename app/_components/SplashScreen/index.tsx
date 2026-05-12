"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./style.module.css";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFadeOut(true);
    }, 1800);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.splash} ${isFadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.inner}>
        <Image
          src="/logo.svg"
          alt="しょしょ"
          width={140}
          height={140}
          priority
          className={styles.logo}
        />
        <p className={styles.text}>しょしょへようこそ</p>
      </div>
    </div>
  );
}