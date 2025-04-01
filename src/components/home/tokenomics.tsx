"use client";

import { motion } from "framer-motion";

export function Tokenomics() {
  const distributionData = [
    { id: "public-sale", category: "Public Sale", percentage: 40, color: "#E0B978" },
    { id: "council-budget", category: "GEN Council Budget", percentage: 15, color: "#ffdebb" },
    { id: "launch", category: "Launch", percentage: 5, color: "#dbb78e" },
    { id: "liquidity", category: "Liquidity", percentage: 20, color: "#ffdebb" },
    { id: "community-fund", category: "Community Fund", percentage: 20, color: "#D4AF37" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="tokenomics" className="relative bg-[#1A1A1A] text-white py-24 overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ffdebb] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#E0B978] rounded-full filter blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-[#E0B978] to-[#D4AF37] bg-clip-text text-transparent">Tokenomics</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffdebb] to-[#E0B978] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            GEN Coin&apos;s tokenomics are designed to balance community growth, long-term sustainability, and project funding.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-5 lg:col-span-2"
          >
            <div className="bg-[#121212] p-8 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
              <h3 className="text-2xl font-bold text-[#E0B978] mb-6">Token Distribution</h3>
              
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {distributionData.map((item) => (
                  <motion.li key={item.id} variants={listItem} className="flex items-center">
                    <div className="w-full">
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{item.category}</span>
                        <span className="text-[#E0B978] font-bold">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-[#2A2A2A] rounded-full h-2.5">
                        <div 
                          className="h-2.5 rounded-full" 
                          style={{ 
                            width: `${item.percentage}%`,
                            backgroundColor: item.color,
                            boxShadow: `0 0 10px ${item.color}60`
                          }}
                        ></div>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              
              <div className="mt-8 pt-6 border-t border-[#2A2A2A]">
                <p className="text-center text-gray-300">
                  Total Supply: <span className="text-[#E0B978] font-bold">1,000,000,000 GEN</span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-5 lg:col-span-3"
          >
            <div className="bg-[#121212] p-8 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] h-full">
              <h3 className="text-2xl font-bold text-[#E0B978] mb-6">Locking Strategy</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Public Sale <span className="text-gray-400">(40%, 400M tokens)</span></h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                    <li>Pre-Development (8%, 80M): 100% locked for 12 months</li>
                    <li>Presale (32%, 320M): 60% locked for 12 months, 40% unlocked</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Launch <span className="text-gray-400">(5%, 50M tokens)</span></h4>
                  <p className="text-gray-300 ml-4">100% unlocked at launch</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Liquidity <span className="text-gray-400">(20%, 200M tokens)</span></h4>
                  <p className="text-gray-300 ml-4">100% locked indefinitely</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Community Fund <span className="text-gray-400">(20%, 200M tokens)</span></h4>
                  <p className="text-gray-300 ml-4">100% locked for 12 months, then unlocked as needed through GEN Council governance</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">GEN Council Budget <span className="text-gray-400">(15%, 150M tokens)</span></h4>
                  <p className="text-gray-300 ml-4">Released quarterly over 3 years to fund operations and development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-gray-300">
            GEN Coin combines the viral potential of meme coins with real utility and purpose. By allocating significant percentages to both community initiatives and liquidity, we&apos;ve created a token that can provide both financial returns and social impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 