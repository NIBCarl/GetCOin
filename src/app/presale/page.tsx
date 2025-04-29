"use client";

import { useState } from "react";
import { PresaleCounter } from "@/components/home/presale-counter";
import { motion } from "framer-motion";
import useWallet from "@/hooks/useWallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { AnimatedButton } from "@/components/shared/animated-button";
import Link from "next/link";

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
      question: "I like the concept of what GEN Coin will accomplish, but I need more information.",
      answer: "We would love to share more about the exciting GEN Coin project. Contact us here: <a href=\"https://thegencouncil.com/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-[#E0B978] hover:text-white transition-colors\">https://thegencouncil.com/</a>"
    },
    {
      question: "How do I participate in the presale?",
      answer: "To participate in the presale, connect your Solana wallet (Phantom, Solflare, etc.), choose your preferred payment method (SOL, USDT, or USDC), enter the amount you wish to invest, and confirm the transaction."
    },
    {
      question: "When will GEN Coin be listed on exchanges?",
      answer: "GEN Coin is scheduled to be listed on decentralized exchanges in Q3 2025, following the completion of the presale phase. We're also working on partnerships with centralized exchanges for future listings. Until GEN Coin is listed on decentralized exchanges, your GEN Coin investment can be monitored here: <a href=\"https://gencoinofficial.com/dashboard/\" className=\"text-[#E0B978] hover:text-white transition-colors\">https://gencoinofficial.com/dashboard/</a>"
    },
    {
      question: "Is there a minimum or maximum investment amount?",
      answer: "The minimum investment amount is 0.05 SOL (or equivalent in USDT/USDC). There is no maximum investment amount, allowing you to participate according to your own investment strategy."
    },
    {
      question: "How are presale funds used?",
      answer: "Funds through the Pre development and Presale are allocated to development (15%), marketing (30%), liquidity provision (45%), and operations and reserves (10%). This ensures GEN Coin has the resources needed for successful launch and growth."
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
                  <AnimatedButton 
                    variant="outline" 
                    className="flex-1 border-[#E0B978]/30 text-[#E0B978]"
                    glowColor="rgba(224,185,120,0.3)"
                  >
                    View History
                  </AnimatedButton>
                  <AnimatedButton 
                    variant="outline" 
                    className="flex-1 border-[#E0B978]/30 text-[#E0B978]"
                    glowColor="rgba(224,185,120,0.3)"
                  >
                    Refer Friends
                  </AnimatedButton>
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
                <li>Pre Development: <span className="text-[#E0B978]">4% (40,000,000 GEN)</span></li>
                <li>Presale Allocation: <span className="text-[#E0B978]">36% (360,000,000 GEN)</span></li>
                <li>Initial Price: <span className="text-[#E0B978]">$0.0025</span></li>
                <li>Listing Price: <span className="text-[#E0B978]">$0.0035 (40% increase)</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#E0B978]">Potential Returns</h3>
              <p className="mb-3 text-gray-300">
                If GEN Coin reaches a <span className="text-[#E0B978]">$50 million</span> market cap, early investors stand to gain significant returns. 
                For example, a $25,000 investment in the presale could be worth approximately <span className="text-[#E0B978]">$500,000</span> at $50 million cap.
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
                <li>Get a Solana compatible wallet; <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer" className="text-[#E0B978] hover:text-white transition-colors">Phantom</a> is preferred.</li>
                <li>Connect your Solana wallet</li>
                <li>Determine the number of GEN Coin tokens you wish to purchase and the amount of SOL needed to complete the investment.</li>
                <li>Choose payment method (SOL, USDT, USDC)</li>
                <li>Enter the amount you wish to purchase</li>
                <li>Confirm the transaction</li>
                <li>Monitor your investment <Link href="/dashboard" className="text-[#E0B978] hover:text-white transition-colors">here</Link>.</li>
              </ol>
              {!connected && (
                <div className="mt-4">
                  <AnimatedButton 
                    className="w-full bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold py-2"
                    onClick={() => setVisible(true)}
                    disabled={connecting}
                    glowColor="rgba(224,185,120,0.7)"
                  >
                    {connecting ? "Connecting..." : "Connect Wallet Now"}
                  </AnimatedButton>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Why GEN Coin?</h3>
              <ul className="list-none space-y-3">
                <li>Built on Solana for fast, efficient transactions</li>
                <li>20% of tokens allocated to Community Fund for projects</li>
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
              <div className="font-bold text-[#E0B978] min-w-[150px]">Q2 2025:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Pre-Development</span> - Secure initial funding, develop smart contract and website, recruit the GEN Council
              </div>
            </li>
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[150px]">Q2 2025:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Presale</span> - Launch public sale, build hype and engage with social community
              </div>
            </li>
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[150px]">Q3 2025:</div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Launch</span> - List on decentralized exchanges, implement stabilization measures
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <div className="font-bold text-[#E0B978] min-w-[150px] flex flex-col">
                <span>Q4 2025</span>
                <span>to</span>
                <span>Q1 2026:</span>
              </div>
              <div className="text-gray-300">
                <span className="font-semibold text-white">Growth</span> - Aim for significant market cap growth, community engagement for charity projects
              </div>
            </li>
            <li className="flex gap-3">
              <div className="font-bold text-[#E0B978] min-w-[150px]">Q2 2026:</div>
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
                  <div 
                    className="p-4 bg-[#1A1A1A]/50 text-gray-300"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
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
          <p>Need help? Join our <a href="https://discord.gg/gencoinofficial" className="text-[#E0B978] hover:text-white transition-colors duration-300 hover:glow-effect">Discord community</a> for support</p>
        </motion.div>
      </div>
    </main>
  );
} 