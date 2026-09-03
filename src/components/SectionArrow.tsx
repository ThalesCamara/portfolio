import { LuChevronDown } from "react-icons/lu";

interface SectionArrowProps {
  href: string;
  label: string;
}

function SectionArrow({ href, label }: SectionArrowProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="absolute bottom-7 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600 transition duration-300 hover:text-white"
    >
      <span>scroll</span>
      <LuChevronDown size={18} aria-hidden="true" className="animate-bounce" />
    </a>
  );
}

export default SectionArrow;
