interface MarkerProps {
  className?: string;
}

export default function Marker({ className = '' }: MarkerProps) {
  return (
    <span className={`text-[#D4793A] text-lg select-none ${className}`} aria-hidden="true">
      ◉
    </span>
  );
}
