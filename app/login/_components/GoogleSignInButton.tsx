import { signIn } from "@/auth";

import styles from "./authButton.module.css";

type GoogleSignInButtonProps = {
  label?: string;
  redirectTo?: string;
  className?: string;
};

export default function GoogleSignInButton({
  label = "Googleでログイン",
  redirectTo = "/mypage",
  className,
}: GoogleSignInButtonProps) {
  const buttonClassName = [styles.button, styles.filled, className]
    .filter(Boolean)
    .join(" ");

  return (
    <form
      action={async () => {
        "use server";
        await signIn(
          "google",
          {
            redirectTo,
          },
          {
            prompt: "select_account",
          }
        );
      }}
    >
      <button type="submit" className={buttonClassName}>
        {label}
      </button>
    </form>
  );
}
