import { portfolio } from "../data/portfolio";

function Skills() {
  const categories = [
    {
      title: "Linguagens",
      skills: portfolio.skills.languages,
    },
    {
      title: "Backend",
      skills: portfolio.skills.backend,
    },
    {
      title: "Frontend",
      skills: portfolio.skills.frontend,
    },
    {
      title: "Banco de Dados",
      skills: portfolio.skills.database,
    },
    {
      title: "IA & Machine Learning",
      skills: portfolio.skills.ai,
    },
  ];

  return (
    <section id="skills" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            Tecnologias
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Skills & conhecimentos
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Tecnologias e ferramentas que fazem parte da minha formação e dos
            projetos que desenvolvo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/30"
            >
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-slate-950 px-3 py-2 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;