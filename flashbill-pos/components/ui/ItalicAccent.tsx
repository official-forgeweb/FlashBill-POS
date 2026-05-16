interface ItalicAccentProps {
  children: React.ReactNode;
  light?: boolean;
  className?: string;
}

export default function ItalicAccent({ children, light = false, className = '' }: ItalicAccentProps) {
  return (
    <em
      className={`font-serif not-italic italic font-medium ${
        light ? 'text-white' : 'text-brand-blue'
      } ${className}`}
      style={{ fontStyle: 'italic' }}
    >
      {children}
    </em>
  );
}
