const TYPO_FIXES = [
  [/\b[Rr]oz,\b/g, "Arroz,"],
  [/\b[Rr]oz /g, "Arroz "],
  [/\bcryspi\b/gi, "crispy"],
  [/\bcrispi\b/gi, "crispy"],
  [/\bcrean\b/gi, "cream"],
  [/\bfiladéfia\b/gi, "filadélfia"],
  [/\bfiladelfia\b/gi, "filadélfia"],
  [/\bAproxidamente\b/g, "Aproximadamente"],
  [/\bAproximadamente(\d)/g, "Aproximadamente $1"],
  [/\bmacarujá\b/gi, "maracujá"],
  [/\bgergilim\b/gi, "gergelim"],
  [/\bGoham\b/g, "Gohan"],
  [/\bmaionee\b/gi, "maionese"],
  [/\bWASSABI\b/g, "Wasabi"],
  [/\b,pimentão\b/g, ", pimentão"],
  [/\broxa,pimentão\b/gi, "roxa, pimentão"],
  [/\bcalifornia\b/gi, "Califórnia"],
  [/\bhot holl\b/gi, "hot roll"],
  [/\bempanada e frita\b/gi, "empanado e frito"],
  [/\btemperados com\b/gi, "temperadas com"],
  [/\bcamarão legumes\b/gi, "camarão e legumes"],
  [/\s{2,}/g, " "],
  [/\s+\./g, "."],
  [/\s+,/g, ","],
];

