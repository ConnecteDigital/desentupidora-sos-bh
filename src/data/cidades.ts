// Cidades atendidas. Cada uma vira uma página /desentupidora-em-<slug>/.
export interface Cidade {
  slug: string;
  nome: string;
  // Texto exclusivo da página para não repetir conteúdo entre cidades
  sobre: string[];
  // Bairros atendidos citados na página da cidade
  bairros: string[];
}

export const cidades: Cidade[] = [
  {
    slug: 'belo-horizonte',
    nome: 'Belo Horizonte',
    sobre: [
      'Em Belo Horizonte atendemos todas as regionais da cidade: os prédios residenciais e comerciais do Centro-Sul, as casas e condomínios da Pampulha e os bairros grandes e populosos da região Oeste, de Venda Nova e do Barreiro.',
      'Nos apartamentos, os chamados mais comuns são pia de cozinha, vaso sanitário e ralo do box entupidos. Nas casas, rede de esgoto e caixa de gordura. Em bares, restaurantes e lanchonetes, a caixa de gordura cheia é o problema mais frequente.',
    ],
    bairros: ['Centro', 'Savassi', 'Funcionários', 'Lourdes', 'Buritis', 'Prado', 'Pampulha', 'Castelo', 'Padre Eustáquio', 'Santa Tereza', 'Cidade Nova', 'Venda Nova', 'Barreiro'],
  },
  {
    slug: 'contagem',
    nome: 'Contagem',
    sobre: [
      'Contagem, vizinha de BH, é uma das maiores cidades da Grande BH, com muitos bairros residenciais, comércio forte e polos industriais como a Cidade Industrial.',
      'Atendemos casas, prédios, comércios e empresas com desentupimento de esgoto, pia, vaso sanitário, ralo e limpeza de caixa de gordura, 24 horas por dia.',
    ],
    bairros: ['Centro', 'Eldorado', 'Cidade Industrial', 'Riacho das Pedras', 'Ressaca', 'Nacional', 'Petrolândia'],
  },
  {
    slug: 'betim',
    nome: 'Betim',
    sobre: [
      'Betim tem um polo industrial importante e muitos bairros residenciais, com casas, condomínios e comércio. Nas casas, os chamados mais comuns são rede de esgoto e caixa de gordura entupidas; nos apartamentos, pia, vaso e ralo.',
      'Atendemos residências, comércios e empresas em Betim a qualquer hora, inclusive de madrugada, nos fins de semana e feriados.',
    ],
    bairros: ['Centro', 'Jardim Teresópolis', 'Alterosas', 'Citrolândia', 'Imbiruçu', 'Vianópolis'],
  },
  {
    slug: 'nova-lima',
    nome: 'Nova Lima',
    sobre: [
      'Nova Lima, ao sul de BH, reúne condomínios fechados de casas e bairros de prédios altos colados à capital, como Vila da Serra e Vale do Sereno.',
      'Nos condomínios de casas atendemos rede de esgoto e caixa de gordura; nos prédios, pia de cozinha, vaso sanitário e ralo entupidos. Trabalhamos com cuidado para não sujar nem danificar pisos e revestimentos.',
    ],
    bairros: ['Vila da Serra', 'Vale do Sereno', 'Jardim Canadá', 'Alphaville Lagoa dos Ingleses', 'Centro'],
  },
];

export const nomesCidades = 'Belo Horizonte, Contagem, Betim e Nova Lima';

export function cidadePath(c: Cidade) {
  return `/desentupidora-em-${c.slug}/`;
}
