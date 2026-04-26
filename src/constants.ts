
export interface WordGroup {
  en: string[];
  fr: string[];
}

export const WORD_GROUPS: WordGroup[] = [
  { en: ['Coffee', 'Tea', 'Espresso', 'Cappuccino', 'Latte', 'Matcha'], fr: ['Café', 'Thé', 'Expresso', 'Cappuccino', 'Chocolat chaud', 'Maté'] },
  { en: ['Juice', 'Smoothie', 'Milkshake', 'Lemonade', 'Iced Tea', 'Soda'], fr: ['Jus d\'orange', 'Limonade', 'Smoothie', 'Milkshake', 'Eau gazeuse', 'Sirop'] },
  { en: ['Lager', 'Ale', 'Stout', 'Porter', 'IPA', 'Pilsner'], fr: ['Lager', 'Blonde', 'Brune', 'Blanche', 'IPA', 'Bière artisanale'] },
  { en: ['Red Wine', 'White Wine', 'Rosé', 'Champagne', 'Prosecco', 'Cava'], fr: ['Bordeaux', 'Bourgogne', 'Champagne', 'Rosé', 'Sancerre', 'Châteauneuf-du-Pape'] },
  { en: ['Whisky', 'Rum', 'Vodka', 'Gin', 'Tequila', 'Brandy'], fr: ['Whisky', 'Rhum', 'Vodka', 'Gin', 'Cognac', 'Armagnac'] },
  { en: ['Baguette', 'Sourdough', 'Brioche', 'Focaccia', 'Ciabatta', 'Rye Bread'], fr: ['Baguette', 'Pain de campagne', 'Brioche', 'Focaccia', 'Ciabatta', 'Pain au seigle'] },
  { en: ['Croissant', 'Pain au Chocolat', 'Danish', 'Muffin', 'Scone', 'Éclair'], fr: ['Croissant', 'Pain au chocolat', 'Pain aux raisins', 'Chausson aux pommes', 'Kouign-amann', 'Galette'] },
  { en: ['Cheesecake', 'Brownie', 'Tiramisu', 'Carrot Cake', 'Red Velvet', 'Pavlova'], fr: ['Fondant au chocolat', 'Tarte Tatin', 'Paris-Brest', 'Mille-feuille', 'Opéra', 'Fraisier'] },
  { en: ['Brie', 'Camembert', 'Cheddar', 'Gouda', 'Parmesan', 'Roquefort'], fr: ['Brie', 'Camembert', 'Roquefort', 'Comté', 'Reblochon', 'Munster'] },
  { en: ['Spaghetti', 'Penne', 'Fusilli', 'Rigatoni', 'Tagliatelle', 'Lasagne'], fr: ['Spaghetti', 'Penne', 'Fusilli', 'Tagliatelle', 'Rigatoni', 'Farfalle'] },
  { en: ['Apple', 'Pear', 'Peach', 'Plum', 'Apricot', 'Nectarine'], fr: ['Pomme', 'Poire', 'Pêche', 'Prune', 'Abricot', 'Nectarine'] },
  { en: ['Mango', 'Pineapple', 'Papaya', 'Guava', 'Passion Fruit', 'Lychee'], fr: ['Mangue', 'Ananas', 'Papaye', 'Goyave', 'Fruit de la passion', 'Litchi'] },
  { en: ['Strawberry', 'Raspberry', 'Blueberry', 'Blackberry', 'Cranberry', 'Redcurrant'], fr: ['Fraise', 'Framboise', 'Myrtille', 'Mûre', 'Groseille', 'Cassis'] },
  { en: ['Orange', 'Lemon', 'Lime', 'Grapefruit', 'Mandarin', 'Clementine'], fr: ['Orange', 'Citron', 'Citron vert', 'Pamplemousse', 'Mandarine', 'Clémentine'] },
  { en: ['Carrot', 'Parsnip', 'Turnip', 'Beetroot', 'Radish', 'Sweet Potato'], fr: ['Carrotte', 'Panais', 'Navet', 'Betterave', 'Radis', 'Patate douce'] },
  { en: ['Lion', 'Tiger', 'Leopard', 'Cheetah', 'Jaguar', 'Puma'], fr: ['Lion', 'Tigre', 'Léopard', 'Guépard', 'Jaguar', 'Puma'] },
  { en: ['Wolf', 'Fox', 'Jackal', 'Coyote', 'Dingo', 'Hyena'], fr: ['Loup', 'Renard', 'Chacal', 'Coyote', 'Dingo', 'Lycaon'] },
  { en: ['Polar Bear', 'Grizzly Bear', 'Panda', 'Brown Bear', 'Sun Bear', 'Black Bear'], fr: ['Ours polaire', 'Grizzly', 'Panda', 'Ours brun', 'Ours noir', 'Ours malais'] },
  { en: ['Elephant', 'Rhinoceros', 'Giraffe', 'Zebra', 'Buffalo', 'Hippopotamus'], fr: ['Éléphant', 'Rhinocéros', 'Girafe', 'Zèbre', 'Buffle', 'Hippopotame'] },
  { en: ['Dolphin', 'Whale', 'Seal', 'Walrus', 'Sea Lion', 'Otter'], fr: ['Dauphin', 'Baleine', 'Phoque', 'Morse', 'Otarie', 'Loutre de mer'] },
  { en: ['Eagle', 'Falcon', 'Hawk', 'Osprey', 'Kite', 'Harrier'], fr: ['Aigle', 'Faucon', 'Buse', 'Épervier', 'Milan', 'Autour'] },
  { en: ['Crocodile', 'Alligator', 'Komodo Dragon', 'Monitor Lizard', 'Iguana', 'Gecko'], fr: ['Crocodile', 'Alligator', 'Dragon de Komodo', 'Varan', 'Iguane', 'Gecko'] },
  { en: ['Python', 'Cobra', 'Mamba', 'Anaconda', 'Viper', 'Boa'], fr: ['Python', 'Cobra', 'Mamba', 'Anaconda', 'Vipère', 'Boa'] },
  { en: ['Alps', 'Himalayas', 'Andes', 'Rockies', 'Pyrenees', 'Atlas Mountains'], fr: ['Alpes', 'Himalaya', 'Andes', 'Pyrénées', 'Atlas', 'Rocheuses'] },
  { en: ['Paris', 'London', 'Rome', 'Berlin', 'Madrid', 'Amsterdam'], fr: ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Toulouse', 'Nantes'] },
  { en: ['Tokyo', 'Beijing', 'Mumbai', 'Bangkok', 'Singapore', 'Seoul'], fr: ['Tokyo', 'Beijing', 'Mumbai', 'Bangkok', 'Singapore', 'Seoul'] },
  { en: ['Mathematics', 'History', 'Geography', 'Science', 'Art', 'Music'], fr: ['Maths', 'Histoire', 'Géographie', 'Sciences', 'Arts plastiques', 'Musique'] },
  { en: ['Doctor', 'Surgeon', 'Nurse', 'Paramedic', 'Pharmacist', 'Radiographer'], fr: ['Médecin', 'Chirurgien', 'Infirmier', 'Ambulancier', 'Pharmacien', 'Radiologue'] },
  { en: ['Freedom', 'Justice', 'Truth', 'Beauty', 'Courage', 'Wisdom'], fr: ['Liberté', 'Justice', 'Vérité', 'Beauté', 'Courage', 'Sagesse'] },
  { en: ['Circle', 'Square', 'Triangle', 'Hexagon', 'Oval', 'Pentagon'], fr: ['Cercle', 'Carré', 'Triangle', 'Hexagone', 'Ovale', 'Pentagone'] }
];
