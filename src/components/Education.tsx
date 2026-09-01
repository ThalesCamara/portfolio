import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionArrow from "./SectionArrow";

function Education() {
  return (
    <section id="education" className="relative bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
              Formação
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Formação & certificações
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Minha formação acadêmica e algumas das certificações que fazem
              parte da minha trajetória.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
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

                <div>
                  <p className="text-sm text-blue-400">
                    {portfolio.education.period}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {portfolio.education.course}
                  </h3>

                  <p className="mt-1 text-slate-300">
                    {portfolio.education.institution}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {portfolio.education.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900 p-8">
              <h3 className="text-xl font-semibold text-white">
                Certificações
              </h3>

              <div className="mt-6 space-y-5">
                {portfolio.certifications.map((certification) => (
                  <div
                    key={certification.title}
                    className="border-l-2 border-blue-500/50 pl-4"
                  >
                    <h4 className="font-medium text-white">
                      {certification.title}
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      {certification.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <SectionArrow
        href="#contact"
        label="Ir para a seção Contato"
      />
    </section>
  );
}

export default Education;