import { LuArrowUp } from "react-icons/lu";
import { portfolio } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-400/20 bg-blue-500/10 font-mono text-xs text-blue-300">TD</span><p className="text-sm text-slate-500">© {new Date().getFullYear()} {portfolio.personal.name}</p></div>
        <a href="#home" className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white">Voltar ao topo <LuArrowUp size={15} aria-hidden="true" className="transition group-hover:-translate-y-1" /></a>
      </div>
    </footer>
  );
}

export default Footer;
