# Plano de Trabalho – Site JMBio

> Checklist detalhado de implementação. Marcarei cada item (`[x]`) assim que estiver concluído.

## 1. Preparação do Ambiente
- [x] 1.1 Inicializar projeto Next.js 14 (App Router, TypeScript) e configurar repositório.
- [x] 1.2 Instalar e configurar TailwindCSS, ShadCN/UI, Framer Motion e ESLint/Prettier com regras alinhadas ao briefing.
- [x] 1.3 Definir estrutura de pastas (`app`, `components`, `lib`, `api`) e padrões de importação.

## 2. Fundamentos de UI/UX
- [x] 2.1 Criar tema (paleta científica azul/verde/cinza, tipografia, espaçamentos) e tokens globais de Tailwind.
- [x] 2.2 Implementar layout base com Header/Footer, navegação responsiva (menu animado) e microinterações padrão.
- [x] 2.3 Preparar componentes reutilizáveis (botões, cards, ícones SVG, seções containerizadas).

## 3. Páginas Principais
- [x] 3.1 Home: Hero dedicado a motoristas profissionais, cards de segmentos e CTA de resultado.
- [x] 3.2 Páginas institucionais reescritas manualmente (FAQ, Postos, Parceiros, Contato, Política, Registre-se, Cadastro de Postos, Apps).
- [x] 3.3 Conteúdo interno agora independente de arquivos `.md`, pronto para edição direta no código.
- [x] 3.4 Rede de coleta e parceiro com CTAs reais (cadastro/portal).
- [x] 3.5 Resultado online destacado com botões e instruções diretas.
- [x] 3.6 Formulário de contato validado com dados oficiais de Botucatu/SP.

## 4. Infra e Integrações
- [x] 4.1 Rotas de API (contato + rate limit + sanitização) e middlewares de segurança (CSP, bot block).
- [x] 4.2 Configurar Google Analytics/GTM, WhatsApp API e embed/redirecionamento de resultados de exames.
- [x] 4.3 Configurar mapas (Google Maps) e placeholders para integrações futuras.

## 5. Performance, SEO e Acessibilidade
- [x] 5.1 Ajustar `next/image`, otimização WebP/AVIF, lazy loading seletivo e divisão de bundles.
- [x] 5.2 Implementar SEO técnico (`generateMetadata`, sitemap, robots, schema.org) e testes Lighthouse.
- [x] 5.3 Validar acessibilidade (contraste AAA, navegação por teclado, aria labels) e microinterações discretas.

## 6. Qualidade e Entrega
- [x] 6.1 Criar testes básicos (Vitest/Jest) para formulários e componentes críticos.
- [x] 6.2 Revisar código (ESLint/Prettier), preparar scripts de build e documentação de deploy (Vercel).
- [x] 6.3 Atualizar README com instruções de execução, checar checkboxes concluídos e sinalizar pronto para handoff.
