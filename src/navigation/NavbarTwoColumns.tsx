import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">{props.logo}</Link>
    </div>

    <nav>
      <ul className="navbar flex items-center justify-between text-xl font-medium text-gray-800">
        <li className="border-b border-slate-300 px-10 transition-all duration-500 ease-out hover:border-primary-400 hover:text-primary-500">
          <Link href="#about">Über Uns</Link>
        </li>
        <li className="border-b border-slate-300 px-10 transition-all duration-500 ease-out hover:border-primary-400 hover:text-primary-500 ">
          <Link href="/" className="dropdown">
            Wissenswertes
            <ul className="dropdown-content">
              <li>Unsere Satzung</li>
              <li>Alles über die Anmeldung</li>
              <li>Kontakt</li>
            </ul>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export { NavbarTwoColumns };
