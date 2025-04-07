'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Optional delay in seconds
  duration?: number; // Optional duration in seconds
  amount?: number; // Optional amount of element visible before triggering (0 to 1)
  once?: boolean; // Optional: trigger animation only once
  className?: string; // Optional additional class names
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  amount = 0.3, // Trigger when 30% is visible
  once = true, 
  className 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: amount, once: once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      // If 'once' is false, reset when out of view
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  const variants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly down and transparent
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // Matches 'elegant' timing function
      } 
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={className} // Apply any additional classes
    >
      {children}
    </motion.div>
  );
}