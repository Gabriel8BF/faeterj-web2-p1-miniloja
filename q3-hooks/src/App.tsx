import ContadorDinamico from "./components/ContadorDinamico";
import ListaUsuarios from "./components/ListaUsuarios";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Questão 3 - React Hooks</h1>
      <ContadorDinamico />
      <ListaUsuarios />
    </div>
  );
}