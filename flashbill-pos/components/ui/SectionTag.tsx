interface SectionTagProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionTag({ children, light = false }: SectionTagProps) {
  return (
    <div
      className={`flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 ${
        light ? 'text-white/70' : 'text-brand-blue'
      }`}
    >
      <span
        className={`w-10 h-px ${light ? 'bg-white/40' : 'bg-brand-blue'}`}
      />
      {children}
    </div>
  );
}
