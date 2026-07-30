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
    { id: "docs-cvm", label: "Documentos CVM", labels: {"pt-BR":"Documentos CVM"}, href: "/documentos-cvm.html", pageType: "lista-agrupada", listaAgrupadaStyle: "accordion", listaAgrupadaCategories: [{"id":"Fatos Relevantes","label":"Fatos Relevantes"},{"id":"Comunicados e Fatos","label":"Comunicados ao Mercado","labels":{"pt-BR":"Comunicados ao Mercado"}},{"id":"Atas","label":"Atas"},{"id":"Formulário Cadastral","label":"Formulário Cadastral"},{"id":"mk-8myeyd5","label":"Aviso aos Acionistas","labels":{"pt-BR":"Aviso aos Acionistas"}},{"id":"mk-atq9c73","label":"Assembleias","labels":{"pt-BR":"Assembleias"}},{"id":"mk-fcn3f0z","label":"Formulário Cadastral","labels":{"pt-BR":"Formulário Cadastral"}},{"id":"mk-fhl7w9a","label":"Formulário de Referência","labels":{"pt-BR":"Formulário de Referência"}},{"id":"mk-3q3ucso","label":"Conselho de Administração","labels":{"pt-BR":"Conselho de Administração"}},{"id":"mk-eoyh23d","label":"Resolução CVM 44/2021","labels":{"pt-BR":"Resolução CVM 44/2021"}},{"id":"mk-wu1v8sy","label":"Valores Mobiliários Detidos e Negociados - Resolução CVM n°44","labels":{"pt-BR":"Valores Mobiliários Detidos e Negociados - Resolução CVM n°44"}},{"id":"mk-bz3zzsg","label":"Reunião da Administração","labels":{"pt-BR":"Reunião da Administração"}},{"id":"mk-3whm8et","label":"Políticas","labels":{"pt-BR":"Políticas"}}], children: [] },
    { id: "atas-assembleias", label: "Atas e Assembleias", labels: {"pt-BR":"Atas e Assembleias"}, href: "/atas-assembleias.html", pageType: "lista-agrupada", listaAgrupadaStyle: "accordion", listaAgrupadaCategories: [{"id":"Atas","label":"Atas"},{"id":"Assembleias","label":"Assembleias"}], children: [] },
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

  banner: [
    {
      "id": "b1",
      "imagem": null,
      "content": {
        "en": {
          "cta": "",
          "titulo": "Investor Relations",
          "subtitulo": "Transparency and value creation for our shareholders."
        },
        "pt-BR": {
          "cta": "Saiba mais",
          "titulo": "Relações com Investidores",
          "subtitulo": "Transparência e geração de valor para nossos acionistas."
        }
      }
    }
  ],

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
