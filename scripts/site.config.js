// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  maintenance: false,

  company: {
    name:        "DNSWEB SA",
    nameShort:   "DNSWEB SA",
    description: 'Relações com Investidores — DNSWEB SA.',
    logoOriginal: '/assets/logotipo/logotipo-original.svg',
    logoNegative: '/assets/logotipo/logotipo-negative.svg',
    logoContrast: '/assets/logotipo/logotipo-negative.svg',
    favicon:      '/favicon.png',
  },

  colors: {
    primary:   "#91ce3e",
    secondary: "#e68900",
    tertiary:  "#808080",
  },

  fonts: {
    display: "lora",
    body:    "nunito",
  },

  ticker: {
    type:      "iframe",
    iframeUrl: "",
    items: [],
  },

  nav: [
    { id: "docs-cvm", label: "Documentos CVM", href: "/documentos-cvm.html", children: [] },
    { id: "atas-assembleias", label: "Atas e Assembleias", href: "/atas-assembleias.html", children: [] },
    { id: "central-resultados", label: "Resultados", href: "/central-resultados.html", children: [] },
    { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
    { id: "mailing", label: "Mailing", href: "/mailing.html", children: [] },
  ],

  empresas: [
    { id: 'principal', label: "DNSWEB SA", short: 'D' },
  ],

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "120cb5ee-77bc-4c8e-9499-0c2df9119d8d",
  },

  header: { variant: 'tabmenu' },

  seo: {
    title:             "DNSWEB SA - Relações com Investidores",
    description:       "Descrição do site de Relações com os Investidores da DNSWEB S.A.",
    googleAnalyticsId: "21212121",
    clarityId:         "21212121",
  },

  contact: {
    email: "d.sousa@astri.solutions",
  },

  languages: ["pt-BR","en","es"],

  topbar: {
    ri: { label: 'Relações com Investidores', url: '/' },
    institucional: { label: 'Institucional', url: '#' },
    showTicker: true,
  },

  restrictedNav: [],

  footer: {
    variant:   'simple',
    address:   "",
    email:     "",
    phone:     "",
    hours:     "",
    copyright: "©Copyright DNSWEB SA 2026",
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
    legalText: "As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários.",
  },

};
