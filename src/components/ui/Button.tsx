"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  roundedSide?: "left" | "right";
  className?: string;
  onClick?: () => void;
  fillClassName?: string;
}

export default function Button({
  children,
  direction = "right",

  className = "",
  onClick,
  fillClassName = "bg-[#1F3C88]",
}: ButtonProps) {
  const [, setHovered] = useState(false);
  const controls = useAnimation();

  const originX = direction === "right" ? 0 : 1; // fill direction
  const unfillOriginX = direction === "right" ? 1 : 0; // reverse when hover ends

  const handleHoverStart = () => {
    setHovered(true);
    controls.start({
      scaleX: 1,
      transformOrigin: `${originX} center`,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    });
  };

  const handleHoverEnd = () => {
    setHovered(false);
    controls.start({
      scaleX: 0,
      transformOrigin: `${unfillOriginX} center`,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    });
  };

  return (
    <button
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      onClick={onClick}
      className={`relative overflow-hidden inline-flex items-center  hover:text-white justify-center px-6 py-2 font-semibold bg-transparent transition-all duration-300 select-none rounded-tr-full ease-in-out  rounded-bl-full border border-neutral-400 ${className}`}
    >
      {/* Animated fill background */}
      <motion.span
        className={`absolute inset-0 ${fillClassName} z-0`}
        initial={{ scaleX: 0, transformOrigin: `${originX} center` }}
        animate={controls}
      />
      {/* Text layer */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
