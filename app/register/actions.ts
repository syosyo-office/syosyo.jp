"use server";

import { hash } from "bcryptjs";
import { prisma } from "@/_lib/prisma";

export async function registerUser(formData: FormData) {
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    throw new Error("メールアドレスとパスワードを入力してください");
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("既に登録されています");
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  });
}