const DESCRIPTION_OVERRIDES = {
  "mp-255994":
    "15 fatias finas de salmão, temperadas com saquê mirim, gengibre, pimenta, shoyu e temperos. Aproximadamente 150g no total.",
  "mp-255983":
    "Salmão em cubos marinado no limão, cebola roxa, pimentão amarelo e vermelho, pimenta dedo-de-moça e temperos da casa. Aproximadamente 200g no total.",
  "mp-280430":
    "Camarão empanado com farinha panko. Acompanha molho. Aproximadamente 300g no total.",
  "mp-487787":
    "Frango cortado em tiras, empanado e frito. Acompanha molho e batata frita. Aproximadamente 300g de frango in natura.",
  "mp-256132":
    "Frango cortado em tiras, empanado e frito. Acompanha molho e batata frita. Aproximadamente 600g de frango in natura.",
  "mp-290362": "Batata frita. Acompanha molho. Aproximadamente 300g de batata in natura.",
  "mp-256127": "Batata frita. Acompanha molho. Aproximadamente 600g in natura.",
  "mp-256166": "Macarrão com molho à base de shoyu, camarão e legumes. (70g de proteína)",
  "mp-256052": "Sushi em forma de cone, alga, salmão, cebolinha e gergelim. Aproximadamente 185g.",
  "mp-1304641":
    "Sushi em forma de cone, alga, arroz, salmão, cebolinha e gergelim. Aproximadamente 185g.",
  "mp-430965": "Sushi em forma de cone, alga, arroz, cream cheese e camarão. Aproximadamente 200g.",
  "mp-256054":
    "Sushi em forma de cone, alga, arroz, salmão grelhado, cream cheese, cebolinha e gergelim. Aproximadamente 185g.",
  "mp-1304877":
    "Sushi em forma de cone, alga, salmão grelhado, cream cheese, cebolinha e gergelim. Aproximadamente 145g.",
  "mp-256057":
    "Sushi em forma de cone, alga, arroz, salmão, cream cheese; empanado e frito. Aproximadamente 200g.",
  "mp-1304878":
    "Sushi em forma de cone, alga, salmão, cream cheese; empanado e frito. Aproximadamente 145g.",
  "mp-903143":
    "Sushi em forma de cone, alga, arroz, cream cheese e salmão grelhado. Empanado e frito. Aproximadamente 200g.",
  "mp-449853":
    "Sushi em forma de cone, alga, arroz, cream cheese e camarão. Empanado e frito. Aproximadamente 200g.",
  "mp-256058": "Sushi em forma de cone, recheado com cream cheese e camarão. Aproximadamente 220g.",
  "mp-261364": "Sushi em forma de cone, recheado com cream cheese e salmão. Aproximadamente 145g.",
  "mp-256066":
    "2 peças de joy de salmão sem arroz, com recheio de cream cheese, finalizadas com maçarico.",
  "mp-256073": "4 peças de gunkan com salmão, cream cheese e camarão.",
  "mp-778045": "Arroz, alga, salmão, cream cheese e camarão, empanado e frito.",
  "mp-623377": "Arroz, alga, salmão, cream cheese e pimenta biquinho, empanado e frito.",
  "mp-778048": "Hot filadélfia especial partido ao meio, com cream cheese, tarê e camarão.",
  "mp-256036": "Fatia fina de atum.",
  "mp-548064": "Sushi enrolado com arroz por dentro e alga por fora.",
  "mp-256090": "2 unidades de hot roll doce recheado com Nutella e morango.",
  "mp-847542": "Monte seu ovo de sushi com os recheios de sua preferência.",
  "mp-1231586": "Temaki personalizado. Escolha os recheios na hora do pedido.",
  "mp-1326484": "Posta de salmão grelhado. Aproximadamente 150g.",
  "mp-640487":
    "Sushirrito de salmão com alga e arroz japonês, recheado com salmão fresco, cream cheese, alface, sunomono, patê de kani e cebola roxa.",
  "mp-741342":
    "Gohan (150g) ou mix de folhas (120g), salmão grelhado (100g), cream cheese (65g), cebola roxa (25g), sunomono (45g), cenoura (45g) e cebolinha (5g). Aproximadamente 430g.",
  "mp-1400745": "Risoto cremoso de cogumelos. Aproximadamente 500g.",
  "mp-256168": "Cerveja Black Princess 350ml.",
  "mp-256170": "Cerveja Heineken long neck 330ml.",
  "mp-256179": "Refrigerante Schweppes 350ml.",
  "mp-256180": "Refrigerante em lata. Consulte sabores disponíveis.",
  "mp-256182": "Refrigerante 1 litro. Consulte sabores disponíveis.",
  "mp-256183": "Água mineral com gás 500ml.",
  "mp-256185": "Água mineral sem gás 500ml.",
  "mp-318125": "Cerveja Petra long neck 330ml.",
  "mp-318126": "Cerveja Black Princess long neck 330ml.",
  "mp-606968": "Suco natural de laranja 500ml. Disponível apenas para delivery.",
  "mp-1312053": "Cerveja Stella Pure Gold long neck 330ml.",
  "mp-256092": "Sachê de tarê 6,5ml.",
  "mp-256094": "Sachê de shoyu 8ml.",
  "mp-256096": "Gengibre 40g.",
  "mp-256103": "Couve crispy porção extra.",
  "mp-256101": "Alho poró porção extra.",
  "mp-256099": "Wasabi 10g.",
  "mp-1225656": "4 joy, 2 niguiri salmão, 2 hossomaki e 2 sashimi.",
  "mp-1182688":
    "Arroz, alga, salmão, cream cheese e couve crispy, empanado e frito com adicional de cream cheese, tarê e couve crispy.",
  "mp-746425":
    "Arroz branco, tilápia grelhada, salada tropical (alface, cenoura, tomate e fruta da estação) ou legumes na manteiga (repolho, cenoura, brócolis ou couve-flor).",
  "mp-746440":
    "Arroz branco, salmão selado na manteiga com molho de maracujá e salada tropical (alface, cenoura, tomate e fruta da estação) ou legumes na manteiga (repolho, cenoura, brócolis ou couve-flor).",
  "mp-1446480":
    "6 sashimi de salmão, 6 sashimi de tilápia, 4 hossomaki, 4 uramaki alho poró, 4 uramaki couve crispy, 4 uramaki filadélfia, 10 hot filadélfia, 4 joy cream, 4 niguiri salmão. Acompanha molhos: 8 shoyu, 8 tarê, 4 hashi.",
  "mp-256067":
    "Fatia de salmão com cream cheese maçaricado com geléia de maracujá ou pimenta com abacaxi.",
  "mp-548677": "Escolha base, proteínas e acompanhamentos.",
  "mp-576581": "Suco natural de abacaxi com hortelã 500ml.",
};

