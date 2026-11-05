import type { ImageMetadata } from 'astro';

// Fotos dos serviços, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Enquanto um serviço não tiver foto, o site mostra o ícone no lugar
// e a galeria "Veja também" fica escondida.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-esgoto': 'Técnico desentupindo rede de esgoto com máquina de cabo rotativo',
  'desentupimento-de-pia': 'Técnico desentupindo a tubulação embaixo da pia com máquina',
  'desentupimento-de-vaso-sanitario': 'Técnico desentupindo vaso sanitário com máquina de cabo flexível',
  'desentupimento-de-ralo': 'Técnico desentupindo ralo com máquina de cabo rotativo',
  'limpeza-de-caixa-de-gordura': 'Técnico fazendo a limpeza de caixa de gordura com mangueira de sucção',
  // fotos/geral/: imagem do topo da home e de "por que nós"
  equipe: 'Técnico desentupindo ralo de piso com máquina de cabo rotativo',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço de desentupimento' };
}

export function temFotos() {
  return Object.keys(arquivos).length > 0;
}
