import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-grid relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#E8590C]/[0.04] blur-[100px] pointer-events-none" />
      <div className="text-center relative z-10">
        <div className="text-[100px] font-black text-[#E8590C] leading-none mb-4">404</div>
        <h1 className="text-[28px] font-black text-[#0A0A0A] mb-3">Page not found</h1>
        <p className="text-[#6B7280] text-[16px] mb-8 max-w-sm mx-auto font-medium">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-blue">
          <ArrowLeft className="w-5 h-5" /> Back to Home
        </Link>
      </div>
    </div>
  );
}
