import { useState } from "react";

export default function ContadorDinamico() {
  const [contador, setContador] = useState(0);
  const [passo, setPasso] = useState(1);

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px", marginBottom: "20px", textAlign: "center" }}>
      <h2>Exercício 3.1 - Contador Dinâmico</h2>
      
      <p style={{ fontSize: "1.2rem" }}>
        Valor Atual: <strong>{contador}</strong>
      </p>
      
      <div style={{ marginBottom: "15px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <label htmlFor="passoInput" style={{ marginRight: "10px" }}>Valor do Passo:</label>
        <input 
          id="passoInput"
          type="number" 
          value={passo} 
          onChange={(e) => setPasso(Number(e.target.value))}
          style={{ width: "80px", padding: "5px" }}
        />
      </div>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => setContador(contador - passo)} style={{ padding: "8px 15px" }}>
          - (Decrementar)
        </button>
        <button onClick={() => setContador(0)} style={{ padding: "8px 15px", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "4px" }}>
          Resetar
        </button>
        <button onClick={() => setContador(contador + passo)} style={{ padding: "8px 15px" }}>
          + (Incrementar)
        </button>
      </div>
    </div>
  );
}