export const FARM_PRODUCTS = [
  {
    id: "prod-1",
    title: "Colis de Viande Bovine d'Élevage (10kg)",
    category: "elevage",
    categoryLabel: "Élevage & Viande",
    price: 145.00,
    unit: "colis 10kg",
    rating: 4.9,
    reviewsCount: 28,
    image: "/veau-1.jpeg",
    badge: "Populaire",
    description: "Assortiment premium de morceaux choisis (rôtis, steaks, bourguignon) de veaux et bovins élevés au grand air dans nos pâturages.",
    origin: "Élevé et préparé à La Ferme des 4 Saisons",
    seasonal: "Disponible toute l'année",
    stock: 12
  },
  {
    id: "prod-2",
    title: "Fromage de Chèvre Artisanal (Lot de 3)",
    category: "produits-laitiers",
    categoryLabel: "Produits Laitiers",
    price: 12.50,
    unit: "lot de 3",
    rating: 5.0,
    reviewsCount: 42,
    image: "/elevage-chevres-1.jpeg",
    badge: "Frais du jour",
    description: "Fromages de chèvre mûris à cœur, préparés chaque matin avec le lait frais de notre élevage de chèvres pures races.",
    origin: "Atelier Fromager de la Ferme",
    seasonal: "Printemps / Été / Automne",
    stock: 25
  },
  {
    id: "prod-3",
    title: "Maïs Grain Bio Supérieur (Sac 25kg)",
    category: "polyculture",
    categoryLabel: "Polyculture & Céréales",
    price: 18.90,
    unit: "sac 25kg",
    rating: 4.8,
    reviewsCount: 19,
    image: "/mais-grain-bio.jpg",
    badge: "Bio certifié",
    description: "Maïs grain d'excellence cultivé sur nos meilleures parcelles sans pesticides de synthèse, idéal pour l'alimentation animale ou la transformation.",
    origin: "Parcelles Sud - La Ferme des 4 Saisons",
    seasonal: "Récolte d'Automne",
    stock: 80
  },
  {
    id: "prod-4",
    title: "Farine de Blé T65 Artisanale (5kg)",
    category: "polyculture",
    categoryLabel: "Polyculture & Céréales",
    price: 9.80,
    unit: "sac 5kg",
    rating: 4.9,
    reviewsCount: 35,
    image: "/cheval-2.jpeg",
    badge: "Moulue à la ferme",
    description: "Farine de blé tendre cultivé dans le respect de la terre et moulue sur meule de pierre traditionnelle. Idéale pour le pain et la pâtisserie.",
    origin: "Champs du Moulin",
    seasonal: "Toute l'année",
    stock: 40
  },
  {
    id: "prod-5",
    title: "Grand Panier de Légumes de Saison Bio",
    category: "paniers",
    categoryLabel: "Paniers Bio",
    price: 26.00,
    unit: "panier (approx. 7kg)",
    rating: 4.9,
    reviewsCount: 64,
    image: "/panier-legumes.jpg",
    badge: "Coup de cœur",
    description: "Sélection fraîche de légumes de saison récoltés le jour même : pommes de terre, carottes, potimarrons, salades et herbes aromatiques.",
    origin: "Potager & Serres de la Ferme",
    seasonal: "Renouvelé chaque semaine",
    stock: 18
  },
  {
    id: "prod-6",
    title: "Miel Toutes Fleurs des 4 Saisons (500g)",
    category: "produits-laitiers",
    categoryLabel: "Épicerie Fermière",
    price: 8.50,
    unit: "pot 500g",
    rating: 5.0,
    reviewsCount: 51,
    image: "/miel-fermier.jpg",
    badge: "Récolte Artisanale",
    description: "Miel pur d'abeilles récolté dans nos ruches situées en lisière de prairie et de bois. Aromatique, doux et 100% naturel.",
    origin: "Ruches de la Ferme des 4 Saisons",
    seasonal: "Été",
    stock: 30
  },
  {
    id: "prod-7",
    title: "Bottes de Paille & Fourrage Équin (Unité)",
    category: "elevage",
    categoryLabel: "Élevage & Fourrage",
    price: 6.50,
    unit: "botte",
    rating: 4.7,
    reviewsCount: 15,
    image: "/cheval-3.jpeg",
    badge: "Séchage naturel",
    description: "Fourrage et paille de qualité supérieure séchée au soleil, idéale pour la litière et l'alimentation des chevaux et ovins.",
    origin: "Prairies de Fauche",
    seasonal: "Disponible en stock",
    stock: 150
  },
  {
    id: "prod-8",
    title: "Caissette Découverte Porc Fermier (5kg)",
    category: "elevage",
    categoryLabel: "Élevage & Viande",
    price: 68.00,
    unit: "caissette 5kg",
    rating: 4.9,
    reviewsCount: 22,
    image: "/elevage-cochons.jpeg",
    badge: "Plein Air",
    description: "Côtelettes, rôtis, saucisses artisanales et poitrine de porc élevé sur paille au grand air avec une alimentation 100% graines de la ferme.",
    origin: "Élevage Porcin Plein Air",
    seasonal: "Disponible sur réservation",
    stock: 8
  }
];

