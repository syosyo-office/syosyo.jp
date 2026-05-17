"use client";

import { useState } from "react";

import wideButtonStyles from "@/app/_components/wideButton.module.css";
import type { loginWithCredentials } from "@/app/login/actions";

import PasswordField from "./PasswordField";
import styles from "../page.module.css";

type LoginFormProps = {
  action: typeof loginWithCredentials;
  errorMessage: string | null;
};

export default function LoginForm({ action, errorMessage }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isReadyToSubmit = email.trim().length > 0 && password.length >= 8;
  const inputClassName = [styles.input, wideButtonStyles.wideButton].filter(Boolean).join(" ");
  const passwordInputClassName = [styles.passwordInput, wideButtonStyles.wideButton]
    .filter(Boolean)
    .join(" ");
  const submitButtonClassName = [
    styles.submitButton,
    isReadyToSubmit ? styles.submitButtonEnabled : "",
    wideButtonStyles.wideButton,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <form action={action} className={styles.form}>
      <input
        className={inputClassName}
        type="email"
        name="email"
        placeholder="mail@example.com"
        autoComplete="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        required
      />

      <PasswordField
        className={styles.passwordField}
        inputClassName={passwordInputClassName}
        toggleClassName={styles.passwordToggle}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      {errorMessage && <p className={styles.error}>{errorMessage}</p>}

      <div className={styles.helpLinks} aria-label="ログインサポート">
        <span className={styles.helpText}>パスワードを忘れた方</span>
        <span className={styles.helpDivider}>/</span>
        <span className={styles.helpText}>ログインでお困りの方</span>
      </div>

      <button type="submit" className={submitButtonClassName}>
        ログイン
      </button>
    </form>
  );
}
