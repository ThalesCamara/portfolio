import { portfolio } from "../data/portfolio";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {portfolio.personal.name}. Todos os
          direitos reservados.
        </p>

        <a
          href="#home"
          className="text-sm text-slate-400 transition hover:text-white"
        >
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;