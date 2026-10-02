# Questão 4 - Next.js: App Router e Roteamento

Resolução dos exercícios 4.1 e 4.2 da Prova P1.

## O que foi desenvolvido
- **Estrutura de Rotas:** Páginas estáticas (`Home`, `Sobre`, `Produtos`) criadas no diretório `app/`.
- **Navbar:** Componente de navegação reaproveitável com a tag `<Link>` do Next.js.
- **Rotas Dinâmicas:** Implementação da pasta `[id]` dentro de produtos, capturando `params.id` e exibindo dinamicamente, além de um botão de retorno à lista.

## Como testar
1. Suba o servidor: `npm run dev`
2. Navegue pelos links do menu no topo.
3. Aceda à página Produtos e clique num dos itens para testar o parâmetro dinâmico na URL.