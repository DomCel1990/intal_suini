import { Product } from '../models/product';
import { TimelineEvent } from '../models/time-line-event';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1999',
    badge: 'L\'Eredità',
    title: 'Le Radici e la Famiglia Tiburzi',
    desc: 'Tutto nasce dall\'esperienza lavorativa maturata dalla famiglia Tiburzi sin dai primi del \'900 nel territorio marchigiano[cite: 5]. Quando Italsuini prende forma e trasferisce la sua crescente capacità produttiva nel mercato laziale[cite: 5], non stiamo solo fondando un\'azienda: stiamo tramandando un profondo rispetto per la nostra terra e per la selezione delle carni più nobili.',
    imageUrl: 'images/storia_1.jpg'
  },
  {
    year: '2003',
    badge: 'Arte Norcina',
    title: 'Evoluzione e Pazienza',
    desc: 'Con l\'evoluzione del mercato, abbracciamo la necessità di trasformare le carni in eccellenze preparate e confezionate, operando in spazi all\'avanguardia[cite: 5]. Inizia la delicata fase della stagionatura, dove la nostra esperienza nel dosare la giusta quantità di spezie esalta il gusto autentico delle antiche ricette[cite: 5], portando alla luce sapori indimenticabili.',
    imageUrl: 'images/storia_2.jpg'
  },
  {
    year: '2024',
    badge: 'Il Capolavoro',
    title: 'La Nascita di Cesare',
    desc: 'Dopo decenni di dedizione, presentiamo il nostro capolavoro. Nasce "Cesare", un omaggio devoto a Roma e al re indiscusso della sua cucina: il guanciale. Non un semplice prodotto, ma il cuore pulsante dell\'alta ristorazione, creato per soddisfare le esigenze dei palati più raffinati mantenendo inalterata la nostra storica qualità[cite: 5].',
    imageUrl: 'images/storia_3.jpg' // Immagine: Dettaglio lussuoso di salumi tagliati
  },
  {
    year: '2026',
    badge: 'La Garanzia',
    title: 'L\'Eccellenza Senza Tempo',
    desc: 'La nostra storia continua. Con la stessa passione di chi ha iniziato più di un secolo fa, portiamo avanti la nostra missione: essere sinonimo di garanzia italiana nel tempo[cite: 5]. "Cesare" veste la nostra tradizione di una nuova eleganza, pronto a portare il gusto autentico della vera norcineria verso orizzonti sempre più ambiziosi.',
    imageUrl: 'images/storia_4.jpg' // Immagine: Alta ristorazione / Piatto elegante
  }
];

