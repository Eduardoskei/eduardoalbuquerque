'use client';

import Link from 'next/link';
import { useState } from 'react';
import ModeToggle from './themeToggle/ThemeToggleBtn';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-foreground text-xl font-bold">SKEI</h1>

        <button
          className="text-foreground md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <ul className={`md:flex gap-6 items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <ModeToggle/>
          </li>
          <li>
            <Link href="#aboutMeSection" className="text-foreground hover:text-violet-400">
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link href="#skillSection" className="text-foreground hover:text-violet-400">
              Tecnologias
            </Link>
          </li>
          <li>
            <Link href="#worksSection" className="text-foreground hover:text-violet-400">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#contactSection" className="text-foreground hover:text-violet-400">
              Contatos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