const NAME_OVERRIDES = {
  "mp-1219343": "Barato do Dia (sábado)",
  "mp-1219364": "Barato do Dia (terça)",
  "mp-1219365": "Barato do Dia (quarta)",
  "mp-1219366": "Barato do Dia (quinta)",
  "mp-1225656": "Barato do Dia (sexta)",
  "mp-1446480": "Combinado 7",
  "mp-256073": "Gunkan com Camarão (4 unid.)",
  "mp-778048": "Hot Especial com Camarão",
  "mp-416623": "Temaki Filadélfia",
  "mp-548064": "Hossomaki",
  "mp-256024": "Uramaki Tokubetsu",
  "mp-1254746": "Oniguiri de Atum com Maionese",
  "mp-640487": "Sushirrito de Salmão",
  "mp-1326484": "Salmão Grelhado 150g",
  "mp-290213": "Filé de Tilápia Meia Porção 300g",
  "mp-280436": "Ceviche de Tilápia 125g",
  "mp-321980": "Anéis de Lula (3 unid.)",
  "mp-576581": "Suco Abacaxi com Hortelã 500ml",
};

const SMALL_WORDS = new Set([
  "de",
  "da",
  "do",
  "das",
  "dos",
  "e",
  "com",
  "ao",
  "a",
  "o",
  "em",
  "no",
  "na",
  "sem",
  "para",
]);

