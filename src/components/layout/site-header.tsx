"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, LogoIcon, MenuIcon } from "@/components/icons";
import { navLinks } from "@/data/data";

const DESKTOP_NAV = "(min-width: 80rem)";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const close = () => setMenuOpen(false);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      close();
      toggleRef.current?.focus();
    };
    const desktopNav = window.matchMedia(DESKTOP_NAV);

    document.addEventListener("keydown", closeOnEscape);
    desktopNav.addEventListener("change", close);
    document.body.classList.add("overflow-hidden");

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktopNav.removeEventListener("change", close);
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-white px-6 md:px-20 xl:relative">
      <div className="v-page flex h-16 items-center justify-between xl:h-20">
        <a href="#" aria-label="Digitalbank home">
          <LogoIcon className="h-5.5 w-38.5 text-blue-950" />
        </a>

        <nav aria-label="Main" className="hidden self-stretch xl:block">
          <ul className="flex h-full items-stretch gap-8">
            {navLinks.map(({ label, href }) => (
              <li key={label} className="flex">
                <a href={href} className="v-nav-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#" className="v-btn hidden xl:grid">
          Request Invite
        </a>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="-m-3 p-3 text-blue-950 xl:hidden"
        >
          {menuOpen ? (
            <CloseIcon className="size-4.5" />
          ) : (
            <MenuIcon className="h-2.75 w-6" />
          )}
        </button>
      </div>

      <div
        id="site-menu"
        inert={!menuOpen}
        data-open={menuOpen || undefined}
        onClick={(event) => {
          if (event.target === event.currentTarget) setMenuOpen(false);
        }}
        className="v-menu-overlay"
      >
        <nav aria-label="Mobile" className="v-page rounded-card bg-white py-6">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="block py-2 text-center text-lead hover:text-teal-700"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
