"use client";
import { useState, useEffect } from "react";
import Container from "../../components/Container";
import ProdutoCard from "../../components/ProdutoCard";

interface Produto { id: number; nome: string; preco: string; }

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/produtos.json?v=${new Date().getTime()}`)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao carregar produtos");
        return res.json();
      })
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container titulo="Lista de Produtos Disponíveis">
      {loading && <p>Carregando inventário...</p>}
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      {!loading && !error && produtos.map(p => (
        <ProdutoCard key={p.id} id={p.id} nome={p.nome} preco={p.preco} />
      ))}
    </Container>
  );
}