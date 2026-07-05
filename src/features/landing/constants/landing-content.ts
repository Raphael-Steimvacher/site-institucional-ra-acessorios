import balconyDoorImage1 from "@/assets/images/balcão1.jpeg";
import balconyDoorImage2 from "@/assets/images/balcão2.jpeg";
import balconyDoorImage3 from "@/assets/images/balcão3.png";
import showerImage1 from "@/assets/images/box1.png";
import balconyImage from "@/assets/images/glass_balcony_sacadas_1781832750337.jpg";
import showerImage from "@/assets/images/boxDestaque.jpeg";
import glassHandrailImage1 from "@/assets/images/corrimão de vidro1.jpeg";
import glassHandrailImage2 from "@/assets/images/corrimão de vidro2.jpeg";
import facadeImage1 from "@/assets/images/fachada1.jpeg";
import facadeImage2 from "@/assets/images/fachada2.jpeg";
import facadeImage3 from "@/assets/images/fachada3.jpeg";
import windowImage1 from "@/assets/images/janela1.jpeg";
import doorImage1 from "@/assets/images/porta1.jpeg";
import balconyImage1 from "@/assets/images/sacada1.jpeg";
import indoorGlassDoorImage from "@/assets/images/sala.jpeg";
import glassRoofImage1 from "@/assets/images/teto de vidro1.jpeg";
import glassRoofImage2 from "@/assets/images/teto de vidro2.jpeg";
import glassRoofImage3 from "@/assets/images/teto de vidro3.png";
import glassRoofImage4 from "@/assets/images/teto de vidro4.png";
import glassRoofImage5 from "@/assets/images/teto de vidro5.jpeg";

import type {
  BudgetProduct,
  ContactInfo,
  GlassColor,
  MainService,
  ServiceCard,
  WorkSlide,
} from "@/features/landing/types/landing";

