"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useWallet from "@/hooks/useWallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Input } from "@/components/ui/input";

export function PresaleCounter() {
  const [days, setDays] = useState(27);
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(45);
  const [seconds, setSeconds] = useState(18);
  const [tokensRaised, setTokensRaised] = useState(138.31);
  const [currentPrice] = useState(0.0025);
  const [nextPrice] = useState(0.0025);
  const [purchaseAmount, setPurchaseAmount] = useState("0.1");
  const [selectedCurrency, setSelectedCurrency] = useState<"SOL" | "USDT" | "USDC">("SOL");
  const [isPurchasing, setIsPurchasing] = useState(false);

  const { connected, connecting, balance } = useWallet();
  const { setVisible } = useWalletModal();

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);

  const handleBuyToken = async () => {
    if (!connected) {
      setVisible(true);
      return;
    }

    try {
      setIsPurchasing(true);
      // This would normally contain the logic to execute a Solana transaction
      // For now, we'll just simulate with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate a successful purchase
      setTokensRaised(prev => Math.min(prev + parseFloat(purchaseAmount), 1000000));
      setPurchaseAmount("0.1");
      
      setIsPurchasing(false);
    } catch (error) {
      console.error("Purchase failed:", error);
      setIsPurchasing(false);
    }
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(e.target.value);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[420px] w-full bg-[#1E1E1E] shadow-[0_0_20px_rgba(224,185,120,0.3)] rounded-lg p-6 mx-auto overflow-hidden border border-[#2A2A2A]"
    >
      <h2 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-[#E0B978] to-[#B08C5D] bg-clip-text text-transparent">PRESALE IS LIVE</h2>
      
      <div className="bg-[#121212] rounded-lg p-4 mb-4 border border-[#2A2A2A]">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <span className="text-3xl font-bold text-white">{String(days).padStart(2, '0')}</span>
            <p className="text-xs font-normal text-gray-500">days</p>
          </div>
          <span className="text-3xl font-bold text-[#E0B978]">:</span>
          <div className="text-center">
            <span className="text-3xl font-bold text-white">{String(hours).padStart(2, '0')}</span>
            <p className="text-xs font-normal text-gray-500">hours</p>
          </div>
          <span className="text-3xl font-bold text-[#E0B978]">:</span>
          <div className="text-center">
            <span className="text-3xl font-bold text-white">{String(minutes).padStart(2, '0')}</span>
            <p className="text-xs font-normal text-gray-500">mins</p>
          </div>
          <span className="text-3xl font-bold text-[#E0B978]">:</span>
          <div className="text-center">
            <span className="text-3xl font-bold text-white">{String(seconds).padStart(2, '0')}</span>
            <p className="text-xs font-normal text-gray-500">secs</p>
          </div>
        </div>
      </div>
      
      <div className="bg-[#121212] text-white p-3 rounded mb-4 flex justify-between items-center border border-[#2A2A2A]">
        <div className="text-sm">Current Price: <span className="text-[#E0B978]">{currentPrice.toFixed(4)}</span></div>
        <div className="text-sm">Next Price: <span className="text-[#E0B978]">{nextPrice.toFixed(4)}</span></div>
      </div>
      
      <div className="text-left mb-6">
        <p className="text-sm text-gray-300">
          Tokens Sold (USD): <span className="text-[#E0B978]">{tokensRaised.toFixed(2)}/1,000,000</span>
        </p>
        <div className="w-full bg-[#121212] h-2 rounded-full mt-2 overflow-hidden border border-[#2A2A2A]">
          <div 
            className="h-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D]" 
            style={{ width: `${(tokensRaised / 1000000) * 100}%` }}
          />
        </div>
      </div>
      
      {!connected ? (
        <Button 
          className="w-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] py-3 px-4 rounded-md mb-4 transition-all duration-300"
          onClick={() => setVisible(true)}
          disabled={connecting}
        >
          {connecting ? "Connecting..." : "Connect Wallet"}
        </Button>
      ) : (
        <>
          <div className="mb-4">
            <div className="flex gap-2 mb-2">
              <Input
                type="number"
                value={purchaseAmount}
                onChange={handleAmountChange}
                className="flex-1 bg-[#121212] border-[#2A2A2A] text-white"
                placeholder="Amount"
              />
              <div className="w-24 p-2 bg-[#121212] border border-[#2A2A2A] rounded-md flex items-center justify-center text-white">
                <span className="text-[#E0B978]">{selectedCurrency}</span>
              </div>
            </div>
            <div className="text-xs text-gray-400 flex justify-between">
              <span>Balance: {balance !== null ? balance.toFixed(4) : "0"} SOL</span>
              <span>≈ {(parseFloat(purchaseAmount || "0") / currentPrice).toFixed(2)} GEN</span>
            </div>
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] py-3 px-4 rounded-md mb-4 transition-all duration-300"
            onClick={handleBuyToken}
            disabled={isPurchasing || !parseFloat(purchaseAmount)}
          >
            {isPurchasing ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-t-black border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mr-2"></div>
                Processing...
              </div>
            ) : (
              "Buy GEN Token"
            )}
          </Button>
        </>
      )}
      
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-400 font-medium mb-2">PAY WITH</p>
        <div className="flex justify-between gap-2">
          <motion.button 
            whileHover={{ y: -2 }}
            className={`flex-1 border ${selectedCurrency === "SOL" ? "border-[#E0B978]" : "border-[#2A2A2A]"} bg-[#121212] rounded-md py-2 px-3 text-sm font-medium ${selectedCurrency === "SOL" ? "text-[#E0B978]" : "text-gray-300"} hover:border-[#E0B978] transition-colors duration-300`}
            onClick={() => setSelectedCurrency("SOL")}
          >
            <span className="flex items-center justify-center gap-1">
              <span>SOL</span>
            </span>
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }}
            className={`flex-1 border ${selectedCurrency === "USDT" ? "border-[#E0B978]" : "border-[#2A2A2A]"} bg-[#121212] rounded-md py-2 px-3 text-sm font-medium ${selectedCurrency === "USDT" ? "text-[#E0B978]" : "text-gray-300"} hover:border-[#E0B978] transition-colors duration-300`}
            onClick={() => setSelectedCurrency("USDT")}
          >
            <span className="flex items-center justify-center gap-1">
              <span>USDT</span>
            </span>
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }}
            className={`flex-1 border ${selectedCurrency === "USDC" ? "border-[#E0B978]" : "border-[#2A2A2A]"} bg-[#121212] rounded-md py-2 px-3 text-sm font-medium ${selectedCurrency === "USDC" ? "text-[#E0B978]" : "text-gray-300"} hover:border-[#E0B978] transition-colors duration-300`}
            onClick={() => setSelectedCurrency("USDC")}
          >
            <span className="flex items-center justify-center gap-1">
              <span>USDC</span>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 