import Link from "next/link";

export default async function ProdutoDetalhe({ params }: { params: Promise<{ id: string }> }) {
  // Aguarda a Promise do params ser resolvida (Requisito do Next.js 15)
  const { id } = await params;

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Texto exato exigido pelo enunciado */}
      <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        Exibindo detalhes do produto número: {id}
      </p>
      
      <div style={{ marginTop: "20px" }}>
        {/* Botão com o texto exato exigido pelo enunciado */}
        <Link 
          href="/produtos" 
          style={{ padding: "10px 15px", backgroundColor: "#007bff", color: "white", textDecoration: "none", borderRadius: "5px" }}
        >
          Voltar para Produtos
        </Link>
      </div>
    </main>
  );
}