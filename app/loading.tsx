export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#FAFAFA]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-[#E5E7EB]" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#E8590C] animate-spin" />
        </div>
        <p className="text-[10px] text-[#6B7280] font-bold uppercase tracking-[0.3em] animate-pulse">Loading</p>
      </div>
    </div>
  );
}
