"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import useWallet from "@/hooks/useWallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export function PresaleBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [days, setDays] = useState(27);
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(45);
  
  const { connected } = useWallet();
  const { setVisible } = useWalletModal();
  
  useEffect(() => {
    // Check if the banner was previously dismissed
    const bannerDismissed = localStorage.getItem("presaleBannerDismissed");
    if (bannerDismissed) {
      setIsVisible(false);
    }
    
    // Update the timer every minute
    const timer = setInterval(() => {
      if (minutes > 0) {
        setMinutes(minutes - 1);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
      }
    }, 60000);
    
    return () => clearInterval(timer);
  }, [days, hours, minutes]);
  
  const dismissBanner = () => {
    setIsVisible(false);
    localStorage.setItem("presaleBannerDismissed", "true");
  };
  
  const handleParticipate = () => {
    if (!connected) {
      setVisible(true);
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 sm:bottom-4 left-0 sm:left-auto right-0 sm:right-4 z-50 w-full sm:max-w-sm sm:w-auto m-0 sm:m-auto"
        >
          <div className="bg-[#1E1E1E] text-white rounded-t-lg sm:rounded-lg shadow-[0_0_20px_rgba(224,185,120,0.3)] overflow-hidden border border-[#E0B978]/20">
            <div className="flex justify-between items-center p-2 sm:p-3 bg-gradient-to-r from-[#B08C5D] to-[#1E1E1E]">
              <h3 className="font-bold text-sm sm:text-base">
                <span className="text-[#E0B978]">PRESALE</span> IS LIVE!
              </h3>
              <motion.button 
                whileHover={{ scale: 1.1, rotate: 90 }}
                transition={{ duration: 0.2 }}
                onClick={dismissBanner}
                className="text-white hover:text-[#E0B978] transition-colors"
              >
                <X size={18} />
              </motion.button>
            </div>
            <div className="p-3 sm:p-4">
              <div className="flex justify-between mb-3 px-2">
                <div className="text-center px-1">
                  <span className="text-lg sm:text-xl font-bold text-white">{days}</span>
                  <p className="text-[10px] sm:text-xs text-gray-400">days</p>
                </div>
                <div className="text-center px-1">
                  <span className="text-lg sm:text-xl font-bold text-white">{hours}</span>
                  <p className="text-[10px] sm:text-xs text-gray-400">hours</p>
                </div>
                <div className="text-center px-1">
                  <span className="text-lg sm:text-xl font-bold text-white">{minutes}</span>
                  <p className="text-[10px] sm:text-xs text-gray-400">mins</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm mb-3 text-gray-300 px-2">
                Don&apos;t miss out on GEN Coin at the best price! Price increases in:
              </p>
              
              {connected ? (
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href="/presale"
                    className="block w-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] text-center py-2 px-3 sm:px-4 rounded text-sm sm:text-base transition-all duration-300 mx-2"
                  >
                    Buy GEN Tokens
                  </Link>
                </motion.div>
              ) : (
                <div className="space-y-2 px-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleParticipate}
                    className="block w-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] text-center py-2 px-3 sm:px-4 rounded text-sm sm:text-base transition-all duration-300"
                  >
                    Connect Wallet
                  </motion.button>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href="/presale"
                      className="block w-full bg-transparent border border-[#E0B978]/30 text-[#E0B978] hover:bg-[#E0B978]/10 text-center py-2 px-3 sm:px-4 rounded text-sm sm:text-base transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 