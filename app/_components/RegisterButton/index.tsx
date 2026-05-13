import Link from "next/link";
import styles from "./index.module.css";

type RegisterButtonProps = {
  label?: string;
  className?: string;
};

export default function RegisterButton({
  label = "会員登録",
  className,
}: RegisterButtonProps) {
  const linkClassName = [styles.button, className].filter(Boolean).join(" ");

  return (
    <Link href="/register" className={linkClassName}>
      {label}
    </Link>
  );
}
