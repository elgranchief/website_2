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
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'; // Animation direction
}

export function ScrollReveal({ 
  children, 
  delay = 0.2, // Slightly longer default delay for more luxury feel
  duration = 1.2, // Slower animation for premium feel
  amount = 0.15, // Trigger earlier for more subtle reveal
  once = true, 
  className,
  direction = 'up' // Default direction
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
  
  // Get the appropriate variants based on direction
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 20 }, // More subtle up transition (was 30)
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: duration, 
              delay: delay,
              ease: [0.165, 0.84, 0.44, 1] // More luxurious cubic-bezier easing
            } 
          },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: duration, 
              delay: delay,
              ease: [0.165, 0.84, 0.44, 1]
            } 
          },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: 20 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration: duration, 
              delay: delay,
              ease: [0.165, 0.84, 0.44, 1]
            } 
          },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration: duration, 
              delay: delay,
              ease: [0.165, 0.84, 0.44, 1]
            } 
          },
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { 
              duration: duration, 
              delay: delay,
              ease: [0.165, 0.84, 0.44, 1]
            } 
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
              duration: duration, 
              delay: delay,
              ease: [0.165, 0.84, 0.44, 1]
            } 
          },
        };
    }
  };

  const variants = getVariants();

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
