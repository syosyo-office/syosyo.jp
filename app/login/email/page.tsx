import Link from "next/link";

import wideButtonStyles from "@/app/_components/wideButton.module.css";
import { loginWithEmail } from "./actions";
import styles from "./page.module.css";

const errorMessages = {
  missing: "メールアドレスとパスワードを入力してください。",
  invalid: "メールアドレスまたはパスワードが正しくありません。",
} as const;

function resolveErrorMessage(error: string | string[] | undefined) {
  if (typeof error !== "string") {
    return null;
  }

  return errorMessages[error as keyof typeof errorMessages] ?? null;
}

export default async function EmailLoginPage(
  props: PageProps<"/login/email">
) {
  const { error } = await props.searchParams;
  const errorMessage = resolveErrorMessage(error);
  const inputClassName = [styles.input, wideButtonStyles.wideButton]
    .filter(Boolean)
    .join(" ");
  const submitButtonClassName = [styles.submitButton, wideButtonStyles.wideButton]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.stack}>
      <p className={styles.eyebrow}>Email login</p>
      <h1 className={styles.title}>メールアドレスでログイン</h1>
      <p className={styles.lead}>
        新規登録で使ったメールアドレスとパスワードを入力してください。
      </p>

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      <form action={loginWithEmail} className={styles.form}>
        <input
          className={inputClassName}
          type="email"
          name="email"
          placeholder="メールアドレス"
          required
        />

        <input
          className={inputClassName}
          type="password"
          name="password"
          placeholder="パスワード"
          required
        />

        <button type="submit" className={submitButtonClassName}>
          ログインする
        </button>
      </form>

      <p className={styles.footer}>
        <Link href="/login" className={styles.backLink}>
          ログイン方法に戻る
        </Link>
      </p>
    </div>
  );
}
