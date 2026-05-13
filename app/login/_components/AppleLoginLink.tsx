import type { ComponentProps } from "react";

import AuthLinkButton from "./AuthLinkButton";

type AppleLoginLinkProps = {
  label?: string;
  href?: ComponentProps<typeof AuthLinkButton>["href"];
  className?: string;
};

export default function AppleLoginLink({
  label = "Appleでログイン",
  href = "/login/apple",
  className,
}: AppleLoginLinkProps) {
  return (
    <AuthLinkButton href={href} className={className}>
      {label}
    </AuthLinkButton>
  );
}
