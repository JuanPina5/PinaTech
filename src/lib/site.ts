export const WHATSAPP_NUMBER = '5571988117550';
export const WHATSAPP_DISPLAY = '(71) 98811-7550';
export const WHATSAPP_MESSAGE =
  'Olá! Vim pelo site e gostaria de solicitar um orçamento para o meu projeto.';
export const INSTAGRAM_URL = 'https://instagram.com/';
export const EMAIL = 'contato@pinatech.com.br';

export function waLink(message?: string) {
  const text = encodeURIComponent(message ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
] as const;

export const SERVICES = [
  {
    icon: 'Building2',
    title: 'Sites Institucionais',
    desc: 'Presença digital sólida com identidade forte, performance e credibilidade para sua empresa.',
  },
  {
    icon: 'Rocket',
    title: 'Landing Pages',
    desc: 'Páginas de conversão otimizadas para transformar visitantes em clientes reais.',
  },
  {
    icon: 'UserSquare',
    title: 'Portfólios Profissionais',
    desc: 'Mostre seu trabalho com elegância e organização em um portfólio sob medida.',
  },
  {
    icon: 'HeartPulse',
    title: 'Sites para Clínicas',
    desc: 'Estrutura pensada para clínicas: serviços, agendamento e contato direto com o paciente.',
  },
  {
    icon: 'ShoppingBag',
    title: 'Sites para Lojas',
    desc: 'Catálogo de produtos com filtros, seleção e finalização ágil pelo WhatsApp.',
  },
  {
    icon: 'Bot',
    title: 'Automação Inteligente',
    desc: 'Fluxos automatizados de atendimento e respostas rápidas que economizam seu tempo.',
  },
  {
    icon: 'MessageCircle',
    title: 'Integração com WhatsApp',
    desc: 'Conexão direta com seu WhatsApp para atendimento imediato e sem atrito.',
  },
  {
    icon: 'Search',
    title: 'Otimização SEO',
    desc: 'Estrutura e conteúdo preparados para o Google encontrar e ranquear seu site.',
  },
] as const;

export const DIFFERENTIALS = [
  { icon: 'Sparkles', title: 'Desenvolvimento Avançado', desc: 'Código limpo e técnicas modernas em cada projeto.' },
  { icon: 'Zap', title: 'Sites Rápidos', desc: 'Carregamento veloz e excelente experiência de uso.' },
  { icon: 'Gem', title: 'Design Premium', desc: 'Visual sofisticado que transmite confiança e autoridade.' },
  { icon: 'Smartphone', title: 'Responsivo', desc: 'Perfeito em celular, tablet e computador.' },
  { icon: 'TrendingUp', title: 'SEO', desc: 'Preparado para o Google desde o primeiro clique.' },
  { icon: 'MessageCircle', title: 'Integração WhatsApp', desc: 'Atendimento direto e conversão sem obstáculos.' },
  { icon: 'LifeBuoy', title: 'Suporte Dedicado', desc: 'Acompanhamento próximo antes e depois da entrega.' },
  { icon: 'ShieldCheck', title: 'Segurança', desc: 'Boas práticas de proteção em todos os projetos.' },
] as const;

export const PROCESS = [
  { step: '01', title: 'Conversa Inicial', desc: 'Entendemos seu negócio, objetivos e necessidades em um bate-papo direto.', icon: 'MessageSquare' },
  { step: '02', title: 'Planejamento', desc: 'Definimos estrutura, design e funcionalidades com clareza e cronograma.', icon: 'PenTool' },
  { step: '03', title: 'Desenvolvimento', desc: 'Construímos seu site com performance, SEO e atenção aos detalhes.', icon: 'Code2' },
  { step: '04', title: 'Entrega do Site', desc: 'Publicamos, ajustamos e entregamos pronto para crescer no digital.', icon: 'Rocket' },
] as const;

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  url?: string;
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'fisioporto',
    title: 'FisioPorto — Clínica de Fisioterapia',
    category: 'Site para Clínica',
    description:
      'Site desenvolvido para uma fisioterapeuta, com estrutura institucional moderna, apresentação de serviços, agendamento e integração com WhatsApp.',
    features: [
      'Página institucional',
      'Apresentação de serviços',
      'Agendamento direto',
      'Informações de contato',
      'Design moderno e responsivo',
      'Integração com WhatsApp',
    ],
    tags: ['Institucional', 'Saúde', 'WhatsApp', 'Responsivo'],
    url: 'https://fisioporto.base44.app/',
    accent: 'from-neon/30 to-neon-cyan/10',
  },
  {
    id: 'calcados-atacado',
    title: 'Loja de Calçados no Atacado',
    category: 'E-commerce',
    description:
      'Plataforma de catálogo para uma empresa de venda de calçados no atacado, com filtros avançados e finalização de pedido via WhatsApp.',
    features: [
      'Catálogo de produtos',
      'Filtros por marca',
      'Filtros por cor e tamanho',
      'Filtros por modelo',
      'Seleção de produtos',
      'Finalização via WhatsApp',
    ],
    tags: ['E-commerce', 'Catálogo', 'WhatsApp', 'Filtros'],
    accent: 'from-neon-cyan/25 to-neon/10',
  },
];
