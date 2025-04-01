import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";
import { Tokenomics } from "@/components/home/tokenomics";
import { Roadmap } from "@/components/home/roadmap";
import { About } from "@/components/home/about";
import { Community } from "@/components/home/community";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Community />
    </main>
  );
}
