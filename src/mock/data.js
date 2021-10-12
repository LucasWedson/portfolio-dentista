import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Drª Gabriela Miranda', // e.g: 'Name | Developer'
  lang: 'pt', // e.g: en, es, fr, jp
  description: 'Bem vindos ao meu site!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Olá tudo bem?',
  name: 'Eu sou a Drª Gabriela Miranda',
  subtitle: 'Cirurgiã Dentista',
  cta: 'Saber Mais',
};

// ABOUT DATA
export const aboutData = {
  Title:'Sobre',
  img: 'foto2.png',
  paragraphOne: 'Conheci a odontologia em 2014 através de um projeto social onde fui voluntária e desde então me apaixonei. Comecei a pesquisar sobre a área e descobri que a odontologia vai muito além da arcada dentária ,restaura a auto estima devolvendo o sorriso e a função e eu decidi que queria fazer parte disso. ',
  paragraphTwo: 'Em 2017 iniciei os estudos na universidade tocantinense presidente Antônio Carlos, foram 5 anos de muita dedicação e amor, ao longo destes anos fiz cursos de atualização , trabalhos científicos e quanto mais eu descobria sobre a odontologia mais eu me encantava por ela . ',
  paragraphThree: 'Hoje meu maior desejo é devolver sorrisos e promover saúde, evoluindo a cada dia na minha profissão para melhor atender meus pacientes.',
  // resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
