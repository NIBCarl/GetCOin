"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-[#121212] text-white py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E0B978] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
            <span className="bg-gradient-to-r from-[#E0B978] to-[#D4AF37] bg-clip-text text-transparent">About GEN Coin</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#E0B978] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#E0B978]/20 rounded-xl blur-lg"></div>
              <div className="relative overflow-hidden rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                <Image
                  src="/PFP.jpg"
                  alt="About GEN Coin"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#E0B978]">Our Mission</h3>
            <p className="text-gray-300">
              GEN Coin represents a new era in cryptocurrency – one that harmonizes the viral appeal of meme coins with tangible social impact. 
              Our mission is to create financial opportunities for our community while supporting meaningful initiatives through the GEN Council.
            </p>
            
            <h3 className="text-2xl font-bold text-[#E0B978]">Built on Solana</h3>
            <p className="text-gray-300">
              We&apos;ve chosen Solana for its lightning-fast transaction speeds and minimal environmental impact. 
              This ensures GEN Coin remains accessible to all, with gas fees that are a fraction of other blockchains.
            </p>
            
            <h3 className="text-2xl font-bold text-[#E0B978]">Community Governance</h3>
            <p className="text-gray-300">
              The GEN Council – a decentralized body of community members – stewards the Community Fund, directing resources to initiatives that align with our vision of building community value. Through this innovative governance model, we ensure transparency and collective decision-making.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 bg-[#1A1A1A] rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#4C1D95] rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#E0B978] mb-2">Value Generation</h3>
              <p className="text-gray-400">Combined community purchasing power to create real financial returns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#E0B978] to-[#D4AF37] rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#121212]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#E0B978] mb-2">Community Power</h3>
              <p className="text-gray-400">Democratic decision-making through the GEN Council governance structure</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#4C1D95] rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#E0B978] mb-2">Transparency</h3>
              <p className="text-gray-400">All fund movements and governance decisions are recorded on the blockchain</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 