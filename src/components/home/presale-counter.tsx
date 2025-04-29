"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { AnimatedButton } from "@/components/shared/animated-button";
import { motion } from "framer-motion";
import useWallet from "@/hooks/useWallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { CurrencyConverter } from "@/components/shared/currency-converter";

// Type for the presale stage
type PresaleStage = {
  name: string;
  price: number;
  cap: number;
  progress: number;
};

export function PresaleCounter() {
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const [activeTab, setActiveTab] = useState<"sol" | "usdc" | "usdt">("sol");
  const [amount, setAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // GEN Coin price in USD
  const genPriceUsd = 0.0025;
  
  // Mock data for countdown - would be fetched from API
  const [countdown, setCountdown] = useState({
    days: 7,
    hours: 14,
    minutes: 32,
    seconds: 45
  });
  
  // Mock data for presale stages - would be fetched from API
  const presaleStages: PresaleStage[] = [
    { name: "Stage 1", price: 0.0025, cap: 100000000, progress: 65 },
    { name: "Stage 2", price: 0.0025, cap: 100000000, progress: 0 },
    { name: "Stage 3", price: 0.0025, cap: 120000000, progress: 0 }
  ];
  
  // Active presale stage
  const activeStage = presaleStages[0];
  
  // Handle amount input change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^(\d+)?(\.\d*)?$/.test(value) || value === "") {
      setAmount(value);
    }
  };
  
  // Calculate GEN tokens based on input amount
  const calculateTokens = () => {
    const numericAmount = parseFloat(amount || "0");
    let usdValue = 0;
    
    // Different calculation based on payment method
    switch (activeTab) {
      case "sol":
        // In a real app, you'd fetch the SOL price dynamically
        usdValue = numericAmount * 100; // Example: SOL price is $100
        break;
      case "usdc":
      case "usdt":
        // Stablecoins have 1:1 USD value
        usdValue = numericAmount;
        break;
    }
    
    // Calculate GEN tokens based on current price
    return usdValue / activeStage.price;
  };
  
  // Handle buy action
  const handleBuy = async () => {
    if (!connected || !publicKey) {
      setVisible(true);
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      // Would show an error message in a real app
      return;
    }
    
    try {
      setIsSubmitting(true);
      // Here you would integrate with your Solana contract
      // For demo, we'll just wait
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle successful transaction
      setAmount("");
    } catch (error) {
      console.error("Error processing purchase:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="w-full bg-gradient-to-b from-[#1E1E1E] to-[#151515] shadow-[0_0_15px_rgba(224,185,120,0.15)] backdrop-blur-sm rounded-lg p-6 border border-[#E0B978]/20"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#E0B978] mb-2">Current Stage</h2>
            <div className="flex justify-between items-center mb-1">
              <span className="text-white">Stage 1</span>
              <span className="text-white">
                <span className="font-semibold">{activeStage.progress}%</span> filled
              </span>
            </div>
            <Progress value={activeStage.progress} className="h-2 bg-[#2A2A2A]" indicatorColor="bg-[#E0B978]" />
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>0 GEN</span>
              <span>{activeStage.cap.toLocaleString()} GEN</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#E0B978] mb-4">Presale Ends In</h2>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-[#121212] rounded-lg p-3 text-center border border-[#2A2A2A]">
                <div className="text-2xl font-bold text-white">{String(countdown.days).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">Days</div>
              </div>
              <div className="bg-[#121212] rounded-lg p-3 text-center border border-[#2A2A2A]">
                <div className="text-2xl font-bold text-white">{String(countdown.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">Hours</div>
              </div>
              <div className="bg-[#121212] rounded-lg p-3 text-center border border-[#2A2A2A]">
                <div className="text-2xl font-bold text-white">{String(countdown.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">Minutes</div>
              </div>
              <div className="bg-[#121212] rounded-lg p-3 text-center border border-[#2A2A2A]">
                <div className="text-2xl font-bold text-white">{String(countdown.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-400">Seconds</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-[#E0B978] mb-2">Token Price</h2>
            <div className="text-3xl font-bold text-white">${activeStage.price}</div>
            <p className="text-sm text-gray-400">(Price quoted in USD)</p>
          </div>
        </div>
        
        <div className="bg-[#121212] rounded-lg p-5 border border-[#2A2A2A]">
          <h2 className="text-xl font-bold text-[#E0B978] mb-4">Buy GEN Tokens</h2>
          
          <div className="flex border rounded-lg overflow-hidden mb-6">
            <button 
              className={`flex-1 py-2 text-center transition-colors ${activeTab === 'sol' ? 'bg-[#E0B978] text-black font-medium' : 'bg-[#1A1A1A] text-gray-300'}`}
              onClick={() => setActiveTab('sol')}
            >
              SOL
            </button>
            <button 
              className={`flex-1 py-2 text-center transition-colors ${activeTab === 'usdc' ? 'bg-[#E0B978] text-black font-medium' : 'bg-[#1A1A1A] text-gray-300'}`}
              onClick={() => setActiveTab('usdc')}
            >
              USDC
            </button>
            <button 
              className={`flex-1 py-2 text-center transition-colors ${activeTab === 'usdt' ? 'bg-[#E0B978] text-black font-medium' : 'bg-[#1A1A1A] text-gray-300'}`}
              onClick={() => setActiveTab('usdt')}
            >
              USDT
            </button>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-1">Amount</label>
            <div className="relative">
              <input
                type="text"
                className="w-full bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white overflow-x-auto"
                placeholder={`Enter ${activeTab.toUpperCase()} amount`}
                value={amount}
                onChange={handleAmountChange}
              />
              <button 
                className="absolute right-3 top-3 text-[#E0B978] text-sm"
                onClick={() => {/* Would set max amount based on balance */}}
              >
                MAX
              </button>
            </div>
            {activeTab === 'sol' && amount && !isNaN(parseFloat(amount)) && (
              <div className="mt-1 text-sm">
                <CurrencyConverter 
                  solAmount={parseFloat(amount)} 
                  showGenEquivalent={true}
                  genPriceUsd={genPriceUsd}
                />
              </div>
            )}
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-400 text-sm mb-1">You&apos;ll Receive</label>
            <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-3 text-white break-words">
              {amount && parseFloat(amount) > 0 ? (
                <>
                  <span className="text-xl font-bold">{calculateTokens().toLocaleString(undefined, { maximumFractionDigits: 0 })}</span> GEN
                </>
              ) : (
                <span className="text-gray-500">0 GEN</span>
              )}
            </div>
          </div>
          
          <AnimatedButton 
            className="w-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold py-3"
            onClick={handleBuy}
            disabled={isSubmitting || !amount || parseFloat(amount) <= 0}
            glowColor="rgba(224,185,120,0.7)"
          >
            {!connected 
              ? "Connect Wallet" 
              : isSubmitting 
                ? "Processing..." 
                : `Buy GEN with ${activeTab.toUpperCase()}`}
          </AnimatedButton>
          
          <p className="text-xs text-center text-gray-400 mt-3">
            Min. purchase: 0.05 SOL / 5 USDC/USDT
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default PresaleCounter; 