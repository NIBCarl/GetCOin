"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CouncilApplicationPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4 bg-[#121212]">
      <div className="max-w-3xl w-full mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#E0B978] to-[#B08C5D] bg-clip-text text-transparent">
              GEN Council Application
            </span>
          </h1>
          
          <div className="mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-[#E0B978] to-[#B08C5D] mx-auto rounded-full"></div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] shadow-[0_0_20px_rgba(224,185,120,0.15)] backdrop-blur-sm rounded-lg p-8 text-center border border-[#E0B978]/20 mb-8"
        >
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#1A1A1A] border-2 border-[#E0B978] flex items-center justify-center mb-2">
              <svg className="w-10 h-10 text-[#E0B978]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-[#E0B978]">Coming Soon</h2>
            
            <p className="text-gray-300 max-w-lg mx-auto">
              The GEN Council application process is being finalized. As a member of the GEN Council, you&apos;ll help shape the future of community-driven projects and participate in governance decisions.
            </p>
            
            <div className="w-full max-w-md bg-[#121212] rounded-lg p-6 border border-[#2A2A2A] mt-4">
              <h3 className="text-white text-lg font-medium mb-4">Be the first to know when applications open</h3>
              
              <div className="flex flex-col space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-md bg-[#1A1A1A] border border-[#2A2A2A] text-white focus:border-[#E0B978] focus:ring-1 focus:ring-[#E0B978] outline-none"
                />
                
                <Button 
                  className="w-full py-3 bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] transition-all"
                >
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
              <h3 className="text-[#E0B978] font-bold mb-2">Leadership</h3>
              <p className="text-gray-300 text-sm">Guide community initiatives and help allocate resources to impactful projects</p>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
              <h3 className="text-[#E0B978] font-bold mb-2">Governance</h3>
              <p className="text-gray-300 text-sm">Vote on key decisions and help shape the future of the GEN ecosystem</p>
            </div>
            
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-[#2A2A2A]">
              <h3 className="text-[#E0B978] font-bold mb-2">Rewards</h3>
              <p className="text-gray-300 text-sm">Receive exclusive benefits and incentives for your contributions</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/" className="text-[#E0B978] hover:text-white transition-colors duration-300 hover:glow-effect">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 