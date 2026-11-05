// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// Formato: 55 + DDD + número, só dígitos
// PROVISÓRIO: trocar pelo WhatsApp/telefone real da SOS BH antes de publicar
const PHONE_DIGITS = '5531900000000';

export const site = {
  name: 'Desentupidora SOS BH',
  legalName: 'SOS BH Desentupidora',
  // PROVISÓRIO: confirmar o domínio (também em astro.config.mjs e public/robots.txt)
  url: 'https://desentupidorasosbh.com.br',
  city: 'Belo Horizonte',
  state: 'MG',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (31) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
  // PROVISÓRIO: confirmar com o cliente o tempo real de chegada
  arrivalMinutes: 30,
  description:
    'Desentupidora 24 horas em Belo Horizonte. Desentupimento de esgoto, pia, vaso sanitário, ralo, caixa de gordura e coluna de prédio. Chegamos em até 30 minutos, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da Desentupidora SOS BH e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Tag do Google (gtag.js). Deixe vazio até o cliente mandar o ID (ex.: 'AW-123456789').
export const googleTagId = '';

// Contêiner do Google Tag Manager (ex.: 'GTM-XXXXXXX'). Vazio = não instala.
export const gtmId = '';
