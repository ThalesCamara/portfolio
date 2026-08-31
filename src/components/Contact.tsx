import { portfolio } from "../data/portfolio";

function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Contato
        </p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Vamos conversar?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          Estou sempre aberto a conhecer novas oportunidades, projetos e
          pessoas da área de tecnologia.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${portfolio.personal.email}`}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            Entre em contato
          </a>

          <a
            href={portfolio.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-6 py-3 font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5"
          >
            GitHub
          </a>

          <a
            href={portfolio.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 px-6 py-3 font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;