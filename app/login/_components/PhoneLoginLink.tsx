import type { ComponentProps } from "react";

import AuthLinkButton from "./AuthLinkButton";

type PhoneLoginLinkProps = {
  label?: string;
  href?: ComponentProps<typeof AuthLinkButton>["href"];
  className?: string;
};

export default function PhoneLoginLink({
  label = "電話番号でログイン",
  href = "/login/phone",
  className,
}: PhoneLoginLinkProps) {
  return (
    <AuthLinkButton href={href} className={className}>
      {label}
    </AuthLinkButton>
  );
}
