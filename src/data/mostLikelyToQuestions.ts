export interface MLTQuestion {
  id: string;
  en: string;
  es: string;
  "fr-ca": string;
  fr: string;
  difficulty: "soft" | "hard";
  category: "habits" | "adventure" | "career" | "social" | "party" | "hot";
}

export const MLT_QUESTIONS: MLTQuestion[] = [
  {
    "id": "hab-s1",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Chercher son téléphone alors qu'il est en train de téléphoner ?",
    "en": "Look for their phone while they are actually on a call?",
    "es": "¿Buscar su teléfono mientras está hablando por él?",
    "fr-ca": "Chercher son cell pendant qu'il est au téléphone ?"
  },
  {
    "id": "hab-s2",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Mettre ses vêtements à l'envers sans s'en rendre compte ?",
    "en": "Put their clothes on inside out without noticing?",
    "es": "¿Ponerse la ropa al revés sin darse cuenta?",
    "fr-ca": "Mettre son linge à l'envers sans s'en rendre compte ?"
  },
  {
    "id": "hab-s3",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Entrer dans une pièce et oublier pourquoi ?",
    "en": "Walk into a room and forget why they are there?",
    "es": "¿Entrar a una habitación y olvidar a qué iba?",
    "fr-ca": "Rentrer dans une pièce et oublier pourquoi ?"
  },
  {
    "id": "hab-s4",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Pleurer devant une publicité pour des pâtes ?",
    "en": "Cry during a pasta commercial?",
    "es": "¿Llorar con un comercial de pasta?",
    "fr-ca": "Pleurer devant une annonce de pâtes ?"
  },
  {
    "id": "hab-s5",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Dire 'merci' à un distributeur automatique ?",
    "en": "Say 'thank you' to a vending machine?",
    "es": "¿Decirle 'gracias' a una máquina expendedora?",
    "fr-ca": "Dire 'merci' à une machine distributrice ?"
  },
  {
    "id": "hab-s6",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Se tromper de brosse à dents ?",
    "en": "Use the wrong toothbrush by mistake?",
    "es": "¿Equivocarse de cepillo de dientes por accidente?",
    "fr-ca": "Se tromper de brosse à dents ?"
  },
  {
    "id": "hab-s7",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Raconter une blague et être le seul à rire ?",
    "en": "Tell a joke and be the only one laughing?",
    "es": "¿Contar un chiste y ser el único que se ríe?",
    "fr-ca": "Conter une joke pis être le seul à rire ?"
  },
  {
    "id": "hab-s8",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Oublier d'enlever l'étiquette de prix sur un cadeau ?",
    "en": "Forget to take the price tag off a gift?",
    "es": "¿Olvidar quitarle la etiqueta de precio a un regalo?",
    "fr-ca": "Oublier d'enlever l'étiquette de prix sur un cadeau ?"
  },
  {
    "id": "hab-s9",
    "difficulty": "soft",
    "category": "habits",
    "fr": "S'habiller en avance pour un rendez-vous et attendre 2h ?",
    "en": "Get dressed early for a date and wait for 2 hours?",
    "es": "¿Arreglarse temprano para una cita y esperar 2 horas?",
    "fr-ca": "S'habiller d'avance pour une date et attendre 2h ?"
  },
  {
    "id": "advs1",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de se perdre dans une ville qu'il/elle connaît pourtant bien ?",
    "en": "Who is most likely to get lost in a city they actually know well?",
    "es": "¿Quién es más probable que se pierda en una ciudad que conoce bien?",
    "fr-ca": "Qui a le plus de chances de se perdre dans une ville qu'il connaît déjà ?"
  },
  {
    "id": "advs2",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de oublier de charger son téléphone avant une randonnée ?",
    "en": "Who is most likely to forget to charge their phone before a hike?",
    "es": "¿Quién es más probable que olvide cargar su teléfono antes de una caminata?",
    "fr-ca": "Qui a le plus de chances d'oublier de charger son cell avant une randonnée ?"
  },
  {
    "id": "advs3",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de paniquer en voyant une toute petite araignée sous la tente ?",
    "en": "Who is most likely to panic at the sight of a tiny spider in the tent?",
    "es": "¿Quién es más probable que entre en pánico al ver una arañita en la tienda de campaña?",
    "fr-ca": "Qui a le plus de chances de faire une crise en voyant une petite araignée dans la tente ?"
  },
  {
    "id": "advs4",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de vouloir s'arrêter toutes les 5 minutes pour prendre une photo ?",
    "en": "Who is most likely to want to stop every 5 minutes to take a photo?",
    "es": "¿Quién es más probable que quiera detenerse cada 5 minutos a tomar una foto?",
    "fr-ca": "Qui a le plus de chances de vouloir arrêter aux 5 minutes pour prendre une photo ?"
  },
  {
    "id": "advs5",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de se plaindre d'avoir mal aux pieds après seulement 15 minutes de marche ?",
    "en": "Who is most likely to complain about sore feet after only 15 minutes of walking?",
    "es": "¿Quién es más probable que se queje de dolor de pies a los 15 minutos de caminar?",
    "fr-ca": "Qui a le plus de chances de chialer qu'il a mal aux pieds après juste 15 minutes de marche ?"
  },
  {
    "id": "advs6",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de essayer de nourrir un animal sauvage mignon mais dangereux ?",
    "en": "Who is most likely to try to feed a cute but dangerous wild animal?",
    "es": "¿Quién es más probable que intente alimentar a un animal salvaje lindo pero peligroso?",
    "fr-ca": "Qui a le plus de chances d'essayer de nourrir un animal sauvage cute mais dangereux ?"
  },
  {
    "id": "advs7",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de se tromper de sens en lisant une carte ?",
    "en": "Who is most likely to read a map upside down?",
    "es": "¿Quién es más probable que lea un mapa al revés?",
    "fr-ca": "Qui a le plus de chances de lire la carte à l'envers ?"
  },
  {
    "id": "advs8",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de préparer son sac à dos 2 semaines à l'avance ?",
    "en": "Who is most likely to pack their backpack 2 weeks in advance?",
    "es": "¿Quién es más probable que empaque su mochila con 2 semanas de anticipación?",
    "fr-ca": "Qui a le plus de chances de préparer son sac à dos 2 semaines d'avance ?"
  },
  {
    "id": "advs9",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de ramener un caillou ou un coquillage de chaque voyage ?",
    "en": "Who is most likely to bring back a rock or a shell from every trip?",
    "es": "¿Quién es más probable que traiga de vuelta una piedra o una concha de cada viaje?",
    "fr-ca": "Qui a le plus de chances de ramener une roche ou un coquillage de chaque voyage ?"
  },
  {
    "id": "advs10",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Qui est le plus susceptible de être incapable d'allumer un feu de camp même avec de l'aide ?",
    "en": "Who is most likely to be unable to start a campfire even with help?",
    "es": "¿Quién es más probable que sea incapaz de encender una fogata incluso con ayuda?",
    "fr-ca": "Qui a le plus de chances de pas être capable d'allumer un feu de camp même en se faisant aider ?"
  },
  {
    "id": "car-s1",
    "difficulty": "soft",
    "category": "career",
    "fr": "Envoyer un e-mail 'Cordialement' sans la pièce jointe ?",
    "en": "Send a 'Best regards' email without the attachment?",
    "es": "¿Enviar un correo con 'Saludos cordiales' pero sin adjuntar el archivo?",
    "fr-ca": "Envoyer un courriel 'Cordialement' sans la pièce jointe ?"
  },
  {
    "id": "car-s2",
    "difficulty": "soft",
    "category": "career",
    "fr": "Dire 'Bonjour' à un collègue pour la deuxième fois de la journée ?",
    "en": "Say 'Hello' to a colleague for the second time in one day?",
    "es": "¿Decirle 'Hola' a un colega por segunda vez en el mismo día?",
    "fr-ca": "Dire 'Allo' à un collègue pour la deuxième fois d'la journée ?"
  },
  {
    "id": "car-s3",
    "difficulty": "soft",
    "category": "career",
    "fr": "Rester en pyjama pendant une réunion Zoom sans caméra ?",
    "en": "Stay in pajamas during a Zoom meeting with the camera off?",
    "es": "¿Quedarse en pijama en una reunión de Zoom con la cámara apagada?",
    "fr-ca": "Rester en pyjama pendant un Zoom sans caméra ?"
  },
  {
    "id": "car-s4",
    "difficulty": "soft",
    "category": "career",
    "fr": "Oublier de couper son micro avant de soupirer en réunion ?",
    "en": "Forget to mute their mic before sighing during a meeting?",
    "es": "¿Olvidarse de mutear su micrófono antes de suspirar en una junta?",
    "fr-ca": "Oublier de fermer son micro avant de soupirer en meeting ?"
  },
  {
    "id": "car-s5",
    "difficulty": "soft",
    "category": "career",
    "fr": "Prendre un air sérieux alors qu'il regarde des vidéos de chats ?",
    "en": "Look serious while actually watching cat videos?",
    "es": "¿Poner cara de seriedad mientras ve videos de gatos en realidad?",
    "fr-ca": "Prendre un air sérieux pendant qu'il regarde des vidéos de chats ?"
  },
  {
    "id": "car-s6",
    "difficulty": "soft",
    "category": "career",
    "fr": "Se tromper de prénom en s'adressant à un nouveau collègue ?",
    "en": "Use the wrong name when talking to a new colleague?",
    "es": "¿Equivocarse de nombre al hablar con un colega nuevo?",
    "fr-ca": "Se tromper de prénom en parlant à un nouveau collègue ?"
  },
  {
    "id": "car-s7",
    "difficulty": "soft",
    "category": "career",
    "fr": "Faire semblant de prendre des notes en réunion ?",
    "en": "Pretend to take notes during a meeting?",
    "es": "¿Fingir tomar apuntes durante una junta?",
    "fr-ca": "Faire semblant de prendre des notes en meeting ?"
  },
  {
    "id": "car-s8",
    "difficulty": "soft",
    "category": "career",
    "fr": "Voler les gâteaux laissés en libre-service dans la cuisine ?",
    "en": "Steal the snacks left out in the breakroom?",
    "es": "¿Robarse los snacks disponibles en la cocina de la oficina?",
    "fr-ca": "Voler les snacks laissés sur le comptoir dans la cuisine ?"
  },
  {
    "id": "car-s9",
    "difficulty": "soft",
    "category": "career",
    "fr": "Arriver avec 5 minutes de retard à chaque réunion ?",
    "en": "Arrive 5 minutes late to every single meeting?",
    "es": "¿Llegar 5 minutos tarde a absolutamente todas las reuniones?",
    "fr-ca": "Arriver avec 5 minutes de retard à chaque meeting ?"
  },
  {
    "id": "car-s10",
    "difficulty": "soft",
    "category": "career",
    "fr": "Répondre 'C'est noté' sans avoir l'intention de le faire ?",
    "en": "Reply 'Noted' with no intention of actually doing it?",
    "es": "¿Responder 'Enterado' sin tener intención alguna de hacerlo?",
    "fr-ca": "Répondre 'C'est noté' pis avoir aucune intention de le faire ?"
  },
  {
    "id": "soc-s1",
    "difficulty": "soft",
    "category": "social",
    "fr": "Saluer quelqu'un qui ne nous a pas vu ?",
    "en": "Wave at someone who didn't see them?",
    "es": "¿Saludar a alguien que ni los vio?",
    "fr-ca": "Envoyer la main à quelqu'un qui nous a pas vu ?"
  },
  {
    "id": "soc-s2",
    "difficulty": "soft",
    "category": "social",
    "fr": "Liker par erreur une vieille photo de son ex à 3h du matin ?",
    "en": "Accidentally like an ex's old photo at 3 AM?",
    "es": "¿Darle me gusta por accidente a una foto vieja de su ex a las 3 AM?",
    "fr-ca": "Liker par erreur une vieille photo de son ex à 3h du matin ?"
  },
  {
    "id": "soc-s3",
    "difficulty": "soft",
    "category": "social",
    "fr": "Faire semblant de regarder son téléphone pour éviter quelqu'un ?",
    "en": "Pretend to look at their phone to avoid someone?",
    "es": "¿Fingir mirar su celular para evitar a alguien en la calle?",
    "fr-ca": "Faire semblant de regarder son cell pour éviter quelqu'un ?"
  },
  {
    "id": "soc-s4",
    "difficulty": "soft",
    "category": "social",
    "fr": "Dire 'À toi aussi' quand un serveur dit 'Bon appétit' ?",
    "en": "Say 'You too' when a waiter says 'Enjoy your meal'?",
    "es": "¿Decir 'Igualmente' cuando un mesero dice 'Buen provecho'?",
    "fr-ca": "Dire 'Pareillement' quand le serveur dit 'Bon appétit' ?"
  },
  {
    "id": "soc-s5",
    "difficulty": "soft",
    "category": "social",
    "fr": "Oublier le prénom d'un ami de longue date ?",
    "en": "Forget the name of a long-time friend?",
    "es": "¿Olvidar el nombre de un amigo de toda la vida por un momento?",
    "fr-ca": "Oublier d'un coup le nom d'un de ses vieux chums ?"
  },
  {
    "id": "soc-s6",
    "difficulty": "soft",
    "category": "social",
    "fr": "Rire à une blague qu'il n'a pas comprise ?",
    "en": "Laugh at a joke they didn't understand?",
    "es": "¿Rerse de un chiste que no ha entendido en absoluto?",
    "fr-ca": "Rire d'une joke qu'il a même pas comprise ?"
  },
  {
    "id": "soc-s7",
    "difficulty": "soft",
    "category": "social",
    "fr": "Envoyer un message critiquant quelqu'un à la personne concernée ?",
    "en": "Send a text criticizing someone to that exact person?",
    "es": "¿Enviar un mensaje criticando a alguien a esa misma persona?",
    "fr-ca": "Envoyer un texte qui chiale sur quelqu'un direct à la personne ?"
  },
  {
    "id": "soc-s8",
    "difficulty": "soft",
    "category": "social",
    "fr": "Proposer un rendez-vous et espérer secrètement une annulation ?",
    "en": "Suggest a hangout and secretly hope for a cancellation?",
    "es": "¿Proponer una salida pero esperar en secreto que la otra persona cancele?",
    "fr-ca": "Proposer une activité pis espérer secrètement que l'autre annule ?"
  },
  {
    "id": "soc-s9",
    "difficulty": "soft",
    "category": "social",
    "fr": "Faire semblant d'avoir vu un film pour ne pas paraître inculte ?",
    "en": "Pretend to have seen a movie just to fit in?",
    "es": "¿Fingir haber visto una película solo para no quedarse fuera de la plática?",
    "fr-ca": "Faire semblant d'avoir vu un film juste pour avoir l'air cultivé ?"
  },
  {
    "id": "soc-s10",
    "difficulty": "soft",
    "category": "social",
    "fr": "Raconter la même histoire trois fois à la même personne ?",
    "en": "Tell the same story three times to the same person?",
    "es": "¿Contarle la misma historia a la misma persona por tercera vez?",
    "fr-ca": "Conter la même histoire trois fois d'affilée à la même personne ?"
  },
  {
    "id": "pty-s1",
    "difficulty": "soft",
    "category": "party",
    "fr": "Danser tout seul en attendant que quelqu'un rejoigne la piste ?",
    "en": "Dance alone while waiting for someone to join the dance floor?",
    "es": "¿Bailar solo mientras espera a que alguien más se una en la pista?",
    "fr-ca": "Danser tu seul en espérant que quelqu'un d'autre embarque ?"
  },
  {
    "id": "pty-s2",
    "difficulty": "soft",
    "category": "party",
    "fr": "Tenir son verre à deux mains pour ne pas le renverser ?",
    "en": "Hold their drink with both hands to avoid spilling it?",
    "es": "¿Agarrar su vaso con ambas manos para asegurarse de no tirarlo?",
    "fr-ca": "Tenir son verre à deux mains pour être sûr de pas le renverser ?"
  },
  {
    "id": "pty-s3",
    "difficulty": "soft",
    "category": "party",
    "fr": "Faire semblant de connaître les paroles d'une chanson ?",
    "en": "Pretend to know the lyrics to a song?",
    "es": "¿Fingir conocerse la letra de una canción en el antro?",
    "fr-ca": "Faire semblant de savoir les paroles d'une toune ?"
  },
  {
    "id": "pty-s4",
    "difficulty": "soft",
    "category": "party",
    "fr": "Passer la soirée à côté du buffet ?",
    "en": "Spend the whole party standing next to the food buffet?",
    "es": "¿Pasarse toda la fiesta parado a lado del buffet de comida?",
    "fr-ca": "Passer toute la veillée collé sur le buffet ?"
  },
  {
    "id": "pty-s5",
    "difficulty": "soft",
    "category": "party",
    "fr": "Demander 5 fois au DJ de passer sa chanson préférée ?",
    "en": "Ask the DJ 5 times to play their favorite song?",
    "es": "¿Rogarle al DJ 5 veces seguidas para que ponga su rola favorita?",
    "fr-ca": "Achaler le DJ 5 fois pour qu'il mette sa toune préférée ?"
  },
  {
    "id": "pty-s6",
    "difficulty": "soft",
    "category": "party",
    "fr": "Se tromper de maison et essayer de rentrer chez le voisin ?",
    "en": "Go to the wrong house and try to enter the neighbor's?",
    "es": "¿Equivocarse de casa e intentar entrar en casa del vecino de al lado?",
    "fr-ca": "Se tromper de maison pis essayer de rentrer chez le voisin ?"
  },
  {
    "id": "pty-s7",
    "difficulty": "soft",
    "category": "party",
    "fr": "Avoir une trace de rouge à lèvres sur les dents ?",
    "en": "Have a lipstick stain on their teeth?",
    "es": "¿Andar con una mancha de labial en los dientes toda la noche?",
    "fr-ca": "Avoir du rouge à lèvres beurré sur les dents ?"
  },
  {
    "id": "pty-s8",
    "difficulty": "soft",
    "category": "party",
    "fr": "Chercher son verre pendant 10 minutes alors qu'il est devant lui ?",
    "en": "Look for their drink for 10 minutes when it's right in front of them?",
    "es": "¿Buscar su bebida por 10 minutos cuando la tiene justo enfrente?",
    "fr-ca": "Chercher son verre 10 minutes pendant qu'il l'a dans face ?"
  },
  {
    "id": "pty-s9",
    "difficulty": "soft",
    "category": "party",
    "fr": "Prendre 50 selfies et n'en poster aucun ?",
    "en": "Take 50 selfies and post none of them?",
    "es": "¿Tomarse 50 selfies en la peda y no publicar ni una sola?",
    "fr-ca": "Prendre 50 selfies pis en poster aucune ?"
  },
  {
    "id": "pty-s10",
    "difficulty": "soft",
    "category": "party",
    "fr": "Porter des lunettes de soleil en intérieur pour avoir l'air cool ?",
    "en": "Wear sunglasses indoors to look cool?",
    "es": "¿Usar lentes de sol en interiores solo para verse más padre?",
    "fr-ca": "Mettre ses lunettes de soleil en dedans pour avoir l'air cool ?"
  },
  {
    "id": "hot-s1",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Dire 'merci' à la fin d'un rapport ?",
    "en": "Say 'thank you' at the end of hot?",
    "es": "¿Decir 'gracias' al final de hacer el amor?",
    "fr-ca": "Dire 'merci' après avoir fait l'amour ?"
  },
  {
    "id": "hot-s2",
    "difficulty": "soft",
    "category": "hot",
    "fr": "S'endormir littéralement pendant les préliminaires ?",
    "en": "Literally fall asleep during foreplay?",
    "es": "¿Literalmente quedarse dormido durante los preliminares?",
    "fr-ca": "S'endormir au beau milieu des préliminaires ?"
  },
  {
    "id": "hot-s3",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Garder ses chaussettes parce qu'il a trop froid aux pieds ?",
    "en": "Keep their socks on because their feet are too cold?",
    "es": "¿Dejarse los calcetines puestos porque le da frío en los pies?",
    "fr-ca": "Garder ses bas dans l'lit parce qu'y a frette aux pieds ?"
  },
  {
    "id": "hot-s4",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Avoir une crampe au mollet au moment crucial ?",
    "en": "Get a leg cramp at the crucial moment?",
    "es": "¿Que le dé un calambre en la pantorrilla en el momento más crucial?",
    "fr-ca": "Pogner une crampe dans l'mollet au moment crucial ?"
  },
  {
    "id": "hot-s5",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Appeler son partenaire par le nom de son chat ?",
    "en": "Call their partner by their cat's name?",
    "es": "¿Llamar a su pareja por el nombre de su gato?",
    "fr-ca": "Appeler sa blonde/son chum par le nom d'son chat ?"
  },
  {
    "id": "hot-s6",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Mettre une playlist de jazz pour se donner un genre ?",
    "en": "Put on a jazz playlist just to look classy?",
    "es": "¿Poner una playlist de jazz nada más para hacerse el sofisticado?",
    "fr-ca": "Partir une playlist de jazz juste pour se donner un style ?"
  },
  {
    "id": "hot-s7",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Chercher le point G avec une carte routière ?",
    "en": "Look for the G-spot with a road map?",
    "es": "¿Buscar el punto G como si trajera mapa de carreteras?",
    "fr-ca": "Chercher le point G comme avec une carte routière ?"
  },
  {
    "id": "hot-s8",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Vérifier ses notifications pendant un câlin ?",
    "en": "Check their notifications during a cuddle?",
    "es": "¿Revisar sus notificaciones en pleno abrazo romántico?",
    "fr-ca": "Tchecker ses notifications en plein pendant un calin ?"
  },
  {
    "id": "hot-s9",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Faire un bruit de canard en changeant de position ?",
    "en": "Make a duck sound while changing positions?",
    "es": "¿Hacer un ruido de pato extraño al tratar de cambiar de posición?",
    "fr-ca": "Faire un bruit de canard bizarre en changeant de position ?"
  },
  {
    "id": "hot-s10",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Se cogner la tête contre la tête de lit ?",
    "en": "Bang their head against the headboard?",
    "es": "¿Estrellarse la cabeza contra la cabecera de la cama por accidente?",
    "fr-ca": "Se fesser la tête sua tête de lit ?"
  },
  {
    "id": "gen-mlt-1",
    "en": "Who is most likely to become a millionaire without breaking a sweat?",
    "es": "¿Quién es más probable que pueda hacerse millonario sin sudar una gota?",
    "fr": "Qui est le plus susceptible de devenir millionnaire sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-2",
    "en": "Who is most likely to become a millionaire out of nowhere?",
    "es": "¿Quién es más probable que pueda hacerse millonario de la nada?",
    "fr": "Qui est le plus susceptible de devenir millionnaire sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-3",
    "en": "Who is most likely to become a millionaire when hanging out with friends?",
    "es": "¿Quién es más probable que pueda hacerse millonario al salir con amigos?",
    "fr": "Qui est le plus susceptible de devenir millionnaire en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-4",
    "en": "Who is most likely to become a millionaire at a big party?",
    "es": "¿Quién es más probable que pueda hacerse millonario en una gran fiesta?",
    "fr": "Qui est le plus susceptible de devenir millionnaire lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-5",
    "en": "Who is most likely to become a millionaire on a wild night out?",
    "es": "¿Quién es más probable que pueda hacerse millonario en una noche loca?",
    "fr": "Qui est le plus susceptible de devenir millionnaire pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-6",
    "en": "Who is most likely to become a millionaire while at work?",
    "es": "¿Quién es más probable que pueda hacerse millonario mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de devenir millionnaire au travail ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-7",
    "en": "Who is most likely to become a millionaire during an important presentation?",
    "es": "¿Quién es más probable que pueda hacerse millonario durante una presentación importante?",
    "fr": "Qui est le plus susceptible de devenir millionnaire pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-8",
    "en": "Who is most likely to become a millionaire just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda hacerse millonario en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de devenir millionnaire simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-9",
    "en": "Who is most likely to become a millionaire as part of their daily routine?",
    "es": "¿Quién es más probable que pueda hacerse millonario como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de devenir millionnaire comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-10",
    "en": "Who is most likely to become a millionaire with their significant other?",
    "es": "¿Quién es más probable que pueda hacerse millonario con su pareja?",
    "fr": "Qui est le plus susceptible de devenir millionnaire avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-11",
    "en": "Who is most likely to become a millionaire to spice things up?",
    "es": "¿Quién es más probable que pueda hacerse millonario para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de devenir millionnaire pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de devenir millionnaire pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-12",
    "en": "Who is most likely to survive a zombie apocalypse without breaking a sweat?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi sin sudar una gota?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-13",
    "en": "Who is most likely to survive a zombie apocalypse out of nowhere?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi de la nada?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-14",
    "en": "Who is most likely to survive a zombie apocalypse when hanging out with friends?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi al salir con amigos?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-15",
    "en": "Who is most likely to survive a zombie apocalypse at a big party?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi en una gran fiesta?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-16",
    "en": "Who is most likely to survive a zombie apocalypse on a wild night out?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi en una noche loca?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-17",
    "en": "Who is most likely to survive a zombie apocalypse while at work?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie au travail ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-18",
    "en": "Who is most likely to survive a zombie apocalypse during an important presentation?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi durante una presentación importante?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-19",
    "en": "Who is most likely to survive a zombie apocalypse just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-20",
    "en": "Who is most likely to survive a zombie apocalypse as part of their daily routine?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-21",
    "en": "Who is most likely to survive a zombie apocalypse with their significant other?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi con su pareja?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-22",
    "en": "Who is most likely to survive a zombie apocalypse to spice things up?",
    "es": "¿Quién es más probable que pueda sobrevivir a un apocalipsis zombi para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de survivre à une apocalypse zombie pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de survivre à une apocalypse zombie pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-23",
    "en": "Who is most likely to move to a foreign country completely alone without breaking a sweat?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo sin sudar una gota?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-24",
    "en": "Who is most likely to move to a foreign country completely alone out of nowhere?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo de la nada?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-25",
    "en": "Who is most likely to move to a foreign country completely alone when hanging out with friends?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo al salir con amigos?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-26",
    "en": "Who is most likely to move to a foreign country completely alone at a big party?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo en una gran fiesta?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-27",
    "en": "Who is most likely to move to a foreign country completely alone on a wild night out?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo en una noche loca?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-28",
    "en": "Who is most likely to move to a foreign country completely alone while at work?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul au travail ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-29",
    "en": "Who is most likely to move to a foreign country completely alone during an important presentation?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo durante una presentación importante?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-30",
    "en": "Who is most likely to move to a foreign country completely alone just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-31",
    "en": "Who is most likely to move to a foreign country completely alone as part of their daily routine?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-32",
    "en": "Who is most likely to move to a foreign country completely alone with their significant other?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo con su pareja?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-33",
    "en": "Who is most likely to move to a foreign country completely alone to spice things up?",
    "es": "¿Quién es más probable que pueda mudarse a un país extranjero completamente solo para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de déménager dans un pays étranger complètement seul pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de déménager dans un autre pays d'un coup pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-34",
    "en": "Who is most likely to marry a celebrity without breaking a sweat?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad sin sudar una gota?",
    "fr": "Qui est le plus susceptible de épouser une célébrité sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-35",
    "en": "Who is most likely to marry a celebrity out of nowhere?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad de la nada?",
    "fr": "Qui est le plus susceptible de épouser une célébrité sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-36",
    "en": "Who is most likely to marry a celebrity when hanging out with friends?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad al salir con amigos?",
    "fr": "Qui est le plus susceptible de épouser une célébrité en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-37",
    "en": "Who is most likely to marry a celebrity at a big party?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad en una gran fiesta?",
    "fr": "Qui est le plus susceptible de épouser une célébrité lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-38",
    "en": "Who is most likely to marry a celebrity on a wild night out?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad en una noche loca?",
    "fr": "Qui est le plus susceptible de épouser une célébrité pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-39",
    "en": "Who is most likely to marry a celebrity while at work?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de épouser une célébrité au travail ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-40",
    "en": "Who is most likely to marry a celebrity during an important presentation?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad durante una presentación importante?",
    "fr": "Qui est le plus susceptible de épouser une célébrité pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-41",
    "en": "Who is most likely to marry a celebrity just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de épouser une célébrité simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-42",
    "en": "Who is most likely to marry a celebrity as part of their daily routine?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de épouser une célébrité comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-43",
    "en": "Who is most likely to marry a celebrity with their significant other?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad con su pareja?",
    "fr": "Qui est le plus susceptible de épouser une célébrité avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-44",
    "en": "Who is most likely to marry a celebrity to spice things up?",
    "es": "¿Quién es más probable que pueda casarse con una celebridad para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de épouser une célébrité pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de se marier avec une vedette pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-45",
    "en": "Who is most likely to get arrested for a silly reason without breaking a sweat?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta sin sudar una gota?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-46",
    "en": "Who is most likely to get arrested for a silly reason out of nowhere?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta de la nada?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-47",
    "en": "Who is most likely to get arrested for a silly reason when hanging out with friends?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta al salir con amigos?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-48",
    "en": "Who is most likely to get arrested for a silly reason at a big party?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta en una gran fiesta?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-49",
    "en": "Who is most likely to get arrested for a silly reason on a wild night out?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta en una noche loca?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-50",
    "en": "Who is most likely to get arrested for a silly reason while at work?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide au travail ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-51",
    "en": "Who is most likely to get arrested for a silly reason during an important presentation?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta durante una presentación importante?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-52",
    "en": "Who is most likely to get arrested for a silly reason just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-53",
    "en": "Who is most likely to get arrested for a silly reason as part of their daily routine?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-54",
    "en": "Who is most likely to get arrested for a silly reason with their significant other?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta con su pareja?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-55",
    "en": "Who is most likely to get arrested for a silly reason to spice things up?",
    "es": "¿Quién es más probable que pueda ser arrestado por una razón tonta para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de se faire arrêter pour une raison stupide pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de se faire arrêter pour de quoi de cave pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-56",
    "en": "Who is most likely to win the lottery and lose the ticket without breaking a sweat?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete sin sudar una gota?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-57",
    "en": "Who is most likely to win the lottery and lose the ticket out of nowhere?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete de la nada?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-58",
    "en": "Who is most likely to win the lottery and lose the ticket when hanging out with friends?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete al salir con amigos?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-59",
    "en": "Who is most likely to win the lottery and lose the ticket at a big party?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete en una gran fiesta?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-60",
    "en": "Who is most likely to win the lottery and lose the ticket on a wild night out?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete en una noche loca?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-61",
    "en": "Who is most likely to win the lottery and lose the ticket while at work?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket au travail ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-62",
    "en": "Who is most likely to win the lottery and lose the ticket during an important presentation?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete durante una presentación importante?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-63",
    "en": "Who is most likely to win the lottery and lose the ticket just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-64",
    "en": "Who is most likely to win the lottery and lose the ticket as part of their daily routine?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-65",
    "en": "Who is most likely to win the lottery and lose the ticket with their significant other?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete con su pareja?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-66",
    "en": "Who is most likely to win the lottery and lose the ticket to spice things up?",
    "es": "¿Quién es más probable que pueda ganar la lotería y perder el billete para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de gagner à la loterie et perdre le ticket pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de gagner à la loterie pis perdre le billet pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-67",
    "en": "Who is most likely to sleep through an earthquake without breaking a sweat?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto sin sudar una gota?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-68",
    "en": "Who is most likely to sleep through an earthquake out of nowhere?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto de la nada?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-69",
    "en": "Who is most likely to sleep through an earthquake when hanging out with friends?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto al salir con amigos?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-70",
    "en": "Who is most likely to sleep through an earthquake at a big party?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto en una gran fiesta?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-71",
    "en": "Who is most likely to sleep through an earthquake on a wild night out?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto en una noche loca?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-72",
    "en": "Who is most likely to sleep through an earthquake while at work?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre au travail ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-73",
    "en": "Who is most likely to sleep through an earthquake during an important presentation?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto durante una presentación importante?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-74",
    "en": "Who is most likely to sleep through an earthquake just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-75",
    "en": "Who is most likely to sleep through an earthquake as part of their daily routine?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-76",
    "en": "Who is most likely to sleep through an earthquake with their significant other?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto con su pareja?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-77",
    "en": "Who is most likely to sleep through an earthquake to spice things up?",
    "es": "¿Quién es más probable que pueda dormir durante un terremoto para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de dormir pendant un tremblement de terre pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de dormir à travers un tremblement de terre pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-78",
    "en": "Who is most likely to accidentally start a fire without breaking a sweat?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente sin sudar una gota?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-79",
    "en": "Who is most likely to accidentally start a fire out of nowhere?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente de la nada?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-80",
    "en": "Who is most likely to accidentally start a fire when hanging out with friends?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente al salir con amigos?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-81",
    "en": "Who is most likely to accidentally start a fire at a big party?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente en una gran fiesta?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-82",
    "en": "Who is most likely to accidentally start a fire on a wild night out?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente en una noche loca?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-83",
    "en": "Who is most likely to accidentally start a fire while at work?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement au travail ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-84",
    "en": "Who is most likely to accidentally start a fire during an important presentation?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente durante una presentación importante?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-85",
    "en": "Who is most likely to accidentally start a fire just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-86",
    "en": "Who is most likely to accidentally start a fire as part of their daily routine?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-87",
    "en": "Who is most likely to accidentally start a fire with their significant other?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente con su pareja?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-88",
    "en": "Who is most likely to accidentally start a fire to spice things up?",
    "es": "¿Quién es más probable que pueda iniciar un incendio accidentalmente para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de provoquer un incendie accidentellement pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de partir un feu par accident pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-89",
    "en": "Who is most likely to eat something spicy and regret it instantly without breaking a sweat?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante sin sudar una gota?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-90",
    "en": "Who is most likely to eat something spicy and regret it instantly out of nowhere?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante de la nada?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-91",
    "en": "Who is most likely to eat something spicy and regret it instantly when hanging out with friends?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante al salir con amigos?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-92",
    "en": "Who is most likely to eat something spicy and regret it instantly at a big party?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante en una gran fiesta?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-93",
    "en": "Who is most likely to eat something spicy and regret it instantly on a wild night out?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante en una noche loca?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-94",
    "en": "Who is most likely to eat something spicy and regret it instantly while at work?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément au travail ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-95",
    "en": "Who is most likely to eat something spicy and regret it instantly during an important presentation?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante durante una presentación importante?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-96",
    "en": "Who is most likely to eat something spicy and regret it instantly just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-97",
    "en": "Who is most likely to eat something spicy and regret it instantly as part of their daily routine?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-98",
    "en": "Who is most likely to eat something spicy and regret it instantly with their significant other?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante con su pareja?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-99",
    "en": "Who is most likely to eat something spicy and regret it instantly to spice things up?",
    "es": "¿Quién es más probable que pueda comer algo picante y arrepentirse al instante para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de manger quelque chose d'épicé et le regretter instantanément pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de manger de quoi d'épicé pis le regretter live pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-100",
    "en": "Who is most likely to become a famous meme without breaking a sweat?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso sin sudar una gota?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-101",
    "en": "Who is most likely to become a famous meme out of nowhere?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso de la nada?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-102",
    "en": "Who is most likely to become a famous meme when hanging out with friends?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso al salir con amigos?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-103",
    "en": "Who is most likely to become a famous meme at a big party?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso en una gran fiesta?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-104",
    "en": "Who is most likely to become a famous meme on a wild night out?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso en una noche loca?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-105",
    "en": "Who is most likely to become a famous meme while at work?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre au travail ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-106",
    "en": "Who is most likely to become a famous meme during an important presentation?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso durante una presentación importante?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-107",
    "en": "Who is most likely to become a famous meme just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-108",
    "en": "Who is most likely to become a famous meme as part of their daily routine?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-109",
    "en": "Who is most likely to become a famous meme with their significant other?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso con su pareja?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-110",
    "en": "Who is most likely to become a famous meme to spice things up?",
    "es": "¿Quién es más probable que pueda convertirse en un meme famoso para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de devenir un mème célèbre pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de devenir un meme pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-111",
    "en": "Who is most likely to invent something totally useless without breaking a sweat?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil sin sudar una gota?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-112",
    "en": "Who is most likely to invent something totally useless out of nowhere?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil de la nada?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-113",
    "en": "Who is most likely to invent something totally useless when hanging out with friends?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil al salir con amigos?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-114",
    "en": "Who is most likely to invent something totally useless at a big party?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil en una gran fiesta?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-115",
    "en": "Who is most likely to invent something totally useless on a wild night out?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil en una noche loca?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-116",
    "en": "Who is most likely to invent something totally useless while at work?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile au travail ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-117",
    "en": "Who is most likely to invent something totally useless during an important presentation?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil durante una presentación importante?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-118",
    "en": "Who is most likely to invent something totally useless just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-119",
    "en": "Who is most likely to invent something totally useless as part of their daily routine?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-120",
    "en": "Who is most likely to invent something totally useless with their significant other?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil con su pareja?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-121",
    "en": "Who is most likely to invent something totally useless to spice things up?",
    "es": "¿Quién es más probable que pueda inventar algo totalmente inútil para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de inventer un truc totalement inutile pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de inventer de quoi d'inutile pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-122",
    "en": "Who is most likely to trip over their own feet on a date without breaking a sweat?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita sin sudar una gota?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-123",
    "en": "Who is most likely to trip over their own feet on a date out of nowhere?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita de la nada?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-124",
    "en": "Who is most likely to trip over their own feet on a date when hanging out with friends?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita al salir con amigos?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-125",
    "en": "Who is most likely to trip over their own feet on a date at a big party?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita en una gran fiesta?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-126",
    "en": "Who is most likely to trip over their own feet on a date on a wild night out?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita en una noche loca?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-127",
    "en": "Who is most likely to trip over their own feet on a date while at work?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous au travail ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-128",
    "en": "Who is most likely to trip over their own feet on a date during an important presentation?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita durante una presentación importante?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-129",
    "en": "Who is most likely to trip over their own feet on a date just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-130",
    "en": "Who is most likely to trip over their own feet on a date as part of their daily routine?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-131",
    "en": "Who is most likely to trip over their own feet on a date with their significant other?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita con su pareja?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-132",
    "en": "Who is most likely to trip over their own feet on a date to spice things up?",
    "es": "¿Quién es más probable que pueda tropezar con sus propios pies en una cita para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de trébucher sur ses propres pieds lors d'un rendez-vous pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de s'enfarger dans ses pieds en pleine date pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-133",
    "en": "Who is most likely to cry while watching a sad commercial without breaking a sweat?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste sin sudar una gota?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-134",
    "en": "Who is most likely to cry while watching a sad commercial out of nowhere?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste de la nada?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-135",
    "en": "Who is most likely to cry while watching a sad commercial when hanging out with friends?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste al salir con amigos?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-136",
    "en": "Who is most likely to cry while watching a sad commercial at a big party?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste en una gran fiesta?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-137",
    "en": "Who is most likely to cry while watching a sad commercial on a wild night out?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste en una noche loca?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-138",
    "en": "Who is most likely to cry while watching a sad commercial while at work?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste au travail ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-139",
    "en": "Who is most likely to cry while watching a sad commercial during an important presentation?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste durante una presentación importante?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-140",
    "en": "Who is most likely to cry while watching a sad commercial just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-141",
    "en": "Who is most likely to cry while watching a sad commercial as part of their daily routine?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-142",
    "en": "Who is most likely to cry while watching a sad commercial with their significant other?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste con su pareja?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-143",
    "en": "Who is most likely to cry while watching a sad commercial to spice things up?",
    "es": "¿Quién es más probable que pueda llorar viendo un comercial triste para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de pleurer devant une pub triste pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de brailler devant une annonce triste pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-144",
    "en": "Who is most likely to talk to an animal like a human without breaking a sweat?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano sin sudar una gota?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-145",
    "en": "Who is most likely to talk to an animal like a human out of nowhere?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano de la nada?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-146",
    "en": "Who is most likely to talk to an animal like a human when hanging out with friends?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano al salir con amigos?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-147",
    "en": "Who is most likely to talk to an animal like a human at a big party?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano en una gran fiesta?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-148",
    "en": "Who is most likely to talk to an animal like a human on a wild night out?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano en una noche loca?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-149",
    "en": "Who is most likely to talk to an animal like a human while at work?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain au travail ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-150",
    "en": "Who is most likely to talk to an animal like a human during an important presentation?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano durante una presentación importante?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-151",
    "en": "Who is most likely to talk to an animal like a human just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-152",
    "en": "Who is most likely to talk to an animal like a human as part of their daily routine?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-153",
    "en": "Who is most likely to talk to an animal like a human with their significant other?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano con su pareja?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-154",
    "en": "Who is most likely to talk to an animal like a human to spice things up?",
    "es": "¿Quién es más probable que pueda hablar con un animal como a un humano para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de parler à un animal comme à un humain pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de parler à un chat comme à du monde pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-155",
    "en": "Who is most likely to forget their anniversary without breaking a sweat?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario sin sudar una gota?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-156",
    "en": "Who is most likely to forget their anniversary out of nowhere?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario de la nada?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-157",
    "en": "Who is most likely to forget their anniversary when hanging out with friends?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario al salir con amigos?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-158",
    "en": "Who is most likely to forget their anniversary at a big party?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario en una gran fiesta?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-159",
    "en": "Who is most likely to forget their anniversary on a wild night out?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario en una noche loca?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-160",
    "en": "Who is most likely to forget their anniversary while at work?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage au travail ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-161",
    "en": "Who is most likely to forget their anniversary during an important presentation?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario durante una presentación importante?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-162",
    "en": "Who is most likely to forget their anniversary just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-163",
    "en": "Who is most likely to forget their anniversary as part of their daily routine?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-164",
    "en": "Who is most likely to forget their anniversary with their significant other?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario con su pareja?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-165",
    "en": "Who is most likely to forget their anniversary to spice things up?",
    "es": "¿Quién es más probable que pueda olvidar su aniversario para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de oublier son anniversaire de mariage pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de oublier son anniversaire de couple pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-166",
    "en": "Who is most likely to leave the house wearing slippers without breaking a sweat?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas sin sudar una gota?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-167",
    "en": "Who is most likely to leave the house wearing slippers out of nowhere?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas de la nada?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-168",
    "en": "Who is most likely to leave the house wearing slippers when hanging out with friends?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas al salir con amigos?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-169",
    "en": "Who is most likely to leave the house wearing slippers at a big party?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas en una gran fiesta?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-170",
    "en": "Who is most likely to leave the house wearing slippers on a wild night out?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas en una noche loca?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-171",
    "en": "Who is most likely to leave the house wearing slippers while at work?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles au travail ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-172",
    "en": "Who is most likely to leave the house wearing slippers during an important presentation?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas durante una presentación importante?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-173",
    "en": "Who is most likely to leave the house wearing slippers just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-174",
    "en": "Who is most likely to leave the house wearing slippers as part of their daily routine?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-175",
    "en": "Who is most likely to leave the house wearing slippers with their significant other?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas con su pareja?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-176",
    "en": "Who is most likely to leave the house wearing slippers to spice things up?",
    "es": "¿Quién es más probable que pueda salir de casa en pantuflas para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de sortir de la maison en pantoufles pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de sortir de la maison avec ses pantoufles pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-177",
    "en": "Who is most likely to be late to their own wedding without breaking a sweat?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda sin sudar una gota?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-178",
    "en": "Who is most likely to be late to their own wedding out of nowhere?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda de la nada?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-179",
    "en": "Who is most likely to be late to their own wedding when hanging out with friends?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda al salir con amigos?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-180",
    "en": "Who is most likely to be late to their own wedding at a big party?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda en una gran fiesta?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-181",
    "en": "Who is most likely to be late to their own wedding on a wild night out?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda en una noche loca?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-182",
    "en": "Who is most likely to be late to their own wedding while at work?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage au travail ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-183",
    "en": "Who is most likely to be late to their own wedding during an important presentation?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda durante una presentación importante?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-184",
    "en": "Who is most likely to be late to their own wedding just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-185",
    "en": "Who is most likely to be late to their own wedding as part of their daily routine?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-186",
    "en": "Who is most likely to be late to their own wedding with their significant other?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda con su pareja?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-187",
    "en": "Who is most likely to be late to their own wedding to spice things up?",
    "es": "¿Quién es más probable que pueda llegar tarde a su propia boda para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de être en retard à son propre mariage pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de arriver en retard à son propre mariage pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-188",
    "en": "Who is most likely to laugh at a funeral without breaking a sweat?",
    "es": "¿Quién es más probable que pueda reírse en un funeral sin sudar una gota?",
    "fr": "Qui est le plus susceptible de rire à un enterrement sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-189",
    "en": "Who is most likely to laugh at a funeral out of nowhere?",
    "es": "¿Quién es más probable que pueda reírse en un funeral de la nada?",
    "fr": "Qui est le plus susceptible de rire à un enterrement sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-190",
    "en": "Who is most likely to laugh at a funeral when hanging out with friends?",
    "es": "¿Quién es más probable que pueda reírse en un funeral al salir con amigos?",
    "fr": "Qui est le plus susceptible de rire à un enterrement en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-191",
    "en": "Who is most likely to laugh at a funeral at a big party?",
    "es": "¿Quién es más probable que pueda reírse en un funeral en una gran fiesta?",
    "fr": "Qui est le plus susceptible de rire à un enterrement lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-192",
    "en": "Who is most likely to laugh at a funeral on a wild night out?",
    "es": "¿Quién es más probable que pueda reírse en un funeral en una noche loca?",
    "fr": "Qui est le plus susceptible de rire à un enterrement pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-193",
    "en": "Who is most likely to laugh at a funeral while at work?",
    "es": "¿Quién es más probable que pueda reírse en un funeral mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de rire à un enterrement au travail ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-194",
    "en": "Who is most likely to laugh at a funeral during an important presentation?",
    "es": "¿Quién es más probable que pueda reírse en un funeral durante una presentación importante?",
    "fr": "Qui est le plus susceptible de rire à un enterrement pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-195",
    "en": "Who is most likely to laugh at a funeral just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda reírse en un funeral en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de rire à un enterrement simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-196",
    "en": "Who is most likely to laugh at a funeral as part of their daily routine?",
    "es": "¿Quién es más probable que pueda reírse en un funeral como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de rire à un enterrement comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-197",
    "en": "Who is most likely to laugh at a funeral with their significant other?",
    "es": "¿Quién es más probable que pueda reírse en un funeral con su pareja?",
    "fr": "Qui est le plus susceptible de rire à un enterrement avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-198",
    "en": "Who is most likely to laugh at a funeral to spice things up?",
    "es": "¿Quién es más probable que pueda reírse en un funeral para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de rire à un enterrement pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de avoir un fou rire à un enterrement pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-199",
    "en": "Who is most likely to burn their dinner without breaking a sweat?",
    "es": "¿Quién es más probable que pueda quemar su cena sin sudar una gota?",
    "fr": "Qui est le plus susceptible de brûler son dîner sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-200",
    "en": "Who is most likely to burn their dinner out of nowhere?",
    "es": "¿Quién es más probable que pueda quemar su cena de la nada?",
    "fr": "Qui est le plus susceptible de brûler son dîner sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-201",
    "en": "Who is most likely to burn their dinner when hanging out with friends?",
    "es": "¿Quién es más probable que pueda quemar su cena al salir con amigos?",
    "fr": "Qui est le plus susceptible de brûler son dîner en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-202",
    "en": "Who is most likely to burn their dinner at a big party?",
    "es": "¿Quién es más probable que pueda quemar su cena en una gran fiesta?",
    "fr": "Qui est le plus susceptible de brûler son dîner lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-203",
    "en": "Who is most likely to burn their dinner on a wild night out?",
    "es": "¿Quién es más probable que pueda quemar su cena en una noche loca?",
    "fr": "Qui est le plus susceptible de brûler son dîner pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-204",
    "en": "Who is most likely to burn their dinner while at work?",
    "es": "¿Quién es más probable que pueda quemar su cena mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de brûler son dîner au travail ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-205",
    "en": "Who is most likely to burn their dinner during an important presentation?",
    "es": "¿Quién es más probable que pueda quemar su cena durante una presentación importante?",
    "fr": "Qui est le plus susceptible de brûler son dîner pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-206",
    "en": "Who is most likely to burn their dinner just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda quemar su cena en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de brûler son dîner simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-207",
    "en": "Who is most likely to burn their dinner as part of their daily routine?",
    "es": "¿Quién es más probable que pueda quemar su cena como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de brûler son dîner comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-208",
    "en": "Who is most likely to burn their dinner with their significant other?",
    "es": "¿Quién es más probable que pueda quemar su cena con su pareja?",
    "fr": "Qui est le plus susceptible de brûler son dîner avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-209",
    "en": "Who is most likely to burn their dinner to spice things up?",
    "es": "¿Quién es más probable que pueda quemar su cena para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de brûler son dîner pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de faire brûler son souper pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-210",
    "en": "Who is most likely to sleep for 14 hours straight without breaking a sweat?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas sin sudar una gota?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée sans transpirer ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne sans forcer ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-211",
    "en": "Who is most likely to sleep for 14 hours straight out of nowhere?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas de la nada?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée sorti de nulle part ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne venu de nulle part ?",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-212",
    "en": "Who is most likely to sleep for 14 hours straight when hanging out with friends?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas al salir con amigos?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée en sortant avec des amis ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne dans un party avec ses chums ?",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-213",
    "en": "Who is most likely to sleep for 14 hours straight at a big party?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas en una gran fiesta?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée lors d'une grande soirée ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne dans un gros party ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-214",
    "en": "Who is most likely to sleep for 14 hours straight on a wild night out?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas en una noche loca?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée pendant une nuit folle ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne dans une soirée wild ?",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-215",
    "en": "Who is most likely to sleep for 14 hours straight while at work?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas mientras está en el trabajo?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée au travail ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne à la job ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-216",
    "en": "Who is most likely to sleep for 14 hours straight during an important presentation?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas durante una presentación importante?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée pendant une présentation importante ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne en plein milieu d'une présentation ?",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-217",
    "en": "Who is most likely to sleep for 14 hours straight just on a typical Tuesday?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas en un martes cualquiera?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée simplement un mardi typique ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne un m'rcredi ben normal ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-218",
    "en": "Who is most likely to sleep for 14 hours straight as part of their daily routine?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas como parte de su rutina diaria?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée comme faisant partie de sa routine ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne dans sa routine ?",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-219",
    "en": "Who is most likely to sleep for 14 hours straight with their significant other?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas con su pareja?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée avec son/sa partenaire ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne avec sa chum/blonde ?",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-mlt-220",
    "en": "Who is most likely to sleep for 14 hours straight to spice things up?",
    "es": "¿Quién es más probable que pueda dormir durante 14 horas seguidas para darle sabor a las cosas?",
    "fr": "Qui est le plus susceptible de dormir 14 heures d'affilée pour pimenter les choses ?",
    "fr-ca": "Qui a le plus de chances de dormir 14h en ligne pour mettre de l'action ?",
    "category": "hot",
    "difficulty": "soft"
  }
];
