import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

function Education() {
  return (
    <section id="education" className="section-shell bg-slate-900 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div><p className="section-kicker">05 / Trajetória</p><h2 className="section-title">Formação & certificações.</h2><p className="mt-6 max-w-md text-base leading-7 text-slate-400">Uma base acadêmica em construção, complementada pelo estudo de idiomas e tecnologia.</p></div>
            <div className="border-l border-white/10 pl-7 sm:pl-10">
              <div className="relative pb-12"><span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-blue-400 bg-slate-900 sm:-left-[45px]" /><p className="font-mono text-xs text-blue-400">{portfolio.education.period}</p><h3 className="mt-3 text-2xl font-semibold text-white">{portfolio.education.course}</h3><p className="mt-1 text-slate-300">{portfolio.education.institution}</p><p className="mt-5 text-sm leading-7 text-slate-400">{portfolio.education.description}</p></div>
              <div className="border-t border-white/10 pt-9"><p className="mb-7 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">Certificações</p><div className="grid gap-4 sm:grid-cols-2">{portfolio.certifications.map((certification) => <article key={certification.title} className="rounded-xl border border-white/10 bg-slate-900 p-5"><h4 className="font-semibold text-white">{certification.title}</h4><p className="mt-2 text-sm leading-6 text-slate-400">{certification.description}</p></article>)}</div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;
