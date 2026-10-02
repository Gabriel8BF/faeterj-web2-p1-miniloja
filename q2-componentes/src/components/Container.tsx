import type { ReactNode } from "react";

interface ContainerProps {
  titulo: string;
  children: ReactNode;
}

export default function Container({ titulo, children }: ContainerProps) {
  return (
    <div style={{ border: "2px solid #333", borderRadius: "10px", padding: "20px", maxWidth: "600px", margin: "20px auto" }}>
      <h2 style={{ marginTop: "0", borderBottom: "1px solid #eee", paddingBottom: "10px", textAlign: "center" }}>
        {titulo}
      </h2>
      <div style={{ marginTop: "15px" }}>
        {children}
      </div>
    </div>
  );
}