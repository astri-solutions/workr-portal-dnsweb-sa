// scripts/site.config.js
// Gerado pelo Workr Lite CMS — não editar manualmente.
export const siteConfig = {

  // Ligado via Painel de Controle (super_admin) — quando true, page.js
  // mostra só uma tela de aviso e não inicializa o resto do site.
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
    secondary: "#616161",
    tertiary:  "#faa600",
  },

  fonts: {
    display: "Nunito",
    body:    "Nunito",
  },

  ticker: {
    type:      "iframe",
    iframeUrl: "",
    items: [
      { symbol: 'WRLT3', price: 'R$ 00,00', change: '0,00%', direction: 'up' }
    ],
  },

  nav: [
    { id: "docs-cvm", label: "Documentos CVM", labels: {"pt-BR":"Documentos CVM"}, href: "/documentos-cvm.html", pageType: "lista-agrupada", listaAgrupadaStyle: "accordion", children: [] },
    { id: "atas-assembleias", label: "Atas e Assembleias", labels: {"pt-BR":"Atas e Assembleias"}, href: "/atas-assembleias.html", pageType: "lista-agrupada", listaAgrupadaStyle: "accordion", children: [] },
    { id: "central-resultados", label: "Resultados", href: "/central-resultados.html", children: [] },
    { id: "fale-ri", label: "Fale com RI", href: "/fale-com-ri.html", children: [] },
    { id: "mailing", label: "Mailing", href: "/mailing.html", children: [] },
    { id: "gnaegf7", label: "Central de Resultados", labels: {"pt-BR":"Central de Resultados"}, href: "/gnaegf7.html", pageType: "tabela-resultados", children: [] },
    { id: "99h5foc", label: "Quem Somos", labels: {"pt-BR":"Quem Somos"}, href: "/99h5foc.html", pageType: "tabela", children: [] },
  ],

  empresas: [
    { id: "principal-1785175971015", label: "DNSWEB SA", short: "D" }
  ],

  header: { variant: 'tabmenu' },

  languages: ["pt-BR","en","es"],

  topbar: {
    ri: { label: "Relações com Investidores", url: "/" },
    institucional: { label: "Institucional", url: "#" },
    showTicker: false,
  },

  restrictedNav: [],

  footer: {
    variant: "full",
    model: "completo",
    email: "",
    content: {"pt-BR":{"address":"","phone":"","hours":"","copyright":"©Copyright DNSWEB SA 2026","disclaimer":"As informações contidas neste site são de caráter meramente informativo e não constituem oferta de valores mobiliários."}},
    social: { linkedin: "#", instagram: "#", facebook: "#" },
    legalLinks: [
      { label: "Termos e Condições", href: "/termos-e-condicoes.html" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade.html" },
      { label: "Definições de Cookies", href: "/definicao-de-cookies.html" }
    ],
  },

  splash: {
    enabled: false,
    size: 'md',
    titulo: '',
    texto: '',
    conteudo: '',
    legenda: '',
    buttons: [],
  },

  cookies: {
    enabled: true,
    layout: 'full',
    theme: 'light',
    title: 'Utilizamos cookies',
    description: 'Usamos cookies para melhorar sua experiência.',
    acceptLabel: 'Aceitar todos',
    rejectLabel: 'Rejeitar',
    showReject: true,
    showCustomize: false,
  },

  errorPages: [],

  banner: [],

  // Home hero shortcuts (Banner com navbar) — null = derive from siteConfig.nav.
  home: {
    shortcuts: null,
  },

  supabase: {
    url:      "https://mmhuwlpsgnvoxyuofliq.supabase.co",
    anonKey:  "sb_publishable_BBSPbQc2kZngiK45ecfXaA_X4NANiGj",
    portalId: "120cb5ee-77bc-4c8e-9499-0c2df9119d8d",
  },

};
