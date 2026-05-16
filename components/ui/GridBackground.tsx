interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function GridBackground({ children, className = '' }: GridBackgroundProps) {
  return (
    <div className={`bg-grid relative ${className}`}>
      {children}
    </div>
  );
}
