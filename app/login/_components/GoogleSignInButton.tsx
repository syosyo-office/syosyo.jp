import { signIn } from "@/auth";

import {
  defaultLoginRedirectPath,
  type OAuthProviderId,
} from "./authProvider";
import styles from "./authButton.module.css";

type GoogleSignInButtonProps = {
  label?: string;
  redirectTo?: string;
  className?: string;
};

export default function GoogleSignInButton({
  label = "Googleでログイン",
  redirectTo = defaultLoginRedirectPath,
  className,
}: GoogleSignInButtonProps) {
  const provider: OAuthProviderId = "google";
  const buttonClassName = [styles.button, styles.filled, className]
    .filter(Boolean)
    .join(" ");

  return (
    <form
      action={async () => {
        "use server";
        await signIn(
          provider,
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
