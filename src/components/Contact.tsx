import { useState } from "react";
import { LuCheck, LuCopy, LuExternalLink } from "react-icons/lu";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";

function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(portfolio.personal.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="section-shell relative overflow-hidden bg-slate-950 px-6 py-28">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p className="section-kicker justify-center">06 / Contato</p>
        <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-6xl">Vamos construir algo <span className="text-gradient">juntos?</span></h2>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">Estou aberto a oportunidades, projetos e boas conversas sobre tecnologia e desenvolvimento de software.</p>

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/80 p-3 text-left shadow-xl shadow-black/20 sm:flex-row sm:items-center">
          <a href={`mailto:${portfolio.personal.email}`} className="min-w-0 flex-1 rounded-xl px-4 py-3 transition hover:bg-white/5">
            <span className="block font-mono text-xs uppercase tracking-[0.16em] text-blue-400">E-mail</span>
            <span className="mt-1 block truncate text-base font-semibold text-white sm:text-lg">{portfolio.personal.email}</span>
          </a>
          <button type="button" onClick={copyEmail} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-400" aria-live="polite">
            {copied ? (
              <><LuCheck size={18} aria-hidden="true" />Copiado!</>
            ) : (
              <><LuCopy size={18} aria-hidden="true" />Copiar e-mail</>
            )}
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-6 text-sm text-slate-400"><a href={portfolio.personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white">GitHub <LuExternalLink size={13} aria-hidden="true" /></a><a href={portfolio.personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 transition hover:text-white">LinkedIn <LuExternalLink size={13} aria-hidden="true" /></a></div>
      </Reveal>
    </section>
  );
}

export default Contact;
