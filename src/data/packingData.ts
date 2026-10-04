export interface PackingItem {
  name: string;
  note?: string;
}

export interface PackingCategory {
  icon: string;
  title: string;
  items: PackingItem[];
}

export const packingData: PackingCategory[] = [
  {
    icon: "💼",
    title: "Documenten & geld",
    items: [
      { name: "Paspoort", note: "minstens 6 maanden geldig na terugkeer" },
      { name: "E-visum / entry fee", note: "vooraf online regelen" },
      { name: "Vliegtickets & boekingen", note: "ook offline opslaan" },
      { name: "Reisverzekering + polisnummer" },
      { name: "Gele vaccinatieboekje" },
      { name: "Pinpas & creditcard", note: "niet overal accepteren ze kaart" },
      { name: "Contant geld", note: "euro's of dollars, wisselen naar SRD" },
      { name: "Kopie paspoort", note: "papier + in je mail" },
      { name: "Rijbewijs", note: "als je gaat rijden" },
    ],
  },
  {
    icon: "💉",
    title: "Gezondheid & EHBO",
    items: [
      { name: "EHBO kit", note: "nemen Joelle & Roos mee" },
      { name: "Eigen medicijnen"},
      { name: "Paracetamol / ibuprofen" },
      { name: "Pleisters & blarenpleisters" },
      { name: "Desinfectiemiddel / betadine" },
      { name: "Handgel" },

    ],
  },
  {
    icon: "🦟",
    title: "Muggen & zon",
    items: [
      { name: "Muggenspray met DEET", note: "40-50%, meerdere flessen!" },
      { name: "Zonnebrandcrème", note: "factor 30-50, het is evenaar-zon" },
      { name: "Aftersun" },
      { name: "Zonnebril" },
      { name: "Pet of zonnehoed" },
    ],
  },
  {
    icon: "👕",
    title: "Kleding (±30°C, vochtig)",
    items: [
      { name: "T-shirts / tops", note: "6-7 stuks, we kunnen wassen" },
      { name: "Korte broeken / rokjes", note: "3-4 stuks" },
      { name: "Luchtige lange broeken", note: "2-3, tegen muggen" },
      { name: "Dunne shirts met lange mouwen", note: "2-3, lichte kleur" },
      { name: "Sneldrogende kleding", note: "katoen droogt hier nooit" },
      { name: "Lichte regenjas / poncho", note: "het regent kort maar hard" },
      { name: "Dun vestje", note: "voor airco en in het vliegtuig" },
      { name: "Ondergoed", note: "± 10 stuks" },
      { name: "Sokken", note: "ook een paar lange voor de jungle" },
      { name: "Zwemkleding", note: "2 sets" },
      { name: "Nette outfit", note: "voor een avondje uiteten!" },
      { name: "Slaapkleding" },
      { name: "Slippers" },
      { name: "Waterschoenen / sportsandalen" },
      { name: "Stevige wandelschoenen of sneakers" },
    ],
  },
  {
    icon: "🌳",
    title: "Jungle (3 dagen)",
    items: [
      { name: "Kleine rugzak / dagrugzak", note: "grote koffer blijft vaak in Paramaribo" },
      { name: "Dry bag / waterdichte zakken", note: "voor de boottochten" },
      { name: "Hoofdlamp + extra batterijen", note: "stroom is er vaak maar een paar uur" },
      { name: "Lange broek + lange mouwen", note: "voor de avond en jungle walks" },
      { name: "Hoge sokken", note: "broek erin tegen teken en mieren" },
      { name: "Schoenen die nat mogen worden" },
      { name: "Sneldrogende handdoek" },
      { name: "Waterfles / camelbak", note: "minimaal 1 liter" },
      { name: "Waterzuiveringstabletten", note: "voor de zekerheid" },
      { name: "Snacks", note: "noten, mueslirepen" },
      { name: "Toiletpapier + vuilniszakjes" },
      { name: "Oordopjes", note: "de jungle is 's nachts LUID" },
      { name: "Telefoonhoesje waterdicht" },
    ],
  },
  {
    icon: "🦩",
    title: "Bigi Pan (2 dagen)",
    items: [
      { name: "Verrekijker", note: "flamingo's & rode ibissen spotten" },
      { name: "Camera", note: "+ extra geheugenkaart en batterijen" },
      { name: "Extra muggenspray", note: "bij schemer zijn ze met miljoenen" },
      { name: "Pet + zonnebrand", note: "op het water is geen schaduw" },
      { name: "Regenhoes voor tas/camera" },
      { name: "Lakenzak of dun laken", note: "voor de hangmat / het hutje" },
      { name: "Powerbank", note: "volgeladen, geen stopcontact" },
      { name: "Contant geld", note: "voor boot, gids en eten" },
      { name: "Lange mouwen voor de avond" },
    ],
  },
  {
    icon: "🧴",
    title: "Verzorging",
    items: [
      { name: "Tandenborstel & tandpasta" },
      { name: "Shampoo & conditioner", note: "reisformaat" },
      { name: "Douchegel" },
      { name: "Deodorant" },
      { name: "Dagcrème / hydraterende crème" },
      { name: "Haarborstel & elastiekjes" },
      { name: "Scheerspullen" },
      { name: "Maandverband / tampons", note: "op het binnenland niet te koop" },
      { name: "Lenzen + vloeistof / bril" },
      { name: "Lippenbalsem met SPF" },
      { name: "Vochtige doekjes" },
    ],
  },
  {
    icon: "📱",
    title: "Techniek & gadgets",
    items: [
      { name: "Telefoon + oplader" },
      { name: "Powerbank", note: "liefst 20.000 mAh" },
      { name: "Camera + oplader" },
      { name: "Oortjes / koptelefoon" },
      { name: "E-reader / boek" },
      { name: "Offline kaarten gedownload" },
      { name: "Lokale simkaart of eSIM", note: "Digicel of Telesur" },
    ],
  },
  {
    icon: "✈️",
    title: "Vlucht & onderweg",
    items: [
      { name: "Nekkussen" },
      { name: "Oogmasker & oordopjes" },
      { name: "Lege waterfles", note: "vullen na de security" },
      { name: "Snacks voor de vlucht" },
      { name: "Series & muziek gedownload", note: "het is 9+ uur vliegen" },
      { name: "Pen", note: "voor het invullen van formulieren" },
      { name: "Hangslotje voor de koffer" },
      { name: "Waszakje voor vuile kleding" },
    ],
  },
];
