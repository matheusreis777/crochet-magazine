# Crochetando

Plataforma web didática para aprender crochê do zero — com projetos guiados, guia de pontos interativo, estúdio de personalização de peças e modo escuro.

Desenvolvido por [matheusreis.dev](https://www.matheusreis.dev).

---

## Visão Geral

O **Crochetando** é uma SPA (Single Page Application) construída com React + TypeScript que reúne:

| Seção              | Descrição                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| **Início**         | Vitrine dos projetos em destaque, chamada para ação e banner inspirador                                  |
| **Aprender**       | Projetos passo a passo com ilustrações, técnicas avançadas e galeria de referências                      |
| **Guia de Pontos** | 37 pontos organizados em 9 categorias, com modal detalhado (símbolo, passo a passo, aplicações práticas) |
| **Customizar**     | Estúdio criativo para visualizar peças em diferentes modelos e paletas de cores                          |

---

## Tecnologias

- **React 19** + **TypeScript**
- **Vite 8** (build tool + HMR)
- **vite-plugin-pwa** — suporte a PWA com Service Worker (Workbox)
- CSS puro com custom properties (sem framework de UI)

---

## Funcionalidades

- **Modo escuro / claro** — alternância manual com persistência em `localStorage`; respeita `prefers-color-scheme` como padrão inicial
- **37 pontos de crochê** — cobrindo básicos, estrutura, relevo, textura, vazados, decorativos, acabamento, peças e avançados
- **Projetos guiados** — com dificuldade, materiais, passo a passo ilustrado e técnicas associadas
- **Galeria de referências** — imagens complementares por projeto
- **Estúdio Criativo** — seleção de modelo (body) e paleta de cores com preview em tempo real
- **Versículo do dia** — footer com versículo bíblico sorteado aleatoriamente a cada carregamento
- **PWA** — instalável em dispositivos móveis e desktop

---

## Estrutura do Projeto

```
src/
├── App.tsx                     # Shell principal (nav, roteamento por tab, tema)
├── StitchGuide.tsx             # Página completa do Guia de Pontos + modal
├── index.css                   # Estilos globais e tokens CSS (light/dark)
├── main.tsx                    # Entrypoint React
│
├── components/
│   ├── BibleVerseRotator.tsx   # Versículo bíblico aleatório (footer)
│   ├── ChainStitchAnimation.tsx# Animação SVG de pontos (preservada, não exibida)
│   └── ReferenceGallery.tsx    # Galeria de imagens de referência
│
├── data/
│   ├── crochetData.ts          # Projetos, categorias, pontos e tags
│   ├── techniquesData.ts       # Técnicas avançadas com passos e ilustrações
│   ├── stitchGuideData.ts      # 37 pontos com símbolo, passo a passo e aplicações
│   └── referenceImages.ts      # Mapeamento de imagens por projeto
│
└── illustrations/
    ├── ProjectIllustrations.tsx   # Ilustrações SVG de projetos
    ├── StepIllustrations.tsx      # Ilustrações SVG de passos
    └── TechniqueIllustrations.tsx # Ilustrações SVG de técnicas
```

---

## Como Rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:5173)
npm run dev

# Build de produção
npm run build

# Prévia do build
npm run preview

# Verificar tipos TypeScript
npx tsc --noEmit
```

---

## Tema (Dark Mode)

O sistema de temas usa CSS custom properties definidas em `:root` (light) e sobrescritas em `body[data-theme='dark']`. O estado é gerenciado em `App.tsx` e persiste via `localStorage` na chave `crochetando-theme`.

---

## Versículo do Dia

O componente `BibleVerseRotator` exibe um versículo bíblico sorteado aleatoriamente no carregamento da página, no rodapé do site. Os versículos são sobre fé, paciência e perseverança (Salmos, Provérbios, Eclesiastes, Romanos, Hebreus e Gálatas).

---

## Animações de Pontos (Preservadas)

O arquivo `ChainStitchAnimation.tsx` contém uma engine de animação SVG para todos os 37 pontos (sistema de variantes: `chain`, `single`, `half`, `double`, `tall`, `fan`, `relief`, `cluster`, `motif`, `advanced`), mas está desativado da UI por opção de design. Pode ser reintegrado ao modal do Guia de Pontos futuramente.
