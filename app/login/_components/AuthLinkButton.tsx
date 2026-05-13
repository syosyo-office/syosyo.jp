import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import styles from "./authButton.module.css";

type AuthLinkButtonProps = {
  children: ReactNode;
  className?: string;
  href: ComponentProps<typeof Link>["href"];
};

export default function AuthLinkButton({
  children,
  className,
  href,
}: AuthLinkButtonProps) {
  const linkClassName = [styles.button, styles.outlined, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}
