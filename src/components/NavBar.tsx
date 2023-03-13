import styles from './navbar.module.css';
export const NavBar = () => {
  return (
    <ul
      className={`bottom-14 flex items-center justify-between px-5 h-14  w-[95vw] sm:w-96 mx-auto rounded-full  bg-[#B8B8FF] font-[Lexend] font-semibold text-base shadow-xl text-black fixed font ${styles.center}`}
    >
      <li>
        <a href="#about">Sobre</a>
      </li>
      <li>
        <a href="#techs">Conhecimentos</a>
      </li>
      <li>
        <a href="#projects">Projetos</a>
      </li>
      <li>
        <a href="#contact">Contato</a>
      </li>
    </ul>
  );
};
