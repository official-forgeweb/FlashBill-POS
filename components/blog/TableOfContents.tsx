'use client';

import { useEffect, useState } from 'react';

interface TableOfContentsProps {
  headings: { id: string; text: string; level: 2 | 3 }[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          setActiveId(intersecting[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  function handleClick(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  if (headings.length === 0) return null;

  return (
    <nav className="hidden lg:block sticky top-[100px]">
      <h4 className="text-[13px] font-bold text-[#0A0A0A] uppercase tracking-wider mb-4">
        In this article
      </h4>
      <ul className="space-y-1 border-l-2 border-[#E5E7EB]">
        {headings.map(({ id, text, level }) => {
          const isActive = activeId === id;
          return (
            <li key={id}>
              <button
                onClick={() => handleClick(id)}
                className={`block w-full text-left transition-all duration-200 cursor-pointer ${
                  level === 3 ? 'pl-6 text-[12px]' : 'pl-4 text-[13px]'
                } py-1.5 -ml-[2px] border-l-2 ${
                  isActive
                    ? 'border-[#E8590C] text-[#E8590C] font-semibold'
                    : `border-transparent ${
                        level === 3
                          ? 'text-[#9CA3AF] font-normal'
                          : 'text-[#6B7280] font-medium'
                      } hover:text-[#0A0A0A]`
                }`}
              >
                {text}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
