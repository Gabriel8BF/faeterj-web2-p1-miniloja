import Link from "next/link";

export default function Produtos() {
  return (
    <main>
      <h1>Nossos Produtos</h1>
      <p>Lista de produtos disponíveis:</p>
      <ul>
        <li><Link href="/produtos/101">Ver Produto 101</Link></li>
        <li><Link href="/produtos/102">Ver Produto 102</Link></li>
      </ul>
    </main>
  );
}