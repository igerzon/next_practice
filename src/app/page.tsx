import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1>Welcome to home page!!</h1>
      <Link href="/login">
      <button>Log out</button>
      </Link>
    </main>
  );
}