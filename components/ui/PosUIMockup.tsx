'use client';

import { motion } from 'framer-motion';

export default function PosUIMockup() {
  const barHeights = [40, 65, 50, 80, 70, 90, 55, 75, 85, 95, 68, 82];

  return (
    <div className="w-full h-full bg-[#F5F5F7] p-3 md:p-4 flex gap-2.5 text-[10px] select-none overflow-hidden">
      {/* Left sidebar */}
      <div className="w-[14%] bg-[#0A0A0A] rounded-xl p-3 flex flex-col gap-3 text-white shrink-0">
        <div className="font-bold text-[#F97316] text-[11px] tracking-wide">FlashBill</div>
        <div className="space-y-1.5 text-[9px] mt-2">
          <div className="bg-[#E8590C] px-2.5 py-2 rounded-lg font-medium flex items-center gap-1.5">
            <span>📊</span> Dashboard
          </div>
          <div className="px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors text-white/60 flex items-center gap-1.5">
            <span>🍽️</span> Orders
          </div>
          <div className="px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors text-white/60 flex items-center gap-1.5">
            <span>📦</span> Inventory
          </div>
          <div className="px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors text-white/60 flex items-center gap-1.5">
            <span>👥</span> Staff
          </div>
          <div className="px-2.5 py-2 rounded-lg hover:bg-white/5 transition-colors text-white/60 flex items-center gap-1.5">
            <span>📈</span> Reports
          </div>
        </div>
        <div className="mt-auto">
          <div className="w-7 h-7 rounded-full bg-[#E8590C]/20 flex items-center justify-center text-[8px]">VS</div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col gap-2.5 min-w-0">
        {/* Top bar */}
        <div className="bg-white rounded-xl p-3 flex justify-between items-center shadow-sm">
          <div>
            <h3 className="font-bold text-[11px] text-[#0A0A0A]">Today&apos;s Sales</h3>
            <p className="text-[8px] text-[#6B7280] mt-0.5">May 16, 2026 — Thursday</p>
          </div>
          <span className="text-[#E8590C] font-extrabold text-[14px]">₹ 42,580</span>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Orders', val: '127', icon: '📋' },
            { label: 'Items', val: '384', icon: '🛒' },
            { label: 'Avg Bill', val: '₹335', icon: '💰' },
            { label: 'Pending', val: '8', icon: '⏳' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
              className="bg-white p-2.5 rounded-lg shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#6B7280] text-[8px] mb-1">
                <span>{s.icon}</span>{s.label}
              </div>
              <div className="font-extrabold text-[13px] text-[#0A0A0A]">{s.val}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart area */}
        <div className="bg-white rounded-xl p-3 flex-1 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[9px] font-bold text-[#0A0A0A]">Revenue Overview</span>
            <span className="text-[8px] text-[#6B7280]">Last 12 hours</span>
          </div>
          <div className="flex-1 flex items-end gap-[3px]">
            {barHeights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 bg-gradient-to-t from-[#E8590C] to-[#F97316] rounded-sm min-h-[2px]"
              />
            ))}
          </div>
        </div>

        {/* Recent orders */}
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="font-bold text-[9px] text-[#0A0A0A] mb-2">Recent Orders</div>
          <div className="space-y-1">
            {[
              { name: 'Table 5 — Lunch', amount: '₹450', status: 'paid' },
              { name: 'Table 2 — Dinner', amount: '₹890', status: 'paid' },
              { name: 'Takeaway #42', amount: '₹320', status: 'pending' },
            ].map((o, i) => (
              <motion.div
                key={o.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.1 }}
                className="flex justify-between items-center p-1.5 bg-[#F5F5F7] rounded-lg"
              >
                <span className="text-[9px] text-[#0A0A0A]">{o.name}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-bold">{o.amount}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${o.status === 'paid' ? 'bg-[#E8590C]' : 'bg-[#F59E0B]'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - cart */}
      <div className="w-[20%] bg-white rounded-xl p-3 shadow-sm flex flex-col shrink-0">
        <div className="font-bold text-[9px] text-[#0A0A0A] mb-1">Current Order</div>
        <div className="text-[8px] text-[#6B7280] mb-3">#128 — Table 7</div>
        <div className="space-y-2 flex-1 text-[9px]">
          {[
            { item: 'Pizza Margherita', qty: 1, price: '₹280' },
            { item: 'Coke 330ml', qty: 2, price: '₹120' },
            { item: 'Garlic Bread', qty: 1, price: '₹150' },
            { item: 'Pasta Arrabiata', qty: 1, price: '₹220' },
          ].map((item, i) => (
            <motion.div
              key={item.item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="flex justify-between items-center"
            >
              <div>
                <div className="text-[#0A0A0A] font-medium">{item.item}</div>
                <div className="text-[7px] text-[#6B7280]">Qty: {item.qty}</div>
              </div>
              <span className="font-bold text-[#0A0A0A]">{item.price}</span>
            </motion.div>
          ))}
        </div>
        <div className="border-t border-[#E5E7EB] mt-2 pt-2">
          <div className="flex justify-between text-[9px] text-[#6B7280] mb-1">
            <span>Subtotal</span><span>₹770</span>
          </div>
          <div className="flex justify-between text-[9px] text-[#6B7280] mb-2">
            <span>Tax (5%)</span><span>₹38.50</span>
          </div>
          <div className="flex justify-between font-extrabold text-[11px]">
            <span>Total</span><span className="text-[#E8590C]">₹808.50</span>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#E8590C] text-white py-2 rounded-lg mt-3 text-[9px] font-bold uppercase tracking-wider cursor-pointer"
        >
          Print Bill
        </motion.button>
      </div>
    </div>
  );
}
