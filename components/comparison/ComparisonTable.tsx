"use client";

import { motion } from "framer-motion";
import { comparisonData, competitors, CompareValue } from "./comparisonData";
import { Check, X, Minus } from "lucide-react";
import React from "react";

function CheckIcon() {
  return (
    <motion.div 
      initial={{ scale: 0 }} 
      whileInView={{ scale: [0, 1.2, 1] }} 
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex items-center justify-center w-6 h-6 rounded-full bg-[#10B981] mx-auto shadow-sm"
    >
      <Check size={14} className="text-white" strokeWidth={3.5} />
    </motion.div>
  );
}

function CrossIcon() {
  return (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 mx-auto">
      <X size={14} className="text-gray-400" strokeWidth={3} />
    </div>
  );
}

function PartialIcon() {
  return (
    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 mx-auto">
      <Minus size={14} className="text-amber-500" strokeWidth={3.5} />
    </div>
  );
}

function RenderValue({ value, isFlashbill }: { value: CompareValue; isFlashbill: boolean }) {
  if (value === true) return <CheckIcon />;
  if (value === false) return <CrossIcon />;
  if (value === 'partial') return <PartialIcon />;
  
  return (
    <span className={`text-[13px] font-medium leading-snug text-center block ${isFlashbill ? 'text-[#0A0A0A] font-bold' : 'text-gray-500'}`}>
      {value}
    </span>
  );
}

export function ComparisonTable() {
  return (
    <div className="w-full relative mt-12 mb-10">
      {/* Scroll indicator for mobile */}
      <div className="flex justify-end md:hidden mb-3 text-[10px] text-[#E8590C] font-bold uppercase tracking-widest items-center gap-1.5">
        <span>Scroll to compare</span>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          →
        </motion.div>
      </div>

      <div className="overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
        <div className="min-w-[900px] w-full">
          {/* Header Row */}
          <div className="grid grid-cols-[220px_repeat(5,1fr)] gap-0 mb-4 relative z-20">
            <div className="bg-transparent" /> {/* empty corner */}
            
            {competitors.map((comp) => {
              const isFB = comp.id === 'flashbill';
              return (
                <div 
                  key={comp.id} 
                  className={`flex flex-col items-center justify-end pb-3 relative ${isFB ? '' : 'opacity-60'}`}
                >
                  {isFB && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-7 bg-[#E8590C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow-md whitespace-nowrap"
                    >
                      ⚡ Best Value
                    </motion.div>
                  )}
                  <div className={`text-[18px] font-black tracking-tight ${isFB ? 'text-[#0A0A0A]' : 'text-gray-800'}`}>
                    {comp.name}
                  </div>
                  {isFB && (
                    <div className="absolute bottom-0 left-4 right-4 h-1 bg-[#E8590C] rounded-t-md" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Table Body */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            {/* Flashbill Column Highlight Background */}
            <motion.div 
              initial={{ boxShadow: '0 0 0px rgba(232,89,12,0)' }}
              animate={{ boxShadow: '0 0 20px rgba(232,89,12,0.08)' }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute top-0 bottom-0 left-[220px] bg-[#FFF7ED]/60 border-x border-[#E8590C]/20 z-0"
              style={{ width: 'calc((100% - 220px) / 5)' }}
            />
            
            <div className="relative z-10">
              {comparisonData.map((cat, catIdx) => (
                <React.Fragment key={cat.category}>
                  {/* Category Header */}
                  <div className={`grid grid-cols-[220px_1fr] bg-gray-50/80 ${catIdx !== 0 ? 'border-t border-gray-200' : ''}`}>
                    <div className="col-span-2 py-3.5 px-6 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
                      {cat.category}
                    </div>
                  </div>

                  {/* Feature Rows */}
                  {cat.features.map((feat, featIdx) => (
                    <motion.div 
                      key={feat.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featIdx * 0.04 }}
                      className="group grid grid-cols-[220px_repeat(5,1fr)] border-t border-gray-100 hover:bg-white/80 transition-colors"
                    >
                      {/* Feature Name (Sticky on mobile) */}
                      <div className="py-[18px] px-6 text-[14px] font-semibold text-gray-900 flex items-center bg-white group-hover:bg-[#FAFAFA] sticky left-0 z-20 shadow-[1px_0_0_rgba(0,0,0,0.06)] md:shadow-none transition-colors">
                        {feat.name}
                      </div>

                      {competitors.map((comp) => {
                        const isFB = comp.id === 'flashbill';
                        const val = feat[comp.id as keyof typeof feat];
                        return (
                          <div 
                            key={comp.id} 
                            className={`py-[18px] px-3 flex items-center justify-center ${isFB ? '' : 'grayscale-[40%] opacity-80'}`}
                          >
                            <RenderValue value={val as CompareValue} isFlashbill={isFB} />
                          </div>
                        );
                      })}
                    </motion.div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
