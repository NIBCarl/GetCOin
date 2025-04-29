"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Community Fund",
      description: "20% of total supply allocated to fund community-selected projects and charitable initiatives.",
      icon: "💰"
    },
    {
      title: "GEN Council Governance",
      description: "Council members vote on fund allocation and tokenomics adjustments.",
      icon: "🏛️"
    },
    {
      title: "Zero Transfer Tax",
      description: "No hidden fees on transactions, maximizing value for all GEN holders.",
      icon: "✅"
    }
  ];

  const FeatureCard = ({ title, description, icon, index }: { title: string, description: string, icon: string, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-[#121212] p-6 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] group hover:shadow-[0_8px_30px_rgba(224,185,120,0.2)] transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-[#ffdebb] to-[#dbb78e] rounded-lg flex items-center justify-center mb-4 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,222,187,0.5)] transition-all duration-300">
        <span className="text-xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#E0B978]">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );

  const benefits = [
    "Professional treasury management by qualified council members",
    "Community discussions on fund allocation",
    "Transparent on-chain governance process",
    "Direct funding for community project proposals",
    "Long-term asset appreciation strategies"
  ];

  return (
    <section id="features" className="relative bg-[#1A1A1A] text-white py-24 overflow-hidden w-full">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#E0B978] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffdebb] rounded-full filter blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-[#E0B978] to-[#D4AF37] bg-clip-text text-transparent">Key Features</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffdebb] to-[#E0B978] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            GEN Coin combines the best aspects of meme coins with a strong governance structure and real-world utility
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto"
        >
          <div className="bg-[#121212] p-8 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <h3 className="text-2xl font-bold mb-6 text-[#E0B978]">Community-Driven Benefits</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#E0B978] flex items-center justify-center">
                    <Check className="w-3 h-3 text-black" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#121212] p-8 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <h3 className="text-2xl font-bold mb-6 text-[#E0B978]">Built for Long-Term Success</h3>
            <p className="text-gray-300 mb-4">
              GEN Coin is designed to create lasting value through a unique combination of mechanisms:
            </p>
            <ul className="space-y-3">
              <li className="pl-4 border-l-2 border-[#E0B978]">
                <span className="text-[#E0B978] font-bold">Liquidity Locking</span> - 20% of total supply locked as liquidity indefinitely
              </li>
              <li className="pl-4 border-l-2 border-[#E0B978]">
                <span className="text-[#E0B978] font-bold">Council Oversight</span> - Community-minded experts manage the treasury
              </li>
              <li className="pl-4 border-l-2 border-[#E0B978]">
                <span className="text-[#E0B978] font-bold">Community Fund</span> - Long-term project funding
              </li>
              <li className="pl-4 border-l-2 border-[#E0B978]">
                <span className="text-[#E0B978] font-bold">Zero Taxes</span> - Maximum value for holders
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 