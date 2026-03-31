# Character Selection DB

## Descrição

Este é um projeto simples de um site web para seleção de personagens de Dragon Ball Z. O site permite visualizar uma lista de personagens icônicos e clicar neles para ver uma prévia da imagem usando a API do Dragon Ball.

## 🛠️ Tecnologias

- `HTML` (estruturas e semântica)
- `CSS` (layout, temas, responsividade)
- `JavaScript` (interações, DOM, preview)

## 📁 Estrutura do projeto

- `index.html`
- `README.md`
- `images/` (imagens locais dos personagens)
- `js/index.js` (comportamento de seleção)
- `src/css/reset.css` (reset de estilos)
- `src/css/styles.css` (estilos principais)
- `src/css/responsive.css` (ajustes mobile)

## ▶️ Como executar

1. Clonar o repositório:
   - `git clone <url-do-repo>`
2. Abrir `index.html` no navegador.
3. Clicar em um personagem para atualizar a pré-visualização.

## 🎯 Comportamento esperado

- A lista de personagens é exibida em uma `<ul class="characters">`.
- Cada item contém `<img data-name="...">` com atributo `alt`.
- `js/index.js` detecta clique e atualiza `<section class="character-preview"> img`.
- Pode incluir exibição de nome e estatísticas dependendo de implementação (tema atual: imagem local).

## 📜 Licença

Projeto aberto, uso e modificação liberados. Apenas mantenha créditos e histórico de contribuições quando publicar.

> Observação: o código atual carrega imagens locais (`images/`) e não faz chamadas diretas a API externa, mas o modelo permite integração futura.