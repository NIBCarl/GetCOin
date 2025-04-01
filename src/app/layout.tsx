import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PresaleBanner } from "@/components/presale-banner";
import WalletContextProvider from "@/context/WalletContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GEN Coin - Building Community Value",
  description: "GEN Coin is a Solana-based meme coin with a social mission - funding community projects with meme coin virality.",
  keywords: "GEN Coin, crypto, meme coin, Solana, community projects, blockchain",
  authors: [{ name: "GEN Coin Team" }],
  creator: "GEN Coin",
  publisher: "GEN Coin",
  icons: {
    icon: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.className} overflow-x-hidden w-full m-0 p-0`}>
        <WalletContextProvider>
          <Header />
          <div className="pt-[70px] w-full"> {/* Add padding top to account for fixed header */}
            {children}
          </div>
          <Footer />
          <PresaleBanner />
        </WalletContextProvider>
      </body>
    </html>
  );
}
