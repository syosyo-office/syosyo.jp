import NextAuth from "next-auth";
import authConfig from "@/auth.config";

// 未ログインユーザーを /login に飛ばす
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/mypage/:path*", "/post/:path*", "/settings/:path*"],
};
