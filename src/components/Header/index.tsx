"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Cases", href: "#cases" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    index: number,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setActiveIndex(index);
  };

  return (
    <header className='fixed w-10/12 bg-black/20 text-[#DEDCDD] lg:w-1/2 mx-auto left-0 right-0 z-50 flex justify-between items-center py-4 px-5 text-sm uppercase backdrop-blur-lg rounded-full shadow mt-4'>

      {/* ESQUERDA */}
      <div className='hidden lg:flex gap-6 relative'>
        {navItems.slice(0, 2).map((item, i) => {
          const index = i;
          const id = item.href.replace("#", "");
          const isActive = index === activeIndex;

          return (
            <div key={item.href} className='relative'>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, index, id)}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                className='text-xs px-1'
              >
                {item.label}
              </a>
              {isActive && (
                <motion.div
                  layoutId='underline'
                  className='absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#DEDCDD] rounded origin-left'
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* CENTRO */}
      <div className='absolute left-1/2 -translate-x-1/2 text-sm tracking-widest font-mono text-center px-4 whitespace-nowrap'>
        THE WEB<span className='line-through'> FCKN </span> STUDIO
      </div>

      {/* DIREITA */}
      <div className='hidden lg:flex gap-6 relative'>
        {navItems.slice(2).map((item, i) => {
          const index = i + 2;
          const id = item.href.replace("#", "");
          const isActive = index === activeIndex;

          return (
            <div key={item.href} className='relative'>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, index, id)}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
                className='text-xs px-1'
              >
                {item.label}
              </a>
              {isActive && (
                <motion.div
                  layoutId='underline'
                  className='absolute bottom-[-4px] left-0 right-0 h-[2px] bg-[#DEDCDD] rounded origin-left'
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  exit={{ opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </div>
          );
        })}
      </div>
    </header>
  );
}
