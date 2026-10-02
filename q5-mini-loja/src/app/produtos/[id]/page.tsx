import Link from "next/link";

// Adicionamos 'async' e tipamos o params como uma Promise
export default async function ProdutoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  // Extraímos o ID aguardando a Promise ser resolvida
  const { id } = await params;

  return (
    <main style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Detalhes do Produto {id}</h1>
      <p>Página de descrição estendida para o produto de código <strong>{id}</strong>.</p>
      
      <div style={{ marginTop: "30px" }}>
        <Link href="/produtos" style={{ padding: "10px 15px", backgroundColor: "#0056b3", color: "white", textDecoration: "none", borderRadius: "5px" }}>
          Voltar à listagem completa
        </Link>
      </div>
    </main>
  );
}