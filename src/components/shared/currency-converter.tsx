"use client";

import { useState, useEffect } from "react";
import useCryptoPrice from "@/hooks/useCryptoPrice";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface CurrencyConverterProps {
  solAmount?: number;
  usdAmount?: number;
  genAmount?: number;
  genPriceUsd?: number;
  showGenEquivalent?: boolean;
  className?: string;
}

export function CurrencyConverter({
  solAmount,
  usdAmount,
  genAmount,
  genPriceUsd = 0.0025, // Default GEN price in USD
  showGenEquivalent = false,
  className,
}: CurrencyConverterProps) {
  const { solUsdPrice, isLoading, solToUsd, calculateGenAmount } = useCryptoPrice();
  const [displayedSolUsd, setDisplayedSolUsd] = useState<number | null>(null);
  const [displayedGenAmount, setDisplayedGenAmount] = useState<number | null>(null);

  useEffect(() => {
    // Calculate USD value if SOL amount is provided
    if (solAmount !== undefined && solUsdPrice) {
      setDisplayedSolUsd(solToUsd(solAmount));
    } 
    // Use provided USD amount if available
    else if (usdAmount !== undefined) {
      setDisplayedSolUsd(usdAmount);
    }

    // Calculate GEN equivalent if requested
    if (showGenEquivalent && genPriceUsd > 0) {
      if (solAmount !== undefined && solUsdPrice) {
        setDisplayedGenAmount(calculateGenAmount(solAmount, genPriceUsd));
      } else if (usdAmount !== undefined) {
        setDisplayedGenAmount(usdAmount / genPriceUsd);
      } else if (genAmount !== undefined) {
        setDisplayedGenAmount(genAmount);
      }
    }
  }, [solAmount, usdAmount, genAmount, solUsdPrice, genPriceUsd, showGenEquivalent, solToUsd, calculateGenAmount]);

  if (isLoading && !displayedSolUsd) {
    return <Skeleton className="h-4 w-20" />;
  }

  return (
    <div className={cn("text-sm flex flex-col break-words", className)}>
      {displayedSolUsd !== null && (
        <span className="text-[#E0B978] break-words">
          ≈ ${displayedSolUsd.toLocaleString(undefined, { maximumFractionDigits: 2 })} USD
        </span>
      )}
      
      {showGenEquivalent && displayedGenAmount !== null && (
        <span className="text-gray-300 mt-1 break-words">
          ≈ {displayedGenAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })} GEN
          <span className="text-xs ml-1 text-gray-400">(quoted in USD)</span>
        </span>
      )}
    </div>
  );
}

export default CurrencyConverter; 