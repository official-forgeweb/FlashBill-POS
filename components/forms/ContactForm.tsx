'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  businessName: z.string().min(2),
  plan: z.string().min(1),
  message: z.string().min(10),
});
type D = z.infer<typeof schema>;

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<D>();

  const onSubmit = async (d: D) => {
    const r = schema.safeParse(d);
    if (!r.success) return;
    await new Promise(r => setTimeout(r, 1500));
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 5000);
  };

  if (done) return (
    <div className="p-14 text-center">
      <div className="w-16 h-16 rounded-full bg-[#FFF7ED] border border-[#E8590C]/20 flex items-center justify-center mx-auto mb-5">
        <CheckCircle className="w-8 h-8 text-[#E8590C]" />
      </div>
      <h3 className="text-xl font-black text-[#0A0A0A] mb-2">Message Sent!</h3>
      <p className="text-[#6B7280] text-[15px]">We&apos;ll get back within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">Name *</label>
          <input {...register('name')} placeholder="Jane Doe" className="input-f" />
          {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">Required</p>}
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">Email *</label>
          <input {...register('email')} type="email" placeholder="jane@example.com" className="input-f" />
          {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">Invalid email</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[13px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">Phone *</label>
          <input {...register('phone')} placeholder="+91 98765 43210" className="input-f" />
        </div>
        <div>
          <label className="block text-[13px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">Business *</label>
          <input {...register('businessName')} placeholder="Your Business" className="input-f" />
        </div>
      </div>
      <div>
        <label className="block text-[13px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">Plan</label>
        <select {...register('plan')} className="input-f bg-white">
          <option value="">Select a plan</option>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <div>
        <label className="block text-[13px] font-bold text-[#0A0A0A] mb-2 uppercase tracking-[0.1em]">Message *</label>
        <textarea {...register('message')} rows={4} placeholder="Tell us about your needs..." className="input-f resize-none" />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-blue justify-center py-4 text-[14px] disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
        ) : (
          <>Submit Inquiry <Send className="w-5 h-5" /></>
        )}
      </button>
    </form>
  );
}
