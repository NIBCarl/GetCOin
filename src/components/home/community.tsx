"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Community() {
  const socialLinks = [
    {
      name: "X",
      url: "https://x.com/GENCoinOfficial",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      description: "Follow for project updates and announcements"
    },
    {
      name: "Discord",
      url: "https://discord.gg/GENCoin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.385-.39.779-.53 1.162-1.614-.246-3.217-.246-4.81 0-.14-.389-.32-.779-.54-1.162a.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.49a.07.07 0 0 0-.032.028C.533 9.094-.32 13.555.099 17.961a.08.08 0 0 0 .031.055c1.992 1.457 3.922 2.344 5.83 2.933a.078.078 0 0 0 .084-.026 18.38 18.38 0 0 0 1.226-1.982.074.074 0 0 0-.041-.104 15.15 15.15 0 0 1-2.156-1.023.075.075 0 0 1-.008-.125c.145-.109.29-.218.43-.33a.075.075 0 0 1 .079-.01c3.986 1.815 8.298 1.815 12.241 0a.075.075 0 0 1 .08.01c.14.112.285.221.43.33a.075.075 0 0 1-.006.125c-.687.398-1.409.747-2.157 1.023a.074.074 0 0 0-.04.106c.36.687.772 1.341 1.225 1.98a.077.077 0 0 0 .084.028c1.92-.589 3.85-1.476 5.844-2.933a.078.078 0 0 0 .032-.055c.5-5.177-.839-9.598-3.549-13.441a.062.062 0 0 0-.031-.03zM8.02 15.278c-1.151 0-2.102-1.052-2.102-2.35 0-1.3.929-2.352 2.102-2.352 1.183 0 2.123 1.063 2.102 2.352 0 1.298-.929 2.35-2.102 2.35zm7.772 0c-1.151 0-2.102-1.052-2.102-2.35 0-1.3.929-2.352 2.102-2.352 1.184 0 2.124 1.063 2.102 2.352 0 1.298-.918 2.35-2.102 2.35z" />
        </svg>
      ),
      description: "Join our Discord server for community discussions"
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/r/GENCoin",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"></path>
        </svg>
      ),
      description: "Join our Reddit community for discussions and updates"
    }
  ];

  const SocialCard = ({ name, url, icon, description }: { name: string, url: string, icon: React.ReactNode, description: string }) => (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#121212] p-6 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(224,185,120,0.3)] transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#E0B978] to-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_rgba(224,185,120,0.3)]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#E0B978] mb-2">{name}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.a>
  );

  return (
    <section id="community" className="relative bg-[#121212] text-white py-24 overflow-hidden w-full">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0B978] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffdebb] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="w-full px-4 relative z-10 max-w-[2000px] mx-auto">
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
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffdebb] to-[#E0B978] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Connect with the GEN Coin community and stay updated on all project developments
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {socialLinks.map((link, index) => (
            <SocialCard
              key={index}
              name={link.name}
              url={link.url}
              icon={link.icon}
              description={link.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-[#1A1A1A] p-8 rounded-xl border border-[#E0B978]/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)] max-w-7xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#E0B978] mb-4">Apply to Join the GEN Council</h3>
              <p className="text-gray-300 mb-6">
                Do you have relevant experience in finance, crypto, community management, or charitable initiatives? Apply to become a GEN Council member and help shape the future of our project.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E0B978] flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-300">Help decide which community projects receive funding</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E0B978] flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-300">Vote on important governance decisions</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#E0B978] flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <p className="text-gray-300">Shape the future direction of GEN Coin</p>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-[#ffdebb] to-[#dbb78e] hover:from-[#ffdebb] hover:to-[#dbb78e] text-black font-bold py-6 px-8 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(255,222,187,0.5)]">
                Apply Now
              </Button>
            </div>
            <div className="bg-[#121212] p-6 rounded-xl border border-[#E0B978]/20">
              <h4 className="text-lg font-bold text-white mb-4">Council Member Requirements</h4>
              <ul className="space-y-3">
                <li className="pl-4 border-l-2 border-[#E0B978]">
                  <span className="text-[#E0B978]">Expertise</span>: Background in finance, crypto, community management, or charity
                </li>
                <li className="pl-4 border-l-2 border-[#E0B978]">
                  <span className="text-[#E0B978]">Commitment</span>: Minimum 5-10 hours weekly for council duties
                </li>
                <li className="pl-4 border-l-2 border-[#E0B978]">
                  <span className="text-[#E0B978]">Holding</span>: Minimum GEN token holding requirement
                </li>
                <li className="pl-4 border-l-2 border-[#E0B978]">
                  <span className="text-[#E0B978]">Transparency</span>: Willingness to share professional background
                </li>
                <li className="pl-4 border-l-2 border-[#E0B978]">
                  <span className="text-[#E0B978]">Values</span>: Alignment with GEN Coin&apos;s community-first philosophy
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 