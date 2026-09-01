import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionArrow from "./SectionArrow";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pt-20"
    >
      {/* Brilho de fundo */}
      <div className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Texto */}
        <div className="relative z-10">
          <Reveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Olá, eu sou
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              {portfolio.personal.name}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <h2 className="mt-6 text-2xl font-semibold text-slate-300 sm:text-3xl">
              {portfolio.personal.role}
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
              {portfolio.personal.description}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Ver projetos

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>
              </a>

              <a
                href={portfolio.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-6 py-3 font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
              >
                GitHub
              </a>

              <a
                href={portfolio.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-6 py-3 font-medium text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200}>
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-blue-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />

                  <span className="ml-3 text-xs text-slate-500">
                    portfolio.ts
                  </span>
                </div>

                <div className="p-6 font-mono text-sm leading-7">
                  <p className="text-slate-500">
                    <span className="text-purple-400">const</span>{" "}
                    developer = {"{"}
                  </p>

                  <p className="pl-5 text-slate-300">
                    name:{" "}
                    <span className="text-green-400">
                      "{portfolio.personal.name}"
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-slate-300">
                    role:{" "}
                    <span className="text-green-400">
                      "Software Developer"
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-slate-300">
                    focus:{" "}
                    <span className="text-green-400">
                      ["Backend", "AI"]
                    </span>
                    ,
                  </p>

                  <p className="pl-5 text-slate-300">
                    languages:{" "}
                    <span className="text-green-400">
                      ["Java", "Python", "C++"]
                    </span>
                    ,
                  </p>

                  <p className="text-slate-500">{"};"}</p>

                  <p className="mt-4 text-slate-500">
                    <span className="text-purple-400">developer</span>.
                    <span className="text-blue-400">build</span>();
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Indicador de scroll */}
      <SectionArrow
        href="#about"
        label="Ir para a seção Sobre"
      />
    </section>
  );
}

export default Hero;