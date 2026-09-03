import { LuArrowRight, LuLockKeyhole } from "react-icons/lu";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

function ProjectLink({ href, isPrivate = false }: { href: string; isPrivate?: boolean }) {
  if (isPrivate) return <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-500"><LuLockKeyhole size={14} aria-hidden="true" />Projeto acadêmico • Repositório privado</span>;
  if (href === "#") return <span className="font-mono text-xs uppercase tracking-wider text-slate-600">Link em breve</span>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300">Ver código<LuArrowRight size={16} aria-hidden="true" className="transition group-hover/link:translate-x-1" /></a>;
}

function Projects() {
  return (
    <section id="projects" className="section-shell bg-slate-900 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="section-kicker">03 / Projetos</p><h2 className="section-title max-w-2xl">Aprendizado colocado em prática.</h2></div><p className="max-w-sm text-base leading-7 text-slate-400">Uma seleção de projetos construídos durante minha formação e estudos.</p></div></Reveal>

        <div className="mt-14 grid gap-6">
          {portfolio.projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 120}>
              <article className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-950 p-8 transition hover:border-blue-400/40 md:p-10">
                <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl" />
                <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-blue-400">PROJETO 0{index + 1}</span>
                      <span className="h-px w-12 bg-blue-500/40" />
                    </div>
                    <h3 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">{project.title}</h3>
                    <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">{project.description}</p>
                    <div className="mt-8">
                      <ProjectLink href={project.github} isPrivate={"isPrivate" in project && project.isPrivate} />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-slate-300">
                        {technology}
                      </span>
                    ))}
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

export default Projects;
