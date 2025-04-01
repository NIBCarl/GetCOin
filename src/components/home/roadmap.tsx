"use client";

import { motion } from "framer-motion";

interface RoadmapItemProps {
  title: string;
  description: string;
  quarter: string;
  index: number;
  isCompleted?: boolean;
}

function RoadmapItem({ title, description, quarter, index, isCompleted = false }: RoadmapItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8B5CF6] to-[#E0B978] z-0"></div>
      
      {/* Quarter marker - moved outside of the timeline */}
      <div className={`absolute -left-3 top-0 rounded-full flex items-center justify-center z-10`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center
          ${isCompleted 
            ? 'bg-gradient-to-br from-[#E0B978] to-[#D4AF37] shadow-[0_0_15px_rgba(224,185,120,0.5)]' 
            : 'bg-gradient-to-br from-[#8B5CF6] to-[#4C1D95] shadow-[0_0_15px_rgba(139,92,246,0.5)]'}`}>
          <span className={`text-xs font-bold ${isCompleted ? 'text-black' : 'text-white'} text-center whitespace-pre-line leading-tight px-1`}>
            {quarter}
          </span>
        </div>
      </div>
      
      <div className="pl-20 pb-12">
        <h3 className={`text-xl font-bold mb-2 
          ${isCompleted 
            ? 'text-[#E0B978]' 
            : 'bg-gradient-to-r from-[#8B5CF6] to-[#E0B978] bg-clip-text text-transparent'}`}>
          {title}
        </h3>
        <div className="bg-[#121212] p-5 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Roadmap() {
  const roadmapItems = [
    {
      quarter: "Q2\n'25",
      title: "Pre-Development",
      description: "Secure initial funding from early supporters. Develop the smart contract and website. Recruit the GEN Council.",
      isCompleted: false
    },
    {
      quarter: "Q2\n'25",
      title: "Presale",
      description: "Launch public sale to raise funds for marketing and liquidity. Build hype and engage with social community.",
      isCompleted: false
    },
    {
      quarter: "Q3\n'25",
      title: "Launch",
      description: "List on decentralized exchanges. Implement stabilization measures.",
      isCompleted: false
    },
    {
      quarter: "Q4 '25\nQ1 '26",
      title: "Growth",
      description: "Aim for significant market cap growth. Community engagement for charity projects.",
      isCompleted: false
    },
    {
      quarter: "Q2\n'26",
      title: "Expansion",
      description: "Start funding community projects from the Community Fund.",
      isCompleted: false
    }
  ];

  return (
    <section id="roadmap" className="relative bg-[#121212] text-white py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/2 -left-24 w-96 h-96 bg-[#E0B978] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-[#E0B978] to-[#D4AF37] bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#E0B978] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Our strategic plan to build, grow, and deliver value to the GEN community
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {roadmapItems.map((item, index) => (
            <RoadmapItem
              key={index}
              title={item.title}
              description={item.description}
              quarter={item.quarter}
              index={index}
              isCompleted={item.isCompleted}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-[#1A1A1A] px-8 py-4 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <p className="text-lg text-[#E0B978]">Beyond 2026: Continuous innovation and expansion</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 