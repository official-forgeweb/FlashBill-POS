// app/signup/layout.tsx

import type { ReactNode } from "react";

export default function SignupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#F5F5F7] relative overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#E8590C]/10 blur-[120px]" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#E8590C]/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}