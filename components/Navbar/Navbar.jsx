import React, { useRef } from 'react';
import Link from 'next/link';

import { links } from './index.config';

const Navbar = () => {
  const navContentRef = useRef();
  const events = {
    navContent: {
      onClick: () => {
        navContentRef.current.classList.toggle('hidden');
      },
    },
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-5 lg:px-40">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          className="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
        </svg>
        <span className="font-semibold text-xl tracking-tight">
          Chroma Minecraft
        </span>
      </div>
      <div
        id="nav-toggle"
        className="block lg:hidden"
        onClick={events.navContent.onClick}
      >
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        id="nav-content"
        className="w-full block flex-row lg:flex lg:items-center lg:w-auto hidden"
        ref={navContentRef}
      >
        {links.map(({ key, href, label }) => (
          <li key={key} className="flex py-1 px-2">
            <Link href={href}>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-100 hover:text-white">
                {label}
              </a>
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
