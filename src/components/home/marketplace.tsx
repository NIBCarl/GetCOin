"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Marketplace() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Trade and earn on our marketplace
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-normal max-w-[728px]"
          >
            All-in-One App
          </motion.p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-9 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border-none shadow-none bg-transparent max-w-[310px]"
          >
            <p className="text-lg font-normal text-start">
              Not only can you create your own digital character, but you&apos;ll also be able to trade them 
              directly on our platform. The value of each one will be determined by its level. 
              The more unique features it boasts, the higher its potential to rise in value.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full md:max-w-[736px] md:h-[568px]"
          >
            <Image
              src="/dapp-1-2.png"
              alt="GEN Coin Marketplace"
              width={469}
              height={421}
              className="md:absolute md:top-[147px] max-md:rounded-xl top-0 left-0 md:w-[469px] md:h-[421px] object-cover"
            />
            <Image
              src="/dapp-2.png"
              alt="GEN Coin Marketplace"
              width={469}
              height={421}
              className="absolute top-0 left-[267px] md:w-[469px] md:h-[421px] object-cover max-md:hidden"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 