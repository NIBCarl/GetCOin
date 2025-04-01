"use client";

import { useState } from "react";
import { PresaleCounter } from "@/components/home/presale-counter";
import { motion } from "framer-motion";
import useWallet from "@/hooks/useWallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";

export default function PresalePage() {
  const { connected, connecting, balance, displayAddress } = useWallet();
  const { setVisible } = useWalletModal();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is GEN Coin?",
      answer: "GEN Coin is a Solana-based cryptocurrency that combines the viral nature of meme coins with real social impact. Unlike traditional meme coins, GEN Coin allocates 20% of its total supply to fund community projects and initiatives."
    },
    {
      question: "How do I participate in the presale?",
      answer: "To participate in the presale, connect your Solana wallet (Phantom, Solflare, etc.), choose your preferred payment method (SOL, USDT, or USDC), enter the amount you wish to invest, and confirm the transaction."
    },
    {
      question: "When will GEN Coin be listed on exchanges?",
      answer: "GEN Coin is scheduled to be listed on decentralized exchanges in Q3 2025, following the completion of the presale phase. We&apos;re also working on partnerships with centralized exchanges for future listings."
    },
    {
      question: "Is there a minimum or maximum investment amount?",
      answer: "The minimum investment amount is 0.05 SOL (or equivalent in USDT/USDC). There is no maximum investment amount, allowing you to participate according to your own investment strategy."
    },
    {
      question: "How are presale funds used?",
      answer: "Presale funds are allocated to development (30%), marketing (25%), liquidity provision (35%), and operational expenses (10%). This ensures GEN Coin has the resources needed for successful launch and growth."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-12 px-4 bg-[#121212]">
      <div className="max-w-4xl w-full mx-auto">
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-[#E0B978] to-[#B08C5D] bg-clip-text text-transparent">
              GEN Coin Presale
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Join our presale to secure your GEN Coins at the best possible price. 
            Early supporters get exclusive benefits and rewards.
          </motion.p>
        </div>
        
        <PresaleCounter />
        
        {connected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 bg-gradient-to-b from-[#1E1E1E] to-[#151515] shadow-[0_0_15px_rgba(224,185,120,0.15)] backdrop-blur-sm rounded-lg p-6 text-white border border-[#E0B978]/20"
          >
            <h2 className="text-xl font-bold mb-4 text-[#E0B978]">Your Wallet</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#121212] p-4 rounded-lg border border-[#2A2A2A]">
                <p className="text-sm text-gray-400 mb-1">Connected Address</p>
                <p className="font-mono text-[#E0B978] text-sm mb-4 break-all">{displayAddress}</p>
                <p className="text-sm text-gray-400 mb-1">Balance</p>
                <p className="text-white">{balance !== null ? balance.toFixed(4) : "0"} SOL</p>
              </div>
              <div className="bg-[#121212] p-4 rounded-lg border border-[#2A2A2A]">
                <p className="text-sm text-gray-400 mb-1">Estimated Allocation</p>
                <p className="text-[#E0B978] text-xl font-bold mb-4">0 GEN</p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 border-[#E0B978]/30 hover:bg-[#E0B978]/10 text-[#E0B978]">
                    View History
                  </Button>
                  <Button variant="outline" className="flex-1 border-[#E0B978]/30 hover:bg-[#E0B978]/10 text-[#E0B978]">
                    Refer Friends
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gradient-to-b from-[#1E1E1E] to-[#151515] shadow-[0_0_15px_rgba(224,185,120,0.15)] backdrop-blur-sm rounded-lg p-8 text-white border border-[#E0B978]/20"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#E0B978]">Presale Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#E0B978]">Tokenomics</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Total Supply: <span className="text-[#E0B978]">1,000,000,000 GEN</span></li>
                <li>Presale Allocation: <span className="text-[#E0B978]">32% (320,000,000 GEN)</span></li>
                <li>Initial Price: <span className="text-[#E0B978]">$0.0010</span></li>
                <li>Listing Price: <span className="text-[#E0B978]">$0.0018 (80% increase)</span></li>
                <li>60% of presale tokens locked for 12 months</li>
                <li>40% of presale tokens unlocked at launch</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#E0B978]">Potential Returns</h3>
              <p className="mb-3 text-gray-300">
                If GEN Coin reaches a <span className="text-[#E0B978]">$50 million</span> market cap, early investors stand to gain significant returns. 
                For example, a $25,000 investment in the presale could be worth approximately <span className="text-[#E0B978]">$538,000</span> at $50 million cap.
              </p>
              <p className="text-gray-300">
                Our goal is to reach at least <span className="text-[#E0B978]">$20 million</span> market cap in the first year, with plans to grow further 
                in subsequent years through community-driven initiatives and strategic partnerships.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#E0B978]">How to Buy</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Connect your Solana wallet</li>
                <li>Choose payment method (SOL, USDT, USDC)</li>
                <li>Enter the amount you wish to purchase</li>
                <li>Confirm the transaction</li>
              </ol>
              {!connected && (
                <div className="mt-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] transition-all py-2"
                    onClick={() => setVisible(true)}
                    disabled={connecting}
                  >
                    {connecting ? "Connecting..." : "Connect Wallet Now"}
                  </Button>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#E0B978]">Why Invest in GEN Coin?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Combines meme coin virality with real-world impact</li>
                <li>20% of tokens allocated to Community Fund for projects</li>
                <li>Built on Solana for fast, low-cost transactions</li>
                <li>Transparent governance through the GEN Council</li>
                <li>Strong locking strategy to ensure price stability</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 bg-gradient-to-b from-[#1E1E1E] to-[#151515] shadow-[0_0_15px_rgba(224,185,120,0.15)] backdrop-blur-sm rounded-lg p-8 text-white border border-[#E0B978]/20"
        >
          <h2 className="text-2xl font-bold mb-4 text-[#E0B978]">Roadmap</h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[110px]">Q2 2025:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Pre-Development</span> - Secure initial funding, develop smart contract and website, recruit the GEN Council
              </div>
            </li>
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[110px]">Q2 2025:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Presale</span> - Launch public sale, build hype and engage with social community
              </div>
            </li>
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[110px]">Q3 2025:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Launch</span> - List on decentralized exchanges, implement stabilization measures
              </div>
            </li>
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[110px]">Q4 2025-Q1 2026:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Growth</span> - Aim for significant market cap growth, community engagement for charity projects
              </div>
            </li>
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[110px]">Q2 2026:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Expansion</span> - Start funding community projects from the Community Fund
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-gradient-to-b from-[#1E1E1E] to-[#151515] shadow-[0_0_15px_rgba(224,185,120,0.15)] backdrop-blur-sm rounded-lg p-8 text-white border border-[#E0B978]/20"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#E0B978]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#2A2A2A] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex justify-between items-center bg-[#121212] hover:bg-[#1A1A1A] transition-colors"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#E0B978] transform transition-transform ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeFaq === index && (
                  <div className="p-4 bg-[#1A1A1A]/50 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 text-center text-gray-400"
        >
          <p>Need help? Join our <a href="https://discord.gg/GENCoin" className="text-[#E0B978] hover:text-white transition-colors duration-300 hover:glow-effect">Discord community</a> for support</p>
        </motion.div>
      </div>
    </main>
  );
} 