export const FARM_VISITS = [
  {
    id: "visit-1",
    title: "Visite Découverte Famille & Animaux",
    duration: "1h30",
    priceAdult: 12.00,
    priceChild: 7.00,
    image: "/elevage-chevres-3.jpeg",
    description: "Parcourez nos enclos à la rencontre des veaux, chevreaux, moutons et chevaux. Une immersion ludique guidée par le fermier.",
    highlights: ["Rencontre directe avec les animaux", "Dégustation de fromage frais à la fin", "Idéal pour enfants de tout âge"]
  },
  {
    id: "visit-2",
    title: "Atelier Nourrissage & Traite des Chèvres",
    duration: "2h00",
    priceAdult: 18.00,
    priceChild: 10.00,
    image: "/elevage-chevres-1.jpeg",
    description: "Participez activement aux soins du soir : distribution du foin, biberons aux jeunes chevreaux et initiation à la traite traditionnelle.",
    highlights: ["Mettre les mains à la pâte", "Apprendre les gestes ancestraux", "Repartir avec son diplôme de p'tit fermier"]
  },
  {
    id: "visit-3",
    title: "Immersion Polyculture & Matériel Agricole",
    duration: "2h30",
    priceAdult: 25.00,
    priceChild: 14.00,
    image: "/moutons.jpeg",
    description: "Découvrez les coulisses de la polyculture moderne : rotation des sols, semis, moissons et présentation du matériel agricole.",
    highlights: ["Visite des parcelles en remorque", "Démonstration des machines agricoles", "Présentation des techniques durables"]
  },
  {
    id: "visit-4",
    title: "Balade à Poney & Rencontre Équidés",
    duration: "1h45",
    priceAdult: 15.00,
    priceChild: 12.00,
    image: "/cheval-1.jpeg",
    description: "Une expérience chaleureuse avec nos chevaux et poneys : brossage, soin du pelage et petite balade au milieu des vertes collines.",
    highlights: ["Brossage & soin des sabots", "Parcours guidé en bordure de champs", "Photos souvenir offertes"]
  }
];

export const GALLERY_ITEMS = [
  { id: "g-1", title: "Nos magnifiques chevaux au pré", category: "chevaux", image: "/cheval-1.jpeg", caption: "Cheval de trait et monture au coucher du soleil dans nos prairies." },
  { id: "g-2", title: "Promenade et complicité équine", category: "chevaux", image: "/cheval-2.jpeg", caption: "Équitation et moment de liberté dans l'enceinte de l'exploitation." },
  { id: "g-3", title: "Noble cheval devant la grange", category: "chevaux", image: "/cheval-3.jpeg", caption: "L'élégance de nos chevaux élevés au grand air." },
  { id: "g-4", title: "Les chevreaux à la chèvrerie", category: "chevres", image: "/elevage-chevres-1.jpeg", caption: "Nos chèvres curieuses et affectueuses dans leur espace aménagé." },
  { id: "g-5", title: "Moments de tendresse avec les chevreaux", category: "chevres", image: "/elevage-chevres-3.jpeg", caption: "Nourrissage et attention quotidienne apportés aux jeunes chevreaux." },
  { id: "g-6", title: "Élevage de porcs sur paille", category: "cochons", image: "/elevage-cochons.jpeg", caption: "Des cochons épanouis élevés dans le confort et la propreté." },
  { id: "g-7", title: "Troupeau de moutons dans les pâtures", category: "moutons", image: "/moutons.jpeg", caption: "Nos moutons en pâturage tournant pour l'entretien naturel des terres." },
  { id: "g-8", title: "Veau de la ferme dans le pré", category: "veaux", image: "/veau-1.jpeg", caption: "Veau élevé sous la mère dans des conditions optimales de bien-être." },
  { id: "g-9", title: "Jeune veau curieux au pâturage", category: "veaux", image: "/veau-2.jpeg", caption: "Nos bovins bénéficient d'une alimentation 100% naturelle." }
];

export const FARM_STATS = [
  { label: "Saisons d'activité", value: "4 / 4", desc: "Exploitation active 365j par an" },
  { label: "Qualité & Nature", value: "100%", desc: "Alimentation produite sur la ferme" },
  { label: "Surface de Polyculture", value: "85 ha", desc: "Blé, maïs, fourrage & légumineuses" },
  { label: "Bien-être Animal", value: "Plein air", desc: "Animaux choyés en grands pâturages" }
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    author: "Marc & Valérie Dupont",
    role: "Visiteurs réguliers",
    stars: 5,
    comment: "Nous achetons notre colis de viande et nos fromages de chèvre directement à la ferme depuis 2 ans. La qualité est incomparable et l'accueil toujours aussi chaleureux !",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    id: "t-2",
    author: "Sophie Laurent",
    role: "Maman d'Hugo & Léa",
    stars: 5,
    comment: "L'atelier de nourrissage des chevreaux avec les enfants était juste féerique ! Ils parlent encore du baptême en tracteur. Une vraie ferme authentique comme on n'en fait plus.",
    avatar: "https://i.pravatar.cc/150?img=32"
  },
  {
    id: "t-3",
    author: "Antoine Bertrand",
    role: "Boulanger artisanal",
    stars: 5,
    comment: "La farine de blé moulu sur meule de pierre de La Ferme des 4 Saisons donne une croûte et une mie d'une saveur incroyable. Une collaboration basée sur la passion de la terre.",
    avatar: "https://i.pravatar.cc/150?img=56"
  }
];
