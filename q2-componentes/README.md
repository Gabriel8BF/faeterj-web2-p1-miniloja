# Questão 2 - React: Componentes e Props

Projeto construído em Vite resolvendo os exercícios 2.1 e 2.2 da Prova P1.

## O que foi desenvolvido
- **ProfileCard.tsx:** Componente que recebe `nome`, `cargo`, `imagemUrl` e `ativo` via props, renderizando dinamicamente a tag de Status (Verde para Online, Cinza para Offline).
- **Container.tsx:** Componente de composição (Wrapper) que recebe a prop `titulo` para o cabeçalho `<h2>` e renderiza qualquer elemento interno através da prop `children`, aplicando uma caixa delimitadora CSS.
- **App.tsx:** Implementação prática exibindo o `Container` com 3 `ProfileCard` distintos no interior.

## Como rodar
1. Instale as dependências: `npm install`
2. Suba o servidor: `npm run dev`