export interface WorkSlide {
  id: string;
  title: string;
  tag: string;
  category: 'sacadas' | 'fachadas' | 'banheiro' | 'outros';
  description: string;
  imageUrl: string;
  specs: string[];
}

export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  address: string;
  addressMapUrl: string;
  hours: string;
  email: string;
}

export const WORK_SLIDES: WorkSlide[] = [
  {
    id: 'sacadas-1',
    title: 'Envidraçamento de Sacada Retrátil',
    tag: 'Sacadas',
    category: 'sacadas',
    description: 'Sistema articulado de alta tecnologia com abertura total das lâminas de vidro temperado, proporcionando vedação completa contra ventos e chuvas sem perder a iluminação natural.',
    imageUrl: '/src/assets/images/glass_balcony_sacadas_1781832750337.jpg',
    specs: ['Vidro temperado 8mm ou 10mm', 'Perfis de alumínio com pintura eletrostática', 'Trava de segurança tripla', 'Roldanas com blindagem dupla']
  },
  {
    id: 'fachadas-1',
    title: 'Fachadas glazing de Alto Padrão',
    tag: 'Fachadas',
    category: 'fachadas',
    description: 'Solução sob medida para fachadas comerciais e residenciais, garantindo eficiência térmica, isolamento acústico superior e estética contemporânea espelhada.',
    imageUrl: '/src/assets/images/glass_facade_fachadas_1781832761890.jpg',
    specs: ['Vidro laminado refletivo de alta performance', 'Esquadria de alumínio oculta (pele de vidro)', 'Eficiência contra raios UV', 'Estética imponente e moderna']
  },
  {
    id: 'box-1',
    title: 'Box Elegance para Banheiros Modernos',
    tag: 'Box de Banheiro',
    category: 'banheiro',
    description: 'A sofisticação máxima em box de correr ou abrir. Roldanas aparentes de latão cromado que trazem design suave, resistência extrema e facilidade incomum na hora da limpeza.',
    imageUrl: '/src/assets/images/glass_shower_box_1781832777334.jpg',
    specs: ['Vidro temperado 8mm com película de segurança', 'Metais nobres cromados ou pretos', 'Roldanas robustas deslizantes macias', 'Guarnições anti-impacto de silicone']
  }
];

export const OTHER_SERVICES = [
  {
    title: 'Guarda-Corpos',
    description: 'Segurança absoluta para escadas e sacadas com fixação por torres de aço inox ou embutida no piso, unindo design clean à máxima proteção.',
    specs: ['Vidros laminados/temperados de até 12mm', 'Pontaletes de aço inox 304 escovado', 'Normas técnicas NBR 14718 seguidas rigorosamente']
  },
  {
    title: 'Fechamento de Lavanderias',
    description: 'Otimização inteligente de ambientes internos. Divisórias de vidro jateado, incolor ou acidado que bloqueiam barulho e umidade discretamente.',
    specs: ['Portas de correr bidirecionais', 'Vidro temperado de alta resistência física', 'Aproveitamento perfeito de luz solar']
  },
  {
    title: 'Espelhos Sob Medida',
    description: 'Espelhos com lapidação premium, bisotê e formatos personalizados com iluminação integrada em LED para salas, halls e lavabos.',
    specs: ['Vidro nacional de 4mm ou 6mm sem distorção', 'Tratamento especial anti-oxidação', 'Fixações invisíveis seguras']
  },
  {
    title: 'Escadas de Vidro',
    description: 'Degraus com vidros estruturais de altíssima especificação mecânica, criando um efeito de flutuação inigualável no seu projeto.',
    specs: ['Vidro triplo laminado temperado com face antiderrapante', 'Cálculos de engenharia civil precisos', 'Estruturas de suporte em aço inoxidável']
  }
];

export const CONTACT_DATA: ContactInfo = {
  phone: '5511998196902',
  phoneFormatted: '(11) 99819-6902',
  address: 'R. dos Ipês, nº 320 - Ferraz de Vasconcelos - São Paulo / SP',
  addressMapUrl: 'https://maps.google.com/?q=Rua+dos+Ipes+320+Ferraz+de+Vasconcelos+Sao+Paulo',
  hours: 'Segunda a Sexta: 8h às 18h | Sábado: 8h às 13h',
  email: 'contato@raacessoriosevidracaria.com.br'
};