function stripHtml(value) {
  return String(value || "")
    .replace(/^"+|"+$/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const PREPOSITION_FIXES = [
  [/\bDE\b/g, "de"],
  [/\bDA\b/g, "da"],
  [/\bDO\b/g, "do"],
  [/\bCOM\b/g, "com"],
  [/\bSEM\b/g, "sem"],
  [/\bE\b/g, "e"],
  [/\bAO\b/g, "ao"],
  [/\bNA\b/g, "na"],
  [/\bNO\b/g, "no"],
  [/\bEM\b/g, "em"],
  [/\bPEÇAS\b/g, "peças"],
  [/\bUNID\b/g, "unid."],
  [/\bALHO\b/g, "Alho"],
  [/\bHOT\b/g, "Hot"],
  [/\bJOY\b/g, "Joy"],
  [/\bSKIN\b/g, "Skin"],
  [/\bYAKISSOBA\b/g, "Yakissoba"],
  [/\bURAMAKI\b/g, "Uramaki"],
  [/\bTEMAKI\b/g, "Temaki"],
  [/\bNIGUIRI\b/g, "Niguiri"],
  [/\bSASHIMI\b/g, "Sashimi"],
  [/\bSUNOMONO\b/g, "Sunomono"],
  [/\bSHIMEJI\b/g, "Shimeji"],
  [/\bCARPACCIO\b/g, "Carpaccio"],
  [/\bCEVICHE\b/g, "Ceviche"],
  [/\bEXECUTIVO\b/g, "Executivo"],
  [/\bENAMORADO\b/g, "Enamorado"],
  [/\bCOMBO\b/g, "Combo"],
  [/\bCOMBINADO\b/g, "Combinado"],
];

function normalizeNameCase(name) {
  let result = name;
  for (const [pattern, replacement] of PREPOSITION_FIXES) {
    result = result.replace(pattern, replacement);
  }
  return result
    .replace(/\bFilad[ée]lfia\b/gi, "Filadélfia")
    .replace(/\bCalif[óo]rnia\b/gi, "Califórnia")
    .replace(/\bSalm[ãa]o\b/gi, "Salmão")
    .replace(/\bTil[áa]pia\b/gi, "Tilápia")
    .replace(/\bCamar[ãa]o\b/gi, "Camarão")
    .replace(/\bAtum\b/g, "Atum")
    .replace(/(\d+)g\b/gi, "$1g")
    .replace(/(\d+)G\b/g, "$1g")
    .replace(/(\d+)ml\b/gi, "$1ml")
    .replace(/(\d+)ML\b/g, "$1ml")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")");
}

function applyTypoFixes(text) {
  let result = text.trim();
  for (const [pattern, replacement] of TYPO_FIXES) {
    result = result.replace(pattern, replacement);
  }
  return result;
}

function titleCaseWord(word, index) {
  if (!word) return word;
  if (/^\d/.test(word) || word.includes("(") || word.includes(")")) return word;
  if (word === word.toUpperCase() && word.length <= 4) return word;
  const lower = word.toLowerCase();
  if (index > 0 && SMALL_WORDS.has(lower)) return lower;
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function polishProductName(name, id) {
  if (NAME_OVERRIDES[id]) return NAME_OVERRIDES[id];
  const fixed = applyTypoFixes(stripHtml(name));
  if (/^barato do dia/i.test(fixed)) {
    return fixed
      .replace(/\(\s*([^)]+)\s*\)/i, (_, day) => `(${day.trim().toLowerCase()})`)
      .replace(/^barato do dia/i, "Barato do Dia");
  }
  const titled = fixed
    .split(/\s+/)
    .map((word, index) => titleCaseWord(word, index))
    .join(" ");
  return normalizeNameCase(titled)
    .replace(/(\d+)\s*[Pp]e[çc]as/g, "$1 peças")
    .replace(/(\d+)\s*[Uu]nid\.?/g, "$1 unid.");
}

export function polishDescription(description, name, id) {
  if (DESCRIPTION_OVERRIDES[id]) return DESCRIPTION_OVERRIDES[id];

  let text = applyTypoFixes(stripHtml(description));
  if (!text || text.toUpperCase() === stripHtml(name).toUpperCase()) {
    text = applyTypoFixes(stripHtml(name));
  }

  text = applyTypoFixes(text)
    .replace(/^([a-z])/g, (m) => m.toUpperCase())
    .replace(/\. ([a-z])/g, (_, c) => `. ${c.toUpperCase()}`)
    .replace(/\bacompanha/gi, "Acompanha")
    .replace(/\bescolha/gi, "Escolha")
    .replace(/\bdelicie-se/gi, "Delicie-se")
    .replace(/\bniguiri salmão acompanha/gi, "niguiri salmão. Acompanha")
    .replace(/,\s*acompanha/gi, ". Acompanha")
    .replace(/\b(\d+) joy\b/gi, "$1 joy")
    .replace(/\b(\d+) niguiri\b/gi, "$1 niguiri")
    .replace(/\b(\d+) hossomaki\b/gi, "$1 hossomaki")
    .replace(/\b(\d+) sashimi\b/gi, "$1 sashimi")
    .replace(/\b(\d+) hot\b/gi, "$1 hot")
    .replace(/\b(\d+) uramaki\b/gi, "$1 uramaki")
    .replace(/\b2 Shoyo\b/g, "2 shoyu")
    .replace(/\bshoyo\b/gi, "shoyu")
    .replace(/\b20 Fatias\b/g, "20 fatias")
    .replace(/\bempanado e frito\b/g, "empanado e frito")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")");

  if (/^Aproximadamente\s*$/i.test(text)) {
    text = `${polishProductName(name, id)}. Consulte peso no balcão.`;
  }

  if (text.endsWith(" Aproximadamente")) {
    text = text.replace(/ Aproximadamente$/, ". Consulte peso no balcão.");
  }

  if (text.endsWith(" Ac")) {
    text = text.replace(/ Ac$/, ". Acompanha molho e batata frita.");
  }

  if (!/[.!?]$/.test(text) && text.length > 20) {
    text += ".";
  }

  return text;
}
