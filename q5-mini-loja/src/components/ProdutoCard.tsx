"use client";
import { useState } from "react";
import Link from "next/link";

interface ProdutoProps {
  id: number;
  nome: string;
  preco: string;
}

export default function ProdutoCard({ id, nome, preco }: ProdutoProps) {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "15px", borderRadius: "5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
        <h3 style={{ margin: "0 0 5px 0" }}>{nome}</h3>
        <p style={{ margin: 0, color: "green", fontWeight: "bold" }}>R$ {preco}</p>
        <Link href={`/produtos/${id}`} style={{ display: "inline-block", marginTop: "10px", fontSize: "0.9rem", color: "#0056b3" }}>
          Ver detalhes
        </Link>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setQuantidade(q => Math.max(0, q - 1))} style={{ padding: "5px 10px" }}>-</button>
        <span style={{ fontWeight: "bold", width: "20px", textAlign: "center" }}>{quantidade}</span>
        <button onClick={() => setQuantidade(q => q + 1)} style={{ padding: "5px 10px" }}>+</button>
      </div>
    </div>
  );
}