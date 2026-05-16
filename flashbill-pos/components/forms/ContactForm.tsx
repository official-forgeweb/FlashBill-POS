'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Send, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  businessName: z.string().min(2),
  plan: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const result = contactSchema.safeParse(data);
    if (!result.success) return;
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="p-12 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-heading mb-2">Message Sent!</h3>
        <p className="text-body text-[14px]">We&apos;ll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-heading mb-1.5">Name *</label>
          <input {...register('name')} placeholder="Jane Doe" className="input-field" />
          {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <label className="block text-[13px] font-medium text-heading mb-1.5">Email *</label>
          <input {...register('email')} type="email" placeholder="jane@example.com" className="input-field" />
          {errors.email && <p className="text-red-500 text-xs mt-1">Invalid email</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[13px] font-medium text-heading mb-1.5">Phone *</label>
          <input {...register('phone')} placeholder="+91 98765 43210" className="input-field" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
        <div>
          <label className="block text-[13px] font-medium text-heading mb-1.5">Business Name *</label>
          <input {...register('businessName')} placeholder="Your Business" className="input-field" />
          {errors.businessName && <p className="text-red-500 text-xs mt-1">Required</p>}
        </div>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-heading mb-1.5">Interested Plan</label>
        <select {...register('plan')} className="input-field bg-white">
          <option value="">Select a plan</option>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div>
        <label className="block text-[13px] font-medium text-heading mb-1.5">Message *</label>
        <textarea {...register('message')} rows={4} placeholder="Tell us about your requirements..." className="input-field resize-none" />
        {errors.message && <p className="text-red-500 text-xs mt-1">Required</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full btn-accent justify-center py-3 disabled:opacity-50">
        {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
        {!isSubmitting && <Send className="w-4 h-4" />}
      </button>
    </form>
  );
}
