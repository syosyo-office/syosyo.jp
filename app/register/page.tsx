import { registerUser } from "./actions";

export default function RegisterPage() {
  return (
    <main>
      <h1>新規登録</h1>

      <form action={registerUser}>
        <input
          type="text"
          name="name"
          placeholder="名前"
        />

        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="パスワード"
          required
        />

        <button type="submit">
          登録する
        </button>
      </form>
    </main>
  );
}