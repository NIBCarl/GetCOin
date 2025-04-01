"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function UseCases() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center md:flex-row flex-col justify-center gap-3.5 mb-12 relative z-[2]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/Logo.png"
              alt="GEN Coin"
              width={134}
              height={40}
              className="relative h-10 w-auto"
            />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative font-normal text-black text-3xl md:text-5xl"
          >
            avatars can be used in
          </motion.h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2.5 relative w-full z-[1]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-auto"
          >
            <Image
              src="/babygirl-1.png"
              alt="Digital avatar"
              width={645}
              height={757}
              className="relative w-full md:w-[645px] h-auto md:h-[757px] object-cover"
            />
          </motion.div>
          
          <div className="flex flex-col items-start gap-3 md:absolute md:top-[235px] md:right-[150px] w-full md:w-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-[330px]"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="virtual-assistant" className="bg-white rounded-xl border border-solid border-black mb-3 overflow-hidden">
                  <AccordionTrigger className="px-6 py-3 font-normal text-black text-2xl">
                    Virtual Assistant
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Digital avatars can serve as personal assistants, helping with scheduling, reminders, and everyday tasks with a human-like interface.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="content-creator" className="bg-white rounded-xl border border-solid border-black mb-3 overflow-hidden">
                  <AccordionTrigger className="px-6 py-3 font-normal text-black text-2xl">
                    Content Creator
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    These digital humans can create videos, podcasts, and other content automatically while maintaining a consistent brand presence.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="education" className="bg-white rounded-xl border border-solid border-black mb-3 overflow-hidden">
                  <AccordionTrigger className="px-6 py-3 font-normal text-black text-2xl">
                    Education
                  </AccordionTrigger>
                  <AccordionContent className="px-6">
                    Digital avatars can serve as personalized tutors, providing interactive learning experiences tailored to individual students.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex md:flex-row flex-col items-end justify-center gap-4 md:gap-8 mt-12 relative z-0"
        >
          <div className="border inline-flex max-md:w-full items-center gap-4 px-6 py-2 bg-[#9f74ff] rounded-lg border-none">
            <div className="font-medium text-white md:text-2xl text-xl">Current price</div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white md:text-2xl text-xl">0.0010</span>
              <span className="font-bold text-white md:text-2xl text-xl">USDT</span>
              <div className="flex items-center justify-center gap-2.5 px-2 py-1 bg-[#0000004c] rounded-lg">
                <span className="font-bold text-white md:text-2xl text-xl">- 45%</span>
              </div>
            </div>
          </div>
          
          <div className="border inline-flex max-md:w-full h-14 items-center gap-4 px-6 py-2 bg-[#9f74ff] rounded-lg border-none">
            <div className="font-medium text-white md:text-2xl text-xl">Next price round</div>
            <div className="flex items-center gap-1">
              <span className="font-bold text-white md:text-2xl text-xl">24</span>
              <span className="font-bold text-white md:text-2xl text-xl">:</span>
              <span className="font-bold text-white md:text-2xl text-xl">24</span>
              <span className="font-bold text-white md:text-2xl text-xl">:</span>
              <span className="font-bold text-white md:text-2xl text-xl">14</span>
            </div>
          </div>
          
          <Button className="h-14 px-6 py-2 bg-[#9f74ff] hover:bg-[#8a63e0] rounded-lg font-medium text-white md:text-2xl text-xl max-md:w-full">
            Buy Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 