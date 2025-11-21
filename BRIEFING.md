A seguir está um **briefing técnico**, direto, objetivo e em linguagem de engenheiro/desenvolvedor — exatamente para que **ele não faça gambiarra**, utilize **tecnologias modernas**, mantenha **performance**, **segurança** e **escalabilidade**, e entregue um site da **JMBio** com padrão premium de laboratório científico.

Use este texto exatamente como instrução para ele.

---

# 📘 **INSTRUÇÕES TÉCNICAS PARA O DESENVOLVEDOR – SITE JMBio (Laboratório de Toxicologia)**

## 🎯 **Objetivo Geral**

Entregar um site **extremamente rápido**, **responsivo**, **SEO-friendly**, com **microinterações** suaves, **animações discretas e elegantes**, design limpo e foco em usabilidade científica.

O site deve transmitir **alta confiabilidade**, nível de laboratório de análises clínicas com rigor técnico.

---

# 🛠️ **1. Stack Tecnológico Recomendada**

## **Front-end** (obrigatório)

* **Next.js 14+ (App Router)** – SSR, SSG, RSC, otimização automática.
* **React 18+** – componentes reutilizáveis e desempenho.
* **TailwindCSS** – padronização visual, responsividade fluida e agilidade.
* **Framer Motion** – animações e microinterações (suaves, não exageradas).
* **ShadCN/UI** – componentes pré-estilizados, acessíveis e consistentes.
* **TypeScript** – evitar erros bobos e garantir tipagem forte.

## **Back-end**

Para este projeto, **não criar back-end desnecessário**.
Usar recursos do **Next.js** (rotas de API) apenas onde necessário.

Funções possíveis:

* API de contato.
* API de autenticação simples (se houver área de resultados).
* Integração com painel externo de laudos via iframe ou API REST (não construir um sistema do zero).

## **Hospedagem**

* **Vercel (preferencial)** – otimização automática para Next.js.
* Alternativa: AWS Amplify ou Netlify.

---

# 🎨 **2. Design, UI/UX e Componentização**

## Padrões obrigatórios:

* Layout **modular** com cabeçalho e rodapé reutilizáveis.
* Sistema de grids responsivos (<768px, <1024px, <1440px).
* Paleta científica (variações de azul, verde, cinza – evitar saturação).
* Layout "clean": sem poluição visual, sem sombras pesadas, sem fontes improvisadas.

## Microinterações (Framer Motion):

* Hover em botões.
* Fade-ins leves quando o conteúdo entra no viewport.
* Transições suaves entre páginas.
* Ícones com leve animação (0.1–0.2s).
* Carregamentos skeleton (ShadCN ou framer).

## Componentes obrigatórios:

* Hero com CTA.
* Cards dos serviços.
* Sessão de diferenciais com ícones SVG.
* Página "Unidades" com mapa interativo.
* Formulário de contato validado com Zod ou Yup.
* Menu responsivo com framer motion.

---

# ⚙️ **3. Performance e Otimização**

O site deve atingir **90+ no Lighthouse** em todas as métricas.

### Regras obrigatórias:

* Não usar imagens pesadas → tudo em **WebP** ou **AVIF**.
* Usar `next/image` com loading inteligente.
* Páginas estáticas sempre que possível (SSG).
* Lazy loading para componentes não críticos.
* Evitar libs desnecessárias (não instalar coisa inútil).
* Compressão Brotli e otimizações de build padrão da Vercel.

---

# 🔍 **4. SEO e Acessibilidade**

## SEO Técnico:

* Metadados configurados via `generateMetadata`.
* Sitemap automático.
* Robots.txt configurado.
* URLs semânticas: `/servicos/toxicologico`, `/sobre`, `/contato`.
* Headings estruturados (H1 → H2 → H3).
* Microdados schema.org para laboratório médico.

## Acessibilidade:

* Contraste AAA onde necessário.
* Navegação por teclado funcionando.
* Descrição alternative em imagens.

---

# 🔒 **5. Segurança**

* HTTPS obrigatório.
* Middleware para bloquear bots maliciosos.
* Sanitização de inputs nos formulários.
* Rate limit na API de contato.
* CSP configurado.

---

# 🔗 **6. Integrações**

Dependendo da necessidade da JMBio:

### Resultados de Exames (se houver):

* Não recriar sistema de laudos.
* Integrar via iframe seguro ou API do sistema já existente.
* Criar tela de login simples com redirecionamento.

### Comunicação:

* WhatsApp API.
* Google Maps.
* Google Tag Manager / Analytics.

---

# 🧩 **7. Estrutura de Páginas**

1. **Home** (animações leves, destaque dos serviços).
2. **Serviços**
    - página geral
    - páginas individuais por exame
3. **Sobre a JMBio**
4. **Unidades / Locais de Coleta**
5. **Área de Resultados** (login → integração)
6. **Contato** (API com validação)
7. **Blog** (opcional, SSG)

---

# 📂 **8. Boas Práticas de Código**

* Pastas organizadas por domínio: `/components`, `/ui`, `/services`, `/api`.
* Componentes reutilizáveis, limpos e desacoplados.
* Nunca importar CSS bruto de bibliotecas pesadas.
* Usar **ESLint + Prettier** configurados.
* Commits claros (conventional commits).
* Não criar efeitos visuais exagerados.
* Testes básicos com Jest ou Vitest (mínimo nos formulários).

---

# 🚀 **9. Entrega**

O site deve ser entregue:

* 100% responsivo.
* Rápido (90+ Lighthouse).
* Estável.
* Sem dependências inúteis.
* Com animações sutis, científicas e elegantes.
* Painel estruturado, limpo e seguro.

---




