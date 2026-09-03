import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

function About() {
  const highlights = [
    { number: "01", label: "Formação", value: portfolio.education.course, detail: portfolio.education.institution },
    { number: "02", label: "Foco", value: "Desenvolvimento Backend", detail: "Java, APIs e bancos de dados" },
    { number: "03", label: "Localização", value: portfolio.personal.location, detail: "Brasil" },
  ];

  return (
    <section id="about" className="section-shell bg-slate-900 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="section-kicker">01 / Sobre</p>
              <h2 className="section-title">Código com propósito e aprendizado constante.</h2>
            </div>
            <div className="lg:pt-9">
              <p className="text-xl leading-9 text-slate-300">{portfolio.about.text}</p>
              <p className="mt-6 border-l-2 border-blue-500 pl-5 text-base leading-7 text-slate-400">Meu principal interesse é desenvolvimento backend, especialmente com Java, sem deixar de explorar inteligência artificial e desenvolvimento full stack.</p>
            </div>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.label} delay={index * 100}>
              <article className="h-full bg-slate-950/70 p-7 transition hover:bg-slate-950">
                <span className="font-mono text-xs text-blue-400">{item.number}</span>
                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{item.value}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
