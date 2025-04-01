"use client";

import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/shared/countdown-timer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#121212] to-[#1E1E1E] min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#E0B978] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white [text-shadow:_0_0_30px_rgba(224,185,120,0.3)]">
              <span className="text-[#E0B978]">GEN</span> Coin: A Meme Coin
              <span className="block mt-2">With Real Purpose</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              A Solana-based cryptocurrency that combines the viral nature of meme coins with real-world impact through community governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/presale">
                <Button
                  className="bg-gradient-to-r from-[#E0B978] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#E0B978] text-black font-bold text-lg px-8 py-6 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(224,185,120,0.5)] w-full sm:w-auto"
                >
                  Join Presale
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  variant="outline"
                  className="border-[#E0B978] text-[#E0B978] hover:bg-[#E0B978]/10 font-bold text-lg px-8 py-6 w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#E0B978]/20 rounded-full blur-3xl"></div>
              <Image
                src="/Logo.png"
                alt="GEN Coin Logo"
                width={500}
                height={500}
                className="relative z-10 max-w-md w-full drop-shadow-[0_0_30px_rgba(224,185,120,0.3)]"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-24 p-6 bg-[#1A1A1A] border border-[#E0B978]/20 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-sm"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#E0B978] mb-2">Presale Ends In</h2>
            <p className="text-gray-400">Secure your GEN tokens before the public launch</p>
          </div>
          <CountdownTimer
            targetDate={new Date('2023-12-31')}
            className="text-white"
            highlightColor="#E0B978"
          />
          <div className="mt-6 flex justify-center">
            <Link href="/presale">
              <Button
                className="bg-gradient-to-r from-[#8B5CF6] to-[#4C1D95] hover:from-[#7C3AED] hover:to-[#5B21B6] text-white font-bold px-8 py-6 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              >
                View Presale Details
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 