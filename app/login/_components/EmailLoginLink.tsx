import Link from "next/link";

import styles from "./authButton.module.css";

type EmailLoginLinkProps = {
  label?: string;
  href?: string;
  className?: string;
};

export default function EmailLoginLink({
  label = "メールアドレスでログイン",
  href = "/login/email",
  className,
}: EmailLoginLinkProps) {
  const linkClassName = [styles.button, styles.outlined, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link href={href} className={linkClassName}>
      {label}
    </Link>
  );
}
