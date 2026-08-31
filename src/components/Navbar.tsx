import { portfolio } from "../data/portfolio";

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="text-xl font-bold text-white transition hover:text-blue-400"
        >
          {portfolio.personal.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#about"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Sobre
          </a>

          <a
            href="#skills"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Projetos
          </a>

          <a
            href="#education"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Formação
          </a>

          <a
            href="#contact"
            className="text-sm text-slate-300 transition hover:text-white"
          >
            Contato
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={portfolio.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition hover:text-white"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.36 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.39-3.37-1.39-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.08 0-1.12.39-2.03 1.02-2.75-.1-.26-.44-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.94c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.54 1.41.2 2.45.1 2.71.63.72 1.02 1.63 1.02 2.75 0 3.94-2.35 4.81-4.58 5.07.36.32.68.94.68 1.9v2.83c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>

          <a
            href={portfolio.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition hover:text-white"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44C23.2 24 24 23.2 24 22.22V1.78C24 .8 23.2 0 22.22 0Z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;