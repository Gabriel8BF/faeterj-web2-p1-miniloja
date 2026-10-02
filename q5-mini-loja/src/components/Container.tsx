import { ReactNode } from "react";

interface ContainerProps {
  titulo: string;
  children: ReactNode;
}

export default function Container({ titulo, children }: ContainerProps) {
  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2 style={{ borderBottom: "2px solid #eee", paddingBottom: "10px" }}>{titulo}</h2>
      <div>{children}</div>
    </div>
  );
}