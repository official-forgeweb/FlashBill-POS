'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

export default function WhoItsFor() {
  return (
    <section className="py-20 bg-bg-soft">
      <div className="container-site text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading mb-4"
        >
          A complete POS experience awaits
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-sub mx-auto"
        >
          Make your business operations super-smooth with our easy-to-use billing software
        </motion.p>
      </div>

      {/* Feature block 1 — Image left, text right */}
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mockup-card p-4"
          >
            <Image
              src="/feature-billing.png"
              alt="Billing interface"
              width={560}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[28px] font-bold text-heading mb-4 leading-tight">
              Lightning-Fast Billing
            </h3>
            <p className="text-body text-[15px] leading-relaxed mb-6">
              Generate bills in seconds with an intuitive interface. Works entirely offline — your billing never stops even during internet outages.
            </p>
            <div className="space-y-4">
              <div className="feature-point">
                <div className="icon-wrap"><CheckCircle /></div>
                <p className="text-[14px] text-body">Process hundreds of bills daily without any slowdown</p>
              </div>
              <div className="feature-point">
                <div className="icon-wrap"><CheckCircle /></div>
                <p className="text-[14px] text-body">Auto-calculate taxes, discounts, and totals instantly</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature block 2 — Text left, image right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h3 className="text-[28px] font-bold text-heading mb-4 leading-tight">
              Smart Inventory Management
            </h3>
            <p className="text-body text-[15px] leading-relaxed mb-6">
              Track every item in real-time. Get automatic low-stock alerts so you never run out of your best-selling products.
            </p>
            <div className="space-y-4">
              <div className="feature-point">
                <div className="icon-wrap"><CheckCircle /></div>
                <p className="text-[14px] text-body">Real-time stock tracking with barcode scanning</p>
              </div>
              <div className="feature-point">
                <div className="icon-wrap"><CheckCircle /></div>
                <p className="text-[14px] text-body">Automatic alerts when inventory drops below threshold</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mockup-card p-4 order-1 md:order-2"
          >
            <Image
              src="/feature-inventory.png"
              alt="Inventory management"
              width={560}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </div>

        {/* Feature block 3 — Image left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mockup-card p-4"
          >
            <Image
              src="/feature-reports.png"
              alt="Reports dashboard"
              width={560}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[28px] font-bold text-heading mb-4 leading-tight">
              Detailed Sales Reports
            </h3>
            <p className="text-body text-[15px] leading-relaxed mb-6">
              Understand your business with clear, actionable reports. Track revenue, best-sellers, and trends at a glance.
            </p>
            <div className="space-y-4">
              <div className="feature-point">
                <div className="icon-wrap"><CheckCircle /></div>
                <p className="text-[14px] text-body">Daily, weekly, and monthly revenue breakdowns</p>
              </div>
              <div className="feature-point">
                <div className="icon-wrap"><CheckCircle /></div>
                <p className="text-[14px] text-body">Export reports as PDF for easy record-keeping</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
