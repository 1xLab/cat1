<div align="center">

# JM Tox – Portal de Exames Toxicológicos
Site institucional com conteúdo próprio voltado a motoristas profissionais, empresas e laboratórios parceiros.

</div>

## Visão geral

- **Home renovada** com hero sobre caminhões, cards para motoristas/empresas/laboratórios, métricas e CTA de resultado.
- Páginas dedicadas (`/duvidas-frequentes`, `/postos-de-coletas`, `/parceiros`, `/contato`, `/registro`, `/cadastro-postos-de-coleta`, `/app/motorista`, `/app/parceiros`, `/politica-de-privacidade`) escritas manualmente, sem dependência de Markdown externo.
- **ThemeSwitcher** com quatro temas (Sunrise, Midnight, Clinical e High Contrast) acionado por ícone de engrenagem fixo no header.
- Layout responsivo com header fixo (logo + navegação + botões Resultado/Portal), footer institucional, forms validados e textos focados em motoristas de caminhão, ônibus e transporte pesado.

## Stack

- Next.js 16 (App Router) + React 19.
- TypeScript, ESLint, Prettier, Vitest.
- Tailwind/Tokens customizados em `globals.css` + componentes utilitários próprios.

## Estrutura

```
src/app/
├── page.tsx                   # Home
├── duvidas-frequentes/
├── postos-de-coletas/
├── parceiros/
├── contato/
├── politica-de-privacidade/
├── registre-se/
├── cadastro-postos-de-coleta/
└── app/
    ├── motorista/
    └── parceiros/
```

## Como rodar

```bash
npm install
npm run dev
```

Outros scripts: `npm run lint`, `npm run type-check`, `npm run test`, `npm run build`, `npm run start`, `npm run format`.

## Temas

O seletor (engrenagem) abre um painel com os quatro temas; a escolha altera `data-theme` e persiste em `localStorage`. As variáveis estão em `src/app/globals.css`.

## Conteúdo

Todo o texto está codificado diretamente nos componentes (por exemplo, `src/app/page.tsx` e demais rotas). Para atualizar basta editar os arrays/constantes sem depender dos antigos `.md`.

## Contacto e Rede

`src/lib/site.ts` guarda endereço, contatos e links oficiais. `/contato` usa esses dados + o `ContactForm` (React Hook Form + Zod). `/postos-de-coletas` e `/cadastro-postos-de-coleta` trazem informações resumidas para motoristas e parceiros.

## SEO e acessibilidade

- `generateMetadata`, JSON-LD (`LabSchema`), sitemap e robots.
- Botões com aria-label, suporte a teclado e contraste testado nos quatro temas.
- `next/image` otimiza o hero e outros assets externos.

## Testes e qualidade

`npm run lint`, `npm run type-check` e `npm run test` garantem integridade. Planejamento atualizado em `PLAN.md`.
