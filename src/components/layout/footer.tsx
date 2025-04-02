"use client";

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12 border-t border-[#E0B978]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/">
              <Image
                src="/Logo Text.png"
                alt="GEN Coin"
                width={150}
                height={50}
                className="h-10 w-auto"
                priority={false}
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs text-center md:text-left">
              A Solana-based meme coin with a purpose: to fund community projects and build community value.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-[#E0B978] font-bold text-lg mb-2">Navigation</h3>
              <Link href="/#about" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">About</Link>
              <Link href="/#tokenomics" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">Tokenomics</Link>
              <Link href="/#roadmap" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">Roadmap</Link>
              <Link href="/#community" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">Community</Link>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-[#E0B978] font-bold text-lg mb-2">Resources</h3>
              <Link href="/presale" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">Presale</Link>
              <a href="https://solana.com/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">Solana</a>
              <Link href="/dashboard" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">Dashboard</Link>
              <Link href="/council" className="text-gray-300 hover:text-[#E0B978] transition-colors glow-effect">GEN Council</Link>
            </div>
            
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
              <h3 className="text-[#E0B978] font-bold text-lg mb-2">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href="https://x.com/GENCoinOfficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#E0B978] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.898a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
                <a 
                  href="https://discord.gg/GENCoin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#E0B978] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
                  </svg>
                </a>
                <a 
                  href="https://www.reddit.com/r/GenCoin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#E0B978] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"></path>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Join our community channels for the latest updates and discussions.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#E0B978]/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} GEN Coin. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-[#E0B978] transition-colors glow-effect">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-[#E0B978] transition-colors glow-effect">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 