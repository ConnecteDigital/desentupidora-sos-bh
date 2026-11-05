# Desentupidora SOS BH · site

Site institucional com foco em SEO local (desentupidora 24h em Belo Horizonte). Feito com [Astro](https://astro.build), gera páginas estáticas e é publicado na Vercel. Estrutura baseada no site da Dutra Hidráulica, **sem a animação de abertura**.

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
| Bairros atendidos | `src/data/bairros.ts` |
| Posts do blog | `src/content/blog/*.md` |
| Fotos reais dos serviços | `fotos/<slug-do-serviço>/` (ver `fotos/README.md`) |
| Logo (provisório, em texto) | `src/components/Logo.astro` |
| Cores | `src/styles/global.css` (topo do arquivo) |

Cada serviço vira `/servicos/<slug>/`, cada bairro vira `/desentupidora-em-<slug>/` e cada post vira `/blog/<arquivo>/`. O sitemap é gerado automaticamente.

## Pendências antes de publicar

- [ ] WhatsApp/telefone real em `src/data/site.ts` (hoje é `(31) 90000-0000`)
- [ ] Domínio real em `src/data/site.ts`, `astro.config.mjs` e `public/robots.txt`
- [ ] Confirmar tempo de chegada (hoje 30 min) e garantia
- [ ] Confirmar a lista de serviços e o que a empresa **não** faz
- [ ] Logo oficial e fotos reais
- [ ] IDs do Google Tag Manager / Google Ads em `src/data/site.ts`
