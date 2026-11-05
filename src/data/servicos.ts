import type { IconName } from './icons';
import { site } from './site';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
  destaque?: boolean;
}

const min = site.arrivalMinutes;

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto em BH',
    resumo: 'Rede de esgoto, manilha e tubulação até a rua desobstruídas, sem quebra-quebra sempre que possível.',
    metaDescription: `Desentupimento de esgoto 24h em Belo Horizonte. Rede, manilha e tubulação entupida? Chegamos em até ${min} minutos, com garantia. Chame no WhatsApp.`,
    icon: 'pipe',
    destaque: true,
    intro: [
      'Esgoto voltando pelo ralo, mau cheiro forte ou vaso que enche e não desce são sinais de que a rede de esgoto do imóvel está entupida. A Desentupidora SOS BH atende 24 horas, inclusive fins de semana e feriados, em toda Belo Horizonte.',
      'Localizamos o ponto da obstrução e usamos o equipamento certo para cada tubulação, como máquinas de cabo rotativo, para desobstruir a rede sem quebrar piso nem parede sempre que possível.',
    ],
    sinais: [
      'Esgoto voltando por ralos ou pelo vaso sanitário',
      'Mau cheiro de esgoto dentro de casa ou no quintal',
      'Vários pontos escoando devagar ao mesmo tempo',
      'Barulho de borbulhas (gorgolejo) nos ralos e no vaso',
      'Caixa de passagem transbordando',
    ],
    comoFazemos: [
      'Identificamos em que trecho da rede está a obstrução',
      'Escolhemos o equipamento adequado para o tipo e o diâmetro da tubulação',
      'Desobstruímos e testamos o escoamento com água corrente',
      'Orientamos sobre como evitar que o problema volte',
    ],
    faq: [
      {
        q: 'Precisa quebrar o piso para desentupir o esgoto?',
        a: 'Na grande maioria dos casos, não. As máquinas alcançam a obstrução por dentro da tubulação, pelas caixas de passagem ou pelos ralos. Só indicamos abertura quando há cano quebrado ou colapsado, e sempre com o seu aceite antes.',
      },
      {
        q: 'Atendem esgoto entupido de madrugada?',
        a: `Sim. O atendimento é 24 horas, todos os dias da semana, e chegamos em até ${min} minutos.`,
      },
      {
        q: 'Atendem empresas e condomínios?',
        a: 'Sim. Atendemos casas, apartamentos, condomínios, comércios e empresas em Belo Horizonte.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia em BH',
    resumo: 'Pia da cozinha ou do banheiro parada, com gordura ou resto de comida? Desentupimos na hora.',
    metaDescription: `Desentupimento de pia de cozinha e banheiro 24h em BH. Gordura, resto de comida ou sifão entupido? Chegamos em até ${min} minutos, com garantia.`,
    icon: 'faucet',
    destaque: true,
    intro: [
      'A pia da cozinha é um dos pontos que mais entopem: gordura, borra de café e restos de comida grudam na tubulação e, com o tempo, fecham a passagem da água. No banheiro, o vilão costuma ser cabelo e resíduo de sabonete e pasta de dente.',
      'Desobstruímos o sifão e a tubulação da pia até o ramal de esgoto, sem produtos que danificam os canos, e testamos o escoamento antes de ir embora.',
    ],
    sinais: [
      'Água da pia descendo devagar ou parada na cuba',
      'Mau cheiro saindo pelo ralo da pia',
      'Água voltando no tanque ou em outro ralo quando a pia escoa',
      'Barulho de borbulhas ao escoar a água',
    ],
    comoFazemos: [
      'Verificamos se o entupimento está no sifão ou na tubulação',
      'Desmontamos e limpamos o sifão quando necessário',
      'Desobstruímos a tubulação com equipamento adequado',
      'Testamos o escoamento e conferimos se não há vazamento',
    ],
    faq: [
      {
        q: 'Soda cáustica resolve pia entupida?',
        a: 'Não recomendamos. Soda cáustica pode causar queimaduras, danificar canos e conexões e, misturada à gordura, formar uma massa que piora o entupimento. O mais seguro é desobstruir mecanicamente.',
      },
      {
        q: 'Pia de cozinha entupida pode ser problema na caixa de gordura?',
        a: 'Sim. Em casas, a pia da cozinha costuma ligar na caixa de gordura. Se ela estiver cheia, a pia entope de novo pouco tempo depois. Verificamos isso no atendimento.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário em BH',
    resumo: 'Vaso entupido ou transbordando? Desentupimos sem retirar o vaso sempre que possível.',
    metaDescription: `Desentupimento de vaso sanitário 24h em Belo Horizonte. Vaso transbordando ou que não desce? Chegamos em até ${min} minutos, com garantia.`,
    icon: 'toilet',
    destaque: true,
    intro: [
      'Vaso sanitário entupido é uma das emergências mais desagradáveis da casa. Papel em excesso, lenço umedecido, absorvente, fio dental e objetos que caem no vaso são as causas mais comuns.',
      'Desobstruímos o vaso e o ramal de esgoto com equipamento próprio, sem precisar retirar a louça na maioria dos casos, e deixamos o banheiro limpo.',
    ],
    sinais: [
      'Água do vaso subindo e demorando para descer',
      'Vaso transbordando ao dar descarga',
      'Barulho de borbulhas no vaso quando outro ponto escoa',
      'Mau cheiro de esgoto no banheiro',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está no vaso ou no ramal de esgoto',
      'Desobstruímos com o equipamento adequado, sem quebrar a louça',
      'Testamos várias descargas seguidas',
      'Limpamos o local e orientamos sobre o que não jogar no vaso',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar?',
        a: 'Na maioria dos casos, não. Só é necessário retirar o vaso quando há um objeto preso que não sai por dentro, e isso é combinado com você antes.',
      },
      {
        q: 'Lenço umedecido pode ir no vaso?',
        a: 'Não. Mesmo os que dizem ser “descartáveis” não se desfazem como o papel higiênico e são uma das principais causas de entupimento de vaso e de esgoto.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo e Tanque',
    keyword: 'Desentupimento de ralo e tanque em BH',
    resumo: 'Ralo do box, da área de serviço e tanque entupidos ou com mau cheiro, resolvidos na hora.',
    metaDescription: `Desentupimento de ralo do box, área de serviço e tanque 24h em BH. Água empoçando ou mau cheiro? Chegamos em até ${min} minutos, com garantia.`,
    icon: 'drain',
    intro: [
      'Ralo do box acumulando água, ralo da área de serviço transbordando quando a máquina de lavar esvazia, tanque que não escoa: entupimentos de ralo são comuns e, se demorar, a água pode infiltrar e estragar pisos e paredes.',
      'Limpamos a caixa sifonada e desobstruímos a tubulação dos ralos e do tanque até o esgoto, eliminando também o mau cheiro.',
    ],
    sinais: [
      'Água empoçando no box durante o banho',
      'Ralo da área de serviço transbordando com a máquina de lavar',
      'Tanque escoando devagar',
      'Mau cheiro ou insetos saindo do ralo',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Desobstruímos a tubulação com equipamento adequado',
      'Testamos o escoamento de todos os ralos ligados à caixa',
      'Recolocamos grelhas e tampas e deixamos o local limpo',
    ],
    faq: [
      {
        q: 'Por que o ralo da área de serviço transborda quando a máquina esvazia?',
        a: 'Normalmente a tubulação está parcialmente entupida com sabão, fiapos e sujeira, e não dá vazão ao volume de água da máquina. A desobstrução resolve o problema.',
      },
      {
        q: 'Ralo com mau cheiro é entupimento?',
        a: 'Pode ser entupimento, caixa sifonada suja ou sem água de vedação. Verificamos a causa no atendimento.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Limpeza de Caixa de Gordura',
    keyword: 'Limpeza e desentupimento de caixa de gordura em BH',
    resumo: 'Caixa de gordura cheia, transbordando ou com mau cheiro em casas, restaurantes e condomínios.',
    metaDescription: `Limpeza e desentupimento de caixa de gordura 24h em BH, para casas, restaurantes e condomínios. Chegamos em até ${min} minutos, com garantia.`,
    icon: 'tank',
    intro: [
      'A caixa de gordura segura a gordura da pia da cozinha antes que ela chegue ao esgoto. Quando fica cheia, a pia entope, a caixa transborda e o mau cheiro se espalha pelo quintal ou pela área de serviço.',
      'Fazemos a limpeza da caixa de gordura e a desobstrução das tubulações de entrada e saída, em casas, prédios, restaurantes, bares e lanchonetes.',
    ],
    sinais: [
      'Pia da cozinha entupindo com frequência',
      'Caixa de gordura transbordando',
      'Mau cheiro forte perto da caixa',
      'Gordura acumulada na superfície da caixa',
    ],
    comoFazemos: [
      'Abrimos a caixa e retiramos a gordura e os resíduos acumulados',
      'Desobstruímos as tubulações de entrada e saída',
      'Testamos o escoamento da pia até a caixa',
      'Fechamos a caixa e orientamos sobre a frequência de limpeza',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo a caixa de gordura deve ser limpa?',
        a: 'Depende do uso. Em residências, costuma ser a cada poucos meses; em restaurantes e lanchonetes, com bem mais frequência. Ajudamos a definir a periodicidade certa para o seu imóvel.',
      },
      {
        q: 'Atendem restaurantes fora do horário de funcionamento?',
        a: 'Sim. Como atendemos 24 horas, dá para agendar o serviço antes da abertura ou depois do fechamento.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-coluna-de-predio',
    nome: 'Desentupimento de Coluna de Prédio',
    keyword: 'Desentupimento de coluna de esgoto de prédio em BH',
    resumo: 'Coluna de esgoto entupida em prédios e condomínios, com retorno de esgoto nos andares de baixo.',
    metaDescription: `Desentupimento de coluna de esgoto em prédios e condomínios de BH, 24 horas. Esgoto voltando nos apartamentos? Chegamos em até ${min} minutos.`,
    icon: 'building',
    intro: [
      'Quando a coluna de esgoto de um prédio entope, o esgoto dos andares de cima começa a voltar pelos ralos, pias e vasos dos apartamentos de baixo. É uma emergência que afeta vários moradores ao mesmo tempo.',
      'Atendemos síndicos, administradoras e moradores: localizamos o trecho entupido da coluna (prumada) e fazemos a desobstrução pelo ponto de acesso mais adequado.',
    ],
    sinais: [
      'Esgoto voltando nos apartamentos dos andares mais baixos',
      'Ralos e vasos borbulhando quando outros apartamentos usam a água',
      'Mau cheiro de esgoto em áreas comuns ou no térreo',
      'Vários apartamentos com escoamento lento ao mesmo tempo',
    ],
    comoFazemos: [
      'Identificamos qual coluna e qual trecho estão obstruídos',
      'Acessamos a tubulação pelo ponto mais adequado',
      'Desobstruímos a coluna e testamos o escoamento',
      'Orientamos o condomínio sobre prevenção',
    ],
    faq: [
      {
        q: 'Quem deve chamar a desentupidora: o morador ou o síndico?',
        a: 'Quando o problema é na coluna, que é área comum, normalmente é o condomínio. Mas atendemos tanto o síndico quanto o morador que precisa de ajuda na hora.',
      },
      {
        q: 'Atendem condomínios à noite e nos fins de semana?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-caixa-de-passagem',
    nome: 'Caixa de Passagem e Inspeção',
    keyword: 'Desentupimento de caixa de passagem em BH',
    resumo: 'Caixa de passagem ou de inspeção cheia, transbordando ou com retorno de esgoto no quintal.',
    metaDescription: `Desentupimento de caixa de passagem e caixa de inspeção 24h em Belo Horizonte. Esgoto transbordando no quintal? Chegamos em até ${min} minutos.`,
    icon: 'box',
    intro: [
      'A caixa de passagem (ou de inspeção) junta o esgoto da casa antes de ele seguir para a rede da rua. Quando ela entope, o esgoto transborda no quintal ou na garagem e começa a voltar pelos ralos.',
      'Limpamos a caixa e desobstruímos as tubulações que chegam e que saem dela, até a ligação com a rede pública.',
    ],
    sinais: [
      'Esgoto transbordando pela tampa da caixa',
      'Mau cheiro no quintal ou na garagem',
      'Ralos de casa escoando devagar ao mesmo tempo',
      'Caixa sempre cheia, mesmo sem uso de água',
    ],
    comoFazemos: [
      'Abrimos a caixa e retiramos os resíduos acumulados',
      'Desobstruímos as tubulações de entrada e saída',
      'Testamos o escoamento até a rede da rua',
      'Fechamos a caixa e deixamos o local limpo',
    ],
    faq: [
      {
        q: 'A caixa de passagem entupida pode ser problema na rua?',
        a: 'Pode. Se a obstrução estiver na rede pública, depois da ligação do imóvel, a responsabilidade é da concessionária. No atendimento conseguimos identificar onde está o problema e orientar você.',
      },
    ],
  },
];

export const servicosDestaque = servicos.filter((s) => s.destaque);

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