export const CONTACT_DATA: ContactInfo = {
  phone: "5511998196902",
  phoneFormatted: "(11) 99819-6902",
  address: "R. Brg. Eduardo Gomes, 80 - Vila Monteiro, Poá - SP, 08557-520",
  addressMapUrl:
    "https://maps.google.com/?q=R.+Brg.+Eduardo+Gomes,+80+-+Vila+Monteiro,+Poa+-+SP,+08557-520",
  hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 13h",
  email: "robertoyaya@gmail.com",
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
    id: "sacadas-2",
    title: "Sacada de Vidro com Vista Livre",
    tag: "Sacadas",
    category: "sacadas",
    description:
      "Fechamento sob medida para proteger a sacada, reduzir entrada de vento e manter a vista valorizada com acabamento discreto.",
    image: balconyImage1,
    specs: [
      "Vidro temperado conforme medidas do vão",
      "Abertura articulada com recolhimento lateral",
      "Perfis de alumínio com acabamento sob medida",
      "Vedação para mais conforto no dia a dia",
    ],
  },
  {
    id: "fachadas-2",
    title: "Fachada de Vidro para Valorização do Imóvel",
    tag: "Fachadas",
    category: "fachadas",
    description:
      "Aplicação em vidro para renovar a frente do imóvel com mais transparência, presença visual e acabamento profissional.",
    image: facadeImage1,
    specs: [
      "Vidro temperado ou laminado conforme projeto",
      "Estrutura com perfis de alumínio reforçados",
      "Acabamento alinhado à identidade da fachada",
      "Projeto sob medida para residências e comércios",
    ],
  },
  {
    id: "fachadas-3",
    title: "Fachada Moderna com Pele de Vidro",
    tag: "Fachadas",
    category: "fachadas",
    description:
      "Composição de alto impacto para trazer luminosidade, sofisticação e leitura arquitetônica contemporânea à construção.",
    image: facadeImage2,
    imageFit: "cover",
    specs: [
      "Vidro laminado ou refletivo sob especificação",
      "Fixação com esquadrias e perfis resistentes",
      "Melhor aproveitamento da luz natural",
      "Instalação planejada para o acabamento final",
    ],
  },
  {
    id: "fachadas-4",
    title: "Fachada Comercial em Vidro",
    tag: "Fachadas",
    category: "fachadas",
    description:
      "Solução elegante para destacar vitrines, entradas e áreas comerciais com transparência e visual mais convidativo.",
    image: facadeImage3,
    specs: [
      "Vidros dimensionados para a aplicação",
      "Perfis com acabamento limpo e resistente",
      "Opções incolor, fumê ou refletiva",
      "Execução sob medida para cada fachada",
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
  {
    id: "box-2",
    title: "Box de Vidro com Acabamento Premium",
    tag: "Box de Banheiro",
    category: "banheiro",
    description:
      "Modelo sob medida para deixar o banheiro mais funcional, bonito e fácil de limpar, com ferragens escolhidas para combinar com o ambiente.",
    image: showerImage1,
    specs: [
      "Vidro temperado de alta resistência",
      "Opções de correr ou abrir conforme espaço",
      "Ferragens cromadas, pretas ou sob medida",
      "Vedação para conter respingos no banho",
    ],
  },
  {
    id: "porta-balcao-1",
    title: "Porta Balcão de Vidro para Ambientes Integrados",
    tag: "Porta Balcão",
    category: "porta-balcao",
    description:
      "Solução elegante para integrar áreas internas e externas, valorizando a iluminação natural, a sensação de amplitude e o acabamento moderno do ambiente.",
    image: balconyDoorImage1,
    specs: [
      "Vidro temperado ou laminado conforme o projeto",
      "Sistema de correr ou abrir com trilhos reforçados",
      "Perfis de alumínio com acabamento sob medida",
      "Vedação eficiente contra vento e respingos",
    ],
  },
  {
    id: "porta-balcao-2",
    title: "Porta Balcão de Vidro com Abertura Ampla",
    tag: "Porta Balcão",
    category: "porta-balcao",
    description:
      "Projeto pensado para conectar varanda, sala e área externa com passagem confortável, visual limpo e excelente entrada de luz.",
    image: balconyDoorImage2,
    specs: [
      "Vidro temperado ou laminado conforme o projeto",
      "Sistema de correr ou abrir com trilhos reforçados",
      "Perfis de alumínio com acabamento sob medida",
      "Vedação eficiente contra vento e respingos",
    ],
  },
  {
    id: "porta-balcao-3",
    title: "Porta Balcão Sob Medida para Mais Luz Natural",
    tag: "Porta Balcão",
    category: "porta-balcao",
    description:
      "Esquadria em vidro para valorizar ambientes integrados com mais iluminação, transparência e acabamento alinhado ao projeto.",
    image: balconyDoorImage3,
    imageFit: "cover",
    specs: [
      "Vidro temperado ou laminado conforme o projeto",
      "Sistema de correr ou abrir com trilhos reforçados",
      "Perfis de alumínio com acabamento sob medida",
      "Vedação eficiente contra vento e respingos",
    ],
  },
  {
    id: "corrimao-vidro-1",
    title: "Corrimão de Vidro com Segurança e Sofisticação",
    tag: "Corrimão de Vidro",
    category: "corrimao-vidro",
    description:
      "Ideal para escadas, mezaninos e áreas elevadas, une proteção, transparência e design moderno sem bloquear a visão do ambiente.",
    image: glassHandrailImage1,
    imageFit: "contain",
    specs: [
      "Vidro temperado ou laminado de segurança",
      "Fixação com botões, torres ou perfis metálicos",
      "Acabamento em inox, alumínio ou pintura especial",
      "Projeto sob medida para escadas e guarda-corpos",
    ],
  },
  {
    id: "corrimao-vidro-2",
    title: "Corrimão de Vidro para Escadas Modernas",
    tag: "Corrimão de Vidro",
    category: "corrimao-vidro",
    description:
      "Acabamento transparente para proteger áreas de circulação com visual leve, seguro e alinhado a projetos contemporâneos.",
    image: glassHandrailImage2,
    imageFit: "contain",
    specs: [
      "Vidro temperado ou laminado de segurança",
      "Fixação com botões, torres ou perfis metálicos",
      "Acabamento em inox, alumínio ou pintura especial",
      "Projeto sob medida para escadas e guarda-corpos",
    ],
  },
  {
    id: "janelas-portas-1",
    title: "Janelas e Portas de Vidro Sob Medida",
    tag: "Janelas e Portas",
    category: "janelas-portas",
    description:
      "Esquadrias em vidro feitas para trazer mais luminosidade, ventilação e elegância ao ambiente, com soluções personalizadas para residências e comércios.",
    image: windowImage1,
    imageFit: "contain",
    specs: [
      "Vidro temperado, laminado ou comum conforme aplicação",
      "Modelos de correr, abrir, basculante ou pivotante",
      "Perfis de alumínio resistentes e acabamento moderno",
      "Medidas personalizadas para cada ambiente",
    ],
  },
  {
    id: "janelas-portas-2",
    title: "Portas de Vidro para Ambientes Mais Claros",
    tag: "Janelas e Portas",
    category: "janelas-portas",
    description:
      "Solução sob medida para entradas e divisões de ambiente, mantendo luminosidade, praticidade de uso e acabamento elegante.",
    image: doorImage1,
    specs: [
      "Vidro temperado, laminado ou comum conforme aplicação",
      "Modelos de correr, abrir, basculante ou pivotante",
      "Perfis de alumínio resistentes e acabamento moderno",
      "Medidas personalizadas para cada ambiente",
    ],
  },
  {
    id: "janelas-portas-3",
    title: "Divisão de Vidro para Ambientes Integrados",
    tag: "Janelas e Portas",
    category: "janelas-portas",
    description:
      "Fechamento interno em vidro para separar espaços sem perder luz, mantendo amplitude visual e um acabamento mais sofisticado.",
    image: indoorGlassDoorImage,
    imageFit: "contain",
    specs: [
      "Vidro temperado, laminado ou comum conforme aplicação",
      "Modelos de correr, abrir, basculante ou pivotante",
      "Perfis de alumínio resistentes e acabamento moderno",
      "Medidas personalizadas para cada ambiente",
    ],
  },
  {
    id: "teto-vidro-1",
    title: "Teto de Vidro para Iluminação Natural",
    tag: "Teto de Vidro",
    category: "teto-vidro",
    description:
      "Cobertura sofisticada que aproveita a luz natural sem perder proteção, criando ambientes mais claros, modernos e valorizados.",
    image: glassRoofImage1,
    specs: [
      "Vidro laminado de segurança",
      "Estrutura metálica ou alumínio reforçado",
      "Vedação contra chuva e infiltrações",
      "Opção com vidro refletivo, fumê ou incolor",
    ],
  },
  {
    id: "teto-vidro-2",
    title: "Cobertura de Vidro com Proteção e Claridade",
    tag: "Teto de Vidro",
    category: "teto-vidro",
    description:
      "Ideal para corredores, áreas gourmet e jardins de inverno, protege o espaço e mantém a sensação de ambiente aberto.",
    image: glassRoofImage2,
    imageFit: "cover",
    specs: [
      "Vidro laminado de segurança",
      "Estrutura metálica ou alumínio reforçado",
      "Vedação contra chuva e infiltrações",
      "Opção com vidro refletivo, fumê ou incolor",
    ],
  },
  {
    id: "teto-vidro-3",
    title: "Teto de Vidro para Áreas Gourmet",
    tag: "Teto de Vidro",
    category: "teto-vidro",
    description:
      "Cobertura planejada para deixar o ambiente mais claro e sofisticado, com estrutura resistente e acabamento sob medida.",
    image: glassRoofImage3,
    specs: [
      "Vidro laminado de segurança",
      "Estrutura metálica ou alumínio reforçado",
      "Vedação contra chuva e infiltrações",
      "Opção com vidro refletivo, fumê ou incolor",
    ],
  },
  {
    id: "teto-vidro-4",
    title: "Teto de Vidro com Acabamento Sob Medida",
    tag: "Teto de Vidro",
    category: "teto-vidro",
    description:
      "Projeto personalizado para coberturas transparentes, combinando iluminação natural, proteção e visual moderno.",
    image: glassRoofImage4,
    specs: [
      "Vidro laminado de segurança",
      "Estrutura metálica ou alumínio reforçado",
      "Vedação contra chuva e infiltrações",
      "Opção com vidro refletivo, fumê ou incolor",
    ],
  },
  {
    id: "teto-vidro-5",
    title: "Cobertura de Vidro para Valorizar o Ambiente",
    tag: "Teto de Vidro",
    category: "teto-vidro",
    description:
      "Solução premium para proteger áreas externas e criar espaços mais claros, confortáveis e integrados ao projeto.",
    image: glassRoofImage5,
    specs: [
      "Vidro laminado de segurança",
      "Estrutura metálica ou alumínio reforçado",
      "Vedação contra chuva e infiltrações",
      "Opção com vidro refletivo, fumê ou incolor",
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

export const GLASS_COLORS: GlassColor[] = [
  {
    key: "incolor",
    name: "Incolor",
  },
  {
    key: "verde",
    name: "Verde",
  },
  {
    key: "fume",
    name: "Fumê",
  },
];

export const BUDGET_PRODUCTS: BudgetProduct[] = [
  {
    key: "box",
    name: "Box de banheiro",
    pricesPerSqm: {
      incolor: 360,
      verde: 400,
      fume: 400,
    },
  },
  {
    key: "guardacorpo",
    name: "Guarda-corpo",
    pricesPerSqm: {
      incolor: 600,
      verde: 700,
      fume: 700,
    },
  },
  {
    key: "janela-porta-porta-balcao",
    name: "Janela, porta e porta balcão",
    pricesPerSqm: {
      incolor: 530,
      verde: 600,
      fume: 600,
    },
  },
];

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, gostaria de fazer um orçamento de vidros.";
