import { useState, useEffect } from "react";

interface Usuario {
  id: number;
  name: string;
  email: string;
}

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Array de dependências vazio garante que o fetch ocorra apenas ao carregar o componente
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao buscar dados na API");
        return response.json();
      })
      .then((data) => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff" }}>
      <h2>2. Lista de Usuários (API)</h2>
      
      {loading && <p style={{ color: "blue", fontWeight: "bold" }}>Carregando...</p>}
      
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      
      {!loading && !error && (
        <ul style={{ textAlign: "left" }}>
          {usuarios.map((user) => (
            <li key={user.id} style={{ marginBottom: "5px" }}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
