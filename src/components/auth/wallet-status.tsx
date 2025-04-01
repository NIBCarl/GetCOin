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
      <Button
        variant="outline"
        className="bg-gradient-to-r from-[#1E1E1E] to-[#121212] border-[#E0B978]/30 text-white hover:bg-[#1E1E1E]/80 transition-all flex items-center gap-2"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        {displayAddress}
      </Button>
      
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