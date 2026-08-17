export const SITE = {
  name: "Ontake Sushi",
  shortName: "Ontake",
  tagline: "Alta Gastronomia Japonesa",
  city: "Monte Carmelo",
  state: "MG",
  locationLabel: "Monte Carmelo · MG",
  deliverySince: 2017,
  established: 2019,
  inauguratedOn: "27 de março de 2019",
  description:
    "Experiência japonesa contemporânea em Monte Carmelo. Delivery desde 2017 e restaurante especializado desde 2019.",
  address: {
    street: "R. Estrela do Sul, 115",
    neighborhood: "Batuque",
    city: "Monte Carmelo",
    state: "MG",
    full: "R. Estrela do Sul, 115, Batuque, Monte Carmelo - MG",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=R.+Estrela+do+Sul+115+Batuque+Monte+Carmelo+MG",
    embedUrl:
      "https://www.google.com/maps?q=R.+Estrela+do+Sul+115+Batuque+Monte+Carmelo+MG&output=embed",
  },
  phone: "(34) 99944-2186",
  phoneRaw: "5534999442186",
  phoneUrl: "tel:+5534999442186",
  whatsappUrl: "https://wa.me/5534999442186",
  whatsappOrderUrl:
    "https://wa.me/5534999442186?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido%20no%20Ontake%20Sushi.",
  email: "contato@ontakesushi.com",
  deliveryUrl: "https://pedir.delivery/ontakesushi",
  deliveryTime: "20 a 60 min",
  profileImage:
    "https://images.multipedidos.com.br/profiles/51ccb312dd558d0d15824f4a49b0f5c76a7d5fb4860bac4bba5d93f37d511ed9.jpg",
  coverImage:
    "https://images.multipedidos.com.br/covers/90023adfa75bbffa8f902638f0df26cf89ee3ebfdb36b546e8feb7527b3224c6.jpg",
  instagramUrl: "https://instagram.com/ontakesushi",
  instagramHandle: "ontakesushi",
  deliveryArea: "Monte Carmelo e região",
  hours: {
    dinner: "Segunda a Sábado · 18h às 22h45",
    lunch: "Almoço executivo Qua-Sex · 12h às 15h",
    faq: "Delivery de segunda a sábado, das 18h às 22h45. Domingo fechado. Almoço executivo de quarta a sexta, das 12h às 15h.",
  },
  payment: {
    summary: "Pix, cartão de crédito, cartão de débito e dinheiro, na entrega ou no salão.",
    short: "Pix, cartões e dinheiro",
  },
  rating: {
    score: "4.8",
    label: "4.8 no delivery",
    reviews: "Avaliações de clientes no pedido online",
  },
  siteUrl: import.meta.env.VITE_SITE_URL ?? "",
} as const;

export const FOUNDERS = {
  names: "Cléo & Zezinho",
  role: "Fundadores da casa",
  bio: [
    `Começou em ${SITE.deliverySince}, quando trouxemos para ${SITE.city} um novo conceito de gastronomia japonesa através do delivery.`,
    `Com a crescente aceitação e o carinho dos nossos clientes, percebemos a necessidade de oferecer uma experiência ainda mais completa. Foi assim que, em ${SITE.inauguratedOn}, inauguramos o ${SITE.name}, o único restaurante especializado em comida japonesa da cidade.`,
    "Desde então, nos dedicamos a proporcionar um cardápio que une tradição e inovação, sempre prezando pela qualidade dos ingredientes e pela excelência no preparo.",
    "Nosso ambiente foi cuidadosamente pensado para oferecer conforto e sofisticação, tornando cada visita uma experiência única.",
  ],
} as const;

export const FAQ = [
  {
    q: "Qual o horário de funcionamento?",
    a: SITE.hours.faq,
  },
  {
    q: "Vocês entregam em qual região?",
    a: `Atendemos ${SITE.deliveryArea}. Você também pode pedir pelo delivery online. Consulte a área pelo WhatsApp ${SITE.phone}.`,
  },
  {
    q: "Aceitam reserva?",
    a: `Sim, aceitamos reservas com até 30 dias de antecedência via WhatsApp (${SITE.phone}) ou telefone.`,
  },
  {
    q: "Quais são as formas de pagamento?",
    a: SITE.payment.summary,
  },
  {
    q: "Trabalham com opções vegetarianas?",
    a: "Sim. Temos uma linha completa de pokés, temakis, hossomakis e entradas vegetarianas.",
  },
] as const;

export function pageTitle(page?: string) {
  return page ? `${page} · ${SITE.name}` : `${SITE.name} · ${SITE.tagline}`;
}

export function yearsInBusiness(now = new Date()) {
  return now.getFullYear() - SITE.established;
}

export function formatPrice(price: number, fromPrice?: boolean) {
  if (fromPrice && price <= 0) return "Consulte";
  const value = price.toFixed(2).replace(".", ",");
  return `${fromPrice ? "a partir de " : ""}R$ ${value}`;
}

export function formatMenuPrice(item: { price: number; fromPrice?: boolean }) {
  if (item.fromPrice && item.price <= 0) {
    return { prefix: null as string | null, value: "Consulte" };
  }
  return {
    prefix: item.fromPrice ? "A partir de" : null,
    value: item.price.toFixed(2).replace(".", ","),
  };
}

export function whatsappOrderItem(itemName: string) {
  const text = encodeURIComponent(`Olá! Gostaria de pedir: ${itemName}`);
  return `https://wa.me/${SITE.phoneRaw}?text=${text}`;
}
