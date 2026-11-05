// Regionais de Belo Horizonte
export type Zona =
  | 'Centro-Sul'
  | 'Oeste'
  | 'Pampulha'
  | 'Noroeste'
  | 'Leste'
  | 'Nordeste'
  | 'Venda Nova'
  | 'Barreiro';

export interface Bairro {
  slug: string;
  nome: string;
  // Preposição usada no texto: "no Centro", "na Savassi", "em Lourdes"
  prep: 'no' | 'na' | 'em';
  zona: Zona;
  // Texto exclusivo da página para não repetir conteúdo entre bairros
  sobre: string;
  // Bairros próximos (aparecem no texto e no FAQ da página)
  vizinhos: string[];
}

// Regiões em foco aparecem com a etiqueta "Foco" (definir com o cliente)
export const zonasPrioritarias: Zona[] = [];
export const ordemZonas: Zona[] = ['Centro-Sul', 'Oeste', 'Pampulha', 'Noroeste', 'Leste', 'Nordeste', 'Venda Nova', 'Barreiro'];

// "Região Centro-Sul", "Região da Pampulha", "Região do Barreiro"...
export function nomeRegiao(zona: Zona) {
  if (zona === 'Pampulha') return 'região da Pampulha';
  if (zona === 'Barreiro') return 'região do Barreiro';
  if (zona === 'Venda Nova') return 'região de Venda Nova';
  return `região ${zona}`;
}

