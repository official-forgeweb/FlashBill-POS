'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';
const schema = z.object({ name:z.string().min(2), email:z.string().email(), phone:z.string().min(10), businessName:z.string().min(2), plan:z.string().min(1), message:z.string().min(10) });
type D = z.infer<typeof schema>;

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const { register, handleSubmit, formState:{errors,isSubmitting}, reset } = useForm<D>();
  const onSubmit = async (d:D) => { const r=schema.safeParse(d); if(!r.success)return; await new Promise(r=>setTimeout(r,1500)); setDone(true); reset(); setTimeout(()=>setDone(false),5000); };

  if (done) return (
    <div className="p-12 text-center">
      <CheckCircle className="w-12 h-12 text-green mx-auto mb-4" />
      <h3 className="text-xl font-bold text-heading mb-2">Message Sent!</h3>
      <p className="text-body text-[14px]">We&apos;ll get back within 24 hours.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[13px] font-medium text-heading mb-1.5">Name *</label><input {...register('name')} placeholder="Jane Doe" className="input-f" />{errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}</div>
        <div><label className="block text-[13px] font-medium text-heading mb-1.5">Email *</label><input {...register('email')} type="email" placeholder="jane@example.com" className="input-f" />{errors.email && <p className="text-red-500 text-xs mt-1">Invalid</p>}</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div><label className="block text-[13px] font-medium text-heading mb-1.5">Phone *</label><input {...register('phone')} placeholder="+91 98765 43210" className="input-f" /></div>
        <div><label className="block text-[13px] font-medium text-heading mb-1.5">Business *</label><input {...register('businessName')} placeholder="Your Business" className="input-f" /></div>
      </div>
      <div><label className="block text-[13px] font-medium text-heading mb-1.5">Plan</label><select {...register('plan')} className="input-f bg-white"><option value="">Select</option><option value="basic">Basic</option><option value="standard">Standard</option><option value="premium">Premium</option></select></div>
      <div><label className="block text-[13px] font-medium text-heading mb-1.5">Message *</label><textarea {...register('message')} rows={4} placeholder="Tell us about your needs..." className="input-f resize-none" /></div>
      <button type="submit" disabled={isSubmitting} className="w-full btn-flame justify-center py-3 disabled:opacity-50">{isSubmitting?'Sending...':'Submit Inquiry'}{!isSubmitting && <Send className="w-4 h-4" />}</button>
    </form>
  );
}
