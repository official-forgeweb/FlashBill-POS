// app/(auth)/signup/page.tsx

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 relative">
      <div className="w-full max-w-[520px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-[#E5E7EB] rounded-[32px] p-8 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.06)]"
        >
          {/* Top */}
          <div className="text-center mb-10">
            <span className="inline-block uppercase tracking-[0.3em] text-[10px] font-bold text-[#E8590C] mb-5">
              ● FLASHBILL POS
            </span>

            <h1 className="text-[clamp(36px,5vw,48px)] leading-[1.1] font-black text-[#0A0A0A] mb-4 tracking-tight">
              Create your{" "}
              <span
                className="text-[#E8590C] font-medium italic"
                style={{
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                account
              </span>
            </h1>

            <p className="text-[#6B7280] text-[16px] leading-relaxed max-w-sm mx-auto">
              Start managing your business with FlashBill's offline-first POS
              system.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6B7280] block mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-[60px] rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-5 outline-none text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#E8590C] transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6B7280] block mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full h-[60px] rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-5 outline-none text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#E8590C] transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#6B7280] block mb-3">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create password"
                  className="w-full h-[60px] rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-5 pr-14 outline-none text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:border-[#E8590C] transition-all"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-5 -translate-y-1/2 text-[#6B7280]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-[62px] rounded-2xl bg-[#E8590C] hover:bg-[#d44f09] text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 mt-3"
            >
              Create Account
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#E5E7EB]" />
            <span className="text-[#9CA3AF] text-sm">OR</span>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </div>

          {/* Google */}
          <button className="w-full h-[60px] rounded-2xl border border-[#E5E7EB] bg-white hover:bg-[#FAFAFA] transition-all font-semibold text-[#0A0A0A]">
            Continue with Google
          </button>

          {/* Login */}
          <p className="text-center text-[#6B7280] mt-8 text-[15px]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#E8590C] font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}