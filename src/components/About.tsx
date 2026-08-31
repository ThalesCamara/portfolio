import { portfolio } from "../data/portfolio";

function About() {
  return (
    <section id="about" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Sobre mim
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Conheça um pouco mais sobre mim
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            {portfolio.about.text}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                <path d="M6 12v5c3 2 9 2 12 0v-5" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Ciência da Computação
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Estudante da PUC Minas, construindo uma base sólida em
              programação e engenharia de software.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M8 10h8" />
                <path d="M8 14h5" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Desenvolvimento
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Interesse em desenvolvimento backend, APIs, bancos de dados e
              construção de aplicações.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>

            <h3 className="text-lg font-semibold text-white">
              Aprendizado contínuo
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Sempre buscando aprender novas tecnologias e transformar
              conhecimento em projetos práticos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;