"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import useWallet from "@/hooks/useWallet";
import { motion, AnimatePresence } from "framer-motion";

interface WalletConnectorProps {
  onClose?: () => void;
  isOpen: boolean;
}

export function WalletConnector({ onClose, isOpen }: WalletConnectorProps) {
  const { connected, connecting, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  const [showMoreWallets, setShowMoreWallets] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  
  const handleDialogChange = (open: boolean) => {
    if (!open && onClose) {
      onClose();
    }
  };

  const handleOpenWalletModal = () => {
    try {
      setConnectionError(null);
      setVisible(true);
      if (onClose) {
        onClose();
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
      setConnectionError("Failed to initialize wallet connection. Please try again or refresh the page.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogContent 
        className="bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-[#E0B978]/20 text-white sm:max-w-md max-w-[90vw] p-4 sm:p-6"
        aria-describedby="wallet-connection-description"
      >
        <DialogHeader className="pb-2">
          <DialogTitle className="text-2xl font-bold text-[#E0B978]">Connect Wallet</DialogTitle>
          <DialogDescription id="wallet-connection-description" className="text-gray-400">
            Connect your Solana wallet to participate in the presale.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-2">
          {connectionError && (
            <div className="bg-red-900/20 border border-red-500/30 text-red-200 p-3 rounded-md text-sm">
              <p className="font-medium mb-1">Connection Error</p>
              <p>{connectionError}</p>
              <p className="mt-2 text-xs">Try refreshing the page or check if your wallet extension is properly installed.</p>
            </div>
          )}

          {connecting ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-12 h-12 border-4 border-t-[#E0B978] border-[#1E1E1E] rounded-full animate-spin mb-4"></div>
              <p>Connecting to wallet...</p>
            </div>
          ) : connected && publicKey ? (
            <div className="bg-[#1A1A1A] p-4 rounded-lg border border-[#E0B978]/20">
              <p className="text-sm text-gray-400 mb-2">Connected Wallet</p>
              <p className="font-mono text-[#E0B978] break-all">
                {publicKey.toString().slice(0, 8)}...{publicKey.toString().slice(-8)}
              </p>
              <div className="mt-4 flex justify-end">
                <Button
                  variant="outline"
                  className="bg-[#1E1E1E] text-[#E0B978] border-[#E0B978]/30 hover:bg-[#1A1A1A]"
                  onClick={() => onClose && onClose()}
                >
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-[#1A1A1A]/50 p-3 rounded-md border-[0.5px] border-[#E0B978]/5 shadow-md">
                <h3 className="text-xs font-medium text-gray-300 mb-2 text-center">Supported Wallets</h3>
                
                <div className="flex flex-col space-y-2 max-w-full mx-auto">
                  {/* Primary wallets always visible */}
                  <div className="flex flex-col space-y-1">
                    <WalletIcon name="Phantom" imageSrc="/phantom-icon.svg" />
                    <WalletIcon name="Solflare" imageSrc="/solflare-icon.svg" />
                  </div>
                  
                  {/* Secondary wallets visible when toggled */}
                  <AnimatePresence>
                    {showMoreWallets && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col space-y-1 pt-1 border-t-[0.5px] border-[#E0B978]/5"
                      >
                        <WalletIcon name="Ledger" imageSrc="/ledger-icon.svg" />
                        <WalletIcon name="Torus" imageSrc="/torus-icon.svg" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Toggle button */}
                  <button 
                    onClick={() => setShowMoreWallets(!showMoreWallets)}
                    className="text-xs text-[#E0B978] hover:text-[#E0B978]/80 transition-colors mx-auto py-1 px-2 -mt-1"
                  >
                    {showMoreWallets ? "Show Less" : "Show More"}
                  </button>
                </div>
              </div>
              
              <Button
                className="w-full py-4 sm:py-6 bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] transition-all"
                onClick={handleOpenWalletModal}
              >
                Connect Wallet
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface WalletIconProps {
  name: string;
  imageSrc: string;
}

function WalletIcon({ name, imageSrc }: WalletIconProps) {
  return (
    <div className="flex items-center justify-between px-2 py-2 rounded-md hover:bg-[#242424] hover:border-[#E0B978]/40 hover:shadow-sm border-[0.5px] border-transparent transition-all cursor-pointer">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center border-[0.5px] border-[#E0B978]/10">
          <Image 
            src={imageSrc} 
            alt={name} 
            width={16} 
            height={16} 
            className="w-4 h-4"
          />
        </div>
        <span className="text-xs font-medium">{name}</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E0B978]">
        <path d="M9 18l6-6-6-6"></path>
      </svg>
    </div>
  );
} 