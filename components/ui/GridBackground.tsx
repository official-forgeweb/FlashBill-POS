interface GridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function GridBackground({ children, className = '' }: GridBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Subtle grid pattern for dark theme */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(194,101,26,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(194,101,26,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
