# JM Tox – Guia para o novo site web

Documento para o developer implementar um site profissional de laboratório toxicológico, com base nos conteúdos em `site-md/*.md` e suporte a múltiplos temas (incluindo dark e light).

---

## 1. Objetivos do projeto

- Site institucional e comercial para exames toxicológicos (motoristas, empresas, laboratórios / parceiros).
- Visual profissional, confiável e simples de navegar.
- Conteúdo principal vindo dos arquivos Markdown em `site-md/` (fonte de verdade do texto).
- Suporte a **4 temas selecionáveis**, incluindo **light** e **dark**, através de um ícone de engrenagem (gear) fixo em um canto da tela.
- Layout responsivo (desktop, tablet, mobile).
- Atenção a acessibilidade básica (contraste, tamanhos de fonte, uso de aria-labels na troca de tema).

Tech stack sugerida (não obrigatório):

- Front-end: React, Vue, Svelte ou HTML + JS vanilla.
- Estilização: CSS Modules, Tailwind ou CSS tradicional organizado por componentes.
- Conteúdo: importação/parsing de Markdown (`site-md/*.md`) ou migração manual para componentes/JSON mantendo os textos idênticos.

---

## 2. Arquitetura de páginas

Use os arquivos `site-md/*.md` como referência de texto para as rotas abaixo:

- `/` → `site-md/home.md`  
  Home com hero, segmentos (Motoristas, Empresas, Laboratórios), bloco “Resultado” e “Sobre”.

- `/duvidas-frequentes` → `site-md/duvidas-frequentes.md`  
  FAQ completo sobre exame toxicológico, legislação, drogas analisadas, janela de detecção, etc.

- `/postos-de-coletas` → `site-md/postos-de-coletas.md`  
  Tela de busca/filtros de postos, lista de estados, mapa e filtros (mesmo se ainda não houver dados reais).

- `/parceiros` → `site-md/parceiros.md`  
  Página para atração de laboratórios e parceiros, com pilares, vantagens e CTAs de cadastro.

- `/contato` → `site-md/contato.md`  
  Dados de contato, endereço do laboratório em Botucatu, formulário de contato.

- `/politica-de-privacidade` → `site-md/politica-de-privacidade.md`

- `/registre-se` → `site-md/registre-se.md`

- `/cadastro-postos-de-coleta` → `site-md/cadastro-posto-de-coleta.md`

- `/app/motorista` → `site-md/app-motorista.md`

- `/app/parceiros` → `site-md/app-parceiros.md`

Se precisar de páginas adicionais (ex.: `/resultado`, `/acesso-restrito`, `/portal-parceiro`), reaproveite o conteúdo de FAQ e registro para montar textos coerentes, sem fugir do escopo de exames toxicológicos.

---

## 3. Layout base

### 3.1. Header

- Barra fixa no topo, com fundo escuro ou claro conforme tema.
- Logo JM Bioanálises à esquerda (PNG da pasta `bkp/jmtox.com.br/wp-content/uploads/`).
- Navegação principal:
  - Dúvidas
  - Postos de Coletas
  - Parceiros
  - Contato
- À direita da navegação:
  - Botão “Resultado”
  - Botão “Portal do Parceiro” (ou “Acesso Restrito”)
- Ícone de engrenagem (gear) para escolha de tema (ver seção 4).

### 3.2. Hero (Home)

- Hero com imagem de caminhão/estrada (aproveitar arte existente ou nova imagem em alta qualidade).
- Texto posicionado sobre a imagem:
  - “Simples, fácil e rápido”
  - “Resultado em até 3 dias úteis*” + “*consulte a localidade”
- Botões principais no hero:
  - “Comprar exame”
  - “Ver postos de coleta”

### 3.3. Conteúdo interno

- Largura máxima limitada (ex.: 1120–1280 px) com margens laterais.
- Seções com títulos claros, baseados nos cabeçalhos dos `.md`:
  - “Menor preço e mais agilidade”
  - “Dúvidas frequentes”
  - “Vantagens de ser parceiro da JM Tox”
  - etc.

### 3.4. Footer

- Frase padrão:
  - “© 2022 - Todos Direitos Reservados a JM Bioanálises Exames Toxicológicos”
  - “Desenvolvido por HD Marketing Digital”
- Links rápidos: Dúvidas, Postos de Coletas, Parceiros, Contato, Política de Privacidade.

---

## 4. Sistema de temas (4 temas com gear)

### 4.1. Comportamento

- Ícone de engrenagem fixo (sugestão: canto inferior direito em desktop, canto superior em mobile).
- Ao clicar, abre um pequeno painel flutuante com uma lista de temas:
  - “Sunrise Light”
  - “Midnight Dark”
  - “Clinical Light”
  - “High Contrast”
- Ao selecionar um tema:
  - Adicionar atributo `data-theme="nome"` no elemento `<html>` ou `<body>`.
  - Salvar preferência em `localStorage` para persistir entre visitas.

Exemplo de estrutura HTML simplificada:

