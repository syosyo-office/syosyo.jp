import Link from "next/link";
import styles from "./index.module.css";

type LoginButtonProps = {
  label?: string;
  className?: string;
};

export default function LoginButton({
  label = "ログイン",
  className,
}: LoginButtonProps) {
  const linkClassName = [styles.button, className].filter(Boolean).join(" ");

  return (
    <Link href="/login" className={linkClassName}>
      {label}
    </Link>
  );
}
