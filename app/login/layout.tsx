import type { ReactNode } from "react";

import styles from "./loginLayout.module.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.shell}>
      <div className={styles.backgroundGlow} />
      <main className={styles.card}>{children}</main>
    </div>
  );
}
