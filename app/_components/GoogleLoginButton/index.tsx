import { signIn } from "@/auth";
import styles from "./index.module.css";

type GoogleLoginButtonProps = {
  label?: string;
  redirectTo?: string;
  className?: string;
};

export default function GoogleLoginButton({
  label = "Googleでログイン",
  redirectTo = "/mypage",
  className,
}: GoogleLoginButtonProps) {
  const buttonClassName = [styles.button, className].filter(Boolean).join(" ");

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
