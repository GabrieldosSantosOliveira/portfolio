export interface IProject {
  image: string;
  title: string;
  deploy?: string;
  link: string;
  description: string[];
  techs: string[];
}
export const projects: IProject[] = [
  {
    image:"/assets/nlw_copa.jpg",
    title:"Nlw Copa Mobile",
    description:["Esta aplicação foi desenvolvida durante a semana da nlw copa na qual foi desenvolvida um aplicativo para realização de bolões."],
    link:"https://github.com/GabrieldosSantosOliveira/nlw-copa-mobile/",
    techs:['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
  },
  {
    image: '/assets/rockethelp.jpg',
    link: 'https://github.com/GabrieldosSantosOliveira/rockethelp',
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
    description: [
      'O Rocket Help foi uma aplicação desenvolvida durante a nlw que auxilia na abertura da solicitação de reparo no caso de quebra, para isso foi utilizado o firebase',
    ],
    title: 'Rocket Help',
  },
  {
    link: 'https://github.com/GabrieldosSantosOliveira/news-paper',
    description: [
      'O News Paper é uma aplicação no qual as pessoas podem acessar e ler noticias. Depois de estudar banstante arquitetura e separação de código eu tentei colocar tudo isso em pratica e aqui eu pude aplicar a inversão de depencia, separação da lógica em services.',
    ],
    image: '/assets/news_paper.jpg',
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
    title: 'News Paper',
  },
  {
    link: 'https://github.com/GabrieldosSantosOliveira/Atividade3',
    description: [
      'O Star Converse é uma aplicação que possibilita a conversão de graus Celsius para Kelvin e Fahrenheit, nesta aplicação foi utilizado o padrão de composição para a construção de entradas e Lottie para as animações',
    ],
    image: '/assets/star_converse.jpg',
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
    title: 'Star Converse',
  },
  {
    link: 'https://github.com/GabrieldosSantosOliveira/projeto',
    description: [
      'Pagina de cadastro responsiva para cadastro num site de acampamentos',
    ],
    image: '/assets/camp.png',
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
    title: 'Camp In',
  },
  {
    image: '/assets/awards.jpg',
    title: 'The Game Awards',
    description: [
      'Este projeto lista os jogos que concorreram as principais categorias do The Game Awards',
    ],
    link: 'https://github.com/GabrieldosSantosOliveira/TheGameAwards',
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
  },
  {
    image: '/assets/rick_and_morty.jpg',
    title: 'Rick and Morty',
    description: ['Este projeto lista todos os personagens de rick and morty'],
    link: 'https://github.com/GabrieldosSantosOliveira/rick-and-morty',
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
  },
  {
    image: '/assets/generatorKey.jpg',
    title: 'Generator Key',
    link: 'https://github.com/GabrieldosSantosOliveira/Tarefa',
    description: ['Aplicação que permite criar senhas para se utilizar'],
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
  },
  {
    image: '/assets/ntft.jpeg',
    title: 'NTFT',
    link: 'https://github.com/GabrieldosSantosOliveira/ntft-card',
    description: ['Aplicação que apresenta um card ntft'],
    techs: ['/assets/javascript.svg', '/assets/css.svg', '/assets/html.svg'],
  },
  {
    image: '/assets/githubSearch.jpg',
    title: 'GitHub Search',
    link: 'https://github.com/GabrieldosSantosOliveira/ProjetoMobile',
    description: [
      'Possibilita ao usuário buscar todos os seus repositórios no github e apresenta o seu perfil de usuário',
    ],
    techs: ['/assets/typescript.svg', '/assets/expo.svg', '/assets/react.svg'],
  },
  {
    image: '/assets/cifra.jpeg',
    title: 'Cifra de César',
    link: 'https://github.com/GabrieldosSantosOliveira/cifra-cesar',
    description: [
      'Este projeto permite criptografar um texto utilizando a cifra de cesar',
    ],
    techs: ['/assets/javascript.svg', '/assets/css.svg', '/assets/html.svg'],
  },
];
