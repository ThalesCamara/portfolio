import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMenu, LuX } from "react-icons/lu";
import { portfolio } from "../data/portfolio";

const navigation = [
  { label: "Sobre", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Acadêmico", href: "#academic" },
  { label: "Formação", href: "#education" },
  { label: "Contato", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="group flex items-center gap-3 font-semibold text-white" onClick={() => setMenuOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/10 font-mono text-sm text-blue-300 transition group-hover:border-blue-400/60">TD</span>
          <span className="hidden sm:inline">{portfolio.personal.name}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">{item.label}</a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href={portfolio.personal.github} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white" aria-label="GitHub">
            <FaGithub size={20} aria-hidden="true" />
          </a>
          <a href={portfolio.personal.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white" aria-label="LinkedIn">
            <FaLinkedin size={20} aria-hidden="true" />
          </a>
          <button type="button" className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:bg-white/5 hover:text-white md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <LuX size={20} aria-hidden="true" /> : <LuMenu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center gap-4 rounded-lg px-3 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white">
                <span className="font-mono text-xs text-blue-400">0{index + 1}</span>{item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
