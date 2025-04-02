"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { usePathname } from "next/navigation";
import { WalletConnector } from "@/components/auth/wallet-connector";
import { WalletStatus } from "@/components/auth/wallet-status";
import useWallet from "@/hooks/useWallet";
import { AnimatedButton } from "@/components/shared/animated-button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const pathname = usePathname();
  const { connected } = useWallet();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper function to render correct link based on current path
  const getNavLink = (section: string, label: string, onClick?: () => void) => {
    if (pathname === "/") {
      // On home page, use hash links
      return (
        <a href={`#${section}`} className="text-white hover:text-[#E0B978] transition-colors glow-effect" onClick={onClick}>
          {label}
        </a>
      );
    } else {
      // On other pages, link back to home with hash
      return (
        <Link href={`/#${section}`} className="text-white hover:text-[#E0B978] transition-colors glow-effect" onClick={onClick}>
          {label}
        </Link>
      );
    }
  };

  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-gradient-to-r from-[#dbb78e] to-[#121212] fixed top-0 left-0 right-0 z-50 shadow-lg">
      <Link href="/" className="flex items-center">
        <Image
          src="/Logo Text.png"
          alt="GEN Coin"
          width={220}
          height={120}
          className="h-16 w-auto"
        />
      </Link>
      
      <div className="hidden lg:flex items-center gap-6 text-white">
        {pathname === "/" ? (
          <a href="#" className="text-white hover:text-[#E0B978] transition-colors glow-effect">Home</a>
        ) : (
          <Link href="/" className="text-white hover:text-[#E0B978] transition-colors glow-effect">Home</Link>
        )}
        {getNavLink("about", "About")}
        {getNavLink("tokenomics", "Tokenomics")}
        {getNavLink("roadmap", "Roadmap")}
        {getNavLink("community", "Community")}
        <Link href="/presale">
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(224,185,120,0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="btn-gradient px-4 py-2 rounded-md font-medium"
          >
            Presale Live
          </motion.div>
        </Link>
      </div>
      
      <div className="flex items-center gap-4">
        {connected ? (
          <WalletStatus />
        ) : (
          <Dialog open={isWalletDialogOpen} onOpenChange={setIsWalletDialogOpen}>
            <DialogTrigger asChild>
              <AnimatedButton 
                className="bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-medium border-none"
                glowColor="rgba(224,185,120,0.5)"
              >
                Connect Wallet
              </AnimatedButton>
            </DialogTrigger>
            <WalletConnector 
              isOpen={isWalletDialogOpen} 
              onClose={() => setIsWalletDialogOpen(false)} 
            />
          </Dialog>
        )}
        
        <button onClick={toggleMenu} className="lg:hidden text-white hover:text-[#E0B978] transition-colors">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#121212] border-t border-[#E0B978]/20 shadow-lg py-4 px-4 flex flex-col space-y-3 text-white"
          >
            {pathname === "/" ? (
              <a href="#" className="text-white hover:text-[#E0B978] transition-colors glow-effect" onClick={() => setIsMenuOpen(false)}>Home</a>
            ) : (
              <Link href="/" className="text-white hover:text-[#E0B978] transition-colors glow-effect" onClick={() => setIsMenuOpen(false)}>Home</Link>
            )}
            {getNavLink("about", "About", () => setIsMenuOpen(false))}
            {getNavLink("tokenomics", "Tokenomics", () => setIsMenuOpen(false))}
            {getNavLink("roadmap", "Roadmap", () => setIsMenuOpen(false))}
            {getNavLink("community", "Community", () => setIsMenuOpen(false))}
            <Link 
              href="/presale" 
              className="text-[#E0B978] font-medium hover:text-white transition-colors glow-effect"
              onClick={() => setIsMenuOpen(false)}
            >
              Presale Live
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 