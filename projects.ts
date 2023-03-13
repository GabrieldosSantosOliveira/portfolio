export interface IProject {
  image: string;
  title: string;
  link: string;
}
export const projects: IProject[] = [
  {
    image: '/assets/generatorKey.jpg',
    title: 'Generator Key',
    link: 'https://github.com/GabrieldosSantosOliveira/Tarefa',
  },
  {
    image: '/assets/ntft.jpeg',
    title: 'NTFT',
    link: 'https://github.com/GabrieldosSantosOliveira/ntft-card',
  },
  {
    image: '/assets/githubSearch.jpg',
    title: 'GitHub Search',
    link: 'https://github.com/GabrieldosSantosOliveira/ProjetoMobile',
  },
  {
    image: '/assets/cifra.jpeg',
    title: 'Cifra de César',
    link: 'https://github.com/GabrieldosSantosOliveira/cifra-cesar',
  },
];
