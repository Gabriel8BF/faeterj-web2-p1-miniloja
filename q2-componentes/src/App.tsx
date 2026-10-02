import Container from "./components/Container";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <Container titulo="Membros da Equipe">
        <ProfileCard 
          nome="Alice Martins" 
          cargo="Desenvolvedora Frontend" 
          imagemUrl="https://i.pravatar.cc/150?img=5" 
          ativo={true} 
        />
        <ProfileCard 
          nome="Beto Silva" 
          cargo="Especialista em Banco de Dados" 
          imagemUrl="https://i.pravatar.cc/150?img=11" 
          ativo={false} 
        />
        <ProfileCard 
          nome="Carolina Mendes" 
          cargo="Tech Lead" 
          imagemUrl="https://i.pravatar.cc/150?img=9" 
          ativo={true} 
        />
      </Container>
    </div>
  );
}