"use client";

import { useId, useState } from "react";

type PasswordFieldProps = {
  className?: string;
  inputClassName?: string;
  toggleClassName?: string;
};

export default function PasswordField({
  className,
  inputClassName,
  toggleClassName,
}: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);
  const inputId = useId();

  return (
    <div className={className}>
      <input
        id={inputId}
        className={inputClassName}
        type={isVisible ? "text" : "password"}
        name="password"
        placeholder="8文字以上の半角英数記号"
        autoComplete="current-password"
        required
      />

      <button
        type="button"
        className={toggleClassName}
        aria-controls={inputId}
        aria-label={isVisible ? "パスワードを隠す" : "パスワードを表示する"}
        onClick={() => {
          setIsVisible((current) => !current);
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12C4.6 7.8 8 5.7 12 5.7C16 5.7 19.4 7.8 22 12C19.4 16.2 16 18.3 12 18.3C8 18.3 4.6 16.2 2 12Z" />
          <path d="M12 9.4C10.5 9.4 9.3 10.6 9.3 12C9.3 13.4 10.5 14.6 12 14.6C13.4 14.6 14.6 13.4 14.6 12C14.6 10.6 13.4 9.4 12 9.4Z" />
          {!isVisible && <path d="M3 3L21 21" />}
        </svg>
      </button>
    </div>
  );
}
