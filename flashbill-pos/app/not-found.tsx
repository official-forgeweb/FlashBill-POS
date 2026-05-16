import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-6">
        <h1 className="text-[120px] font-bold bg-gradient-to-r from-flame to-amber bg-clip-text text-transparent leading-none mb-4">404</h1>
        <p className="text-body text-[16px] mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" className="btn-gradient">Back to Home</Link>
      </div>
    </div>
  );
}
