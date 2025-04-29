"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedButton } from "@/components/shared/animated-button";
import { useRouter } from "next/navigation";
import useWallet from "@/hooks/useWallet";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { CurrencyConverter } from "@/components/shared/currency-converter";

export default function Dashboard() {
  const router = useRouter();
  const { connected, publicKey } = useWallet();
  const { setVisible } = useWalletModal();
  
  // Remove mock data - will be fetched from API in real implementation
  const [isLoading] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // GEN price in USD (this would come from your API in production)
  const genPriceUsd = 0.0025;
  
  // Function to handle Twitter sharing
  const shareOnTwitter = () => {
    const text = "Check out GEN Coin - a Solana-based meme coin with a community purpose! 🚀";
    const url = window.location.origin;
    const hashtags = "GENCoin,Solana,Crypto";
    const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags)}`;
    window.open(twitterShareUrl, '_blank', 'noopener,noreferrer');
  };
  
  // Navigate to presale page
  const navigateToPresale = () => {
    router.push("/presale");
  };
  
  // Handle sharing referral link
  const shareReferralLink = () => {
    // Use the user's actual wallet address for the referral link
    if (!connected || !publicKey) {
      setVisible(true);
      return;
    }
    
    const origin = window.location.origin;
    const referralUrl = `${origin}/presale?ref=${encodeURIComponent(publicKey.toString())}`;
    
    // Share interface if available
    if (navigator.share) {
      navigator.share({
        title: 'Join GEN Coin Presale',
        text: 'Check out GEN Coin presale! Use my referral link:',
        url: referralUrl,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback to clipboard copy
      copyReferralLinkToClipboard(referralUrl);
    }
  };
  
  // Helper to copy a specific link
  const copyReferralLinkToClipboard = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-start bg-[#121212]">
      <div className="w-full bg-gradient-to-r from-[#1E1E1E] to-[#151515] text-white py-10 px-4 border-b border-[#E0B978]/20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg mb-6 text-gray-300">Manage your GEN Coin holdings and transactions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] p-6 rounded-lg border border-[#E0B978]/20 shadow-[0_0_15px_rgba(224,185,120,0.15)]">
              <h2 className="text-xl font-medium mb-2">GEN Balance</h2>
              <p className="text-3xl font-bold">{connected ? "Loading..." : "--"}</p>
              {connected ? (
                <CurrencyConverter usdAmount={0} className="mt-1" />
              ) : (
                <p className="text-[#E0B978] mt-1">≈ $0.00 USD</p>
              )}
              <p className="text-xs text-gray-400 mt-1">(GEN price quoted in USD)</p>
            </div>
            
            <div className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] p-6 rounded-lg border border-[#E0B978]/20 shadow-[0_0_15px_rgba(224,185,120,0.15)]">
              <h2 className="text-xl font-medium mb-2">Current Price</h2>
              <p className="text-3xl font-bold">${genPriceUsd}</p>
              <p className="text-[#E0B978] mt-1">Next: ${genPriceUsd} (+0%)</p>
              <p className="text-xs text-gray-400 mt-1">(USD per GEN)</p>
            </div>
            
            <div className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] p-6 rounded-lg border border-[#E0B978]/20 shadow-[0_0_15px_rgba(224,185,120,0.15)]">
              <h2 className="text-xl font-medium mb-2">Presale Ends In</h2>
              <p className="text-3xl font-bold">{connected ? "Loading..." : "--:--:--"}</p>
              <p className="text-[#E0B978] mt-1">Get more GEN before price increase!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-8 px-4">
        <Tabs defaultValue="myholdings" className="w-full">
          <TabsList className="mb-6 bg-[#1A1A1A] border border-[#E0B978]/20">
            <TabsTrigger value="myholdings" className="data-[state=active]:bg-[#E0B978]/10 data-[state=active]:text-[#E0B978]">My Holdings</TabsTrigger>
            <TabsTrigger value="purchases" className="data-[state=active]:bg-[#E0B978]/10 data-[state=active]:text-[#E0B978]">Purchase History</TabsTrigger>
            <TabsTrigger value="referrals" className="data-[state=active]:bg-[#E0B978]/10 data-[state=active]:text-[#E0B978]">Referrals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="myholdings">
            <div className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] p-6 rounded-lg border border-[#E0B978]/20 shadow-[0_0_15px_rgba(224,185,120,0.15)] text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#E0B978]">Your GEN Coin Holdings</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3 text-[#E0B978]">Token Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-300 mb-1">Balance: <span className="font-semibold text-white">{connected ? "Loading..." : "--"}</span></p>
                    <p className="text-gray-300 mb-1">
                      USD Value: <span className="font-semibold text-white">
                        {connected ? (
                          <CurrencyConverter usdAmount={0} className="inline" />
                        ) : "$0.00"}
                      </span>
                    </p>
                    <p className="text-gray-300 mb-1">Token Contract: <span className="font-semibold text-sm text-white">{connected ? "Loading..." : "--"}</span></p>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-1">Current Price: <span className="font-semibold text-white">${genPriceUsd}</span> <span className="text-xs text-gray-400">(USD)</span></p>
                    <p className="text-gray-300 mb-1">Unlocked Tokens: <span className="font-semibold text-white">{connected ? "Loading..." : "--"}</span></p>
                    <p className="text-gray-300 mb-1">Locked Tokens: <span className="font-semibold text-white">{connected ? "Loading..." : "--"}</span></p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <AnimatedButton 
                  className="bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-medium border-none"
                  glowColor="rgba(224,185,120,0.5)"
                  onClick={navigateToPresale}
                >
                  Buy More GEN
                </AnimatedButton>
                <AnimatedButton 
                  variant="outline" 
                  className="border-[#E0B978]/30 text-[#E0B978]"
                  glowColor="rgba(224,185,120,0.3)"
                  onClick={shareReferralLink}
                >
                  Share Referral Link
                </AnimatedButton>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="purchases">
            <div className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] p-6 rounded-lg border border-[#E0B978]/20 shadow-[0_0_15px_rgba(224,185,120,0.15)] text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#E0B978]">Purchase History</h2>
              
              {isLoading ? (
                <div className="py-8 text-center text-gray-400">Loading transaction history...</div>
              ) : (
                <div className="py-8 text-center text-gray-400">
                  <p>No transactions found</p>
                  <p className="text-sm mt-2">Your purchase history will appear here after you buy GEN tokens</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="referrals">
            <div className="bg-gradient-to-b from-[#1E1E1E] to-[#151515] p-6 rounded-lg border border-[#E0B978]/20 shadow-[0_0_15px_rgba(224,185,120,0.15)] text-white">
              <h2 className="text-2xl font-bold mb-4 text-[#E0B978]">Referral Program</h2>
              
              <div className="mb-6">
                <p className="text-gray-300 mb-4">
                  Share your unique referral link with friends and earn 5% of their GEN Coin purchases!
                </p>
                
                <div className="bg-[#121212] p-4 rounded-lg mb-6 border border-[#2A2A2A]">
                  <p className="text-sm text-gray-400 mb-1">Your Referral Link</p>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={connected && publicKey 
                        ? `${window.location.origin}/presale?ref=${publicKey.toString()}`
                        : "Connect wallet to generate your referral link"
                      }
                      readOnly
                      className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-md p-2 text-sm text-white"
                    />
                    <AnimatedButton 
                      variant="outline" 
                      className="border-[#E0B978]/30 text-[#E0B978]"
                      glowColor="rgba(224,185,120,0.3)"
                      onClick={connected && publicKey ? () => copyReferralLinkToClipboard(`${window.location.origin}/presale?ref=${publicKey.toString()}`) : () => setVisible(true)}
                    >
                      {!connected ? "Connect" : copySuccess ? "Copied!" : "Copy"}
                    </AnimatedButton>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-[#E0B978]">Referral Stats</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-[#2A2A2A] bg-[#121212] rounded-md p-4 text-center">
                    <p className="text-gray-400 text-sm">Referrals</p>
                    <p className="text-2xl font-bold text-[#E0B978]">{connected ? "Loading..." : "0"}</p>
                  </div>
                  <div className="border border-[#2A2A2A] bg-[#121212] rounded-md p-4 text-center">
                    <p className="text-gray-400 text-sm">Total Volume</p>
                    <p className="text-2xl font-bold text-[#E0B978]">{connected ? "Loading..." : "$0.00"} <span className="text-xs text-gray-400">(USD)</span></p>
                  </div>
                  <div className="border border-[#2A2A2A] bg-[#121212] rounded-md p-4 text-center">
                    <p className="text-gray-400 text-sm">Total Earnings</p>
                    <p className="text-2xl font-bold text-[#E0B978]">{connected ? "Loading..." : "$0.00"} <span className="text-xs text-gray-400">(USD)</span></p>
                  </div>
                </div>
              </div>
              
              <div className="inline-block">
                <AnimatedButton 
                  className="bg-gradient-to-r from-[#E0B978] to-[#B08C5D] text-black font-medium border-none"
                  glowColor="rgba(224,185,120,0.5)"
                  onClick={shareOnTwitter}
                >
                  Share on X
                </AnimatedButton>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
} 