import { FaGithub, FaJava } from "react-icons/fa";
import { LuArrowRight, LuBookOpen } from "react-icons/lu";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

function Academic() {
  return (
    <section id="academic" className="section-shell bg-slate-950 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">04 / Código acadêmico</p>
              <h2 className="section-title max-w-2xl">Fundamentos desenvolvidos na prática.</h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-400">
              Repositórios de estudos, laboratórios e trabalhos desenvolvidos durante a graduação.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6">
          {portfolio.academicRepositories.map((repository, index) => (
            <Reveal key={repository.title} delay={index * 120}>
              <article className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900 p-8 transition hover:border-blue-400/40 md:p-10">
                <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <LuBookOpen size={17} className="text-blue-400" aria-hidden="true" />
                      <span className="font-mono text-xs uppercase tracking-[0.16em] text-blue-400">Disciplina da graduação</span>
                    </div>
                    <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">{repository.title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{repository.description}</p>
                    <a href={repository.github} target="_blank" rel="noopener noreferrer" className="group/link mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300">
                      <FaGithub size={17} aria-hidden="true" />
                      Ver repositório
                      <LuArrowRight size={16} aria-hidden="true" className="transition group-hover/link:translate-x-1" />
                    </a>
                  </div>
                  <div>
                    <div className="mb-5 flex items-center gap-3 text-slate-300 lg:justify-end">
                      <FaJava size={28} className="text-blue-400" aria-hidden="true" />
                      <span className="font-mono text-sm">Foco em Java</span>
                    </div>
                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      {repository.topics.map((topic) => (
                        <span key={topic} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-slate-300">{topic}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Academic;
