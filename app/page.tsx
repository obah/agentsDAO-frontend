import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link href="/dashboard">Enter</Link>
    </div>
  );
}
