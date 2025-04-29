"use client";

import { useState, useEffect } from "react";

interface PriceData {
  solUsd: number;
  lastUpdated: number;
}

export function useCryptoPrice() {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch the latest SOL price from CoinGecko
  const fetchSolPrice = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true",
        { cache: "no-store" }
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch crypto prices");
      }
      
      const data = await response.json();
      
      setPriceData({
        solUsd: data.solana?.usd || 0,
        lastUpdated: Date.now()
      });
    } catch (err) {
      console.error("Error fetching SOL price:", err);
      setError("Failed to fetch SOL price");
    } finally {
      setIsLoading(false);
    }
  };

  // Convert a SOL amount to USD
  const solToUsd = (solAmount: number): number => {
    if (!priceData?.solUsd) return 0;
    return solAmount * priceData.solUsd;
  };

  // Convert a USD amount to SOL
  const usdToSol = (usdAmount: number): number => {
    if (!priceData?.solUsd || priceData.solUsd === 0) return 0;
    return usdAmount / priceData.solUsd;
  };

  // Calculate how much GEN can be purchased with a given SOL amount
  const calculateGenAmount = (solAmount: number, genPriceUsd: number): number => {
    if (!priceData?.solUsd || genPriceUsd === 0) return 0;
    const usdAmount = solAmount * priceData.solUsd;
    return usdAmount / genPriceUsd;
  };

  // Initial fetch and refresh every 60 seconds
  useEffect(() => {
    fetchSolPrice();
    
    const intervalId = setInterval(() => {
      fetchSolPrice();
    }, 60000); // Refresh every minute
    
    return () => clearInterval(intervalId);
  }, []);

  return {
    solUsdPrice: priceData?.solUsd || 0,
    lastUpdated: priceData?.lastUpdated,
    isLoading,
    error,
    solToUsd,
    usdToSol,
    calculateGenAmount,
    refreshPrice: fetchSolPrice
  };
}

export default useCryptoPrice; 