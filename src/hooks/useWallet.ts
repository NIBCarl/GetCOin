"use client";

import { useWallet as useSolanaWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useEffect, useCallback } from "react";

export const useWallet = () => {
  const { connection } = useConnection();
  const {
    wallet,
    publicKey,
    connected,
    connecting,
    disconnect,
    select,
    connect,
    sendTransaction,
  } = useSolanaWallet();

  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Format a wallet address for display
  const formatWalletAddress = (address: string | undefined): string => {
    if (!address) return "";
    return `${address.substring(0, 4)}...${address.substring(
      address.length - 4
    )}`;
  };

  // Get the user's SOL balance
  const getBalance = useCallback(async () => {
    if (!publicKey || !connection) return;

    try {
      setLoading(true);
      const balance = await connection.getBalance(publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
      setError(null);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setError("Failed to fetch balance");
    } finally {
      setLoading(false);
    }
  }, [publicKey, connection]);

  // Initialize and refresh balance when connection state changes
  useEffect(() => {
    if (connected && publicKey) {
      getBalance();
    } else {
      setBalance(null);
    }
  }, [connected, publicKey, getBalance]);

  // Handle connection errors
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return {
    wallet,
    publicKey,
    connected,
    connecting,
    disconnect,
    select,
    connect,
    sendTransaction,
    balance,
    loading,
    error,
    getBalance,
    formatWalletAddress,
    walletAddress: publicKey ? publicKey.toString() : undefined,
    displayAddress: publicKey ? formatWalletAddress(publicKey.toString()) : undefined,
  };
};

export default useWallet; 