import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <main>
      <h1>ログイン</h1>

      <form
        action={async () => {
          "use server";
          await signIn(
            "google",
            {
              redirectTo: "/mypage",
            },
            {
              prompt: "select_account",
            }
          );
        }}
      >
        <button type="submit">Googleでログイン</button>
      </form>
    </main>
  );
}