export const bairros: Bairro[] = [
  {
    slug: 'centro',
    prep: 'no',
    nome: 'Centro',
    zona: 'Centro-Sul',
    sobre:
      'O Centro de BH concentra comércio, galerias, restaurantes e prédios antigos de muitos andares. Os chamados mais comuns são desentupimento de coluna de esgoto em edifícios, caixa de gordura de lanchonetes e restaurantes e vasos sanitários entupidos em salas comerciais.',
    vizinhos: ['Funcionários', 'Lourdes', 'Barro Preto', 'Floresta', 'Santa Efigênia'],
  },
  {
    slug: 'savassi',
    prep: 'na',
    nome: 'Savassi',
    zona: 'Centro-Sul',
    sobre:
      'A Savassi reúne bares, restaurantes, lojas e prédios residenciais. Por isso atendemos muito desentupimento e limpeza de caixa de gordura em cozinhas comerciais, além de pias, ralos e vasos entupidos em apartamentos, inclusive à noite e nos fins de semana.',
    vizinhos: ['Funcionários', 'Lourdes', 'Santo Antônio', 'Cruzeiro'],
  },
  {
    slug: 'funcionarios',
    prep: 'no',
    nome: 'Funcionários',
    zona: 'Centro-Sul',
    sobre:
      'Funcionários mistura prédios residenciais, consultórios e escritórios. Atendemos desentupimento de pia, vaso sanitário e ralo em apartamentos e salas, e desobstrução de colunas de esgoto em condomínios.',
    vizinhos: ['Savassi', 'Centro', 'Santa Efigênia', 'Serra'],
  },
  {
    slug: 'lourdes',
    prep: 'em',
    nome: 'Lourdes',
    zona: 'Centro-Sul',
    sobre:
      'Lourdes é um bairro de prédios residenciais de alto padrão e restaurantes. Fazemos o desentupimento com cuidado para não sujar nem danificar pisos e revestimentos, e atendemos condomínios e cozinhas comerciais.',
    vizinhos: ['Savassi', 'Santo Agostinho', 'Centro', 'Santo Antônio'],
  },
  {
    slug: 'sion',
    prep: 'no',
    nome: 'Sion',
    zona: 'Centro-Sul',
    sobre:
      'O Sion tem ruas arborizadas, casas e prédios residenciais. Nas casas é comum entupimento de rede de esgoto e caixa de passagem por raízes e acúmulo de resíduos; nos prédios, pias de cozinha e colunas entupidas.',
    vizinhos: ['Anchieta', 'Cruzeiro', 'Carmo', 'Mangabeiras'],
  },
  {
    slug: 'buritis',
    prep: 'no',
    nome: 'Buritis',
    zona: 'Oeste',
    sobre:
      'O Buritis cresceu com muitos prédios altos em ruas de ladeira. A maior parte dos chamados é de apartamento: pia de cozinha com gordura, ralo do box, vaso sanitário e coluna de esgoto do prédio.',
    vizinhos: ['Estoril', 'Palmeiras', 'Havaí', 'Estrela Dalva'],
  },
  {
    slug: 'prado',
    prep: 'no',
    nome: 'Prado',
    zona: 'Oeste',
    sobre:
      'O Prado é um bairro tradicional, com casas antigas, prédios e comércio. Nas casas mais velhas a rede de esgoto costuma ser antiga e entope com mais facilidade; atendemos esgoto, caixa de passagem, pia e ralo.',
    vizinhos: ['Barro Preto', 'Calafate', 'Gutierrez', 'Carlos Prates'],
  },
  {
    slug: 'pampulha',
    prep: 'na',
    nome: 'Pampulha',
    zona: 'Pampulha',
    sobre:
      'Na Pampulha há muitas casas grandes, condomínios e comércio. Atendemos desentupimento de rede de esgoto, caixa de gordura e caixa de passagem em casas, além de pias, ralos e vasos sanitários em apartamentos.',
    vizinhos: ['São Luiz', 'Bandeirantes', 'Ouro Preto', 'Castelo', 'São José'],
  },
  {
    slug: 'castelo',
    prep: 'no',
    nome: 'Castelo',
    zona: 'Pampulha',
    sobre:
      'O Castelo é um bairro residencial com muitos prédios e casas. Os chamados mais frequentes são pia de cozinha entupida, vaso sanitário e ralo de área de serviço, além de coluna de esgoto em condomínios.',
    vizinhos: ['Ouro Preto', 'Manacás', 'Alípio de Melo', 'Paquetá'],
  },
  {
    slug: 'padre-eustaquio',
    prep: 'no',
    nome: 'Padre Eustáquio',
    zona: 'Noroeste',
    sobre:
      'O Padre Eustáquio é um bairro grande e tradicional, com muitas casas, prédios baixos e comércio. Atendemos desde desentupimento de esgoto e caixa de passagem em casas até caixa de gordura em lanchonetes e restaurantes.',
    vizinhos: ['Carlos Prates', 'Caiçara', 'Dom Cabral', 'Coração Eucarístico'],
  },
  {
    slug: 'caicara',
    prep: 'no',
    nome: 'Caiçara',
    zona: 'Noroeste',
    sobre:
      'O Caiçara é residencial, com casas e prédios. Atendemos pias e tanques entupidos, vasos sanitários, ralos e desobstrução da rede de esgoto até a rua.',
    vizinhos: ['Alto dos Caiçaras', 'Padre Eustáquio', 'Santo André', 'Alípio de Melo'],
  },
  {
    slug: 'santa-efigenia',
    prep: 'em',
    nome: 'Santa Efigênia',
    zona: 'Leste',
    sobre:
      'Santa Efigênia reúne a área hospitalar, clínicas, prédios e casas. Atendemos imóveis residenciais e comerciais com desentupimento de vaso sanitário, pia, ralo e coluna de esgoto, a qualquer hora.',
    vizinhos: ['Funcionários', 'Centro', 'Paraíso', 'Santa Tereza'],
  },
  {
    slug: 'santa-tereza',
    prep: 'em',
    nome: 'Santa Tereza',
    zona: 'Leste',
    sobre:
      'Santa Tereza é um bairro tradicional, de casas antigas, bares e restaurantes. Nas casas é comum entupimento na rede de esgoto antiga e na caixa de passagem; nos bares e restaurantes, caixa de gordura cheia.',
    vizinhos: ['Floresta', 'Sagrada Família', 'Horto', 'Santa Efigênia'],
  },
  {
    slug: 'floresta',
    prep: 'na',
    nome: 'Floresta',
    zona: 'Leste',
    sobre:
      'A Floresta, vizinha do Centro, tem casarões, prédios e comércio. Atendemos desentupimento de esgoto, caixa de gordura, pia e vaso sanitário em casas, apartamentos e estabelecimentos comerciais.',
    vizinhos: ['Centro', 'Santa Tereza', 'Colégio Batista', 'Sagrada Família'],
  },
  {
    slug: 'cidade-nova',
    prep: 'na',
    nome: 'Cidade Nova',
    zona: 'Nordeste',
    sobre:
      'A Cidade Nova tem muitos prédios residenciais, casas e comércio. Atendemos pias e ralos entupidos em apartamentos, colunas de esgoto em condomínios e desentupimento de rede e caixa de passagem em casas.',
    vizinhos: ['União', 'Silveira', 'Nova Floresta', 'Ipiranga'],
  },
  {
    slug: 'venda-nova',
    prep: 'em',
    nome: 'Venda Nova',
    zona: 'Venda Nova',
    sobre:
      'A região de Venda Nova é grande e populosa, com muitas casas, comércio e condomínios. Atendemos desentupimento de esgoto, caixa de gordura, caixa de passagem, pia, tanque e vaso sanitário.',
    vizinhos: ['Céu Azul', 'Rio Branco', 'Letícia', 'São João Batista'],
  },
  {
    slug: 'barreiro',
    prep: 'no',
    nome: 'Barreiro',
    zona: 'Barreiro',
    sobre:
      'O Barreiro reúne bairros residenciais, comércio e indústrias. Atendemos casas, prédios e empresas com desentupimento de rede de esgoto, caixa de gordura, pia, ralo e vaso sanitário.',
    vizinhos: ['Diamante', 'Milionários', 'Lindéia', 'Flávio Marques Lisboa'],
  },
];

// "no Centro", "na Savassi", "em Lourdes"
export function noBairro(b: Bairro) {
  return `${b.prep} ${b.nome}`;
}

export function bairroPath(b: Bairro) {
  return `/desentupidora-em-${b.slug}/`;
}

export function bairrosPorZona() {
  return ordemZonas
    .map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona) }))
    .filter((g) => g.bairros.length > 0);
}
