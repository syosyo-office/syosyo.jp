import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function MyPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  console.log(session.user);

  return (
    <main>
      <h1>マイページ</h1>

      <p>名前：{session.user.name}</p>
      <p>メール：{session.user.email}</p>

      {session.user.image && (
        <Image
          src={session.user.image}
          alt="ユーザーアイコン"
          width={80}
          height={80}
        />
      )}

      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: "/login" });
        }}
      >
        <button type="submit">ログアウト</button>
      </form>
    </main>
  );
}