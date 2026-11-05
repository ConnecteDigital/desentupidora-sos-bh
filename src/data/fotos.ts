import type { ImageMetadata } from 'astro';

// Fotos reais de serviços feitos, uma por serviço (src/assets/fotos/<slug>.jpg).
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Enquanto um serviço não tiver foto, o site mostra o ícone no lugar
// e a galeria "Trabalhos realizados" fica escondida.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-esgoto': 'Técnico da Desentupidora SOS BH desentupindo rede de esgoto com máquina',
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha em Belo Horizonte',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário em banheiro residencial',
  'desentupimento-de-ralo': 'Desentupimento de ralo e caixa sifonada',
  'limpeza-de-caixa-de-gordura': 'Limpeza de caixa de gordura',
  // fotos/geral/: equipe, veículo (usada no topo da home e em "por que nós")
  equipe: 'Equipe da Desentupidora SOS BH',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela Desentupidora SOS BH' };
}

export function temFotos() {
  return Object.keys(arquivos).length > 0;
}
