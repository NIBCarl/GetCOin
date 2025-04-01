"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import useWallet from "@/hooks/useWallet";

interface WalletConnectorProps {
  onClose?: () => void;
  isOpen: boolean;
}

export function WalletConnector({ onClose, isOpen }: WalletConnectorProps) {
  const { connected, connecting, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  
  const handleDialogChange = (open: boolean) => {
    if (!open && onClose) {
      onClose();
    }
  };

  const handleOpenWalletModal = () => {
    setVisible(true);
    if (onClose) {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogChange}>
      <DialogContent className="bg-gradient-to-b from-[#1E1E1E] to-[#121212] border-[#E0B978]/20 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#E0B978]">Connect Wallet</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-300">
              Connect your Solana wallet to participate in the presale and access exclusive features.
            </p>
          </div>

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
            <div className="space-y-6">
              <div className="bg-[#1A1A1A]/50 p-4 rounded-lg border border-[#E0B978]/10">
                <h3 className="text-sm font-medium text-gray-300 mb-3">Supported Wallets</h3>
                <div className="grid grid-cols-2 gap-3">
                  <WalletIcon name="Phantom" imageSrc="/phantom-icon.svg" />
                  <WalletIcon name="Solflare" imageSrc="/solflare-icon.svg" />
                  <WalletIcon name="Ledger" imageSrc="/ledger-icon.svg" />
                  <WalletIcon name="Torus" imageSrc="/torus-icon.svg" />
                </div>
              </div>
              
              <Button
                className="w-full py-6 bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-bold hover:shadow-[0_0_15px_rgba(224,185,120,0.5)] transition-all"
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
    <div className="flex items-center space-x-2 p-2">
      <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
        <Image 
          src={imageSrc} 
          alt={name} 
          width={16} 
          height={16} 
          className="w-4 h-4"
        />
      </div>
      <span className="text-sm">{name}</span>
    </div>
  );
} 