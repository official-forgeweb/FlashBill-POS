interface MarkerProps {
  className?: string;
}

export default function Marker({ className = '' }: MarkerProps) {
  return (
    <span className={`text-brand-blue text-lg select-none ${className}`} aria-hidden="true">
      ◉
    </span>
  );
}