// Inserisci qui l'intero oggetto productsData dal file originale, tipizzandolo
export const PRODUCTS_DATA: Record<string, Product> = {
  guanciale: {
    id: 'guanciale',
    catKey: 'guanciale',
    category: 'Guanciale Cesare',
    name: 'Guanciale Cesare Tradizionale',
    subtitle: 'Il Cuore della Tradizione Romana',
    tag: 'L\'Eccellenza',
    imageUrl:
      'images/cards-image/guanciale.jpg',
    description:
      'Ottenuto da sole carni suine italiane selezionate della filiera Italsuini. Speziato con salagione manuale e pepatura tradizionale, stagionato lentamente per garantire la perfetta marezzatura croccante in cottura.',
    pairing:
      'Vini rossi strutturati laziali (Cesanese del Piglio), Primi piatti della tradizione romana.',
    recipe: {
      title: 'La Vera Spaghetti alla Carbonara',
      basePortions: 4,
      ingredients: [
        { name: 'Guanciale Cesare', baseQty: 150, unit: 'g' },
        { name: 'Spaghetti di Gragnano', baseQty: 320, unit: 'g' },
        { name: 'Tuorli d’Uovo Freschi', baseQty: 4, unit: 'pz' },
        { name: 'Pecorino Romano DOP', baseQty: 80, unit: 'g' },
        { name: 'Pepe Nero in Grani', baseQty: 5, unit: 'g' },
      ],
      steps: [
        'Tagliare il Guanciale Cesare a listarelle di circa 1cm di spessore.',
        'Rosolare il guanciale in una padella antiaderente a fuoco dolce finché il grasso diventa trasparente e dorato.',
        'Conservare il grasso fuso e far intiepidire le fette croccanti.',
        "Sbattere i tuorli d'uovo con il Pecorino Romano e un cucchiaio di grasso fuso fino a creare una crema densa.",
        'Scolare la pasta al dente e mantecare a fuoco spento con la crema di tuorli e il guanciale croccante.',
      ],
    },
  },
  tiberio: {
    id: 'tiberio',
    catKey: 'salami',
    category: 'Il Salame',
    name: 'Tiberio',
    subtitle: 'Salame Artigianale Speziato',
    tag: 'Salami',
    imageUrl:
      'images/cards-image/salame_tiberio.jpg',
    description:
      'Equilibrio perfetto di sapori: la dolcezza della carne si unisce alla giusta sapidità e a un leggero sentore di spezie. Consistenza morbida e profumo intenso.',
    pairing: 'Pane casereccio caldo e calice di rosso corposo.',
    recipe: {
      title: 'Tagliere Imperiale Tiberio con Pane e Miele',
      basePortions: 4,
      ingredients: [
        { name: 'Salame Tiberio Cesare', baseQty: 200, unit: 'g' },
        { name: 'Pane Casereccio di Lariano', baseQty: 300, unit: 'g' },
        { name: 'Miele di Castagno', baseQty: 50, unit: 'g' },
        { name: 'Noci Sgusciate', baseQty: 40, unit: 'g' },
      ],
      steps: [
        'Affettare il salame Tiberio con un taglio leggermente obliquo.',
        'Tostare le fette di pane casereccio sulla piastra.',
        'Disporre il salame a raggiera arricchendo con noci e un filo di miele.',
      ],
    },
  },
  mecenate: {
    id: 'mecenate',
    catKey: 'salami',
    category: 'Il Salame',
    name: 'Mecenate',
    subtitle: 'Salume Spalmabile tipo Ciauscolo',
    tag: 'Salami',
    imageUrl:
      'images/cards-image/salame_mecenate.jpg',
    description:
      'Ispirato alla tradizione del ciauscolo, Mecenate si distingue per la sua consistenza cremosa e spalmabile su fette di pane caldo.',
    pairing: 'Crostini caldi, spumanti metodo classico o birre artigianali.',
    recipe: {
      title: 'Bruschette Veloci Mecenate e Stracchino',
      basePortions: 4,
      ingredients: [
        { name: 'Salume Spalmabile Mecenate', baseQty: 180, unit: 'g' },
        { name: 'Stracchino Fresco', baseQty: 100, unit: 'g' },
        { name: 'Pane per Bruschetta', baseQty: 8, unit: 'fette' },
      ],
      steps: [
        'Grigliare le fette di pane calde.',
        'Spalmare abbondante salume Mecenate mentre il pane è fumante.',
        'Completare con un fiocco di stracchino fresco.',
      ],
    },
  },
  flaminia: {
    id: 'flaminia',
    catKey: 'salami',
    category: 'Il Salame',
    name: 'Flaminia',
    subtitle: 'Salame Artigianale tipo Corallina',
    tag: 'Salami',
    imageUrl:
      'images/cards-image/salame_flaminia.jpg',
    description:
      'La tipica corallina della tradizione laziale. Macinatura fine con caratteristici cubetti di lardo magro e compatto dal gusto profumato.',
    pairing: 'Pizza di Pasqua salata, caciotta fresca e vino bianco Frascati.',
    recipe: {
      title: 'Aperitivo Tradizionale con Flaminia e Caciotta',
      basePortions: 4,
      ingredients: [
        { name: 'Salame Corallina Flaminia', baseQty: 220, unit: 'g' },
        { name: 'Caciotta Fresca Romana', baseQty: 150, unit: 'g' },
        { name: 'Pane o Pizza Salata', baseQty: 250, unit: 'g' },
      ],
      steps: [
        'Tagliare la Corallina Flaminia a fette di 3-4 mm.',
        'Accompagnare con caciotta a cubetti e fette di pane fragrante.',
      ],
    },
  },
  poppea: {
    id: 'poppea',
    catKey: 'pancetta',
    category: 'La Pancetta',
    name: 'Poppea',
    subtitle: 'Pancetta Arrotolata Elegante',
    tag: 'Pancetta',
    imageUrl:
      'images/cards-image/pancetta_poppea.jpg',
    description:
      'Pancetta arrotolata dolce e morbida, dal sapore avvolgente e raffinato. Lenta stagionatura e speziatura delicata.',
    pairing: 'Fichi freschi accompagnati a grissini artigianali e bollicine.',
    recipe: {
      title: 'Involtini di Poppea con Fichi e Caprino',
      basePortions: 4,
      ingredients: [
        { name: 'Pancetta Arrotolata Poppea', baseQty: 160, unit: 'g' },
        { name: 'Fichi Freschi', baseQty: 4, unit: 'pz' },
        { name: 'Formaggio Caprino', baseQty: 100, unit: 'g' },
      ],
      steps: [
        'Tagliare i fichi in 4 spicchi.',
        'Avvolgere ogni spicchio con una fetta di pancetta Poppea ed un tocco di caprino.',
      ],
    },
  },
  minerva: {
    id: 'minerva',
    catKey: 'pancetta',
    category: 'La Pancetta',
    name: 'Minerva',
    subtitle: 'Pancetta Tesa Stagionata',
    tag: 'Pancetta',
    imageUrl:
      'images/cards-image/pancetta_minerva.jpg',
    description:
      'Equilibrio perfetto tra magro e grasso con marezzatura elegante. Sapore intenso con note speziate delicate.',
    pairing: 'Pane di grano duro, formaggi stagionati, utilizzi gourmet.',
    recipe: {
      title: 'Crostino di Pane e Minerva Croccante',
      basePortions: 4,
      ingredients: [
        { name: 'Pancetta Tesa Minerva', baseQty: 150, unit: 'g' },
        { name: 'Pane di Altamura', baseQty: 4, unit: 'fette' },
        { name: 'Miele di Millefiori', baseQty: 30, unit: 'g' },
      ],
      steps: [
        'Scaldare le fette di pancetta Minerva in padella calda per 1 minuto.',
        'Adagiare sul pane e guarnire con gocce di miele.',
      ],
    },
  },
  domina: {
    id: 'domina',
    catKey: 'salsicce',
    category: 'Le Salsicce',
    name: 'Domina',
    subtitle: 'Salsiccia Stagionata Selezione',
    tag: 'Salsicce',
    imageUrl:
      'images/cards-image/salsiccia_domina.jpg',
    description:
      'Salsiccia stagionata in condizioni ideali per un sapore intenso, compatto e speziato al punto giusto.',
    pairing: 'Pecorino stagionato, taralli, aperitivi di carattere.',
    recipe: {
      title: 'Sotto-Olio di Salsiccia Domina con Erbe',
      basePortions: 4,
      ingredients: [
        { name: 'Salsiccia Stagionata Domina', baseQty: 200, unit: 'g' },
        { name: "Olio Extravergine d'Oliva", baseQty: 50, unit: 'ml' },
        { name: 'Origano e Peperoncino', baseQty: 5, unit: 'g' },
      ],
      steps: [
        'Spellare e affettare la salsiccia Domina a rondelle.',
        "Servire condita con un filo d'olio EVOO e spezie della macchia mediterranea.",
      ],
    },
  },
  minutilla: {
    id: 'minutilla',
    catKey: 'salsicce',
    category: 'Le Salsicce',
    name: 'Minutilla',
    subtitle: 'Salsiccia tipo Siena',
    tag: 'Salsicce',
    imageUrl:
      'images/cards-image/salsiccia_minutilla.jpg',
    description:
      'Lavorata in budello naturale, sapore aromatico e leggermente speziato che evoca le antiche norcinerie romane.',
    pairing: 'Vini rossi leggeri e fruttati, focacce morbide profumate all\'olio EVO.',
    recipe: {
      title: 'Focaccia Calda con Minutilla Tradizionale',
      basePortions: 4,
      ingredients: [
        { name: 'Salsicce Minutilla', baseQty: 180, unit: 'g' },
        { name: "Focaccia Romana all'Olio", baseQty: 250, unit: 'g' },
      ],
      steps: [
        'Aprire la focaccia ancora calda dal forno.',
        'Inserire le salsicce Minutilla tagliate a metà.',
      ],
    },
  },
  cleopatra: {
    id: 'cleopatra',
    catKey: 'stagionati',
    category: 'Gli Stagionati',
    name: 'Cleopatra',
    subtitle: 'Lonza Magra di Qualità Superiore',
    tag: 'Stagionati',
    imageUrl:
      'images/cards-image/stagionato_cleopatra.jpg',
    description:
      'Consistenza morbida e vellutata dal profumo avvolgente. Carne magra selezionata di altissima qualità della filiera Italsuini.',
    pairing: 'Rucola fresca, scaglie di parmigiano, olio EVO e limone.',
    recipe: {
      title: 'Carpaccio Reale di Lonza Cleopatra con Rucola',
      basePortions: 4,
      ingredients: [
        { name: 'Lonza Cleopatra', baseQty: 200, unit: 'g' },
        { name: 'Rucola Selvatica', baseQty: 80, unit: 'g' },
        { name: 'Scaglie di Parmigiano', baseQty: 60, unit: 'g' },
      ],
      steps: [
        'Disporre le fette di Lonza Cleopatra su un piatto grande.',
        "Guarnire con rucola e scaglie di parmigiano con un filo d'olio.",
      ],
    },
  },
  fiammette: {
    id: 'fiammette',
    catKey: 'stagionati',
    category: 'Gli Stagionati',
    name: 'Fiammette',
    subtitle: 'Coppiette Romane Speziate',
    tag: 'Stagionati',
    imageUrl:
     'images/cards-image/stagionato_fiammette.jpg',
    description:
      "Strisce di carne suina magra e speziata con peperoncino e semi di finocchio. L'autentico snack da osteria romana.",
    pairing: 'Birra artigianale cruda o vino rosso sfuso di Frascati.',
    recipe: {
      title: 'Aperitivo Rusante con Coppiette Fiammette',
      basePortions: 4,
      ingredients: [
        { name: 'Coppiette Fiammette Cesare', baseQty: 200, unit: 'g' },
        { name: 'Pane Sciocco Tostato', baseQty: 200, unit: 'g' },
      ],
      steps: [
        "Servire le Fiammette a temperatura ambiente per sprigionare l'aroma del peperoncino.",
        'Accompagnare con pane caldo per bilanciare il sapore forte.',
      ],
    },
  },
  valerio: {
    id: 'valerio',
    catKey: 'stagionati',
    category: 'Gli Stagionati',
    name: 'Valerio',
    subtitle: 'Lonzino Stagionato Aromatico',
    tag: 'Stagionati',
    imageUrl:
      'images/cards-image/stagionato_valerio.jpg',
    description:
      'Lenta e naturale stagionatura. Gusto morbido e profumato con un abbraccio di spezie delicate.',
    pairing: 'Vini bianchi strutturati, accompagnato da crostini di pane e burro salato.',
    recipe: {
      title: 'Crostini al Burro Salato e Lonzino Valerio',
      basePortions: 4,
      ingredients: [
        { name: 'Lonzino Valerio', baseQty: 160, unit: 'g' },
        { name: 'Burro Aromatizzato', baseQty: 80, unit: 'g' },
        { name: 'Crostini di Pane Brioche', baseQty: 8, unit: 'pz' },
      ],
      steps: [
        'Spalmare il burro morbido sui crostini.',
        'Completare con una fetta adagiata di Lonzino Valerio.',
      ],
    },
  },
  // cornelia: {
  //   id: 'cornelia',
  //   catKey: 'stagionati',
  //   category: 'Gli Stagionati',
  //   name: 'Cornelia',
  //   subtitle: 'Bresaola Bovina di Alta Selezione',
  //   tag: 'Stagionati',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80',
  //   description:
  //     'Carne bovina selezionata stagionata con aromi naturali. Colore rosso intenso, aroma vellutato e delicato.',
  //   pairing: 'Olio al tartufo, formaggio di capra fresco, noci.',
  //   recipe: {
  //     title: 'Insalatina Gourmet di Cornelia con Citronette',
  //     basePortions: 4,
  //     ingredients: [
  //       { name: 'Bresaola Cornelia', baseQty: 180, unit: 'g' },
  //       { name: 'Valeriana / Soncino', baseQty: 100, unit: 'g' },
  //       { name: 'Gherigli di Noce', baseQty: 40, unit: 'g' },
  //     ],
  //     steps: [
  //       'Creare un letto di valeriana e noci.',
  //       'Adagiare le fette di Bresaola Cornelia e condire con citronette.',
  //     ],
  //   },
  // },
};
