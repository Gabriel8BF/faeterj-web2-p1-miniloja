import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Questão 4 - Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        <Navbar />
        <div style={{ padding: "20px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}