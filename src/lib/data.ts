export type Service = {
  slug: string;
  name: string;
  summary: string;
  longDescription: string;
  turnaround: string;
  methods: string[];
  analytes: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "toxicologico-ocupacional",
    name: "Toxicologia Ocupacional",
    summary:
      "Monitoramento de exposição ocupacional com precisão analítica certificada.",
    longDescription:
      "Monitoramos a exposição de colaboradores a agentes químicos críticos utilizando GC-MS/MS e LC-HRMS. Os relatórios incluem faixas de referência internacionais, tendências históricas e recomendações para o departamento de segurança.",
    turnaround: "Entrega em 48h úteis",
    methods: ["GC-MS/MS", "LC-HRMS", "ICP-MS"],
    analytes: ["BTEX", "Metais pesados", "Isocianatos", "Aldeídos"],
    cta: "Solicitar rastreio",
  },
  {
    slug: "drogas-de-abuso",
    name: "Painel Drogas de Abuso",
    summary:
      "Painel ampliado com cadeia de custódia e controles multi-nível para frotas e empresas reguladas.",
    longDescription:
      "Seguimos as diretrizes da ANVISA e DOT/USA para oferecer testes rápidos, com confirmação cromatográfica, rastreabilidade e integração direta com TMS (Toxicology Management Systems).",
    turnaround: "Confirmação em até 24h após triagem",
    methods: ["Imunoensaio de triagem", "GC-MS", "LC-MS/MS"],
    analytes: ["THC", "Cocaína", "Anfetaminas", "Opiáceos", "Metabólitos sintéticos"],
    cta: "Agendar coleta",
  },
  {
    slug: "toxicologia-clinica",
    name: "Toxicologia Clínica",
    summary:
      "Suporte a emergências clínicas com alertas críticos em tempo real para o corpo médico.",
    longDescription:
      "Nossa equipe disponibiliza plantão 24/7 para hospitais e clínicas, com validação médica e dashboards de interpretação. Integrável ao prontuário eletrônico via HL7 ou REST.",
    turnaround: "Resultados críticos em até 2h",
    methods: ["LC-MS/MS", "Espectrofotometria", "Imunoquímica"],
    analytes: ["Paracetamol", "Metanol", "Anticonvulsivantes", "Anticoagulantes"],
    cta: "Ativar protocolo clínico",
  },
  {
    slug: "consultoria-regulatoria",
    name: "Consultoria Regulatória",
    summary:
      "Estruturação de programas de conformidade toxicológica e auditorias independentes.",
    longDescription:
      "Apoiamos times internos na criação de POPs, análise de risco químico e treinamentos técnicos para NR-7 / ANTT. Inclui indicadores, templates de relatórios e revisão anual.",
    turnaround: "Plano customizado em 10 dias",
    methods: ["Workshops técnicos", "Auditorias in loco", "Revisões documentais"],
    analytes: ["Customizados por contrato"],
    cta: "Planejar consultoria",
  },
];

export type Differencial = {
  title: string;
  description: string;
  icon: string;
};

export const differentials: Differencial[] = [
  {
    title: "Instrumentação Tier 1",
    description:
      "GC/LC Triple Quad, ICP-MS e robôs de preparação com monitoramento remoto.",
    icon: "cpu",
  },
  {
    title: "Compliance Garantido",
    description:
      "Acreditações ISO 17025, ANVISA e rastreabilidade digital assinada.",
    icon: "shield-check",
  },
  {
    title: "Time Multidisciplinar",
    description:
      "Toxicologistas, biomédicos e engenheiros químicos com pós-graduação.",
    icon: "users",
  },
  {
    title: "Integrações Abertas",
    description:
      "APIs REST, SSO e conectores com ERPs e plataformas de RH líderes.",
    icon: "workflow",
  },
];

export type Unit = {
  name: string;
  address: string;
  city: string;
  coordinates: [number, number];
  phone: string;
  type: "Laboratório central" | "Posto de coleta";
  mapEmbed: string;
};

export const units: Unit[] = [
  {
    name: "Laboratório Central São Paulo",
    address: "Av. Eusébio Matoso, 890 - Pinheiros",
    city: "São Paulo / SP",
    coordinates: [-23.5719, -46.6975],
    phone: "1130404040",
    type: "Laboratório central",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.873473932853!2d-46.69900912378999!3d-23.57204956264654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce573cc604544f%3A0xc6d970c7c1b3f!2sAv.%20Eus%C3%A9bio%20Matoso%2C%20890%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1708378123456!5m2!1spt-BR!2sbr",
  },
  {
    name: "Posto de Coleta Campinas",
    address: "Rua Doutor Ricardo, 455 - Cambuí",
    city: "Campinas / SP",
    coordinates: [-22.8966, -47.0545],
    phone: "1932022020",
    type: "Posto de coleta",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.2885197515865!2d-47.058013323796635!3d-22.901934579258548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8aab9b23df7%3A0x22c52b76673f!2sR.%20Dr.%20Ricardo%2C%20455%20-%20Cambu%C3%AD%2C%20Campinas%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1708378223233!5m2!1spt-BR!2sbr",
  },
  {
    name: "Posto de Coleta Rio de Janeiro",
    address: "Rua do Carmo, 25 - Centro",
    city: "Rio de Janeiro / RJ",
    coordinates: [-22.9035, -43.1786],
    phone: "2135059090",
    type: "Posto de coleta",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.381361108699!2d-43.180780123812404!3d-22.903516438078262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f59ea76cfb9%3A0x5302d14d8b0c84ce!2sR.%20do%20Carmo%2C%2025%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1708378352005!5m2!1spt-BR!2sbr",
  },
];

export const certifications = [
  "ISO 17025:2017",
  "ANVISA CRBM-VI",
  "Boas Práticas de Distribuição RDC 653",
  "Programa Internacional de Proficiência CAP",
];

export const blogPosts = [
  {
    slug: "monitoramento-inteligente-nr7",
    title: "Monitoramento inteligente para programas NR-7",
    excerpt:
      "Como unificar histórico toxicológico com dashboards e alertas preventivos.",
    category: "Pesquisa aplicada",
    author: "Dra. Júlia Moreira",
    readTime: "6 min",
    publishedAt: "2025-02-14",
  },
  {
    slug: "gcmsms-vs-lcems",
    title: "GC-MS/MS ou LC-EMS? Qual caminho escolher",
    excerpt:
      "Comparativo prático entre técnicas cromatográficas em matrizes complexas.",
    category: "Tecnologia",
    author: "Eng. Felipe Costa",
    readTime: "5 min",
    publishedAt: "2025-01-23",
  },
  {
    slug: "compliance-programas-toxicologicos",
    title: "Checklist de compliance toxicológico para transportadoras",
    excerpt:
      "Pontos críticos avaliados pela ANTT e como evitamos não conformidades.",
    category: "Regulatório",
    author: "Dra. Patrícia Lima",
    readTime: "7 min",
    publishedAt: "2024-12-04",
  },
];

export const partners = [
  "Petrovia",
  "BioAtlas",
  "Energix",
  "Vortex Mining",
  "Aurea Labs",
];

export const whatsappNumber = "+551199998888";

export const heroStats = [
  { label: "amostras/ano", value: "120K+" },
  { label: "SLA crítico", value: "< 2h" },
  { label: "clientes ativos", value: "180+" },
];
