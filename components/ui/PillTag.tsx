interface PillTagProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function PillTag({ children, dark = false }: PillTagProps) {
  return (
    <span
      className={`inline-flex items-center px-6 py-3 rounded-full font-serif italic text-[15px] transition-all duration-300 hover:translate-y-[-4px] ${
        dark
          ? 'bg-[rgba(194,101,26,0.08)] text-[#D4793A] border border-[rgba(194,101,26,0.15)]'
          : 'bg-[rgba(194,101,26,0.06)] text-[#D4793A] border border-[rgba(194,101,26,0.12)]'
      }`}
    >
      {children}
    </span>
  );
}
