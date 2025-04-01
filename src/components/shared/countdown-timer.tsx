"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
  highlightColor?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ 
  targetDate, 
  className = "", 
  highlightColor = "#E0B978" 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    // Initial update
    updateTimer();
    
    // Set up the interval
    const timerId = setInterval(updateTimer, 1000);
    
    // Clean up the interval
    return () => clearInterval(timerId);
  }, [targetDate]);

  const padNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <div className={`flex justify-center space-x-4 md:space-x-8 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <motion.div 
            className="relative bg-[#1E1E1E] w-16 md:w-24 h-20 md:h-28 rounded-lg flex items-center justify-center border border-[#333333] shadow-lg overflow-hidden"
            style={{ boxShadow: `0 8px 32px rgba(0, 0, 0, 0.2), 0 0 8px ${highlightColor}30` }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E0B978] to-transparent opacity-30"></div>
            <motion.span 
              className="text-3xl md:text-5xl font-bold text-white"
              key={unit.value}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {padNumber(unit.value)}
            </motion.span>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E0B978] to-transparent opacity-30"></div>
          </motion.div>
          <p className="text-xs md:text-sm mt-2 text-gray-400">{unit.label}</p>
        </div>
      ))}
    </div>
  );
} 