"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="relative bg-[#121212] text-white py-24 overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#ffdebb] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E0B978] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="w-full px-4 relative z-10 max-w-[2000px] mx-auto">
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
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffdebb] to-[#E0B978] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            GEN Coin brings together the viral appeal of meme coins with genuine utility and long-term value creation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ffdebb]/20 to-[#E0B978]/20 rounded-xl blur-lg"></div>
            <Image
              src="/gen-coin.png"
              alt="GEN Coin"
              width={500}
              height={500}
              className="mx-auto relative z-10"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#E0B978]">Our Vision</h3>
            <p className="text-gray-300 mb-6">
              GEN Coin stands for Generation - creating multi-generational wealth for all holders through a community-governed token that funds real-world projects with measurable impacts.
            </p>
            <p className="text-gray-300 mb-6">
              Unlike typical meme coins that rely solely on hype, GEN Coin is built on a foundation of transparency, community governance, and sustainable tokenomics. Our unique GEN Council ensures that community funds are allocated responsibly and effectively.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                <p className="text-[#E0B978] font-bold text-xl mb-1">20%</p>
                <p className="text-gray-400 text-sm">Allocated to Community Fund</p>
              </div>
              <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                <p className="text-[#E0B978] font-bold text-xl mb-1">7-10</p>
                <p className="text-gray-400 text-sm">GEN Council Members</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Problem We're Solving */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16 max-w-7xl mx-auto bg-[#1A1A1A] rounded-xl border border-[#E0B978]/20 p-8 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#E0B978]">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                The cryptocurrency market is filled with speculative assets that offer no real utility or social good. 
                Meme coins, in particular, are often seen as pure speculation without any underlying value.
              </p>
              <p className="text-gray-300">
                GEN Coin aims to change this narrative by creating a meme coin that not only offers potential financial 
                returns but also drives real-world impact through its non-profit model. By investing in GEN Coin, 
                you&apos;re joining a community that values both financial returns and social good.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#E0B978]">Community Empowerment</h3>
              <p className="text-gray-300 mb-4">
                The GEN Council, composed of 8 to 10 community, business, and banking leaders, will guide the project 
                and make decisions on fund allocations, ensuring that the project stays true to its mission.
              </p>
              <p className="text-gray-300">
                Community members are encouraged to participate in discussions, provide feedback, and contribute to 
                the project&apos;s growth through various channels, including social media and dedicated platforms. Together, 
                we&apos;re creating a lasting impact and building a strong, vibrant community.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Financial Opportunity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16 max-w-7xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#E0B978] text-center">Financial Opportunity</h3>
          <div className="bg-[#121212] p-8 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <p className="text-gray-300 mb-6 text-center">
              By combining the fun and virality of meme coins with the purpose of a non-profit, GEN Coin 
              offers a unique value proposition: financial returns coupled with social impact.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center border border-[#E0B978]/10">
                <h4 className="text-xl font-bold mb-2 text-[#E0B978]">Token Locking</h4>
                <p className="text-gray-300">
                  Strategic locking periods create scarcity and drive long-term value, with 60% of presale tokens 
                  locked for 12 months
                </p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center border border-[#E0B978]/10">
                <h4 className="text-xl font-bold mb-2 text-[#E0B978]">Market Growth</h4>
                <p className="text-gray-300">
                  Our goal is to reach at least $20 million market cap in the first year, with plans to grow further 
                  through community-driven initiatives
                </p>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg text-center border border-[#E0B978]/10">
                <h4 className="text-xl font-bold mb-2 text-[#E0B978]">Early Advantage</h4>
                <p className="text-gray-300">
                  Early investors stand to gain significant returns as we implement our roadmap and expand our community reach
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          <div className="bg-[#121212] p-6 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#ffdebb] to-[#dbb78e] rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#E0B978]">Transparent</h3>
            <p className="text-gray-300">All fund movements and council decisions are recorded on-chain for full transparency</p>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#ffdebb] to-[#dbb78e] rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <path d="M12 2v4"></path>
                <path d="M12 18v4"></path>
                <path d="m4.93 4.93 2.83 2.83"></path>
                <path d="m16.24 16.24 2.83 2.83"></path>
                <path d="M2 12h4"></path>
                <path d="M18 12h4"></path>
                <path d="m4.93 19.07 2.83-2.83"></path>
                <path d="m16.24 7.76 2.83-2.83"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#E0B978]">Community-Driven</h3>
            <p className="text-gray-300">Token holders can propose and vote on projects through our democratic governance model</p>
          </div>
          
          <div className="bg-[#121212] p-6 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-[#ffdebb] to-[#dbb78e] rounded-lg shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#E0B978]">Purposeful</h3>
            <p className="text-gray-300">Combines financial opportunity with meaningful social impact through funded projects</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 