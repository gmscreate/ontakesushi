export type MenuCategory =
  | "Barato do Dia"
  | "Entradas"
  | "Combos"
  | "Executivos"
  | "Porções"
  | "Risotos"
  | "Yakissoba"
  | "Uramaki"
  | "Hossomaki"
  | "Hot"
  | "Temaki"
  | "Niguiri"
  | "Joys"
  | "Sashimis"
  | "Pokés"
  | "Sushirrito"
  | "Sobremesas"
  | "Bebidas"
  | "Oniguiri"
  | "Caldos"
  | "Extras";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  fromPrice?: boolean;
  category: MenuCategory;
  image: string;
  tags?: string[];
  featured?: boolean;
};

export const CATEGORIES: MenuCategory[] = [
  "Barato do Dia",
  "Entradas",
  "Combos",
  "Executivos",
  "Porções",
  "Risotos",
  "Yakissoba",
  "Uramaki",
  "Hossomaki",
  "Hot",
  "Temaki",
  "Niguiri",
  "Joys",
  "Sashimis",
  "Pokés",
  "Sushirrito",
  "Oniguiri",
  "Caldos",
  "Extras",
  "Sobremesas",
  "Bebidas",
];

export const MENU: MenuItem[] = [
  /* -------- Barato do Dia -------- */
  {
    id: "mp-1219343",
    name: "Barato do Dia (sábado)",
    description: "4 uramaki filadélfia, 2 uramaki califórnia, 2 joy cream, 2 niguiri salmão.",
    price: 44.9,
    category: "Barato do Dia",
    image: "/menu/mp-1219343.jpg",
    tags: ["promoção"],
  },
  {
    id: "mp-1219364",
    name: "Barato do Dia (terça)",
    description:
      "2 uramaki skin couve, 2 uramaki skin batata doce, 2 uramaki Califórnia, 4 hot roll.",
    price: 34.9,
    category: "Barato do Dia",
    image: "/menu/mp-1219364.jpg",
    tags: ["promoção"],
  },
  {
    id: "mp-1219365",
    name: "Barato do Dia (quarta)",
    description:
      "2 uramaki skin cheese, 2 uramaki skin alho, 2 uramaki kani, 2 uramaki Califórnia e 2 hot.",
    price: 34.9,
    category: "Barato do Dia",
    image: "/menu/mp-1219365.jpg",
    tags: ["promoção"],
  },
  {
    id: "mp-1219366",
    name: "Barato do Dia (quinta)",
    description:
      "2 niguiri skin, 2 hossomaki, 2 uramaki Califórnia, 2 uramaki filadélfia, 2 uramaki skin cheese.",
    price: 29.9,
    category: "Barato do Dia",
    image: "/menu/mp-1219366.jpg",
    tags: ["promoção"],
  },
  {
    id: "mp-1225656",
    name: "Barato do Dia (sexta)",
    description: "4 joy, 2 niguiri salmão, 2 hossomaki e 2 sashimi.",
    price: 44.9,
    category: "Barato do Dia",
    image: "/menu/mp-1225656.jpg",
    tags: ["promoção"],
  },
  {
    id: "mp-1182681",
    name: "Combo Hot Filadélfia (10 peças)",
    description: "Arroz, alga, salmão, cream cheese, empanado e frito.",
    price: 34.9,
    category: "Barato do Dia",
    image: "/menu/mp-1182681.jpg",
  },
  {
    id: "mp-1182688",
    name: "Combo Hot Couve (10 peças)",
    description:
      "Arroz, alga, salmão, cream cheese e couve crispy, empanado e frito com adicional de cream cheese, tarê e couve crispy.",
    price: 44.9,
    category: "Barato do Dia",
    image: "/menu/mp-1182688.jpg",
  },
  {
    id: "mp-1182686",
    name: "Combo Hot Alho (10 peças)",
    description:
      "Arroz, alga, salmão, cream cheese empanado e frito com adicional de cream cheese, tarê e alho poró.",
    price: 44.9,
    category: "Barato do Dia",
    image: "/menu/mp-1182686.jpg",
  },
  {
    id: "mp-1182692",
    name: "Combo Hot Camarão (10 peças)",
    description:
      "Arroz, alga, salmão, cream cheese e couve crispy, empanado e frito com adicional de cream cheese, tarê e camarão.",
    price: 54.9,
    category: "Barato do Dia",
    image: "/menu/mp-1182692.jpg",
  },
  {
    id: "mp-1318872",
    name: "Combo Uramaki Filadélfia (10 peças)",
    description: "10 unidades de uramaki filadélfia.",
    price: 34.9,
    category: "Barato do Dia",
    image: "/menu/mp-1318872.jpg",
  },

  /* -------- Entradas -------- */
  {
    id: "mp-255981",
    name: "Sunomono 100g",
    description: "Pepino, gergelim, cenoura e tempero para sushi.",
    price: 12.9,
    category: "Entradas",
    image: "/menu/mp-255981.jpg",
  },
  {
    id: "mp-255994",
    name: "Carpaccio de Salmão",
    description:
      "15 fatias finas de salmão, temperadas com saquê mirim, gengibre, pimenta, shoyu e temperos. Aproximadamente 150g no total.",
    price: 56,
    category: "Entradas",
    image: "/menu/mp-255994.jpg",
  },
  {
    id: "mp-255996",
    name: "Carpaccio de Tilápia 250g",
    description:
      "20 fatias finas de tilápia, saquê mirim, gengibre, pimenta shoyu e temperos. Aproximadamente 250g no total.",
    price: 35.9,
    category: "Entradas",
    image: "/menu/mp-255996.jpg",
  },
  {
    id: "mp-255983",
    name: "Ceviche de Salmão 200g",
    description:
      "Salmão em cubos marinado no limão, cebola roxa, pimentão amarelo e vermelho, pimenta dedo-de-moça e temperos da casa. Aproximadamente 200g no total.",
    price: 54.9,
    category: "Entradas",
    image: "/menu/mp-255983.jpg",
  },
  {
    id: "mp-261216",
    name: "Ceviche de Tilápia 250g",
    description:
      "Tilápia em cubos marinado no limão, cebola roxa, pimentão amarelo e vermelho, pimenta dedo de moça e temperos da casa. Aproximadamente 250g no total.",
    price: 43.9,
    category: "Entradas",
    image: "/menu/mp-261216.jpg",
  },
  {
    id: "mp-280436",
    name: "Ceviche de Tilápia 125g",
    description:
      "Tilápia em cubos marinado no limão, cebola roxa, pimentão amarelo e vermelho, pimenta dedo de moça e temperos da casa. Aproximadamente 125g no total.",
    price: 22.9,
    category: "Entradas",
    image: "/menu/mp-280436.jpg",
  },
  {
    id: "mp-586080",
    name: "Shimeji 150g",
    description: "Shimeji, manteiga, shoyu, saquê culinário. Aproximadamente 150g no total.",
    price: 19.9,
    category: "Entradas",
    image: "/menu/mp-586080.jpg",
  },
  {
    id: "mp-321980",
    name: "Anéis de Lula (3 unid.)",
    description: "Anéis de lula empanado e frito.",
    price: 15.9,
    category: "Entradas",
    image: "/menu/mp-321980.jpg",
  },
  {
    id: "mp-847542",
    name: "Monte SEU OVO",
    description: "Monte seu ovo de sushi com os recheios de sua preferência.",
    price: 22,
    fromPrice: true,
    category: "Entradas",
    image: "/menu/mp-847542.jpg",
  },
  {
    id: "mp-1326484",
    name: "Salmão Grelhado 150g",
    description: "Posta de salmão grelhado. Aproximadamente 150g.",
    price: 33,
    category: "Entradas",
    image: "/menu/mp-1326484.jpg",
  },

  /* -------- Combos -------- */
  {
    id: "mp-256105",
    name: "Combo 1 - 12 peças",
    description: "4 joy cream, 4 uramaki filadélfia, 4 hot filadélfia. 2 shoyu, 2 tarê, 1 hashi.",
    price: 49.9,
    category: "Combos",
    image: "/menu/mp-256105.jpg",
  },
  {
    id: "mp-256108",
    name: "Combo 2 -12 peças",
    description:
      "4 sashimi, 4 uramaki filadélfia, 4 hot filadélfia. Acompanha molhos: 2 shoyu, 2 tarê, 1 hashi.",
    price: 49.9,
    category: "Combos",
    image: "/menu/mp-256108.jpg",
  },
  {
    id: "mp-256110",
    name: "Combo 3 -12 peças",
    description:
      "4 uramaki couve, 4 uramaki alho, 4 hot filadélfia. Acompanha molhos 2 shoyu, 2 tarê, 1 hashi.",
    price: 49.9,
    category: "Combos",
    image: "/menu/mp-256110.jpg",
  },
  {
    id: "mp-256111",
    name: "Combo 4 - 20 peças",
    description:
      "4 sashimi salmão, 4 uramaki filadélfia, 4 hossomaki, 4 hot filadélfia, 2 joy, 2 niguiri salmão. Acompanha molhos: 3 shoyu, 3 tarê, 2 hashi.",
    price: 83.9,
    category: "Combos",
    image: "/menu/mp-256111.jpg",
    featured: true,
  },
  {
    id: "mp-591419",
    name: "Combo 5 -24 peças",
    description:
      "6 sashimi de salmão, 2 joy, 2 niguiri selado, 2 niguiri salmão, 4 hot filadélfia, 4 uramaki filadélfia, 4 hossomaki. Acompanha molhos: 4 shoyu, 4 tarê, 2 hashi.",
    price: 94.9,
    category: "Combos",
    image: "/menu/mp-591419.jpg",
    featured: true,
  },
  {
    id: "mp-660682",
    name: "Combo 6 - 30 peças",
    description:
      "6 uramaki skin com couve crispy, 6 uramaki skin com alho poró, 6 uramaki de salmão duplo, 6 hot filadélfia, 6 uramaki filadélfia, 4 shoyu, 4 tarê, 3 hashi.",
    price: 124.9,
    category: "Combos",
    image: "/menu/mp-660682.jpg",
  },
  {
    id: "mp-1446480",
    name: "Combinado 7",
    description:
      "6 sashimi de salmão, 6 sashimi de tilápia, 4 hossomaki, 4 uramaki alho poró, 4 uramaki couve crispy, 4 uramaki filadélfia, 10 hot filadélfia, 4 joy cream, 4 niguiri salmão. Acompanha molhos: 8 shoyu, 8 tarê, 4 hashi.",
    price: 189,
    category: "Combos",
    image: "/menu/mp-1446480.jpg",
    featured: true,
  },
  {
    id: "mp-256120",
    name: "Combinado 8 - 62 peças",
    description:
      "10 sashimi salmão, 6 uramaki skin couve, 6 uramaki salmão duplo, 6 uramaki filadélfia, 6 uramaki camarão, 6 niguiri salmão, 6 hossomaki, 10 hot filadélfia, 6 joy. Acompanha molhos: 10 shoyu, 10 tarê, 6 hashi.",
    price: 289.9,
    category: "Combos",
    image: "/menu/mp-256120.jpg",
    featured: true,
  },

  /* -------- Executivos -------- */
  {
    id: "mp-746425",
    name: "Executivo de Tilápia",
    description:
      "Arroz branco, tilápia grelhada, salada tropical (alface, cenoura, tomate e fruta da estação) ou legumes na manteiga (repolho, cenoura, brócolis ou couve-flor).",
    price: 39.9,
    category: "Executivos",
    image: "/menu/mp-746425.jpg",
  },
  {
    id: "mp-746440",
    name: "Executivo de Salmão",
    description:
      "Arroz branco, salmão selado na manteiga com molho de maracujá e salada tropical (alface, cenoura, tomate e fruta da estação) ou legumes na manteiga (repolho, cenoura, brócolis ou couve-flor).",
    price: 49.9,
    category: "Executivos",
    image: "/menu/mp-746440.jpg",
  },
  {
    id: "mp-903656",
    name: "Enamorado Salmão",
    description:
      "Gohan temperado, tomate cereja, salmão ao molho do chefe com raspas de limão siciliano.",
    price: 54.9,
    category: "Executivos",
    image: "/menu/mp-903656.jpg",
    featured: true,
  },
  {
    id: "mp-903665",
    name: "Enamorado Tilápia",
    description:
      "Gohan temperado, tomate cereja, tilápia ao molho do chefe com raspas de limão siciliano.",
    price: 49.9,
    category: "Executivos",
    image: "/menu/mp-903665.jpg",
  },

  /* -------- Porções -------- */
  {
    id: "mp-280430",
    name: "Camarão Empanado Inteira 300 GR",
    description:
      "Camarão empanado com farinha panko. Acompanha molho. Aproximadamente 300g no total.",
    price: 114.9,
    category: "Porções",
    image: "/menu/mp-280430.jpg",
  },
  {
    id: "mp-256129",
    name: "Camarão Empanado MEIA 200GR",
    description:
      "Camarão empanado com farinha panko. Acompanha molho. Aproximadamente 200g no total.",
    price: 89.9,
    category: "Porções",
    image: "/menu/mp-256129.jpg",
  },
  {
    id: "mp-256132",
    name: "Frango Empanado Inteira 600g",
    description:
      "Frango cortado em tiras, empanado e frito. Acompanha molho e batata frita. Aproximadamente 600g de frango in natura.",
    price: 59.9,
    category: "Porções",
    image: "/menu/mp-256132.jpg",
  },
  {
    id: "mp-487787",
    name: "Frango Empanado MEIA 300g",
    description:
      "Frango cortado em tiras, empanado e frito. Acompanha molho e batata frita. Aproximadamente 300g de frango in natura.",
    price: 39.9,
    category: "Porções",
    image: "/menu/mp-487787.jpg",
  },
  {
    id: "mp-256131",
    name: "FILÉ de Tilápia Inteira 600g",
    description:
      "Filé de tilápia empanado e frito. Acompanha molho e batata frita. Aproximadamente 600g de tilápia in natura.",
    price: 79.9,
    category: "Porções",
    image: "/menu/mp-256131.jpg",
  },
  {
    id: "mp-290213",
    name: "Filé de Tilápia Meia Porção 300g",
    description:
      "Filé de tilápia empanado e frito. Acompanha molho e batata frita. Aproximadamente 300g de filé de tilápia.",
    price: 49.9,
    category: "Porções",
    image: "/menu/mp-290213.jpg",
  },
  {
    id: "mp-256127",
    name: "Batata Simples Inteira 600g",
    description: "Batata frita. Acompanha molho. Aproximadamente 600g in natura.",
    price: 34.9,
    category: "Porções",
    image: "/menu/mp-256127.jpg",
  },
  {
    id: "mp-290362",
    name: "Batata MEIA Porção 300g",
    description: "Batata frita. Acompanha molho. Aproximadamente 300g de batata in natura.",
    price: 24.9,
    category: "Porções",
    image: "/menu/mp-290362.jpg",
  },
  {
    id: "mp-1331386",
    name: "Bolinho de Carne SECA 20 unid.",
    description: "20 bolinhos de carne seca, empanado e frito. Acompanha molho e batata frita.",
    price: 54.9,
    category: "Porções",
    image: "/menu/mp-1331386.jpg",
  },
  {
    id: "mp-1331389",
    name: "Bolinho de Bacalhau 20 unid.",
    description:
      "Delicie-se com nossos irresistíveis Bolinhos de Bacalhau! Preparados com a receita tradicional, cada mordida é uma explosão de sabor e crocância. Acompanha um molho especial que realça ainda mais o gosto do bacalhau e uma porção de batata frita, perfeita para complementar sua experiência. Uma opção deliciosa para compartilhar ou saborear sozinho! Venha experimentar e encantar seu paladar!",
    price: 59.9,
    category: "Porções",
    image: "/menu/mp-1331389.jpg",
  },

  /* -------- Risotos -------- */
  {
    id: "mp-650405",
    name: "Risoto de Alho Poró e Salmão",
    description: "Risoto de alho poró e salmão selado. Aproximadamente 500g.",
    price: 58.9,
    category: "Risotos",
    image: "/menu/mp-650405.jpg",
  },
  {
    id: "mp-1400745",
    name: "Risoto de Cogumelo",
    description: "Risoto cremoso de cogumelos. Aproximadamente 500g.",
    price: 49.9,
    category: "Risotos",
    image: "/menu/mp-1400745.jpg",
  },
  {
    id: "mp-1294248",
    name: "Risoto de Frango",
    description: "Aproximadamente 500g",
    price: 44.9,
    category: "Risotos",
    image: "/menu/mp-1294248.jpg",
  },
  {
    id: "mp-913319",
    name: "Risoto de Camarão",
    description: "Risoto de camarão. Aproximadamente 500g.",
    price: 58.9,
    category: "Risotos",
    image: "/menu/mp-913319.jpg",
  },

  /* -------- Yakissoba -------- */
  {
    id: "mp-256161",
    name: "Yakissoba de Frango",
    description: "Macarrão com molho à base de shoyu, frango e legumes. (80 g de proteína).",
    price: 35.9,
    category: "Yakissoba",
    image: "/menu/mp-256161.jpg",
  },
  {
    id: "mp-401722",
    name: "Yakissoba de Carne",
    description: "Macarrão com molho à base de shoyu, carne e legumes. (80 g de proteína).",
    price: 39.9,
    category: "Yakissoba",
    image: "/menu/mp-401722.jpg",
  },
  {
    id: "mp-256164",
    name: "Yakissoba Misto",
    description:
      "Macarrão com molho à base de shoyu, frango e carne bovina e legumes. (80 g de frango e 80g de carne).",
    price: 44.9,
    category: "Yakissoba",
    image: "/menu/mp-256164.jpg",
  },
  {
    id: "mp-256166",
    name: "Yakissoba de Camarão",
    description: "Macarrão com molho à base de shoyu, camarão e legumes. (70g de proteína)",
    price: 49.9,
    category: "Yakissoba",
    image: "/menu/mp-256166.jpg",
  },

  /* -------- Uramaki -------- */
  {
    id: "mp-256006",
    name: "Uramaki Califórnia",
    description: "Sushi com arroz por fora, alga, recheio de pepino, manga, kani.",
    price: 8,
    category: "Uramaki",
    image: "/menu/mp-256006.jpg",
  },
  {
    id: "mp-256017",
    name: "Uramaki Pepino",
    description: "Sushi com arroz por fora, alga, recheio de pepino e cream cheese.",
    price: 8,
    category: "Uramaki",
    image: "/menu/mp-256017.jpg",
  },
  {
    id: "mp-256016",
    name: "Uramaki Pepino e Manga",
    description: "Sushi com arroz por fora, alga, recheio de manga.",
    price: 8,
    category: "Uramaki",
    image: "/menu/mp-256016.jpg",
  },
  {
    id: "mp-256014",
    name: "Uramaki Morango",
    description: "Sushi com arroz por fora, alga, recheio de morango e cream cheese.",
    price: 9,
    category: "Uramaki",
    image: "/menu/mp-256014.jpg",
  },
  {
    id: "mp-256009",
    name: "Uramaki Filadélfia",
    description: "Sushi com arroz por fora, alga, recheio de salmão e cream cheese.",
    price: 9,
    category: "Uramaki",
    image: "/menu/mp-256009.jpg",
  },
  {
    id: "mp-256011",
    name: "Uramaki Filadélfia Salmão Duplo",
    description:
      "Sushi com arroz por fora, alga, recheio de salmão e cream cheese. Cobertura fina de salmão.",
    price: 11,
    category: "Uramaki",
    image: "/menu/mp-256011.jpg",
  },
  {
    id: "mp-256024",
    name: "Uramaki Tokubetsu",
    description:
      "Sushi com arroz por fora, alga, recheio de salmão e cream cheese. Batidinho de salmão, cream cheese e cebolinha por cima.",
    price: 12,
    category: "Uramaki",
    image: "/menu/mp-256024.jpg",
  },
  {
    id: "mp-1002872",
    name: "Uramaki Filadélfia Alho",
    description:
      "Sushi com arroz por fora e alga por dentro, recheado com salmão e cream cheese. Cobertura de cream cheese e alho poró.",
    price: 12,
    category: "Uramaki",
    image: "/menu/mp-1002872.jpg",
  },
  {
    id: "mp-256023",
    name: "Uramaki Skin Cheese",
    description: "Sushi com arroz por fora, alga, recheio de salmão grelhado e cream cheese.",
    price: 9,
    category: "Uramaki",
    image: "/menu/mp-256023.jpg",
  },
  {
    id: "mp-256003",
    name: "Uramaki Alho PORÓ",
    description:
      "Sushi com arroz por fora, alga, recheio de salmão grelhado, cream cheese e alho poró.",
    price: 11,
    category: "Uramaki",
    image: "/menu/mp-256003.jpg",
  },
  {
    id: "mp-256019",
    name: "Uramaki Pimenta Biquinho",
    description:
      "Sushi com arroz por fora, alga, recheio de salmão grelhado, cream cheese e pimenta biquinho.",
    price: 10,
    category: "Uramaki",
    image: "/menu/mp-256019.jpg",
  },
  {
    id: "mp-256008",
    name: "Uramaki Couve Crispy",
    description:
      "Sushi com arroz por fora, alga, recheio de salmão grelhado, cream cheese e couve crispy.",
    price: 10,
    category: "Uramaki",
    image: "/menu/mp-256008.jpg",
  },
  {
    id: "mp-256007",
    name: "Uramaki Camarão",
    description: "Sushi com arroz por fora, alga, recheio de salmão, cream cheese e camarão.",
    price: 14,
    category: "Uramaki",
    image: "/menu/mp-256007.jpg",
  },
  {
    id: "mp-548064",
    name: "Hossomaki",
    description: "Sushi enrolado com arroz por dentro e alga por fora.",
    price: 7.5,
    category: "Hossomaki",
    image: "/menu/mp-548064.jpg",
  },

  /* -------- Hot -------- */
  {
    id: "mp-256025",
    name: "Hot Filadélfia",
    description: "Arroz, alga, salmão, cream cheese.",
    price: 8.5,
    category: "Hot",
    image: "/menu/mp-256025.jpg",
  },
  {
    id: "mp-256028",
    name: "Hot Alho",
    description:
      "Arroz, alga, salmão, cream cheese empanado e frito com adicional de cream cheese, tarê e alho poró.",
    price: 11,
    category: "Hot",
    image: "/menu/mp-256028.jpg",
  },
  {
    id: "mp-256026",
    name: "Hot Couve",
    description:
      "Arroz, alga, salmão, cream cheese e couve crispy, empanado e frito com adicional de cream cheese, tarê e couve crispy.",
    price: 11,
    category: "Hot",
    image: "/menu/mp-256026.jpg",
  },
  {
    id: "mp-256030",
    name: "Hot Cheese",
    description: "Arroz, alga, salmão, cream cheese.",
    price: 10,
    category: "Hot",
    image: "/menu/mp-256030.jpg",
  },
  {
    id: "mp-778045",
    name: "Hot com Camarão",
    description: "Arroz, alga, salmão, cream cheese e camarão, empanado e frito.",
    price: 14,
    category: "Hot",
    image: "/menu/mp-778045.jpg",
  },
  {
    id: "mp-623377",
    name: "Hot Cream Cheese com Pimenta Biquinho",
    description: "Arroz, alga, salmão, cream cheese e pimenta biquinho, empanado e frito.",
    price: 9.5,
    category: "Hot",
    image: "/menu/mp-623377.jpg",
  },
  {
    id: "mp-309084",
    name: "Hot Especial Cream Cheese",
    description: "Hot Filadélfia partido ao meio, com cream cheese.",
    price: 17.9,
    category: "Hot",
    image: "/menu/mp-309084.jpg",
  },
  {
    id: "mp-309086",
    name: "Hot Especial Alho PORÓ",
    description: "Hot Filadélfia partido ao meio com cream cheese, tarê e alho poró.",
    price: 21.9,
    category: "Hot",
    image: "/menu/mp-309086.jpg",
  },
  {
    id: "mp-309087",
    name: "Hot Especial com Couve Crispy",
    description: "Hot filadélfia partido ao meio com couve crispy.",
    price: 21.9,
    category: "Hot",
    image: "/menu/mp-309087.jpg",
  },
  {
    id: "mp-778048",
    name: "Hot Especial com Camarão",
    description: "Hot filadélfia especial partido ao meio, com cream cheese, tarê e camarão.",
    price: 32.9,
    category: "Hot",
    image: "/menu/mp-778048.jpg",
    featured: true,
  },

  /* -------- Temaki -------- */
  {
    id: "mp-416623",
    name: "Temaki Filadélfia",
    description: "Sushi em forma de cone, alga, arroz, salmão, cream cheese. Aproximadamente 185G.",
    price: 36.9,
    category: "Temaki",
    image: "/menu/mp-416623.jpg",
    featured: true,
  },
  {
    id: "mp-261364",
    name: "Temaki Filadélfia sem Arroz",
    description:
      "Sushi em forma de cone, recheado com cream cheese e salmão. Aproximadamente 145g.",
    price: 46.9,
    category: "Temaki",
    image: "/menu/mp-261364.jpg",
  },
  {
    id: "mp-1304641",
    name: "Temaki Salmão com Arroz",
    description:
      "Sushi em forma de cone, alga, arroz, salmão, cebolinha e gergelim. Aproximadamente 185g.",
    price: 38.9,
    category: "Temaki",
    image: "/menu/mp-1304641.jpg",
  },
  {
    id: "mp-256052",
    name: "Temaki Salmão sem Arroz",
    description:
      "Sushi em forma de cone, alga, salmão, cebolinha e gergelim. Aproximadamente 185g.",
    price: 46.9,
    category: "Temaki",
    image: "/menu/mp-256052.jpg",
  },
  {
    id: "mp-430965",
    name: "Temaki Camarão",
    description:
      "Sushi em forma de cone, alga, arroz, cream cheese e camarão. Aproximadamente 200g.",
    price: 49.9,
    category: "Temaki",
    image: "/menu/mp-430965.jpg",
  },
  {
    id: "mp-256054",
    name: "Temaki Skin com Arroz",
    description:
      "Sushi em forma de cone, alga, arroz, salmão grelhado, cream cheese, cebolinha e gergelim. Aproximadamente 185g.",
    price: 36.9,
    category: "Temaki",
    image: "/menu/mp-256054.jpg",
  },
  {
    id: "mp-1304877",
    name: "Temaki Skin sem Arroz",
    description:
      "Sushi em forma de cone, alga, salmão grelhado, cream cheese, cebolinha e gergelim. Aproximadamente 145g.",
    price: 46.9,
    category: "Temaki",
    image: "/menu/mp-1304877.jpg",
  },
  {
    id: "mp-256057",
    name: "Temaki Hot Filadélfia",
    description:
      "Sushi em forma de cone, alga, arroz, salmão, cream cheese; empanado e frito. Aproximadamente 200g.",
    price: 39.9,
    category: "Temaki",
    image: "/menu/mp-256057.jpg",
  },
  {
    id: "mp-1304878",
    name: "Temaki Hot Filadélfia sem Arroz",
    description:
      "Sushi em forma de cone, alga, salmão, cream cheese; empanado e frito. Aproximadamente 145g.",
    price: 49.9,
    category: "Temaki",
    image: "/menu/mp-1304878.jpg",
  },
  {
    id: "mp-903143",
    name: "Temaki Hot Skin",
    description:
      "Sushi em forma de cone, alga, arroz, cream cheese e salmão grelhado. Empanado e frito. Aproximadamente 200g.",
    price: 39.9,
    category: "Temaki",
    image: "/menu/mp-903143.jpg",
  },
  {
    id: "mp-449853",
    name: "Temaki Hot Camarão",
    description:
      "Sushi em forma de cone, alga, arroz, cream cheese e camarão. Empanado e frito. Aproximadamente 200g.",
    price: 49.9,
    category: "Temaki",
    image: "/menu/mp-449853.jpg",
  },
  {
    id: "mp-256058",
    name: "Temaki Supremo",
    description:
      "Sushi em forma de cone, recheado com cream cheese e camarão. Aproximadamente 220g.",
    price: 59.9,
    category: "Temaki",
    image: "/menu/mp-256058.jpg",
  },
  {
    id: "mp-1231586",
    name: "Temaki Montagem",
    description: "Temaki personalizado. Escolha os recheios na hora do pedido.",
    price: 30,
    category: "Temaki",
    image: "/menu/mp-1231586.jpg",
  },

  /* -------- Niguiri -------- */
  {
    id: "mp-256078",
    name: "Niguiri de Salmão",
    description: "Fatia de salmão sobre o bolinho de arroz.",
    price: 13,
    category: "Niguiri",
    image: "/menu/mp-256078.jpg",
  },
  {
    id: "mp-256080",
    name: "Niguiri de Tilápia",
    description: "Fatia de tilápia sobre o bolinho de arroz.",
    price: 12,
    category: "Niguiri",
    image: "/menu/mp-256080.jpg",
  },
  {
    id: "mp-256085",
    name: "Niguiri de Salmão Flambado",
    description: "Fatia de salmão flambado sobre o bolinho de arroz.",
    price: 14,
    category: "Niguiri",
    image: "/menu/mp-256085.jpg",
  },

  /* -------- Joys -------- */
  {
    id: "mp-256062",
    name: "Joy Cream com Arroz 2 unid.",
    description: "2 peças de joy de salmão com arroz e com recheio do melhor cream cheese.",
    price: 13,
    category: "Joys",
    image: "/menu/mp-256062.jpg",
  },
  {
    id: "mp-256064",
    name: "Joy sem Arroz 2 unid.",
    description: "Fatia de salmão com cream cheese.",
    price: 13,
    category: "Joys",
    image: "/menu/mp-256064.jpg",
  },
  {
    id: "mp-256066",
    name: "Joy Flambado sem Arroz 2 unid.",
    description:
      "2 peças de joy de salmão sem arroz, com recheio de cream cheese, finalizadas com maçarico.",
    price: 14,
    category: "Joys",
    image: "/menu/mp-256066.jpg",
  },
  {
    id: "mp-256069",
    name: "Joy Flambado sem Arroz Couve 4 unid.",
    description: "Fatia de salmão com cream cheese maçaricado e couve crispy.",
    price: 29.9,
    category: "Joys",
    image: "/menu/mp-256069.jpg",
  },
  {
    id: "mp-1304886",
    name: "Joy Flambado sem Arroz e Alho 4 unid.",
    description: "Fatia de salmão com cream cheese maçaricado e alho poró.",
    price: 29.9,
    category: "Joys",
    image: "/menu/mp-1304886.jpg",
  },
  {
    id: "mp-256067",
    name: "Joy Flambado sem Arroz com Geléia. 4 unid.",
    description:
      "Fatia de salmão com cream cheese maçaricado com geléia de maracujá ou pimenta com abacaxi.",
    price: 29.9,
    category: "Joys",
    image: "/menu/mp-256067.jpg",
  },
  {
    id: "mp-256071",
    name: "Joy sem Arroz com Camarão 4 unid.",
    description: "Fatia de salmão com cream cheese e camarão.",
    price: 36.9,
    category: "Joys",
    image: "/menu/mp-256071.jpg",
  },
  {
    id: "mp-256073",
    name: "Gunkan com Camarão (4 unid.)",
    description: "4 peças de gunkan com salmão, cream cheese e camarão.",
    price: 37.9,
    category: "Joys",
    image: "/menu/mp-256073.jpg",
  },
  {
    id: "mp-1251354",
    name: "Joy ao Molho do Chefe 4 unid.",
    description: "Joy sem arroz maçaricado ao molho do chefe.",
    price: 39.9,
    category: "Joys",
    image: "/menu/mp-1251354.jpg",
  },

  /* -------- Sashimis -------- */
  {
    id: "mp-256036",
    name: "Sashimi de ATUM",
    description: "Fatia fina de atum.",
    price: 11,
    category: "Sashimis",
    image: "/menu/mp-256036.jpg",
  },
  {
    id: "mp-256040",
    name: "Sashimi de Salmão",
    description: "Fatia fina de salmão",
    price: 10,
    category: "Sashimis",
    image: "/menu/mp-256040.jpg",
  },
  {
    id: "mp-256041",
    name: "Sashimi de Salmão Maçaricado",
    description: "Fatia fina de salmão maçaricada.",
    price: 12,
    category: "Sashimis",
    image: "/menu/mp-256041.jpg",
  },
  {
    id: "mp-256043",
    name: "Sashimi de Tilápia com Fatias de Limão",
    description: "Fatias finas de tilápia intercalada com fatia fina de limão.",
    price: 9,
    category: "Sashimis",
    image: "/menu/mp-256043.jpg",
  },
  {
    id: "mp-903670",
    name: "Sashimi Flambado ao Molho do Chefe",
    description: "Sashimi flambado ao molho do chefe com raspas de limão siciliano.",
    price: 12,
    category: "Sashimis",
    image: "/menu/mp-903670.jpg",
  },

  /* -------- Pokés -------- */
  {
    id: "mp-548677",
    name: "Monte SEU POKE",
    description: "Escolha base, proteínas e acompanhamentos.",
    price: 0,
    fromPrice: true,
    category: "Pokés",
    image: "/menu/mp-548677.jpg",
  },
  {
    id: "mp-741341",
    name: "POKE de Salmão em Cubos",
    description:
      "Gohan (150g) ou mix de folhas 120G, salmão em cubos (100g), cream cheese (65g), sunomono (45g), manga (45g), alface (25g) e gergelim (5g) Aproximadamente 430g.",
    price: 49.9,
    category: "Pokés",
    image: "/menu/mp-741341.jpg",
    featured: true,
  },
  {
    id: "mp-621082",
    name: "POKE de Frango",
    description:
      "Gohan (150g) ou mix de folhas 120g, cream cheese (65g), frango (100g), cenoura (45g), sunomono (45g), tomate cereja (45g), gergelim (5g). Aproximadamente 450g.",
    price: 39.9,
    category: "Pokés",
    image: "/menu/mp-621082.jpg",
  },
  {
    id: "mp-741342",
    name: "POKE de Salmão Grelhado",
    description:
      "Gohan (150g) ou mix de folhas (120g), salmão grelhado (100g), cream cheese (65g), cebola roxa (25g), sunomono (45g), cenoura (45g) e cebolinha (5g). Aproximadamente 430g.",
    price: 49.9,
    category: "Pokés",
    image: "/menu/mp-741342.jpg",
  },
  {
    id: "mp-741343",
    name: "POKE de Ceviche",
    description:
      "Gohan (150g), ceviche de tilápia (100g), cream cheese (65g), tomate (45g), sunomono (45g), alho poró crispy (20g) e gengibre (15g) Aproximadamente 440g.",
    price: 49.9,
    category: "Pokés",
    image: "/menu/mp-741343.jpg",
  },

  /* -------- Sushirrito -------- */
  {
    id: "mp-640487",
    name: "Sushirrito de Salmão",
    description:
      "Sushirrito de salmão com alga e arroz japonês, recheado com salmão fresco, cream cheese, alface, sunomono, patê de kani e cebola roxa.",
    price: 39.9,
    category: "Sushirrito",
    image: "/menu/mp-640487.jpg",
  },

  /* -------- Sobremesas -------- */
  {
    id: "mp-256090",
    name: "Hot Sobremesa Nutella e Morango 2 unid.",
    description: "2 unidades de hot roll doce recheado com Nutella e morango.",
    price: 9,
    category: "Sobremesas",
    image: "/menu/mp-256090.jpg",
  },

  /* -------- Bebidas -------- */
  {
    id: "mp-256168",
    name: "Cerveja Black Princess",
    description: "Cerveja Black Princess 350ml.",
    price: 11,
    category: "Bebidas",
    image: "/menu/mp-256168.jpg",
  },
  {
    id: "mp-256170",
    name: "Cerveja Heineken LONG NECK",
    description: "Cerveja Heineken long neck 330ml.",
    price: 12,
    category: "Bebidas",
    image: "/menu/mp-256170.jpg",
  },
  {
    id: "mp-256179",
    name: "Schweppes",
    description: "Refrigerante Schweppes 350ml.",
    price: 7,
    category: "Bebidas",
    image: "/menu/mp-256179.jpg",
  },
  {
    id: "mp-256180",
    name: "Refrigerante LATA",
    description: "Refrigerante em lata. Consulte sabores disponíveis.",
    price: 0,
    fromPrice: true,
    category: "Bebidas",
    image: "/menu/mp-256180.jpg",
  },
  {
    id: "mp-256182",
    name: "Refrigerante 1 Litro",
    description: "Refrigerante 1 litro. Consulte sabores disponíveis.",
    price: 0,
    fromPrice: true,
    category: "Bebidas",
    image: "/menu/mp-256182.jpg",
  },
  {
    id: "mp-256183",
    name: "ÁGUA Mineral com GÁS",
    description: "Água mineral com gás 500ml.",
    price: 5,
    category: "Bebidas",
    image: "/menu/mp-256183.jpg",
  },
  {
    id: "mp-256185",
    name: "ÁGUA Mineral sem GÁS",
    description: "Água mineral sem gás 500ml.",
    price: 5,
    category: "Bebidas",
    image: "/menu/mp-256185.jpg",
  },
  {
    id: "mp-1233885",
    name: "SUCO Limão 1 Litro",
    description: "SUCO LIMÃO 1 LITRO",
    price: 30,
    category: "Bebidas",
    image: "/menu/mp-1233885.jpg",
  },
  {
    id: "mp-259753",
    name: "SUCO Natural Limão 500ml",
    description: "SUCO NATURAL LIMÃO 500ml.",
    price: 15,
    category: "Bebidas",
    image: "/menu/mp-259753.jpg",
  },
  {
    id: "mp-318125",
    name: "Cerveja Petra Long Neck",
    description: "Cerveja Petra long neck 330ml.",
    price: 8,
    category: "Bebidas",
    image: "/menu/mp-318125.jpg",
  },
  {
    id: "mp-318126",
    name: "Cerveja Black Princess Long Neck",
    description: "Cerveja Black Princess long neck 330ml.",
    price: 9,
    category: "Bebidas",
    image: "/menu/mp-318126.jpg",
  },
  {
    id: "mp-576581",
    name: "Suco Abacaxi com Hortelã 500ml",
    description: "Suco natural de abacaxi com hortelã 500ml.",
    price: 15,
    category: "Bebidas",
    image: "/menu/mp-576581.jpg",
  },
  {
    id: "mp-606968",
    name: "Suco Laranja 500ml(apenas para delivery)",
    description: "Suco natural de laranja 500ml. Disponível apenas para delivery.",
    price: 15,
    category: "Bebidas",
    image: "/menu/mp-606968.jpg",
  },
  {
    id: "mp-1312053",
    name: "Stella Pure Gold Long Neck",
    description: "Cerveja Stella Pure Gold long neck 330ml.",
    price: 12,
    category: "Bebidas",
    image: "/menu/mp-1312053.jpg",
  },

  /* -------- Oniguiri -------- */
  {
    id: "mp-1251192",
    name: "Oniguiri de Salmão",
    description:
      "Arroz japonês recheado, (salmão, cream cheese e cebolinha) envolto em alga nori crocante.",
    price: 16,
    category: "Oniguiri",
    image: "/menu/mp-1251192.jpg",
  },
  {
    id: "mp-1254746",
    name: "Oniguiri de Atum com Maionese",
    description: "Arroz japonês recheado, (atum com maionese) envolto com alga nori crocante.",
    price: 16,
    category: "Oniguiri",
    image: "/menu/mp-1254746.jpg",
  },
  {
    id: "mp-1258811",
    name: "Oniguiri de Frango com Kimchi",
    description: "Arroz japonês recheado, (frango com kimchi) envolto com alga nori crocante.",
    price: 16,
    category: "Oniguiri",
    image: "/menu/mp-1258811.jpg",
  },

  /* -------- Caldos -------- */
  {
    id: "mp-455711",
    name: "Caldo de Salmão",
    description: "Caldo de salmão (500ml). Acompanha torradas.",
    price: 18.9,
    category: "Caldos",
    image: "/menu/mp-455711.jpg",
  },
  {
    id: "mp-455719",
    name: "Caldo de Salmão com Camarão",
    description: "Caldo de salmão com camarão (500ml). Acompanha torradas.",
    price: 24.9,
    category: "Caldos",
    image: "/menu/mp-455719.jpg",
  },

  /* -------- Extras -------- */
  {
    id: "mp-256092",
    name: "TARÊ Sache 6,50 ML",
    description: "Sachê de tarê 6,5ml.",
    price: 1,
    category: "Extras",
    image: "/menu/mp-256092.jpg",
  },
  {
    id: "mp-256094",
    name: "Sachê de Shoyo 8 ML",
    description: "Sachê de shoyu 8ml.",
    price: 1,
    category: "Extras",
    image: "/menu/mp-256094.jpg",
  },
  {
    id: "mp-256096",
    name: "Gengibre 40g",
    description: "Gengibre 40g.",
    price: 2.5,
    category: "Extras",
    image: "/menu/mp-256096.jpg",
  },
  {
    id: "mp-256103",
    name: "Couve Crispy",
    description: "Couve crispy porção extra.",
    price: 8,
    category: "Extras",
    image: "/menu/mp-256103.jpg",
  },
  {
    id: "mp-256101",
    name: "Alho PORÓ",
    description: "Alho poró porção extra.",
    price: 8,
    category: "Extras",
    image: "/menu/mp-256101.jpg",
  },
  {
    id: "mp-256099",
    name: "Wasabi 10g",
    description: "Wasabi 10g.",
    price: 2.5,
    category: "Extras",
    image: "/menu/mp-256099.jpg",
  },
  {
    id: "mp-1012222",
    name: "Gohan Temperado (100g)",
    description: "Arroz japonês temperado.",
    price: 12,
    category: "Extras",
    image: "/menu/mp-1012222.jpg",
  },
  {
    id: "mp-1157584",
    name: "TAXA de Rolha",
    description: "Taxa cobrada para consumo de vinho não oriundos do estabelecimento.",
    price: 20,
    category: "Extras",
    image: "/menu/mp-1157584.jpg",
  },
];

