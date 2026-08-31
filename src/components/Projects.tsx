import { portfolio } from "../data/portfolio";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Projetos
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Projetos em destaque
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Alguns projetos desenvolvidos durante minha formação e estudos em
            desenvolvimento de software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolio.projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-white/10 bg-slate-950 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
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
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
              >
                Ver no GitHub

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;