import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link href={'/users'}>Usuários</Link>
        <Link href={'/posts'}>Postagens</Link>
        <Link href={'/products'}>Produtos</Link>
      </nav>
    </div>
  );
}
