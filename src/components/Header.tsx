import Link from 'next/link';
import { useState } from 'react';
export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-[#f1faee] fixed w-full h-14 font-[Poppins] px-3 flex justify-between items-center font-medium">
      <h1>Gabriel Oliveira</h1>
      <div
        className="cursor-pointer lg:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <div className="w-7 h-1 bg-black rounded"></div>
        <div className="w-7 h-1 bg-black mt-1 rounded"></div>
        <div className="w-7 h-1 bg-black mt-1 rounded"></div>
      </div>
      <ul
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'}
      absolute h-screen bg-[#f1faee] w-full top-14 flex-col py-10 items-center
      lg:flex gap-8 lg:relative lg:bg-transparent lg:h-auto lg:w-auto lg:flex-row lg:top-auto`}
      >
        <li>
          <Link href="/">Sobre Mim</Link>
        </li>
        <li>
          <Link href="/projects">Projetos</Link>
        </li>
        <li>
          <Link href="/techs">Tecnologias</Link>
        </li>
      </ul>
    </header>
  );
};
