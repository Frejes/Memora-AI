import Stats from "@/components/sections/Stats";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  );
}