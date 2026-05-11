"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

import { signIn } from "@/auth";

export async function loginWithEmail(formData: FormData) {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    redirect("/login/email?error=missing");
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/mypage",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      redirect("/login/email?error=invalid");
    }

    throw error;
  }
}
