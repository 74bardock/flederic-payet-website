export type TestimonialCategory =
  | 'sante'
  | 'convalescence'
  | 'perte_de_poids'
  | 'performance'
  | 'fatigue'
  | 'energie';

export interface Testimonial {
  id: string;
  author: string;
  age?: number;
  date: string;
  location?: string;
  categories: TestimonialCategory[];
  isHandwritten: boolean;
  handwrittenOriginalUrls?: string[];
  mediaUrl?: string; // Pour les futures vidéos ou visuels d'illustration
  rawText: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'genevieve-jelsch',
    author: 'Geneviève Jelsch',
    age: 57,
    date: '2019',
    location: 'Alsace',
    categories: ['sante', 'fatigue', 'energie'],
    isHandwritten: true,
    handwrittenOriginalUrls: [
      '/images/testimonials/jelsch-page1.jpg',
      '/images/testimonials/jelsch-page2.jpg'
    ],
    rawText: `JELSCH
Je me présente, je m'appelle Geneviève, Je vis en ALSACE. J'ai 57ans 22.01.1962
En 2003 j'ai commencé à avoir des douleurs dans les articulations, au bout de plusieurs années ces douleurs se sont empirées. La nuit j'hurlais tellement que je souffrais ça me prenait d'un coup en plein sommeil que j'effrayais mon mari, c'était d'une violence que je ne peux pas l'expliquer. Je ne me comprenais pas se qu'il m'arrivait.
Quand j'allais chez mon médecin il me disait toujours la même chose. (oh c'est du à votre cancer du sein)
J'ai dû réduire mes heures de travail et au bout de quelques mois arrêter complètement. Je ne pouvais presque plus marcher.
Après 10ans de souffrance, ENFIN!! mon médecin m'a annoncé que j'avais une fibromyalgie et maladie de lyme. J'ai dû être hospitalisée car j'ai fais une attaque faciale et pendant plus d'une année j'ai bégaillé.

Et c'est là que j'ai fait la connaissance d'un coach sportif (FLED PAYET) Grâce à une amie Cathy qui l'avait connu dans une salle de sport.
J'ai donc commencé à faire du sport et changer mon alimentation, très vite mon état allait mieux c'est comme si je revivais. La premier heure de sport j'aurais pu grimper les murs.
Même mon mari était très surpris des résultats.
Durant 2ans j'ai fait du sport intensif 5jours par semaine et chaque jour j'allais de mieux en mieux. Ma famille et mes ami(es) ne me reconnaissaient plus.
Ma vie à totalement changé et aujourd'hui Je continu de faire du Sport et je ne souffre presque plus. Grâce à Fled qui était toujours la pour moi et m'a Soutenu même dans les moments de découragement, il se déplaçait jusqu'a chez moi. Je ne le remercierai jamais assez. Un grand BRAVO à lui.`
  },
  {
    id: 'gc-55',
    author: 'G.C.',
    age: 55,
    date: '29/04/2018',
    categories: ['sante', 'perte_de_poids', 'fatigue', 'energie'],
    isHandwritten: true,
    handwrittenOriginalUrls: [
      '/images/testimonials/gc-55-page1.jpg',
      '/images/testimonials/gc-55-page2.jpg'
    ],
    rawText: `Le 29.04.2018

Quand j'ai croisé le chemin du coach Flédéric Payet en 2014 je n'allais vraiment pas bien. J'étais en dépression suite à des problèmes personnelles, je mangeais beaucoup de sucre et j'étais malade toute l'année. Sinusites à répétitions, mal de gorge, toux, et toujours sous antibiotiques. Des douleurs aux bras, aux jambes, sensation de froid, des fourmiffes et comme si des aiguilles me piquaient. J'avais également des difficultés à avaler la nourriture et à boire. Le gastro entérologue m'avait diagnostique un dysfonctionnement de l'œsophage. Les muscles ne fonctionnaient plus par moment ils faisaient grève et le médecin n'avait aucune explication de quoi ça pouvait venir. Je souffrais aussi d'inflammations de la vésicule biliaire, sortie estomac et côlon. Très grande fatigue et de plus en plus de mal à me lever le matin et assumer ma journée, je n'avais vraiment plus goût à la vie.
Aujourd'hui grâce au changement d'hygiène que Flédéric m'a appris et à l'entraînement en salle de sport journalièrement je me porte bien et me suis allégée de 24 kg. Je suis allée voir un cardiologue juste pour un simple contrôle et il était super content des résultats + (C'est d'effort). Apparemment je me porte comme une jeune fille. Il était d'ailleurs très curieux de savoir comment je vivais et ce que je faisais pour être aussi bien en forme et pour garder la ligne. Il était vraiment très impressionné et m'a dit que si tous ces clients faisaient comme moi ils seraient sûrement en meilleur santé.

Même ma prise de sang a un peu varié malgré que de ce côté j'avais pas trop à me plaindre. Là elle est encore mieux. Mais pour en arriver a ce stade le chemin était long et il m'a fallu beaucoup de courage avec des hauts et des bas. Mais Flédéric était toujours la a me pousser même quand moi je n'y croyais plus et avec des prises de bec. Pour moi aujourd'hui c'est une renaissance d'être bien dans mon corp et je continue de m'alimenter de la façon dont il m'a appris et prend des compléments alimentaires. Et les personnes qui continuent de me dire qu'il faut que j'arrête de faire régime et que je dois manger normalement je les ignorent. Personnellement je pense qu'ils ont rien compris et c'est quoi manger normalement ??? (du sucre, du pain, des brioches, des pizzas......). J'en avais fais l'expérience de la mal bouffe. Naturellement j'ai des envies comme tout le monde et je me fais plaisir mais sans tomber dans les excès. Et si vraiment j'abuse mon corp me diche rapidement le droit chemin.
Plus jamais comme avant.

G.C 55ans`
  },
  {
    id: 'genevieve-kembs',
    author: 'Geneviève',
    date: '30/04/2019',
    location: 'Kembs',
    categories: ['convalescence', 'perte_de_poids', 'energie'],
    isHandwritten: false,
    rawText: `Kembs, le 30.04.2019

Je m’appelle Geneviève et j’ai fait la connaissance de Mr. Flédérick Payet par l’intermédiaire d’une amie qui m’a vanté ses mérites.

Suite à une fracture de la rotule et après une rééducation d’1an et demi j’étais toujours très handicapé dans mes déplacements de tous les jours. Sans parler des douleurs.

Mon médecin lui n’avait comme solution que des infiltrations.

J’ai donc décidé de me lancer et de suivre un entraînement avec Frederick ainsi que son programme alimentaire.

Son entraînement m’a permis de reprendre de l’énergie et de la force. Mon genou étant plus musclé, au fur et à mesure mes douleurs se sont atténuées pour finir par disparaître.

Maintenant je peux à nouveau me déplacer normalement. Je peux monter et descendre les escaliers sans difficulté. Je peux même à nouveau courir, ce qui était impensable avant. J’ai aussi perdu mes 5kg superflu.

J’ai pris des séances de massage avec lui, qui m’ont été très bénéfique.

J’ai eu de la chance de rencontrer Flédérick. Il m’a remise sur les rails. C’est quelqu’un de très efficace et qui prend son travail très à cœur. Il est très professionnel et il mérite d’être connu.

Merci Flédérick`
  },
  {
    id: 'rallye-quad',
    author: 'Athlète Rallye-Raid',
    date: '2019',
    categories: ['performance', 'energie'],
    isHandwritten: false,
    mediaUrl: '/images/testimonials/quad-rallye.jpg',
    rawText: `Accompagnement et préparation physique métabolique pour la compétition en sports mécaniques (rallye-raid quad). Optimisation de l'endurance cardiovasculaire, résistance à l'effort sous conditions extrêmes et accélération des temps de récupération entre les étapes.`
  }
];