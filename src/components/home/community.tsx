"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CommunityLinkProps {
  href: string;
  icon: React.ReactNode;
  name: string;
  members: string;
  color: string;
  index: number;
}

function CommunityLink({ href, icon, name, members, color, index }: CommunityLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <Link 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group"
      >
        <div className={`bg-[#121212] p-6 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_${color}80] transition-all duration-300 hover:-translate-y-1`}>
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${name === "X" ? "bg-gradient-to-br from-gray-900 to-black" : `bg-gradient-to-br from-${color} to-[#1A1A1A]`}`}>
              {name === "X" ? 
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg> 
                : icon
              }
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
              <p className="text-gray-400">{members}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Community() {
  const communities = [
    {
      href: "https://x.com/GENCoinOfficial",
      icon: null,
      name: "X",
      members: "10.5K Followers",
      color: "#1D1D1D"
    },
    {
      href: "https://discord.gg/GENCoin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
        </svg>
      ),
      name: "Discord",
      members: "8.2K Members",
      color: "#5865F2"
    },
    {
      href: "https://www.reddit.com/r/GenCoin/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"></path>
        </svg>
      ),
      name: "Reddit",
      members: "15.8K Community",
      color: "#FF4500"
    },
    {
      href: "https://t.me/GENCoinOfficial",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"></path>
        </svg>
      ),
      name: "Telegram",
      members: "12.3K Members",
      color: "#0088cc"
    }
  ];

  return (
    <section id="community" className="relative bg-[#1A1A1A] text-white py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#E0B978] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8B5CF6] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
            <span className="bg-gradient-to-r from-[#E0B978] to-[#D4AF37] bg-clip-text text-transparent">Join Our Community</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#E0B978] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Connect with like-minded individuals who share a passion for innovative crypto projects with real-world impact
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <CommunityLink
              key={index}
              href={community.href}
              icon={community.icon}
              name={community.name}
              members={community.members}
              color={community.color}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-[#121212] p-8 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
            <h3 className="text-2xl font-bold text-[#E0B978] mb-4">Become a GEN Council Member</h3>
            <p className="text-gray-300 mb-6">
              Are you passionate about community-driven projects and want to help shape the future of GEN Coin? Apply to become a member of our governing council.
            </p>
            <Button className="bg-gradient-to-r from-[#8B5CF6] to-[#4C1D95] hover:from-[#7C3AED] hover:to-[#5B21B6] text-white font-bold py-6 px-8 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <Link href="/council-application">Apply Now</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 