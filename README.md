# Desentupidora SOS BH · site

Site institucional com foco em SEO local (desentupidora 24h em Belo Horizonte, Contagem, Betim e Nova Lima). Feito com [Astro](https://astro.build), gera páginas estáticas e é publicado na Vercel. Estrutura baseada no site da Dutra Hidráulica, **sem a animação de abertura**.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefone/WhatsApp, nome, domínio, tempo de chegada, IDs do Google | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Cidades atendidas | `src/data/cidades.ts` |
| Posts do blog | `src/content/blog/*.md` |
| Fotos reais dos serviços | `fotos/<slug-do-serviço>/` (ver `fotos/README.md`) |
| Logo | `src/assets/logo.png` (e `public/logo.png` para o Google) |
| Cores | `src/styles/global.css` (topo do arquivo) |

Cada serviço vira `/servicos/<slug>/`, cada cidade vira `/desentupidora-em-<slug>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.

## Pendências antes de publicar

- [ ] Domínio real em `src/data/site.ts`, `astro.config.mjs` e `public/robots.txt`
- [ ] Confirmar tempo de chegada (hoje 30 min) e garantia
- [ ] Confirmar a lista de serviços e o que a empresa **não** faz
- [ ] Fotos reais dos serviços
- [ ] IDs do Google Tag Manager / Google Ads em `src/data/site.ts`
