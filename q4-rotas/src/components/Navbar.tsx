import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#333", display: "flex", gap: "20px" }}>
      <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Home</Link>
      <Link href="/sobre" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Sobre</Link>
      <Link href="/produtos" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>Produtos</Link>
    </nav>
  );
}