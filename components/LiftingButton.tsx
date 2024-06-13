"use client";
import { stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

interface NavLinksProps {
  href: string;
  label: string;
}

export const LiftingButton = ({ href, label }: NavLinksProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();
  const characters = label.split("");

  const onMouseEnter = () => {
    animate([[".letter", { y: -24 }, { duration: 0.5, delay: stagger(0.05) }]]);
    setIsHovered(true);
  };

  const onMouseLeave = () => {
    animate([[".letter", { y: 0 }, { duration: 0.5, delay: stagger(0.05) }]]);
    setIsHovered(false);
  };

  return (
    <Link
      ref={scope}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      href={href}
      className="overflow-hidden relative z-50"
    >
      {characters.map((letter, index) => (
        <>
          <span
            data-letter={letter}
            className="letter relative inline-block h-6 leading-5 sm:h-6 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
            key={`${letter}-${index}`}
          >
            {letter}
          </span>
          <span
            style={{ transform: isHovered ? "scaleX(1)" : "scaleX(0)" }}
            className="absolute bottom-0 -left-2 -right-2 h-0.5 origin-left scale-x-0 bg-black transition-transform duration-1000 ease-out"
          ></span>
        </>
      ))}
    </Link>
  );
};
