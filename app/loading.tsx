export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="w-10 h-10 border-3 border-border border-t-flame rounded-full animate-spin mx-auto mb-4" />
        <p className="text-muted text-[14px]">Loading...</p>
      </div>
    </div>
  );
}
