interface ProfileCardProps {
  nome: string;
  cargo: string;
  imagemUrl: string;
  ativo: boolean;
}

export default function ProfileCard({ nome, cargo, imagemUrl, ativo }: ProfileCardProps) {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", /* Muda o layout para coluna (empilha os itens) */
      alignItems: "center",    /* Centraliza os itens no eixo horizontal */
      textAlign: "center",     /* Garante que o texto fique centralizado */
      padding: "20px", 
      border: "1px solid #ccc", 
      borderRadius: "8px", 
      marginBottom: "15px", 
      backgroundColor: "#fff" 
    }}>
      <img 
        src={imagemUrl} 
        alt={`Foto de ${nome}`} 
        style={{ 
          width: "80px", 
          height: "80px", 
          borderRadius: "50%", 
          objectFit: "cover", 
          marginBottom: "12px" /* Dá um respiro entre a imagem e o nome */
        }} 
      />
      <div>
        <h3 style={{ margin: "0 0 5px 0" }}>{nome}</h3>
        <p style={{ margin: "0 0 10px 0", color: "#666" }}>{cargo}</p>
        {ativo ? (
          <span style={{ color: "green", fontWeight: "bold", fontSize: "0.9rem" }}>Status: Online</span>
        ) : (
          <span style={{ color: "gray", fontWeight: "bold", fontSize: "0.9rem" }}>Status: Offline</span>
        )}
      </div>
    </div>
  );
}