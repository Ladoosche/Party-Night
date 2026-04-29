export interface NHIEQuestion {
  id: string;
  en: string;
  es: string;
  "fr-ca": string;
  fr: string;
  difficulty: "soft" | "hard";
  category: "habits" | "adventure" | "career" | "social" | "party" | "hot";
}

export const NHIE_QUESTIONS: NHIEQuestion[] = [
  {
    "id": "hab-s1",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais porté le même pyjama pendant une semaine entière.",
    "en": "Never have I ever worn the same pajamas for an entire week.",
    "es": "Yo nunca he usado el mismo pijama durante una semana entera.",
    "fr-ca": "J'ai jamais mis les mêmes pyjamas pendant une semaine complète."
  },
  {
    "id": "hab-s2",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais mangé au-dessus de l'évier pour ne pas faire de vaisselle.",
    "en": "Never have I ever eaten over the sink to avoid doing dishes.",
    "es": "Yo nunca he comido sobre el fregadero para evitar lavar platos.",
    "fr-ca": "J'ai jamais mangé au-dessus de l'évier pour pas salir de vaisselle."
  },
  {
    "id": "hab-s3",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais passé une journée entière sans me brosser les dents.",
    "en": "Never have I ever gone a whole day without brushing my teeth.",
    "es": "Yo nunca he pasado un día entero sin cepillarme los dientes.",
    "fr-ca": "J'ai jamais passé une journée complète sans me brosser les dents."
  },
  {
    "id": "hab-s4",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais senti mes vêtements sales pour savoir s'ils pouvaient encore être portés.",
    "en": "Never have I ever smelled my dirty laundry to see if it could be worn again.",
    "es": "Yo nunca he olido mi ropa sucia para ver si se podía usar de nuevo.",
    "fr-ca": "J'ai jamais senti mon linge sale pour voir si je pouvais le reporter."
  },
  {
    "id": "hab-s5",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais nettoyé un couvert sale juste avec mon doigt ou ma salive.",
    "en": "Never have I ever cleaned a dirty utensil using just my finger or saliva.",
    "es": "Yo nunca he limpiado un cubierto sucio usando solo mi dedo o saliva.",
    "fr-ca": "J'ai jamais lavé mon ustensile avec juste mon doigt ou ma salive."
  },
  {
    "id": "hab-s6",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais utilisé du parfum pour cacher que je n'avais pas pris de douche.",
    "en": "Never have I ever used perfume to hide the fact that I hadn't showered.",
    "es": "Yo nunca he usado perfume para ocultar que no me había bañado.",
    "fr-ca": "J'ai jamais mis du parfum pour cacher que j'avais pas pris ma douche."
  },
  {
    "id": "hab-s7",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais laissé la vaisselle traîner jusqu'à ce qu'elle sente mauvais.",
    "en": "Never have I ever left dishes sitting until they started to smell.",
    "es": "Yo nunca he dejado los platos sin lavar hasta que huelan mal.",
    "fr-ca": "J'ai jamais laissé traîner ma vaisselle jusqu'à ce qu'elle sente mauvais."
  },
  {
    "id": "hab-s8",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais mangé quelque chose tombé par terre après plus de 5 secondes.",
    "en": "Never have I ever eaten something that fell on the floor after more than 5 seconds.",
    "es": "Yo nunca he comido algo del suelo después de más de 5 segundos.",
    "fr-ca": "J'ai jamais mangé de quoi tombé à terre après la règle des 5 secondes."
  },
  {
    "id": "hab-s9",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais fait semblant de ne pas être chez moi pour ne pas ouvrir au livreur.",
    "en": "Never have I ever pretended not to be home so I wouldn't have to answer the door for a delivery.",
    "es": "Yo nunca he fingido no estar en casa para no tener que abrirle al repartidor.",
    "fr-ca": "J'ai jamais fait semblant de pas être là pour pas ouvrir au livreur."
  },
  {
    "id": "hab-s10",
    "difficulty": "soft",
    "category": "habits",
    "fr": "Je n'ai jamais porté des chaussettes dépareillées par flemme d'en chercher deux pareilles.",
    "en": "Never have I ever worn mismatched socks because I was too lazy to find a pair.",
    "es": "Yo nunca he usado calcetines disparejos por flojera de buscar el par.",
    "fr-ca": "J'ai jamais mis des bas pas pareils parce que ça me tentait pas d'en chercher deux pareils."
  },
  {
    "id": "adv-s1",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais fait du camping sauvage sans autorisation.",
    "en": "Never have I ever gone wild camping without permission.",
    "es": "Yo nunca he ido a acampar en lugar salvaje sin permiso.",
    "fr-ca": "J'ai jamais fait de camping sauvage pas permis."
  },
  {
    "id": "adv-s2",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais eu peur d'une araignée ou d'un insecte sous ma tente.",
    "en": "Never have I ever been scared of a spider or insect inside my tent.",
    "es": "Yo nunca he tenido miedo de una araña o insecto dentro de mi tienda de campaña.",
    "fr-ca": "J'ai jamais eu peur d'une araignée ou d'une bibitte dans ma tente."
  },
  {
    "id": "adv-s3",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais fait une randonnée de plus de 5 heures.",
    "en": "Never have I ever gone on a hike lasting more than 5 hours.",
    "es": "Yo nunca he ido a una caminata que dure más de 5 horas.",
    "fr-ca": "J'ai jamais fait de hike qui dure plus que 5 heures."
  },
  {
    "id": "adv-s4",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais essayé de faire un feu de camp sans briquet ni allumettes.",
    "en": "Never have I ever tried to build a campfire without a lighter or matches.",
    "es": "Yo nunca he intentado hacer una fogata sin encendedor ni cerillos.",
    "fr-ca": "J'ai jamais essayé de partir un feu sans lighter ni allumettes."
  },
  {
    "id": "adv-s5",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais bu l'eau d'une rivière ou d'une source naturelle.",
    "en": "Never have I ever drunk water from a river or a natural spring.",
    "es": "Yo nunca he tomado agua de un río o un manantial natural.",
    "fr-ca": "J'ai jamais bu l'eau direct d'une rivière ou d'une source."
  },
  {
    "id": "adv-s6",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais mangé des baies sauvages sans être sûr qu'elles étaient comestibles.",
    "en": "Never have I ever eaten wild berries without being sure they were edible.",
    "es": "Yo nunca he comido bayas salvajes sin estar seguro de que eran comestibles.",
    "fr-ca": "J'ai jamais mangé des petits fruits sauvages sans savoir si ça se mangeait."
  },
  {
    "id": "adv-s7",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais fait du stop (auto-stop) pour me déplacer.",
    "en": "Never have I ever hitchhiked to get around.",
    "es": "Yo nunca he hecho autostop para trasladarme.",
    "fr-ca": "J'ai jamais fait de pouce pour me déplacer."
  },
  {
    "id": "adv-s8",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais dormi à la belle étoile sans matelas ni duvet.",
    "en": "Never have I ever slept under the stars without a mattress or sleeping bag.",
    "es": "Yo nunca he dormido bajo las estrellas sin colchón o bolsa de dormir.",
    "fr-ca": "J'ai jamais dormi à la belle étoile sans matelas ni sleeping."
  },
  {
    "id": "adv-s9",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais fait une activité de sport extrême (saut à l'élastique, parachute...).",
    "en": "Never have I ever done an extreme sport (bungee jumping, skydiving...).",
    "es": "Yo nunca he hecho un deporte extremo (bungee, paracaidismo...).",
    "fr-ca": "J'ai jamais fait de sport extrême (saut en bungee, parachute...)."
  },
  {
    "id": "adv-s10",
    "difficulty": "soft",
    "category": "adventure",
    "fr": "Je n'ai jamais eu besoin d'une boussole ou d'un GPS pour retrouver mon chemin.",
    "en": "Never have I ever needed a compass or GPS to find my way back.",
    "es": "Yo nunca he necesitado una brújula o un GPS para encontrar mi camino de regreso.",
    "fr-ca": "J'ai jamais eu besoin d'une boussole ou d'un GPS pour retrouver mon chemin."
  },
  {
    "id": "car-s1",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais fait semblant de travailler alors que je scrollais sur les réseaux sociaux.",
    "en": "Never have I ever pretended to work while scrolling on social media.",
    "es": "Yo nunca he fingido trabajar mientras veo redes sociales.",
    "fr-ca": "J'ai jamais fait semblant de travailler pendant que je checkais mes réseaux sociaux."
  },
  {
    "id": "car-s2",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais envoyé un e-mail à la mauvaise personne par inattention.",
    "en": "Never have I ever sent an email to the wrong person by mistake.",
    "es": "Yo nunca he mandado un correo a la persona equivocada por error.",
    "fr-ca": "J'ai jamais envoyé un courriel à la mauvaise personne par inattention."
  },
  {
    "id": "car-s3",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais oublié de mettre la pièce jointe dans un mail 'ci-joint'.",
    "en": "Never have I ever forgot to include the attachment in an 'attached' email.",
    "es": "Yo nunca he olvidado adjuntar un archivo en un correo que decía 'adjunto'.",
    "fr-ca": "J'ai jamais oublié de mettre la pièce jointe dans un courriel."
  },
  {
    "id": "car-s4",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais fait semblant d'être en réunion pour éviter une tâche ennuyeuse.",
    "en": "Never have I ever pretended to be in a meeting to avoid a boring task.",
    "es": "Yo nunca he fingido estar en una junta para evitar una tarea aburrida.",
    "fr-ca": "J'ai jamais fait semblant d'être en meeting pour repousser une job plate."
  },
  {
    "id": "car-s5",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais volé des fournitures de bureau (stylos, cahiers, agrafeuse...).",
    "en": "Never have I ever stolen office supplies (pens, notebooks, stapler...).",
    "es": "Yo nunca me he robado material de oficina (plumas, cuadernos, grapadoras...).",
    "fr-ca": "J'ai jamais volé des choses de la job (crayons, cahiers, agrafeuse...)."
  },
  {
    "id": "car-s6",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais travaillé en pyjama (bas du corps) lors d'une visioconférence.",
    "en": "Never have I ever worked in pajamas (bottom half) during a video call.",
    "es": "Yo nunca he trabajado en pijama (de la cintura para abajo) en una videollamada.",
    "fr-ca": "J'ai jamais passé un vidéo call en pyjama par en bas."
  },
  {
    "id": "car-s7",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais mangé le déjeuner d'un collègue dans le frigo commun.",
    "en": "Never have I ever eaten a colleague's lunch from the shared fridge.",
    "es": "Yo nunca me he comido el almuerzo de un colega del refrigerador compartido.",
    "fr-ca": "J'ai jamais mangé le lunch d'un collègue dans le frigidaire de la job."
  },
  {
    "id": "car-s8",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais pris un jour de congé 'maladie' alors que j'étais en pleine forme.",
    "en": "Never have I ever taken a 'sick' day when I was perfectly healthy.",
    "es": "Yo nunca me he tomado un día de 'enfermedad' cuando en realidad estaba perfecto.",
    "fr-ca": "J'ai jamais callé malade à la job pendant que j'étais super en forme."
  },
  {
    "id": "car-s9",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais critiqué un collègue par erreur sur le fil de discussion où il se trouvait.",
    "en": "Never have I ever accidentally criticized a colleague in a chat thread they were in.",
    "es": "Yo nunca he criticado a un colega por error en un chat en el que él estaba.",
    "fr-ca": "J'ai jamais planté un collègue par erreur direct dans une conversation où il était."
  },
  {
    "id": "car-s10",
    "difficulty": "soft",
    "category": "career",
    "fr": "Je n'ai jamais fait une sieste pendant mes heures de télétravail.",
    "en": "Never have I ever taken a nap during my remote working hours.",
    "es": "Yo nunca he tomado una siesta durante mis horas de trabajo remoto.",
    "fr-ca": "J'ai jamais piqué un p'tit somme pendant mes heures de télétravail."
  },
  {
    "id": "soc-s1",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais stalké le profil d'un ex jusqu'à ses photos de 2015.",
    "en": "Never have I ever stalked an ex's profile all the way back to their 2015 photos.",
    "es": "Yo nunca he stalkeado a un ex hasta sus fotos de 2015.",
    "fr-ca": "J'ai jamais stalké mon ex jusqu'à ses photos de 2015."
  },
  {
    "id": "soc-s2",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais fait semblant de ne pas voir quelqu'un dans la rue pour éviter de lui parler.",
    "en": "Never have I ever pretended not to see someone on the street to avoid talking to them.",
    "es": "Yo nunca he fingido no ver a alguien en la calle para no hablarle.",
    "fr-ca": "J'ai jamais fait exprès de pas voir quelqu'un sur la rue pour éviter de lui jaser."
  },
  {
    "id": "soc-s3",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais menti pour annuler une soirée et rester seul devant une série.",
    "en": "Never have I ever lied to cancel plans just to stay home alone and watch a show.",
    "es": "Yo nunca he mentido para cancelar planes y quedarme viendo una serie.",
    "fr-ca": "J'ai jamais menti pour canceller une sortie juste pour rester chez nous devant la télé."
  },
  {
    "id": "soc-s4",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais liké par erreur une très vieille photo en stalkant quelqu'un.",
    "en": "Never have I ever accidentally liked a very old photo while stalking someone.",
    "es": "Yo nunca le he dado me gusta a una foto viejísima mientras stalkeaba a alguien.",
    "fr-ca": "J'ai jamais liké une vieille photo par accident en stalkant quelqu'un."
  },
  {
    "id": "soc-s5",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais créé un faux compte sur les réseaux sociaux pour espionner quelqu'un.",
    "en": "Never have I ever created a fake social media account to spy on someone.",
    "es": "Yo nunca me he creado una cuenta falsa para espiar a alguien.",
    "fr-ca": "J'ai jamais fait un faux compte de réseaux sociaux pour tchecker quelqu'un."
  },
  {
    "id": "soc-s6",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais fait semblant d'être au téléphone pour éviter une conversation gênante.",
    "en": "Never have I ever pretended to be on the phone to avoid an awkward conversation.",
    "es": "Yo nunca he fingido estar hablando por teléfono para evitar una plática incómoda.",
    "fr-ca": "J'ai jamais fait semblant d'être au bout du fil pour éviter une conversation inconfortable."
  },
  {
    "id": "soc-s7",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais oublié le prénom d'une personne à qui je parlais depuis 10 minutes.",
    "en": "Never have I ever forgotten the name of someone I had been talking to for 10 minutes.",
    "es": "Yo nunca he olvidado el nombre de la persona a la que le llevaba hablando 10 minutos.",
    "fr-ca": "J'ai jamais oublié le nom de la personne à qui je jasais depuis 10 minutes."
  },
  {
    "id": "soc-s8",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais checké mon téléphone pendant un rendez-vous galant parce que je m'ennuyais.",
    "en": "Never have I ever checked my phone during a date because I was bored.",
    "es": "Yo nunca he estado viendo el celular en medio de una cita porque me aburría.",
    "fr-ca": "J'ai jamais tchecké mon cell pendant une date parce que j'étais tanné."
  },
  {
    "id": "soc-s9",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais menti sur mon âge ou ma profession lors d'une soirée.",
    "en": "Never have I ever lied about my age or profession at a party.",
    "es": "Yo nunca he mentido sobre mi edad o profesión en una fiesta.",
    "fr-ca": "J'ai jamais menti sur mon âge ou ma job din partys."
  },
  {
    "id": "soc-s10",
    "difficulty": "soft",
    "category": "social",
    "fr": "Je n'ai jamais quitté un groupe WhatsApp juste après avoir lu un message énervant.",
    "en": "Never have I ever left a WhatsApp group right after reading an annoying message.",
    "es": "Yo nunca me he salido de un grupo de WhatsApp justo después de leer un mensaje irritante.",
    "fr-ca": "J'ai jamais quitté une conversation WhatsApp drette après avoir lu de quoi de fâchant."
  },
  {
    "id": "pty-s1",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais fait un 'Irish Exit' (parti sans dire au revoir).",
    "en": "Never have I ever pulled an Irish Exit (left without saying goodbye).",
    "es": "Yo nunca me he ido a la francesa de una fiesta.",
    "fr-ca": "J'ai jamais fait une sortie en douce d'un party sans dire bye."
  },
  {
    "id": "pty-s2",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais renversé mon verre sur quelqu'un par accident.",
    "en": "Never have I ever accidentally spilled my drink on someone.",
    "es": "Yo nunca le he tirado una bebida encima a alguien sin querer.",
    "fr-ca": "J'ai jamais renversé mon verre sur quelqu'un par accident."
  },
  {
    "id": "pty-s3",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais volé un briquet en soirée sans m'en rendre compte.",
    "en": "Never have I ever accidentally stolen a lighter at a party.",
    "es": "Yo nunca me he robado un encendedor en una fiesta sin darme cuenta.",
    "fr-ca": "J'ai jamais piqué un lighter dans un party sans m'en rendre compte."
  },
  {
    "id": "pty-s4",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais essayé de rentrer en boîte avec des chaussures sales.",
    "en": "Never have I ever tried to get into a club with dirty shoes.",
    "es": "Yo nunca he tratado de entrar a un antro con tenis o zapatos sucios.",
    "fr-ca": "J'ai jamais essayé de rentrer aux danseuses ou dans un club avec des souliers sales."
  },
  {
    "id": "pty-s5",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais envoyé un message gênant à un ex en étant ivre.",
    "en": "Never have I ever drunk-texted an ex.",
    "es": "Yo nunca le he mandado un mensaje vergonzoso a un ex estando borracho.",
    "fr-ca": "J'ai jamais texté de quoi de gênant à un ex pendant que j'étais chaud."
  },
  {
    "id": "pty-s6",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais chanté à tue-tête sur une chanson dont je ne connaissais pas les paroles.",
    "en": "Never have I ever belted out a song I didn't know the lyrics to.",
    "es": "Yo nunca he cantado a todo pulmón una canción sin saberme la letra.",
    "fr-ca": "J'ai jamais braillé une toune comme un débile quand je connaissais pas les paroles."
  },
  {
    "id": "pty-s7",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais dansé sur une table ou un bar.",
    "en": "Never have I ever danced on a table or a bar.",
    "es": "Yo nunca he bailado arriba de una mesa o en la barra.",
    "fr-ca": "J'ai jamais dansé sur une table ou au bar."
  },
  {
    "id": "pty-s8",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais menti au videur pour rentrer dans un club.",
    "en": "Never have I ever lied to a bouncer to get into a club.",
    "es": "Yo nunca le he mentido al cadenero para que me deje entrar al antro.",
    "fr-ca": "J'ai jamais menti au bouncer pour pouvoir rentrer dans l'club."
  },
  {
    "id": "pty-s9",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais mangé de la junk food à 4h du matin assis sur le trottoir.",
    "en": "Never have I ever eaten junk food at 4 AM sitting on the sidewalk.",
    "es": "Yo nunca he comido comida chatarra a las 4 de la mañana sentado en la banqueta.",
    "fr-ca": "J'ai jamais mangé du fast-food à 4h le matin su'l bord de la rue."
  },
  {
    "id": "pty-s10",
    "difficulty": "soft",
    "category": "party",
    "fr": "Je n'ai jamais perdu mon téléphone ou mes clés en soirée.",
    "en": "Never have I ever lost my phone or keys at a party.",
    "es": "Yo nunca he perdido el celular o las llaves en plena fiesta.",
    "fr-ca": "J'ai jamais perdu mon cell ou mes clés din partys."
  },
  {
    "id": "hot-s1",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais dit le mauvais prénom au lit.",
    "en": "Never have I ever said the wrong name in bed.",
    "es": "Yo nunca he dicho el nombre equivocado en la cama.",
    "fr-ca": "J'ai jamais dit le mauvais prénom dans l'lit."
  },
  {
    "id": "hot-s2",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais eu une crampe au mollet en pleine action.",
    "en": "Never have I ever had a leg cramp in the heat of the moment.",
    "es": "Yo nunca he tenido un calambre en plena acción.",
    "fr-ca": "J'ai jamais eu une crampe au mollet en plein dans l'action."
  },
  {
    "id": "hot-s3",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais simulé un orgasme pour en finir plus vite.",
    "en": "Never have I ever faked an orgasm to finish faster.",
    "es": "Yo nunca he fingido un orgasmo para terminar más rápido.",
    "fr-ca": "J'ai jamais faké un orgasme pour que ça finisse au plus sacrant."
  },
  {
    "id": "hot-s4",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais gardé mes chaussettes pendant l'acte.",
    "en": "Never have I ever kept my socks on during sex.",
    "es": "Yo nunca me he quedado con los calcetines puestos...",
    "fr-ca": "J'ai jamais gardé mes bas pendant l'acte."
  },
  {
    "id": "hot-s5",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais rigolé de façon incontrôlable en plein milieu.",
    "en": "Never have I ever laughed uncontrollably in the middle of it.",
    "es": "Yo nunca me he reído a carcajadas a la mitad de todo.",
    "fr-ca": "J'ai jamais commencé à rire pour rien en plein milieu."
  },
  {
    "id": "hot-s6",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais été interrompu(e) par mes parents ou colocataires.",
    "en": "Never have I ever been interrupted by my parents or roommates.",
    "es": "Yo nunca he sido interrumpido por mis papás o compañeros de cuarto.",
    "fr-ca": "J'ai jamais été dérangé par mes parents ou mes colocs en plein milieu de l'action."
  },
  {
    "id": "hot-s7",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais fait semblant de savoir ce que je faisais au lit.",
    "en": "Never have I ever pretended to know what I was doing in bed.",
    "es": "Yo nunca he fingido que sabía lo que estaba haciendo...",
    "fr-ca": "J'ai jamais fait semblant de savoir quoi faire dans l'lit."
  },
  {
    "id": "hot-s8",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais utilisé une playlist 'sexy' un peu trop cliché.",
    "en": "Never have I ever used a 'sexy' playlist that was way too cliché.",
    "es": "Yo nunca he puesto una playlist de música 'sexy' súper cliché.",
    "fr-ca": "J'ai jamais joué une playlist 'sexy' trop prévisible."
  },
  {
    "id": "hot-s9",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais pété accidentellement pendant l'effort.",
    "en": "Never have I ever accidentally farted during the effort.",
    "es": "Yo nunca me he tirado un pedo por accidente por el esfuerzo.",
    "fr-ca": "J'ai jamais pété sans faire par exprès pendant l'acte."
  },
  {
    "id": "hot-s10",
    "difficulty": "soft",
    "category": "hot",
    "fr": "Je n'ai jamais caché un suçon avec du maquillage ou une écharpe.",
    "en": "Never have I ever hidden a hickey with makeup or a scarf.",
    "es": "Yo nunca he tenido que esconder un chupetón con maquillaje o bufanda.",
    "fr-ca": "J'ai jamais été pogné pour cacher un suçon avec du maquillage ou une écharpe."
  },
  {
    "id": "gen-nhie-1",
    "en": "Never have I ever eaten something off the floor just to avoid someone.",
    "es": "Yo nunca he comido algo del suelo solo para evitar a alguien.",
    "fr": "Je n'ai jamais mangé quelque chose par terre juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais mangé de quoi à terre juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-2",
    "en": "Never have I ever eaten something off the floor after a breakup.",
    "es": "Yo nunca he comido algo del suelo después de una ruptura.",
    "fr": "Je n'ai jamais mangé quelque chose par terre après une rupture.",
    "fr-ca": "J'ai jamais mangé de quoi à terre après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-3",
    "en": "Never have I ever eaten something off the floor to impress a crush.",
    "es": "Yo nunca he comido algo del suelo para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais mangé quelque chose par terre pour impressionner un crush.",
    "fr-ca": "J'ai jamais mangé de quoi à terre pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-4",
    "en": "Never have I ever eaten something off the floor at a party.",
    "es": "Yo nunca he comido algo del suelo en una fiesta.",
    "fr": "Je n'ai jamais mangé quelque chose par terre à une soirée.",
    "fr-ca": "J'ai jamais mangé de quoi à terre dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-5",
    "en": "Never have I ever eaten something off the floor while drunk.",
    "es": "Yo nunca he comido algo del suelo mientras estaba borracho.",
    "fr": "Je n'ai jamais mangé quelque chose par terre en étant ivre.",
    "fr-ca": "J'ai jamais mangé de quoi à terre en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-6",
    "en": "Never have I ever eaten something off the floor during a serious meeting.",
    "es": "Yo nunca he comido algo del suelo durante una reunión seria.",
    "fr": "Je n'ai jamais mangé quelque chose par terre pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais mangé de quoi à terre pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-7",
    "en": "Never have I ever eaten something off the floor at the office.",
    "es": "Yo nunca he comido algo del suelo en la oficina.",
    "fr": "Je n'ai jamais mangé quelque chose par terre au bureau.",
    "fr-ca": "J'ai jamais mangé de quoi à terre à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-8",
    "en": "Never have I ever eaten something off the floor on vacation.",
    "es": "Yo nunca he comido algo del suelo de vacaciones.",
    "fr": "Je n'ai jamais mangé quelque chose par terre en vacances.",
    "fr-ca": "J'ai jamais mangé de quoi à terre en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-9",
    "en": "Never have I ever eaten something off the floor during a hike.",
    "es": "Yo nunca he comido algo del suelo durante una caminata.",
    "fr": "Je n'ai jamais mangé quelque chose par terre pendant une randonnée.",
    "fr-ca": "J'ai jamais mangé de quoi à terre pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-10",
    "en": "Never have I ever eaten something off the floor out of pure laziness.",
    "es": "Yo nunca he comido algo del suelo por pura pereza.",
    "fr": "Je n'ai jamais mangé quelque chose par terre par pure flemme.",
    "fr-ca": "J'ai jamais mangé de quoi à terre par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-11",
    "en": "Never have I ever eaten something off the floor when I thought nobody was watching.",
    "es": "Yo nunca he comido algo del suelo cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais mangé quelque chose par terre quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais mangé de quoi à terre quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-12",
    "en": "Never have I ever pretended to be sick just to avoid someone.",
    "es": "Yo nunca he fingido estar enfermo solo para evitar a alguien.",
    "fr": "Je n'ai jamais fait semblant d'être malade juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais fait semblant d'être malade juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-13",
    "en": "Never have I ever pretended to be sick after a breakup.",
    "es": "Yo nunca he fingido estar enfermo después de una ruptura.",
    "fr": "Je n'ai jamais fait semblant d'être malade après une rupture.",
    "fr-ca": "J'ai jamais fait semblant d'être malade après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-14",
    "en": "Never have I ever pretended to be sick to impress a crush.",
    "es": "Yo nunca he fingido estar enfermo para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais fait semblant d'être malade pour impressionner un crush.",
    "fr-ca": "J'ai jamais fait semblant d'être malade pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-15",
    "en": "Never have I ever pretended to be sick at a party.",
    "es": "Yo nunca he fingido estar enfermo en una fiesta.",
    "fr": "Je n'ai jamais fait semblant d'être malade à une soirée.",
    "fr-ca": "J'ai jamais fait semblant d'être malade dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-16",
    "en": "Never have I ever pretended to be sick while drunk.",
    "es": "Yo nunca he fingido estar enfermo mientras estaba borracho.",
    "fr": "Je n'ai jamais fait semblant d'être malade en étant ivre.",
    "fr-ca": "J'ai jamais fait semblant d'être malade en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-17",
    "en": "Never have I ever pretended to be sick during a serious meeting.",
    "es": "Yo nunca he fingido estar enfermo durante una reunión seria.",
    "fr": "Je n'ai jamais fait semblant d'être malade pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais fait semblant d'être malade pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-18",
    "en": "Never have I ever pretended to be sick at the office.",
    "es": "Yo nunca he fingido estar enfermo en la oficina.",
    "fr": "Je n'ai jamais fait semblant d'être malade au bureau.",
    "fr-ca": "J'ai jamais fait semblant d'être malade à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-19",
    "en": "Never have I ever pretended to be sick on vacation.",
    "es": "Yo nunca he fingido estar enfermo de vacaciones.",
    "fr": "Je n'ai jamais fait semblant d'être malade en vacances.",
    "fr-ca": "J'ai jamais fait semblant d'être malade en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-20",
    "en": "Never have I ever pretended to be sick during a hike.",
    "es": "Yo nunca he fingido estar enfermo durante una caminata.",
    "fr": "Je n'ai jamais fait semblant d'être malade pendant une randonnée.",
    "fr-ca": "J'ai jamais fait semblant d'être malade pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-21",
    "en": "Never have I ever pretended to be sick out of pure laziness.",
    "es": "Yo nunca he fingido estar enfermo por pura pereza.",
    "fr": "Je n'ai jamais fait semblant d'être malade par pure flemme.",
    "fr-ca": "J'ai jamais fait semblant d'être malade par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-22",
    "en": "Never have I ever pretended to be sick when I thought nobody was watching.",
    "es": "Yo nunca he fingido estar enfermo cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais fait semblant d'être malade quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais fait semblant d'être malade quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-23",
    "en": "Never have I ever stolen something small just to avoid someone.",
    "es": "Yo nunca he robado algo pequeño solo para evitar a alguien.",
    "fr": "Je n'ai jamais volé un petit truc juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais volé de quoi de petit juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-24",
    "en": "Never have I ever stolen something small after a breakup.",
    "es": "Yo nunca he robado algo pequeño después de una ruptura.",
    "fr": "Je n'ai jamais volé un petit truc après une rupture.",
    "fr-ca": "J'ai jamais volé de quoi de petit après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-25",
    "en": "Never have I ever stolen something small to impress a crush.",
    "es": "Yo nunca he robado algo pequeño para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais volé un petit truc pour impressionner un crush.",
    "fr-ca": "J'ai jamais volé de quoi de petit pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-26",
    "en": "Never have I ever stolen something small at a party.",
    "es": "Yo nunca he robado algo pequeño en una fiesta.",
    "fr": "Je n'ai jamais volé un petit truc à une soirée.",
    "fr-ca": "J'ai jamais volé de quoi de petit dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-27",
    "en": "Never have I ever stolen something small while drunk.",
    "es": "Yo nunca he robado algo pequeño mientras estaba borracho.",
    "fr": "Je n'ai jamais volé un petit truc en étant ivre.",
    "fr-ca": "J'ai jamais volé de quoi de petit en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-28",
    "en": "Never have I ever stolen something small during a serious meeting.",
    "es": "Yo nunca he robado algo pequeño durante una reunión seria.",
    "fr": "Je n'ai jamais volé un petit truc pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais volé de quoi de petit pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-29",
    "en": "Never have I ever stolen something small at the office.",
    "es": "Yo nunca he robado algo pequeño en la oficina.",
    "fr": "Je n'ai jamais volé un petit truc au bureau.",
    "fr-ca": "J'ai jamais volé de quoi de petit à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-30",
    "en": "Never have I ever stolen something small on vacation.",
    "es": "Yo nunca he robado algo pequeño de vacaciones.",
    "fr": "Je n'ai jamais volé un petit truc en vacances.",
    "fr-ca": "J'ai jamais volé de quoi de petit en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-31",
    "en": "Never have I ever stolen something small during a hike.",
    "es": "Yo nunca he robado algo pequeño durante una caminata.",
    "fr": "Je n'ai jamais volé un petit truc pendant une randonnée.",
    "fr-ca": "J'ai jamais volé de quoi de petit pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-32",
    "en": "Never have I ever stolen something small out of pure laziness.",
    "es": "Yo nunca he robado algo pequeño por pura pereza.",
    "fr": "Je n'ai jamais volé un petit truc par pure flemme.",
    "fr-ca": "J'ai jamais volé de quoi de petit par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-33",
    "en": "Never have I ever stolen something small when I thought nobody was watching.",
    "es": "Yo nunca he robado algo pequeño cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais volé un petit truc quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais volé de quoi de petit quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-34",
    "en": "Never have I ever snooped through a phone just to avoid someone.",
    "es": "Yo nunca he revisado un teléfono solo para evitar a alguien.",
    "fr": "Je n'ai jamais fouillé dans un téléphone juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais fouillé dans un cell juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-35",
    "en": "Never have I ever snooped through a phone after a breakup.",
    "es": "Yo nunca he revisado un teléfono después de una ruptura.",
    "fr": "Je n'ai jamais fouillé dans un téléphone après une rupture.",
    "fr-ca": "J'ai jamais fouillé dans un cell après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-36",
    "en": "Never have I ever snooped through a phone to impress a crush.",
    "es": "Yo nunca he revisado un teléfono para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais fouillé dans un téléphone pour impressionner un crush.",
    "fr-ca": "J'ai jamais fouillé dans un cell pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-37",
    "en": "Never have I ever snooped through a phone at a party.",
    "es": "Yo nunca he revisado un teléfono en una fiesta.",
    "fr": "Je n'ai jamais fouillé dans un téléphone à une soirée.",
    "fr-ca": "J'ai jamais fouillé dans un cell dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-38",
    "en": "Never have I ever snooped through a phone while drunk.",
    "es": "Yo nunca he revisado un teléfono mientras estaba borracho.",
    "fr": "Je n'ai jamais fouillé dans un téléphone en étant ivre.",
    "fr-ca": "J'ai jamais fouillé dans un cell en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-39",
    "en": "Never have I ever snooped through a phone during a serious meeting.",
    "es": "Yo nunca he revisado un teléfono durante una reunión seria.",
    "fr": "Je n'ai jamais fouillé dans un téléphone pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais fouillé dans un cell pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-40",
    "en": "Never have I ever snooped through a phone at the office.",
    "es": "Yo nunca he revisado un teléfono en la oficina.",
    "fr": "Je n'ai jamais fouillé dans un téléphone au bureau.",
    "fr-ca": "J'ai jamais fouillé dans un cell à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-41",
    "en": "Never have I ever snooped through a phone on vacation.",
    "es": "Yo nunca he revisado un teléfono de vacaciones.",
    "fr": "Je n'ai jamais fouillé dans un téléphone en vacances.",
    "fr-ca": "J'ai jamais fouillé dans un cell en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-42",
    "en": "Never have I ever snooped through a phone during a hike.",
    "es": "Yo nunca he revisado un teléfono durante una caminata.",
    "fr": "Je n'ai jamais fouillé dans un téléphone pendant une randonnée.",
    "fr-ca": "J'ai jamais fouillé dans un cell pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-43",
    "en": "Never have I ever snooped through a phone out of pure laziness.",
    "es": "Yo nunca he revisado un teléfono por pura pereza.",
    "fr": "Je n'ai jamais fouillé dans un téléphone par pure flemme.",
    "fr-ca": "J'ai jamais fouillé dans un cell par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-44",
    "en": "Never have I ever snooped through a phone when I thought nobody was watching.",
    "es": "Yo nunca he revisado un teléfono cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais fouillé dans un téléphone quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais fouillé dans un cell quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-45",
    "en": "Never have I ever lied in a job interview just to avoid someone.",
    "es": "Yo nunca he mentido en una entrevista de trabajo solo para evitar a alguien.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-46",
    "en": "Never have I ever lied in a job interview after a breakup.",
    "es": "Yo nunca he mentido en una entrevista de trabajo después de una ruptura.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche après une rupture.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-47",
    "en": "Never have I ever lied in a job interview to impress a crush.",
    "es": "Yo nunca he mentido en una entrevista de trabajo para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche pour impressionner un crush.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-48",
    "en": "Never have I ever lied in a job interview at a party.",
    "es": "Yo nunca he mentido en una entrevista de trabajo en una fiesta.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche à une soirée.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-49",
    "en": "Never have I ever lied in a job interview while drunk.",
    "es": "Yo nunca he mentido en una entrevista de trabajo mientras estaba borracho.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche en étant ivre.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-50",
    "en": "Never have I ever lied in a job interview during a serious meeting.",
    "es": "Yo nunca he mentido en una entrevista de trabajo durante una reunión seria.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-51",
    "en": "Never have I ever lied in a job interview at the office.",
    "es": "Yo nunca he mentido en una entrevista de trabajo en la oficina.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche au bureau.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-52",
    "en": "Never have I ever lied in a job interview on vacation.",
    "es": "Yo nunca he mentido en una entrevista de trabajo de vacaciones.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche en vacances.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-53",
    "en": "Never have I ever lied in a job interview during a hike.",
    "es": "Yo nunca he mentido en una entrevista de trabajo durante una caminata.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche pendant une randonnée.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-54",
    "en": "Never have I ever lied in a job interview out of pure laziness.",
    "es": "Yo nunca he mentido en una entrevista de trabajo por pura pereza.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche par pure flemme.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-55",
    "en": "Never have I ever lied in a job interview when I thought nobody was watching.",
    "es": "Yo nunca he mentido en una entrevista de trabajo cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais menti lors d'un entretien d'embauche quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais menti dans une entrevue de job quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-56",
    "en": "Never have I ever cried in a public place just to avoid someone.",
    "es": "Yo nunca he llorado en un lugar público solo para evitar a alguien.",
    "fr": "Je n'ai jamais pleuré dans un lieu public juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais braillé en public juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-57",
    "en": "Never have I ever cried in a public place after a breakup.",
    "es": "Yo nunca he llorado en un lugar público después de una ruptura.",
    "fr": "Je n'ai jamais pleuré dans un lieu public après une rupture.",
    "fr-ca": "J'ai jamais braillé en public après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-58",
    "en": "Never have I ever cried in a public place to impress a crush.",
    "es": "Yo nunca he llorado en un lugar público para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais pleuré dans un lieu public pour impressionner un crush.",
    "fr-ca": "J'ai jamais braillé en public pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-59",
    "en": "Never have I ever cried in a public place at a party.",
    "es": "Yo nunca he llorado en un lugar público en una fiesta.",
    "fr": "Je n'ai jamais pleuré dans un lieu public à une soirée.",
    "fr-ca": "J'ai jamais braillé en public dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-60",
    "en": "Never have I ever cried in a public place while drunk.",
    "es": "Yo nunca he llorado en un lugar público mientras estaba borracho.",
    "fr": "Je n'ai jamais pleuré dans un lieu public en étant ivre.",
    "fr-ca": "J'ai jamais braillé en public en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-61",
    "en": "Never have I ever cried in a public place during a serious meeting.",
    "es": "Yo nunca he llorado en un lugar público durante una reunión seria.",
    "fr": "Je n'ai jamais pleuré dans un lieu public pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais braillé en public pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-62",
    "en": "Never have I ever cried in a public place at the office.",
    "es": "Yo nunca he llorado en un lugar público en la oficina.",
    "fr": "Je n'ai jamais pleuré dans un lieu public au bureau.",
    "fr-ca": "J'ai jamais braillé en public à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-63",
    "en": "Never have I ever cried in a public place on vacation.",
    "es": "Yo nunca he llorado en un lugar público de vacaciones.",
    "fr": "Je n'ai jamais pleuré dans un lieu public en vacances.",
    "fr-ca": "J'ai jamais braillé en public en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-64",
    "en": "Never have I ever cried in a public place during a hike.",
    "es": "Yo nunca he llorado en un lugar público durante una caminata.",
    "fr": "Je n'ai jamais pleuré dans un lieu public pendant une randonnée.",
    "fr-ca": "J'ai jamais braillé en public pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-65",
    "en": "Never have I ever cried in a public place out of pure laziness.",
    "es": "Yo nunca he llorado en un lugar público por pura pereza.",
    "fr": "Je n'ai jamais pleuré dans un lieu public par pure flemme.",
    "fr-ca": "J'ai jamais braillé en public par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-66",
    "en": "Never have I ever cried in a public place when I thought nobody was watching.",
    "es": "Yo nunca he llorado en un lugar público cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais pleuré dans un lieu public quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais braillé en public quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-67",
    "en": "Never have I ever forgotten someone's name instantly just to avoid someone.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante solo para evitar a alguien.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-68",
    "en": "Never have I ever forgotten someone's name instantly after a breakup.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante después de una ruptura.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément après une rupture.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-69",
    "en": "Never have I ever forgotten someone's name instantly to impress a crush.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément pour impressionner un crush.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-70",
    "en": "Never have I ever forgotten someone's name instantly at a party.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante en una fiesta.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément à une soirée.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-71",
    "en": "Never have I ever forgotten someone's name instantly while drunk.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante mientras estaba borracho.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément en étant ivre.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-72",
    "en": "Never have I ever forgotten someone's name instantly during a serious meeting.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante durante una reunión seria.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-73",
    "en": "Never have I ever forgotten someone's name instantly at the office.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante en la oficina.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément au bureau.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-74",
    "en": "Never have I ever forgotten someone's name instantly on vacation.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante de vacaciones.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément en vacances.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-75",
    "en": "Never have I ever forgotten someone's name instantly during a hike.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante durante una caminata.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément pendant une randonnée.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-76",
    "en": "Never have I ever forgotten someone's name instantly out of pure laziness.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante por pura pereza.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément par pure flemme.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-77",
    "en": "Never have I ever forgotten someone's name instantly when I thought nobody was watching.",
    "es": "Yo nunca he olvidado el nombre de alguien al instante cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais oublié le nom de quelqu'un instantanément quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais oublié le nom de quelqu'un d'un coup quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-78",
    "en": "Never have I ever tripped over myself just to avoid someone.",
    "es": "Yo nunca he tropezado conmigo mismo solo para evitar a alguien.",
    "fr": "Je n'ai jamais trébuché tout seul juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais trébuché tout seul juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-79",
    "en": "Never have I ever tripped over myself after a breakup.",
    "es": "Yo nunca he tropezado conmigo mismo después de una ruptura.",
    "fr": "Je n'ai jamais trébuché tout seul après une rupture.",
    "fr-ca": "J'ai jamais trébuché tout seul après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-80",
    "en": "Never have I ever tripped over myself to impress a crush.",
    "es": "Yo nunca he tropezado conmigo mismo para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais trébuché tout seul pour impressionner un crush.",
    "fr-ca": "J'ai jamais trébuché tout seul pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-81",
    "en": "Never have I ever tripped over myself at a party.",
    "es": "Yo nunca he tropezado conmigo mismo en una fiesta.",
    "fr": "Je n'ai jamais trébuché tout seul à une soirée.",
    "fr-ca": "J'ai jamais trébuché tout seul dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-82",
    "en": "Never have I ever tripped over myself while drunk.",
    "es": "Yo nunca he tropezado conmigo mismo mientras estaba borracho.",
    "fr": "Je n'ai jamais trébuché tout seul en étant ivre.",
    "fr-ca": "J'ai jamais trébuché tout seul en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-83",
    "en": "Never have I ever tripped over myself during a serious meeting.",
    "es": "Yo nunca he tropezado conmigo mismo durante una reunión seria.",
    "fr": "Je n'ai jamais trébuché tout seul pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais trébuché tout seul pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-84",
    "en": "Never have I ever tripped over myself at the office.",
    "es": "Yo nunca he tropezado conmigo mismo en la oficina.",
    "fr": "Je n'ai jamais trébuché tout seul au bureau.",
    "fr-ca": "J'ai jamais trébuché tout seul à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-85",
    "en": "Never have I ever tripped over myself on vacation.",
    "es": "Yo nunca he tropezado conmigo mismo de vacaciones.",
    "fr": "Je n'ai jamais trébuché tout seul en vacances.",
    "fr-ca": "J'ai jamais trébuché tout seul en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-86",
    "en": "Never have I ever tripped over myself during a hike.",
    "es": "Yo nunca he tropezado conmigo mismo durante una caminata.",
    "fr": "Je n'ai jamais trébuché tout seul pendant une randonnée.",
    "fr-ca": "J'ai jamais trébuché tout seul pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-87",
    "en": "Never have I ever tripped over myself out of pure laziness.",
    "es": "Yo nunca he tropezado conmigo mismo por pura pereza.",
    "fr": "Je n'ai jamais trébuché tout seul par pure flemme.",
    "fr-ca": "J'ai jamais trébuché tout seul par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-88",
    "en": "Never have I ever tripped over myself when I thought nobody was watching.",
    "es": "Yo nunca he tropezado conmigo mismo cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais trébuché tout seul quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais trébuché tout seul quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-89",
    "en": "Never have I ever eaten a whole pizza alone just to avoid someone.",
    "es": "Yo nunca he comido una pizza entera solo solo para evitar a alguien.",
    "fr": "Je n'ai jamais mangé une pizza entière seul juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-90",
    "en": "Never have I ever eaten a whole pizza alone after a breakup.",
    "es": "Yo nunca he comido una pizza entera solo después de una ruptura.",
    "fr": "Je n'ai jamais mangé une pizza entière seul après une rupture.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-91",
    "en": "Never have I ever eaten a whole pizza alone to impress a crush.",
    "es": "Yo nunca he comido una pizza entera solo para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais mangé une pizza entière seul pour impressionner un crush.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-92",
    "en": "Never have I ever eaten a whole pizza alone at a party.",
    "es": "Yo nunca he comido una pizza entera solo en una fiesta.",
    "fr": "Je n'ai jamais mangé une pizza entière seul à une soirée.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-93",
    "en": "Never have I ever eaten a whole pizza alone while drunk.",
    "es": "Yo nunca he comido una pizza entera solo mientras estaba borracho.",
    "fr": "Je n'ai jamais mangé une pizza entière seul en étant ivre.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-94",
    "en": "Never have I ever eaten a whole pizza alone during a serious meeting.",
    "es": "Yo nunca he comido una pizza entera solo durante una reunión seria.",
    "fr": "Je n'ai jamais mangé une pizza entière seul pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-95",
    "en": "Never have I ever eaten a whole pizza alone at the office.",
    "es": "Yo nunca he comido una pizza entera solo en la oficina.",
    "fr": "Je n'ai jamais mangé une pizza entière seul au bureau.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-96",
    "en": "Never have I ever eaten a whole pizza alone on vacation.",
    "es": "Yo nunca he comido una pizza entera solo de vacaciones.",
    "fr": "Je n'ai jamais mangé une pizza entière seul en vacances.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-97",
    "en": "Never have I ever eaten a whole pizza alone during a hike.",
    "es": "Yo nunca he comido una pizza entera solo durante una caminata.",
    "fr": "Je n'ai jamais mangé une pizza entière seul pendant une randonnée.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-98",
    "en": "Never have I ever eaten a whole pizza alone out of pure laziness.",
    "es": "Yo nunca he comido una pizza entera solo por pura pereza.",
    "fr": "Je n'ai jamais mangé une pizza entière seul par pure flemme.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-99",
    "en": "Never have I ever eaten a whole pizza alone when I thought nobody was watching.",
    "es": "Yo nunca he comido una pizza entera solo cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais mangé une pizza entière seul quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais mangé une pizza au complet tout seul quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-100",
    "en": "Never have I ever texted the wrong person just to avoid someone.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada solo para evitar a alguien.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais texté la mauvaise personne juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-101",
    "en": "Never have I ever texted the wrong person after a breakup.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada después de una ruptura.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne après une rupture.",
    "fr-ca": "J'ai jamais texté la mauvaise personne après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-102",
    "en": "Never have I ever texted the wrong person to impress a crush.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne pour impressionner un crush.",
    "fr-ca": "J'ai jamais texté la mauvaise personne pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-103",
    "en": "Never have I ever texted the wrong person at a party.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada en una fiesta.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne à une soirée.",
    "fr-ca": "J'ai jamais texté la mauvaise personne dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-104",
    "en": "Never have I ever texted the wrong person while drunk.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada mientras estaba borracho.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne en étant ivre.",
    "fr-ca": "J'ai jamais texté la mauvaise personne en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-105",
    "en": "Never have I ever texted the wrong person during a serious meeting.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada durante una reunión seria.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais texté la mauvaise personne pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-106",
    "en": "Never have I ever texted the wrong person at the office.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada en la oficina.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne au bureau.",
    "fr-ca": "J'ai jamais texté la mauvaise personne à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-107",
    "en": "Never have I ever texted the wrong person on vacation.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada de vacaciones.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne en vacances.",
    "fr-ca": "J'ai jamais texté la mauvaise personne en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-108",
    "en": "Never have I ever texted the wrong person during a hike.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada durante una caminata.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne pendant une randonnée.",
    "fr-ca": "J'ai jamais texté la mauvaise personne pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-109",
    "en": "Never have I ever texted the wrong person out of pure laziness.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada por pura pereza.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne par pure flemme.",
    "fr-ca": "J'ai jamais texté la mauvaise personne par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-110",
    "en": "Never have I ever texted the wrong person when I thought nobody was watching.",
    "es": "Yo nunca he enviado un mensaje a la persona equivocada cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais envoyé un message à la mauvaise personne quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais texté la mauvaise personne quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-111",
    "en": "Never have I ever fallen asleep at work just to avoid someone.",
    "es": "Yo nunca he quedado dormido en el trabajo solo para evitar a alguien.",
    "fr": "Je n'ai jamais endormi au travail juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais endormi à job juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-112",
    "en": "Never have I ever fallen asleep at work after a breakup.",
    "es": "Yo nunca he quedado dormido en el trabajo después de una ruptura.",
    "fr": "Je n'ai jamais endormi au travail après une rupture.",
    "fr-ca": "J'ai jamais endormi à job après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-113",
    "en": "Never have I ever fallen asleep at work to impress a crush.",
    "es": "Yo nunca he quedado dormido en el trabajo para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais endormi au travail pour impressionner un crush.",
    "fr-ca": "J'ai jamais endormi à job pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-114",
    "en": "Never have I ever fallen asleep at work at a party.",
    "es": "Yo nunca he quedado dormido en el trabajo en una fiesta.",
    "fr": "Je n'ai jamais endormi au travail à une soirée.",
    "fr-ca": "J'ai jamais endormi à job dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-115",
    "en": "Never have I ever fallen asleep at work while drunk.",
    "es": "Yo nunca he quedado dormido en el trabajo mientras estaba borracho.",
    "fr": "Je n'ai jamais endormi au travail en étant ivre.",
    "fr-ca": "J'ai jamais endormi à job en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-116",
    "en": "Never have I ever fallen asleep at work during a serious meeting.",
    "es": "Yo nunca he quedado dormido en el trabajo durante una reunión seria.",
    "fr": "Je n'ai jamais endormi au travail pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais endormi à job pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-117",
    "en": "Never have I ever fallen asleep at work at the office.",
    "es": "Yo nunca he quedado dormido en el trabajo en la oficina.",
    "fr": "Je n'ai jamais endormi au travail au bureau.",
    "fr-ca": "J'ai jamais endormi à job à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-118",
    "en": "Never have I ever fallen asleep at work on vacation.",
    "es": "Yo nunca he quedado dormido en el trabajo de vacaciones.",
    "fr": "Je n'ai jamais endormi au travail en vacances.",
    "fr-ca": "J'ai jamais endormi à job en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-119",
    "en": "Never have I ever fallen asleep at work during a hike.",
    "es": "Yo nunca he quedado dormido en el trabajo durante una caminata.",
    "fr": "Je n'ai jamais endormi au travail pendant une randonnée.",
    "fr-ca": "J'ai jamais endormi à job pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-120",
    "en": "Never have I ever fallen asleep at work out of pure laziness.",
    "es": "Yo nunca he quedado dormido en el trabajo por pura pereza.",
    "fr": "Je n'ai jamais endormi au travail par pure flemme.",
    "fr-ca": "J'ai jamais endormi à job par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-121",
    "en": "Never have I ever fallen asleep at work when I thought nobody was watching.",
    "es": "Yo nunca he quedado dormido en el trabajo cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais endormi au travail quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais endormi à job quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-122",
    "en": "Never have I ever used a fake name just to avoid someone.",
    "es": "Yo nunca he usado un nombre falso solo para evitar a alguien.",
    "fr": "Je n'ai jamais utilisé un faux nom juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais utilisé un faux nom juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-123",
    "en": "Never have I ever used a fake name after a breakup.",
    "es": "Yo nunca he usado un nombre falso después de una ruptura.",
    "fr": "Je n'ai jamais utilisé un faux nom après une rupture.",
    "fr-ca": "J'ai jamais utilisé un faux nom après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-124",
    "en": "Never have I ever used a fake name to impress a crush.",
    "es": "Yo nunca he usado un nombre falso para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais utilisé un faux nom pour impressionner un crush.",
    "fr-ca": "J'ai jamais utilisé un faux nom pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-125",
    "en": "Never have I ever used a fake name at a party.",
    "es": "Yo nunca he usado un nombre falso en una fiesta.",
    "fr": "Je n'ai jamais utilisé un faux nom à une soirée.",
    "fr-ca": "J'ai jamais utilisé un faux nom dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-126",
    "en": "Never have I ever used a fake name while drunk.",
    "es": "Yo nunca he usado un nombre falso mientras estaba borracho.",
    "fr": "Je n'ai jamais utilisé un faux nom en étant ivre.",
    "fr-ca": "J'ai jamais utilisé un faux nom en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-127",
    "en": "Never have I ever used a fake name during a serious meeting.",
    "es": "Yo nunca he usado un nombre falso durante una reunión seria.",
    "fr": "Je n'ai jamais utilisé un faux nom pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais utilisé un faux nom pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-128",
    "en": "Never have I ever used a fake name at the office.",
    "es": "Yo nunca he usado un nombre falso en la oficina.",
    "fr": "Je n'ai jamais utilisé un faux nom au bureau.",
    "fr-ca": "J'ai jamais utilisé un faux nom à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-129",
    "en": "Never have I ever used a fake name on vacation.",
    "es": "Yo nunca he usado un nombre falso de vacaciones.",
    "fr": "Je n'ai jamais utilisé un faux nom en vacances.",
    "fr-ca": "J'ai jamais utilisé un faux nom en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-130",
    "en": "Never have I ever used a fake name during a hike.",
    "es": "Yo nunca he usado un nombre falso durante una caminata.",
    "fr": "Je n'ai jamais utilisé un faux nom pendant une randonnée.",
    "fr-ca": "J'ai jamais utilisé un faux nom pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-131",
    "en": "Never have I ever used a fake name out of pure laziness.",
    "es": "Yo nunca he usado un nombre falso por pura pereza.",
    "fr": "Je n'ai jamais utilisé un faux nom par pure flemme.",
    "fr-ca": "J'ai jamais utilisé un faux nom par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-132",
    "en": "Never have I ever used a fake name when I thought nobody was watching.",
    "es": "Yo nunca he usado un nombre falso cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais utilisé un faux nom quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais utilisé un faux nom quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-133",
    "en": "Never have I ever regifted a present just to avoid someone.",
    "es": "Yo nunca he regalado un regalo que me dieron solo para evitar a alguien.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-134",
    "en": "Never have I ever regifted a present after a breakup.",
    "es": "Yo nunca he regalado un regalo que me dieron después de una ruptura.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné après une rupture.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-135",
    "en": "Never have I ever regifted a present to impress a crush.",
    "es": "Yo nunca he regalado un regalo que me dieron para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné pour impressionner un crush.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-136",
    "en": "Never have I ever regifted a present at a party.",
    "es": "Yo nunca he regalado un regalo que me dieron en una fiesta.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné à une soirée.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-137",
    "en": "Never have I ever regifted a present while drunk.",
    "es": "Yo nunca he regalado un regalo que me dieron mientras estaba borracho.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné en étant ivre.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-138",
    "en": "Never have I ever regifted a present during a serious meeting.",
    "es": "Yo nunca he regalado un regalo que me dieron durante una reunión seria.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-139",
    "en": "Never have I ever regifted a present at the office.",
    "es": "Yo nunca he regalado un regalo que me dieron en la oficina.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné au bureau.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-140",
    "en": "Never have I ever regifted a present on vacation.",
    "es": "Yo nunca he regalado un regalo que me dieron de vacaciones.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné en vacances.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-141",
    "en": "Never have I ever regifted a present during a hike.",
    "es": "Yo nunca he regalado un regalo que me dieron durante una caminata.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné pendant une randonnée.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-142",
    "en": "Never have I ever regifted a present out of pure laziness.",
    "es": "Yo nunca he regalado un regalo que me dieron por pura pereza.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné par pure flemme.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-143",
    "en": "Never have I ever regifted a present when I thought nobody was watching.",
    "es": "Yo nunca he regalado un regalo que me dieron cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais offert un cadeau qu'on m'avait donné quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais redonné un cadeau à quelqu'un d'autre quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-144",
    "en": "Never have I ever skipped a shower just to avoid someone.",
    "es": "Yo nunca he saltado una ducha solo para evitar a alguien.",
    "fr": "Je n'ai jamais sauté une douche juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais sauté une douche juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-145",
    "en": "Never have I ever skipped a shower after a breakup.",
    "es": "Yo nunca he saltado una ducha después de una ruptura.",
    "fr": "Je n'ai jamais sauté une douche après une rupture.",
    "fr-ca": "J'ai jamais sauté une douche après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-146",
    "en": "Never have I ever skipped a shower to impress a crush.",
    "es": "Yo nunca he saltado una ducha para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais sauté une douche pour impressionner un crush.",
    "fr-ca": "J'ai jamais sauté une douche pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-147",
    "en": "Never have I ever skipped a shower at a party.",
    "es": "Yo nunca he saltado una ducha en una fiesta.",
    "fr": "Je n'ai jamais sauté une douche à une soirée.",
    "fr-ca": "J'ai jamais sauté une douche dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-148",
    "en": "Never have I ever skipped a shower while drunk.",
    "es": "Yo nunca he saltado una ducha mientras estaba borracho.",
    "fr": "Je n'ai jamais sauté une douche en étant ivre.",
    "fr-ca": "J'ai jamais sauté une douche en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-149",
    "en": "Never have I ever skipped a shower during a serious meeting.",
    "es": "Yo nunca he saltado una ducha durante una reunión seria.",
    "fr": "Je n'ai jamais sauté une douche pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais sauté une douche pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-150",
    "en": "Never have I ever skipped a shower at the office.",
    "es": "Yo nunca he saltado una ducha en la oficina.",
    "fr": "Je n'ai jamais sauté une douche au bureau.",
    "fr-ca": "J'ai jamais sauté une douche à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-151",
    "en": "Never have I ever skipped a shower on vacation.",
    "es": "Yo nunca he saltado una ducha de vacaciones.",
    "fr": "Je n'ai jamais sauté une douche en vacances.",
    "fr-ca": "J'ai jamais sauté une douche en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-152",
    "en": "Never have I ever skipped a shower during a hike.",
    "es": "Yo nunca he saltado una ducha durante una caminata.",
    "fr": "Je n'ai jamais sauté une douche pendant une randonnée.",
    "fr-ca": "J'ai jamais sauté une douche pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-153",
    "en": "Never have I ever skipped a shower out of pure laziness.",
    "es": "Yo nunca he saltado una ducha por pura pereza.",
    "fr": "Je n'ai jamais sauté une douche par pure flemme.",
    "fr-ca": "J'ai jamais sauté une douche par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-154",
    "en": "Never have I ever skipped a shower when I thought nobody was watching.",
    "es": "Yo nunca he saltado una ducha cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais sauté une douche quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais sauté une douche quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-155",
    "en": "Never have I ever gotten lost in my own city just to avoid someone.",
    "es": "Yo nunca he perdido en mi propia ciudad solo para evitar a alguien.",
    "fr": "Je n'ai jamais perdu dans ma propre ville juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-156",
    "en": "Never have I ever gotten lost in my own city after a breakup.",
    "es": "Yo nunca he perdido en mi propia ciudad después de una ruptura.",
    "fr": "Je n'ai jamais perdu dans ma propre ville après une rupture.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-157",
    "en": "Never have I ever gotten lost in my own city to impress a crush.",
    "es": "Yo nunca he perdido en mi propia ciudad para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais perdu dans ma propre ville pour impressionner un crush.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-158",
    "en": "Never have I ever gotten lost in my own city at a party.",
    "es": "Yo nunca he perdido en mi propia ciudad en una fiesta.",
    "fr": "Je n'ai jamais perdu dans ma propre ville à une soirée.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-159",
    "en": "Never have I ever gotten lost in my own city while drunk.",
    "es": "Yo nunca he perdido en mi propia ciudad mientras estaba borracho.",
    "fr": "Je n'ai jamais perdu dans ma propre ville en étant ivre.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-160",
    "en": "Never have I ever gotten lost in my own city during a serious meeting.",
    "es": "Yo nunca he perdido en mi propia ciudad durante una reunión seria.",
    "fr": "Je n'ai jamais perdu dans ma propre ville pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-161",
    "en": "Never have I ever gotten lost in my own city at the office.",
    "es": "Yo nunca he perdido en mi propia ciudad en la oficina.",
    "fr": "Je n'ai jamais perdu dans ma propre ville au bureau.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-162",
    "en": "Never have I ever gotten lost in my own city on vacation.",
    "es": "Yo nunca he perdido en mi propia ciudad de vacaciones.",
    "fr": "Je n'ai jamais perdu dans ma propre ville en vacances.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-163",
    "en": "Never have I ever gotten lost in my own city during a hike.",
    "es": "Yo nunca he perdido en mi propia ciudad durante una caminata.",
    "fr": "Je n'ai jamais perdu dans ma propre ville pendant une randonnée.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-164",
    "en": "Never have I ever gotten lost in my own city out of pure laziness.",
    "es": "Yo nunca he perdido en mi propia ciudad por pura pereza.",
    "fr": "Je n'ai jamais perdu dans ma propre ville par pure flemme.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-165",
    "en": "Never have I ever gotten lost in my own city when I thought nobody was watching.",
    "es": "Yo nunca he perdido en mi propia ciudad cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais perdu dans ma propre ville quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais perdu dans ma propre ville quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-166",
    "en": "Never have I ever laughed at a very inappropriate time just to avoid someone.",
    "es": "Yo nunca he reído en un momento muy inapropiado solo para evitar a alguien.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais ri à un mauvais moment juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-167",
    "en": "Never have I ever laughed at a very inappropriate time after a breakup.",
    "es": "Yo nunca he reído en un momento muy inapropiado después de una ruptura.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié après une rupture.",
    "fr-ca": "J'ai jamais ri à un mauvais moment après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-168",
    "en": "Never have I ever laughed at a very inappropriate time to impress a crush.",
    "es": "Yo nunca he reído en un momento muy inapropiado para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié pour impressionner un crush.",
    "fr-ca": "J'ai jamais ri à un mauvais moment pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-169",
    "en": "Never have I ever laughed at a very inappropriate time at a party.",
    "es": "Yo nunca he reído en un momento muy inapropiado en una fiesta.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié à une soirée.",
    "fr-ca": "J'ai jamais ri à un mauvais moment dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-170",
    "en": "Never have I ever laughed at a very inappropriate time while drunk.",
    "es": "Yo nunca he reído en un momento muy inapropiado mientras estaba borracho.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié en étant ivre.",
    "fr-ca": "J'ai jamais ri à un mauvais moment en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-171",
    "en": "Never have I ever laughed at a very inappropriate time during a serious meeting.",
    "es": "Yo nunca he reído en un momento muy inapropiado durante una reunión seria.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais ri à un mauvais moment pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-172",
    "en": "Never have I ever laughed at a very inappropriate time at the office.",
    "es": "Yo nunca he reído en un momento muy inapropiado en la oficina.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié au bureau.",
    "fr-ca": "J'ai jamais ri à un mauvais moment à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-173",
    "en": "Never have I ever laughed at a very inappropriate time on vacation.",
    "es": "Yo nunca he reído en un momento muy inapropiado de vacaciones.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié en vacances.",
    "fr-ca": "J'ai jamais ri à un mauvais moment en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-174",
    "en": "Never have I ever laughed at a very inappropriate time during a hike.",
    "es": "Yo nunca he reído en un momento muy inapropiado durante una caminata.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié pendant une randonnée.",
    "fr-ca": "J'ai jamais ri à un mauvais moment pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-175",
    "en": "Never have I ever laughed at a very inappropriate time out of pure laziness.",
    "es": "Yo nunca he reído en un momento muy inapropiado por pura pereza.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié par pure flemme.",
    "fr-ca": "J'ai jamais ri à un mauvais moment par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-176",
    "en": "Never have I ever laughed at a very inappropriate time when I thought nobody was watching.",
    "es": "Yo nunca he reído en un momento muy inapropiado cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais ri à un moment très inapproprié quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais ri à un mauvais moment quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-177",
    "en": "Never have I ever sneaked out of a party just to avoid someone.",
    "es": "Yo nunca he escapado de una fiesta solo para evitar a alguien.",
    "fr": "Je n'ai jamais éclipsé d'une soirée juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais éclipsé d'un party juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-178",
    "en": "Never have I ever sneaked out of a party after a breakup.",
    "es": "Yo nunca he escapado de una fiesta después de una ruptura.",
    "fr": "Je n'ai jamais éclipsé d'une soirée après une rupture.",
    "fr-ca": "J'ai jamais éclipsé d'un party après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-179",
    "en": "Never have I ever sneaked out of a party to impress a crush.",
    "es": "Yo nunca he escapado de una fiesta para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais éclipsé d'une soirée pour impressionner un crush.",
    "fr-ca": "J'ai jamais éclipsé d'un party pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-180",
    "en": "Never have I ever sneaked out of a party at a party.",
    "es": "Yo nunca he escapado de una fiesta en una fiesta.",
    "fr": "Je n'ai jamais éclipsé d'une soirée à une soirée.",
    "fr-ca": "J'ai jamais éclipsé d'un party dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-181",
    "en": "Never have I ever sneaked out of a party while drunk.",
    "es": "Yo nunca he escapado de una fiesta mientras estaba borracho.",
    "fr": "Je n'ai jamais éclipsé d'une soirée en étant ivre.",
    "fr-ca": "J'ai jamais éclipsé d'un party en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-182",
    "en": "Never have I ever sneaked out of a party during a serious meeting.",
    "es": "Yo nunca he escapado de una fiesta durante una reunión seria.",
    "fr": "Je n'ai jamais éclipsé d'une soirée pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais éclipsé d'un party pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-183",
    "en": "Never have I ever sneaked out of a party at the office.",
    "es": "Yo nunca he escapado de una fiesta en la oficina.",
    "fr": "Je n'ai jamais éclipsé d'une soirée au bureau.",
    "fr-ca": "J'ai jamais éclipsé d'un party à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-184",
    "en": "Never have I ever sneaked out of a party on vacation.",
    "es": "Yo nunca he escapado de una fiesta de vacaciones.",
    "fr": "Je n'ai jamais éclipsé d'une soirée en vacances.",
    "fr-ca": "J'ai jamais éclipsé d'un party en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-185",
    "en": "Never have I ever sneaked out of a party during a hike.",
    "es": "Yo nunca he escapado de una fiesta durante una caminata.",
    "fr": "Je n'ai jamais éclipsé d'une soirée pendant une randonnée.",
    "fr-ca": "J'ai jamais éclipsé d'un party pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-186",
    "en": "Never have I ever sneaked out of a party out of pure laziness.",
    "es": "Yo nunca he escapado de una fiesta por pura pereza.",
    "fr": "Je n'ai jamais éclipsé d'une soirée par pure flemme.",
    "fr-ca": "J'ai jamais éclipsé d'un party par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-187",
    "en": "Never have I ever sneaked out of a party when I thought nobody was watching.",
    "es": "Yo nunca he escapado de una fiesta cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais éclipsé d'une soirée quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais éclipsé d'un party quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-188",
    "en": "Never have I ever Googled my own name just to avoid someone.",
    "es": "Yo nunca he buscado mi propio nombre en Google solo para evitar a alguien.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais googlé mon propre nom juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-189",
    "en": "Never have I ever Googled my own name after a breakup.",
    "es": "Yo nunca he buscado mi propio nombre en Google después de una ruptura.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google après une rupture.",
    "fr-ca": "J'ai jamais googlé mon propre nom après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-190",
    "en": "Never have I ever Googled my own name to impress a crush.",
    "es": "Yo nunca he buscado mi propio nombre en Google para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google pour impressionner un crush.",
    "fr-ca": "J'ai jamais googlé mon propre nom pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-191",
    "en": "Never have I ever Googled my own name at a party.",
    "es": "Yo nunca he buscado mi propio nombre en Google en una fiesta.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google à une soirée.",
    "fr-ca": "J'ai jamais googlé mon propre nom dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-192",
    "en": "Never have I ever Googled my own name while drunk.",
    "es": "Yo nunca he buscado mi propio nombre en Google mientras estaba borracho.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google en étant ivre.",
    "fr-ca": "J'ai jamais googlé mon propre nom en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-193",
    "en": "Never have I ever Googled my own name during a serious meeting.",
    "es": "Yo nunca he buscado mi propio nombre en Google durante una reunión seria.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais googlé mon propre nom pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-194",
    "en": "Never have I ever Googled my own name at the office.",
    "es": "Yo nunca he buscado mi propio nombre en Google en la oficina.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google au bureau.",
    "fr-ca": "J'ai jamais googlé mon propre nom à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-195",
    "en": "Never have I ever Googled my own name on vacation.",
    "es": "Yo nunca he buscado mi propio nombre en Google de vacaciones.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google en vacances.",
    "fr-ca": "J'ai jamais googlé mon propre nom en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-196",
    "en": "Never have I ever Googled my own name during a hike.",
    "es": "Yo nunca he buscado mi propio nombre en Google durante una caminata.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google pendant une randonnée.",
    "fr-ca": "J'ai jamais googlé mon propre nom pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-197",
    "en": "Never have I ever Googled my own name out of pure laziness.",
    "es": "Yo nunca he buscado mi propio nombre en Google por pura pereza.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google par pure flemme.",
    "fr-ca": "J'ai jamais googlé mon propre nom par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-198",
    "en": "Never have I ever Googled my own name when I thought nobody was watching.",
    "es": "Yo nunca he buscado mi propio nombre en Google cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais cherché mon propre nom sur Google quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais googlé mon propre nom quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-199",
    "en": "Never have I ever cheated on a test just to avoid someone.",
    "es": "Yo nunca he copiado en un examen solo para evitar a alguien.",
    "fr": "Je n'ai jamais triché à un examen juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais triché dans un examen juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-200",
    "en": "Never have I ever cheated on a test after a breakup.",
    "es": "Yo nunca he copiado en un examen después de una ruptura.",
    "fr": "Je n'ai jamais triché à un examen après une rupture.",
    "fr-ca": "J'ai jamais triché dans un examen après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-201",
    "en": "Never have I ever cheated on a test to impress a crush.",
    "es": "Yo nunca he copiado en un examen para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais triché à un examen pour impressionner un crush.",
    "fr-ca": "J'ai jamais triché dans un examen pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-202",
    "en": "Never have I ever cheated on a test at a party.",
    "es": "Yo nunca he copiado en un examen en una fiesta.",
    "fr": "Je n'ai jamais triché à un examen à une soirée.",
    "fr-ca": "J'ai jamais triché dans un examen dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-203",
    "en": "Never have I ever cheated on a test while drunk.",
    "es": "Yo nunca he copiado en un examen mientras estaba borracho.",
    "fr": "Je n'ai jamais triché à un examen en étant ivre.",
    "fr-ca": "J'ai jamais triché dans un examen en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-204",
    "en": "Never have I ever cheated on a test during a serious meeting.",
    "es": "Yo nunca he copiado en un examen durante una reunión seria.",
    "fr": "Je n'ai jamais triché à un examen pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais triché dans un examen pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-205",
    "en": "Never have I ever cheated on a test at the office.",
    "es": "Yo nunca he copiado en un examen en la oficina.",
    "fr": "Je n'ai jamais triché à un examen au bureau.",
    "fr-ca": "J'ai jamais triché dans un examen à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-206",
    "en": "Never have I ever cheated on a test on vacation.",
    "es": "Yo nunca he copiado en un examen de vacaciones.",
    "fr": "Je n'ai jamais triché à un examen en vacances.",
    "fr-ca": "J'ai jamais triché dans un examen en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-207",
    "en": "Never have I ever cheated on a test during a hike.",
    "es": "Yo nunca he copiado en un examen durante una caminata.",
    "fr": "Je n'ai jamais triché à un examen pendant une randonnée.",
    "fr-ca": "J'ai jamais triché dans un examen pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-208",
    "en": "Never have I ever cheated on a test out of pure laziness.",
    "es": "Yo nunca he copiado en un examen por pura pereza.",
    "fr": "Je n'ai jamais triché à un examen par pure flemme.",
    "fr-ca": "J'ai jamais triché dans un examen par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-209",
    "en": "Never have I ever cheated on a test when I thought nobody was watching.",
    "es": "Yo nunca he copiado en un examen cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais triché à un examen quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais triché dans un examen quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-210",
    "en": "Never have I ever worn underwear inside out just to avoid someone.",
    "es": "Yo nunca he usado ropa interior al revés solo para evitar a alguien.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers juste pour éviter quelqu'un.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers juste pour éviter quelqu'un.",
    "category": "social",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-211",
    "en": "Never have I ever worn underwear inside out after a breakup.",
    "es": "Yo nunca he usado ropa interior al revés después de una ruptura.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers après une rupture.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers après avoir cassé.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-212",
    "en": "Never have I ever worn underwear inside out to impress a crush.",
    "es": "Yo nunca he usado ropa interior al revés para impresionar a la persona que me gusta.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers pour impressionner un crush.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers pour impressionner une date.",
    "category": "hot",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-213",
    "en": "Never have I ever worn underwear inside out at a party.",
    "es": "Yo nunca he usado ropa interior al revés en una fiesta.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers à une soirée.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers dans un party.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-214",
    "en": "Never have I ever worn underwear inside out while drunk.",
    "es": "Yo nunca he usado ropa interior al revés mientras estaba borracho.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers en étant ivre.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers en étant chaud.",
    "category": "party",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-215",
    "en": "Never have I ever worn underwear inside out during a serious meeting.",
    "es": "Yo nunca he usado ropa interior al revés durante una reunión seria.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers pendant une réunion sérieuse.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers pendant un meeting sérieux.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-216",
    "en": "Never have I ever worn underwear inside out at the office.",
    "es": "Yo nunca he usado ropa interior al revés en la oficina.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers au bureau.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers à la job.",
    "category": "career",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-217",
    "en": "Never have I ever worn underwear inside out on vacation.",
    "es": "Yo nunca he usado ropa interior al revés de vacaciones.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers en vacances.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers en vacances.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-218",
    "en": "Never have I ever worn underwear inside out during a hike.",
    "es": "Yo nunca he usado ropa interior al revés durante una caminata.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers pendant une randonnée.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers pendant une randonnée.",
    "category": "adventure",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-219",
    "en": "Never have I ever worn underwear inside out out of pure laziness.",
    "es": "Yo nunca he usado ropa interior al revés por pura pereza.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers par pure flemme.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers par flemme.",
    "category": "habits",
    "difficulty": "soft"
  },
  {
    "id": "gen-nhie-220",
    "en": "Never have I ever worn underwear inside out when I thought nobody was watching.",
    "es": "Yo nunca he usado ropa interior al revés cuando creí que nadie miraba.",
    "fr": "Je n'ai jamais porté des sous-vêtements à l'envers quand je pensais que personne ne regardait.",
    "fr-ca": "J'ai jamais mis mes bobettes à l'envers quand je pensais que personne regardait.",
    "category": "habits",
    "difficulty": "soft"
  }
];
