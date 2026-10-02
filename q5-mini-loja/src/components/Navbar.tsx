import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#0056b3", display: "flex", gap: "20px" }}>
      <Link href="/" style={{ color: "white", textDecoration: "none" }}>Início</Link>
      <Link href="/sobre" style={{ color: "white", textDecoration: "none" }}>Sobre</Link>
      <Link href="/produtos" style={{ color: "white", textDecoration: "none" }}>Produtos</Link>
    </nav>
  );
}