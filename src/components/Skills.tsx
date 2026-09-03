import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

function Skills() {
  const categories = [
    { number: "01", title: "Linguagens", skills: portfolio.skills.languages },
    { number: "02", title: "Backend", skills: portfolio.skills.backend },
    { number: "03", title: "Frontend", skills: portfolio.skills.frontend },
    { number: "04", title: "Dados", skills: portfolio.skills.database },
    { number: "05", title: "Agentes de IA", skills: portfolio.skills.aiAgents },
  ];

  return (
    <section id="skills" className="section-shell bg-slate-950 px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="section-kicker">02 / Tecnologias</p><h2 className="section-title max-w-2xl">Ferramentas que uso para transformar ideias em projetos.</h2></div>
            <p className="max-w-sm text-base leading-7 text-slate-400">Tecnologias e ferramentas presentes nos meus estudos e projetos.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.title} delay={index * 70}>
              <article className="group h-full rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-slate-900">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white transition group-hover:text-blue-300">{category.title}</h3>
                  <span className="font-mono text-xs text-blue-400">{category.number}</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">{category.skills.map((skill) => <span key={skill} className="rounded-md border border-white/10 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-300 transition group-hover:border-blue-500/20">{skill}</span>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