```html
<body data-theme="sunrise">
  <!-- site -->
  <button aria-label="Alterar tema" class="theme-gear">
    ⚙
  </button>
  <div class="theme-panel" aria-hidden="true">
    <button data-theme="sunrise">Sunrise Light</button>
    <button data-theme="midnight">Midnight Dark</button>
    <button data-theme="clinical">Clinical Light</button>
    <button data-theme="high-contrast">High Contrast</button>
  </div>
</body>
```

### 4.2. Implementação com CSS Variables

Use CSS variables para cores principais, e sobrescreva por tema:

```css
:root {
  /* tokens base (fallback) */
  --color-bg: #f5f5f7;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-text-muted: #6b7280;
  --color-primary: #f26b21;      /* brand orange */
  --color-primary-dark: #c65310;
  --color-header: #050608;
}

[data-theme='sunrise'] {
  --color-bg: #f5f5f7;
  --color-surface: #ffffff;
  --color-text: #111827;
  --color-header: #050608;
}

[data-theme='midnight'] {
  --color-bg: #050608;
  --color-surface: #111827;
  --color-text: #f9fafb;
  --color-text-muted: #9ca3af;
  --color-header: #000000;
}

[data-theme='clinical'] {
  --color-bg: #f3f6fb;
  --color-surface: #ffffff;
  --color-text: #0f172a;
  --color-primary: #2563eb; /* azul clínico para detalhes, mantendo laranja nos CTAs principais se desejar */
}

[data-theme='high-contrast'] {
  --color-bg: #000000;
  --color-surface: #000000;
  --color-text: #ffffff;
  --color-text-muted: #e5e7eb;
  --color-primary: #ffbf00; /* amarelo/laranja bem vivo */
  --color-header: #000000;
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}

.btn-primary {
  background: var(--color-primary);
  color: #ffffff;
}
```

### 4.3. Acessibilidade

- Usar `aria-label` no botão da engrenagem (“Alterar tema do site”).  
- Garantir contraste mínimo AA nos quatro temas (verificar background vs. texto e CTAs).  
- Evitar animações agressivas na troca de tema (um fade curto é suficiente).

---

## 5. Integração do conteúdo (Markdown → UI)

### 5.1. Origem do conteúdo

- Textos principais já estão limpos e organizados em `site-md/*.md`:
  - `home.md`
  - `duvidas-frequentes.md`
  - `postos-de-coletas.md`
  - `parceiros.md`
  - `contato.md`
  - `politica-de-privacidade.md`
  - `registre-se.md`
  - `cadastro-posto-de-coleta.md`
  - `app-motorista.md`
  - `app-parceiros.md`

### 5.2. Estratégia sugerida

- Pode-se usar um parser de Markdown (ex.: `marked`, `remark`, etc.) para renderizar diretamente o conteúdo em componentes.  
- Alternativamente, migrar os textos para uma estrutura JSON ou para o CMS do projeto, mantendo frases e seções fiéis aos `.md`.
- Respeitar títulos, seções e termos legais (leis, portarias, nomes de drogas) exatamente como nos arquivos.

### 5.3. O que pode ser ajustado

- Organização visual (cards, colunas, ícones, espaçamentos).  
- Microcópias que não alterem o sentido (ex.: rótulos de botões, legendas).  
- Agrupamento de seções (ex.: blocos de FAQ em acordeões, cards etc.).

Não incluir novos serviços que não existam hoje (manter foco em exames toxicológicos e rede de coleta), apenas melhorar a forma de apresentar o conteúdo.

---

## 6. Componentes-chave

Sugestão de componentes reutilizáveis:

- `Header` – logo + navegação + botões de ação.  
- `ThemeSwitcher` – engrenagem + painel de temas (seção 4).  
- `Hero` – usado na home.  
- `SegmentCards` – cards para Motoristas, Empresas, Laboratórios.  
- `FAQSection` – colapsáveis para “Dúvidas Frequentes”.  
- `PartnersHighlights` – pilares e vantagens da página de parceiros.  
- `ContactForm` – formulário de contato com validação básica.  
- `Footer` – rodapé padronizado com links.

---

## 7. Checklist rápido para o dev

- [ ] Implementar rotas conforme seção 2.  
- [ ] Aplicar layout base (header, hero, footer) com tokens de cor do tema.  
- [ ] Implementar `ThemeSwitcher` com 4 temas e persistência em `localStorage`.  
- [ ] Integrar textos dos `.md` em cada página.  
- [ ] Testar o site nas versões desktop e mobile.  
- [ ] Conferir contraste de cores nos quatro temas.  
- [ ] Garantir que “Resultado” e “Portal do Parceiro” sejam facilmente acessíveis em todas as telas.

Este README é o guia de referência para manter o novo site coerente com a marca JM Bioanálises, com visual moderno e alinhado à logomarca. Mesmo que o stack mude, a estrutura de páginas, o conteúdo e o sistema de temas devem seguir estas orientações. 

