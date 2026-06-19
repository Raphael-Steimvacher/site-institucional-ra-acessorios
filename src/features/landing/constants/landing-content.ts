import balconyImage from "@/assets/images/glass_balcony_sacadas_1781832750337.jpg";
import facadeImage from "@/assets/images/glass_facade_fachadas_1781832761890.jpg";
import showerImage from "@/assets/images/glass_shower_box_1781832777334.jpg";

import type {
  ContactInfo,
  GlassType,
  MainService,
  ServiceCard,
  WorkSlide,
} from "@/features/landing/types/landing";

export const CONTACT_DATA: ContactInfo = {
  phone: "5511998196902",
  phoneFormatted: "(11) 99819-6902",
  address: "R. dos Ipês, nº 320 - Ferraz de Vasconcelos - São Paulo / SP",
  addressMapUrl:
    "https://maps.google.com/?q=Rua+dos+Ipes+320+Ferraz+de+Vasconcelos+Sao+Paulo",
  hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 13h",
  email: "contato@raacessoriosevidracaria.com.br",
};

export const WORK_SLIDES: WorkSlide[] = [
  {
    id: "sacadas-1",
    title: "Envidraçamento de Sacada Retrátil",
    tag: "Sacadas",
    category: "sacadas",
    description:
      "Sistema articulado de alta tecnologia com abertura total das lâminas de vidro temperado, proporcionando vedação contra ventos e chuvas sem perder a iluminação natural.",
    image: balconyImage,
    specs: [
      "Vidro temperado 8mm ou 10mm",
      "Perfis de alumínio com pintura eletrostática",
      "Trava de segurança tripla",
      "Roldanas com blindagem dupla",
    ],
  },
  {
    id: "fachadas-1",
    title: "Fachadas Glazing de Alto Padrão",
    tag: "Fachadas",
    category: "fachadas",
    description:
      "Solução sob medida para fachadas comerciais e residenciais, garantindo eficiência térmica, isolamento acústico superior e estética contemporânea.",
    image: facadeImage,
    specs: [
      "Vidro laminado refletivo de alta performance",
      "Esquadria de alumínio oculta",
      "Eficiência contra raios UV",
      "Estética imponente e moderna",
    ],
  },
  {
    id: "box-1",
    title: "Box Elegance para Banheiros Modernos",
    tag: "Box de Banheiro",
    category: "banheiro",
    description:
      "Sofisticação em box de correr ou abrir, com roldanas aparentes, design suave, resistência extrema e limpeza prática.",
    image: showerImage,
    specs: [
      "Vidro temperado 8mm com película de segurança",
      "Metais cromados ou pretos",
      "Roldanas robustas e deslizamento macio",
      "Guarnições anti-impacto de silicone",
    ],
  },
];

export const MAIN_SERVICES: MainService[] = [
  {
    title: "Sacadas / Envidraçamentos",
    icon: "layers",
    colorClassName: "from-emerald-500/20 to-teal-500/5",
    description:
      "Fechamentos modernos com isolamento acústico e proteção contra intempéries.",
  },
  {
    title: "Fachadas Glazing / Pele de Vidro",
    icon: "building",
    colorClassName: "from-blue-500/20 to-sky-500/5",
    description:
      "Vidro refletivo imponente para edifícios e residências de alto padrão.",
  },
  {
    title: "Fechamento de Lavanderias",
    icon: "columns",
    colorClassName: "from-orange-500/20 to-amber-500/5",
    description:
      "Divisão sutil de ambientes internos garantindo luz e bloqueio de odores.",
  },
  {
    title: "Guarda-Corpos Estáveis",
    icon: "shield",
    colorClassName: "from-amber-500/20 to-yellow-500/5",
    description:
      "Guarda-corpos robustos que cumprem normas de engenharia e segurança.",
  },
];

export const OTHER_SERVICES: ServiceCard[] = [
  {
    title: "Guarda-Corpos",
    description:
      "Segurança para escadas e sacadas com fixação por torres de aço inox ou embutida no piso, unindo design clean à máxima proteção.",
    specs: [
      "Vidros laminados/temperados de até 12mm",
      "Pontaletes de aço inox 304 escovado",
      "Normas técnicas NBR 14718",
    ],
  },
  {
    title: "Fechamento de Lavanderias",
    description:
      "Otimização inteligente de ambientes internos com divisórias de vidro jateado, incolor ou acidado.",
    specs: [
      "Portas de correr bidirecionais",
      "Vidro temperado de alta resistência",
      "Aproveitamento de luz solar",
    ],
  },
  {
    title: "Espelhos Sob Medida",
    description:
      "Espelhos com lapidação premium, bisotê e formatos personalizados com iluminação integrada em LED.",
    specs: [
      "Vidro nacional de 4mm ou 6mm sem distorção",
      "Tratamento anti-oxidação",
      "Fixações invisíveis seguras",
    ],
  },
  {
    title: "Escadas de Vidro",
    description:
      "Degraus com vidros estruturais de alta especificação mecânica, criando efeito de flutuação no projeto.",
    specs: [
      "Vidro triplo laminado temperado",
      "Face antiderrapante",
      "Estruturas de suporte em aço inoxidável",
    ],
  },
];

export const GLASS_TYPES: GlassType[] = [
  {
    key: "box",
    name: "Box de Banheiro",
    basePricePerSqm: 420,
    recommendation: "Vidro temperado incolor 8mm de alta resistência mecânica.",
    minHeight: 1.8,
    maxHeight: 2.2,
  },
  {
    key: "sacada",
    name: "Envidraçamento de Sacadas",
    basePricePerSqm: 850,
    recommendation:
      "Vidro laminado temperado 10mm estrutural com perfil articulado.",
    minHeight: 1.4,
    maxHeight: 2.6,
  },
  {
    key: "guardacorpo",
    name: "Guarda-Corpos",
    basePricePerSqm: 980,
    recommendation:
      "Vidro triplo laminado estrutural fixado em torre de aço AISI 304.",
    minHeight: 0.9,
    maxHeight: 1.2,
  },
  {
    key: "espelho",
    name: "Espelho Lapidado Premium",
    basePricePerSqm: 380,
    recommendation: "Espelho nacional de 4mm com lapidação ou bisotê.",
    minHeight: 0.5,
    maxHeight: 2.4,
  },
];

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, gostaria de fazer um orçamento de vidros.";
