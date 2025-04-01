"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface StatCardProps {
  text: string;
  delay: number;
}

function StatCard({ text, delay }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-white shadow md:w-[590px] w-full rounded-[70px] border-2 border-solid border-black"
    >
      <div className="p-6 flex items-center justify-center py-3.5">
        <p className="w-full md:w-[504.78px] mt-[-2.00px] font-normal text-black text-md md:text-lg text-center">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

export function AIStats() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;
    
    let animationId: number;
    let position = 0;
    
    const animate = () => {
      position -= 0.5;
      if (position <= -50) {
        position = 0;
      }
      
      if (marqueeElement) {
        marqueeElement.style.transform = `translateY(${position}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  const stats = [
    "GEN Coin could achieve a valuation of $1.3 billion by 2030 by capturing just 0.1% of this market.",
    "The AI industry is projected to reach a value of approximately $1.3 trillion by 2030.",
    "With a 40% annual growth rate, the digital human sector could soar to $270 billion by 2030.",
    "Digital influencers are on the rise, with their industry expected to be worth $50 billion by 2028.",
    "The global market for VR/AR which often integrates with AI-driven digital humans, is expected to reach $125 billion by 2030."
  ];
  
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-4 z-[3]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center mb-6"
          >
            Building the new era of AI
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center w-full max-w-[1200px] md:px-[250px] px-[20px] mb-12"
          >
            <p className="w-full md:w-[500px] font-normal text-black md:text-2xl text-xl text-center">
              AI will play a pivotal role in shaping our future, and GEN Coin is set to be at the forefront.
            </p>
          </motion.div>
        </div>
        
        <div className="flex justify-center relative overflow-hidden w-full max-h-[400px]">
          <div className="w-full max-w-[600px] h-[400px] overflow-hidden relative">
            <div ref={marqueeRef} className="flex flex-col gap-4">
              {stats.map((stat, index) => (
                <StatCard key={index} text={stat} delay={index * 0.1} />
              ))}
              {/* Duplicate stats for continuous scrolling */}
              {stats.map((stat, index) => (
                <StatCard key={`dup-${index}`} text={stat} delay={0} />
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for smooth scroll effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
        </div>
        
        <div className="flex justify-center mt-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 z-0 font-bold text-black text-2xl hover:underline"
          >
            Read more
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-[18.57px] h-[14.12px]"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
} 