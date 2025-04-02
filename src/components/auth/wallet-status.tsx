"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import useWallet from "@/hooks/useWallet";
import { motion, AnimatePresence } from "framer-motion";

export function WalletStatus() {
  const {
    connected,
    disconnect,
    balance,
    displayAddress,
    loading,
    error,
  } = useWallet();
  
  const [showDropdown, setShowDropdown] = useState(false);
  
  if (!connected) return null;
  
  return (
    <div className="relative">
      <motion.div
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 15px rgba(224,185,120,0.4)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex items-center gap-2 bg-[#121212] px-4 py-2 rounded-md border border-[#E0B978]/20 cursor-pointer hover:bg-[#1A1A1A] group"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-[#E0B978] group-hover:text-white transition-colors duration-300">{displayAddress}</span>
      </motion.div>
      
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-64 bg-[#1E1E1E] border border-[#E0B978]/20 rounded-lg shadow-lg p-4 z-50"
          >
            <div className="mb-4">
              <p className="text-sm text-gray-400">Connected Wallet</p>
              <p className="text-white font-medium truncate">{displayAddress}</p>
            </div>
            
            <div className="mb-4">
              <p className="text-sm text-gray-400">SOL Balance</p>
              {loading ? (
                <p className="text-white">Loading...</p>
              ) : (
                <p className="text-white font-medium">{balance !== null ? balance.toFixed(4) : "0"} SOL</p>
              )}
            </div>
            
            {error && (
              <div className="mb-4 p-2 bg-red-500/20 text-red-300 text-sm rounded">
                {error}
              </div>
            )}
            
            <Button
              variant="destructive"
              size="sm"
              className="w-full"
              onClick={() => {
                disconnect();
                setShowDropdown(false);
              }}
            >
              Disconnect
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 