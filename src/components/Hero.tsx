import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuArrowRight } from "react-icons/lu";
import { portfolio } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionArrow from "./SectionArrow";

function Hero() {
  return (
    <section id="home" className="hero-grid relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-32">
      <div className="absolute left-[15%] top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="absolute right-[10%] top-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-[100px]" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <Reveal>
            <div className="mb-7 flex items-center gap-3 font-mono text-sm text-blue-300"><span className="h-px w-8 bg-blue-400" />Olá, eu sou</div>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">Thales Duque <span className="text-gradient">Câmara.</span></h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-7 font-mono text-sm uppercase tracking-[0.18em] text-slate-400 sm:text-base">Backend <span className="text-blue-400">/</span> Java <span className="text-blue-400">/</span> Inteligência Artificial</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{portfolio.personal.description}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="group inline-flex items-center gap-3 rounded-xl bg-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5 hover:bg-blue-400 hover:shadow-blue-400/30">Explorar projetos<LuArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" /></a>
              <a href={portfolio.personal.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-5 py-3.5 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5">
                <FaGithub size={18} aria-hidden="true" />
                GitHub
              </a>
              <a href={portfolio.personal.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-5 py-3.5 font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5">
                <FaLinkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <div className="relative mx-auto hidden w-full max-w-md lg:block">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/15 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4"><span className="h-2.5 w-2.5 rounded-full bg-red-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" /><span className="h-2.5 w-2.5 rounded-full bg-green-400/70" /><span className="ml-3 font-mono text-xs text-slate-500">developer.ts</span></div>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 p-6 font-mono text-sm leading-7">
                <div className="select-none text-right text-slate-700">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8</div>
                <div><p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-slate-500">= {"{"}</span></p><p className="pl-4 text-slate-300">name: <span className="text-emerald-400">"Thales"</span>,</p><p className="pl-4 text-slate-300">focus: <span className="text-emerald-400">"Fullstack"</span>,</p><p className="pl-4 text-slate-300">languages: <span className="text-slate-500">[</span><span className="text-emerald-400">"Java", "Python"</span><span className="text-slate-500">]</span>,</p><p className="pl-4 text-slate-300">degree: <span className="text-emerald-400">"Computer Science"</span>,</p><p className="text-slate-500">{"};"}</p><p>&nbsp;</p><p><span className="text-blue-300">developer</span>.<span className="text-yellow-300">build</span>();<span className="ml-2 inline-block h-4 w-1.5 animate-pulse bg-blue-400 align-middle" /></p></div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-xs text-slate-500"><span>main*</span><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> ready</span></div>
            </div>
          </div>
        </Reveal>
      </div>
      <SectionArrow href="#about" label="Ir para a seção Sobre" />
    </section>
  );
}

export default Hero;
