export const SITE = {
  name: 'نِطاق | NITAQ',
  tagline: 'للترصيد المالي',
  phone1: '07817823680',
  phone2: '07905880479',
  phone1Intl: '+9647817823680',
  phone2Intl: '+9647905880479',
  whatsapp: '9647817823680',
  address: 'العراق - الأنبار - الرمادي',
};

export const waLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