export function sortMenuItems(items: MenuItem[]) {
  const categoryOrder = new Map(CATEGORIES.map((category, index) => [category, index]));
  const menuOrder = new Map(MENU.map((item, index) => [item.id, index]));

  return [...items].sort((a, b) => {
    const categoryDiff =
      (categoryOrder.get(a.category) ?? Number.MAX_SAFE_INTEGER) -
      (categoryOrder.get(b.category) ?? Number.MAX_SAFE_INTEGER);
    if (categoryDiff !== 0) return categoryDiff;
    return (menuOrder.get(a.id) ?? 0) - (menuOrder.get(b.id) ?? 0);
  });
}

export function groupMenuItemsByCategory(items: MenuItem[]) {
  const sorted = sortMenuItems(items);

  return CATEGORIES.map((category) => ({
    category,
    items: sorted.filter((item) => item.category === category),
  })).filter((group) => group.items.length > 0);
}

const BARATO_DIA_BY_WEEKDAY: Record<string, string> = {
  "quarta-feira": "mp-1219365",
  "quinta-feira": "mp-1219366",
  sábado: "mp-1219343",
  "sexta-feira": "mp-1225656",
  "terça-feira": "mp-1219364",
};

const SITE_TIMEZONE = "America/Sao_Paulo";

export function getWeekdayInSiteTimezone(date = new Date()) {
  return date.toLocaleDateString("pt-BR", { timeZone: SITE_TIMEZONE, weekday: "long" });
}

export function isTodaysBaratoDoDia(item: MenuItem, date = new Date()) {
  if (item.category !== "Barato do Dia") return false;
  const todayId = BARATO_DIA_BY_WEEKDAY[getWeekdayInSiteTimezone(date)];
  return todayId === item.id;
}

export function isMenuItemDestaque(item: MenuItem, date = new Date()) {
  if (item.category === "Barato do Dia") return isTodaysBaratoDoDia(item, date);
  return item.featured === true;
}
