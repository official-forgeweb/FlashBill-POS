interface PillTagProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function PillTag({ children, dark = false }: PillTagProps) {
  return (
    <span
      className={`inline-flex items-center px-6 py-3 rounded-full font-serif italic text-[15px] transition-all duration-300 hover:translate-y-[-4px] ${
        dark
          ? 'bg-white/10 text-white border border-white/20'
          : 'bg-white text-text-primary border border-border shadow-sm'
      }`}
    >
      {children}
    </span>
  );
}
