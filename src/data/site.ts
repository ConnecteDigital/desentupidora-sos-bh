// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// WhatsApp: 55 + DDD + número, só dígitos (o WhatsApp exige o 55)
const WHATSAPP_DIGITS = '5531999221810';

// Número discado pelo botão "Ligar": 0 + DDD + número, como o cliente pediu
const TEL_DIGITS = '031999221810';

export const site = {
  name: 'Desentupidora SOS BH',
  legalName: 'SOS BH Desentupidora',
  // PROVISÓRIO: confirmar o domínio (também em astro.config.mjs e public/robots.txt)
  url: 'https://desentupidorasosbh.com.br',
  city: 'Belo Horizonte',
  state: 'MG',
  phoneDigits: WHATSAPP_DIGITS,
  // Exibição: 0 31 99922-1810
  phoneDisplay: `0 ${TEL_DIGITS.slice(1, 3)} ${TEL_DIGITS.slice(3, 8)}-${TEL_DIGITS.slice(8)}`,
  tel: `tel:${TEL_DIGITS}`,
  // PROVISÓRIO: confirmar com o cliente o tempo real de chegada
  arrivalMinutes: 30,
  description:
    'Desentupidora 24 horas em Belo Horizonte, Contagem, Betim e Nova Lima. Desentupimento de esgoto, pia, vaso sanitário, ralo e caixa de gordura. Chegamos em até 30 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora SOS BH e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Tag do Google Ads (gtag.js). Vazio = não instala.
export const googleTagId = 'AW-18558765460';

// Contêiner do Google Tag Manager. Vazio = não instala.
export const gtmId = 'GTM-KSTXXQSL';
