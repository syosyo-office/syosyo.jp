import type { ReactNode } from "react";

import styles from "./loginLayout.module.css";

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className={styles.shell}>
      <main className={styles.card}>{children}</main>
    </div>
  );
}
