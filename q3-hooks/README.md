# Questão 3 - React: Hooks e Estado

Projeto construído em Vite resolvendo os exercícios 3.1 e 3.2 da Prova P1.

## O que foi desenvolvido
- **ContadorDinamico.tsx:** Componente que gerencia os estados de `contador` e `passo` utilizando `useState`. Permite ao usuário alterar o valor do passo via input e reflete a matemática dinamicamente nos botões de incremento e decremento.
- **ListaUsuarios.tsx:** Componente que utiliza `useEffect` (com array de dependências vazio `[]`) para disparar uma requisição GET à API JSONPlaceholder logo na montagem. Gerencia os estados de `usuarios` (dados), `loading` (exibindo texto "Carregando...") e `error`.

## Como rodar
1. Instale as dependências: `npm install`
2. Suba o servidor: `npm run dev`