interface SectionArrowProps {
  href: string;
  label: string;
}

function SectionArrow({ href, label }: SectionArrowProps) {
  return (
    <a
      href={href}
      aria-label={label}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 transition duration-300 hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </a>
  );
}

export default SectionArrow;