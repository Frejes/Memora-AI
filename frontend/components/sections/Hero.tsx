"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Hero() {
  const router = useRouter();

  const handleGetStarted = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    router.push("/dashboard");
  } else {
    router.push("/signup");
  }
};  
  

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2563eb20,transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-5xl"
      >

        <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
          Powered by Cognee Memory
        </span>

        <h1 className="mt-8 text-6xl md:text-8xl font-black leading-tight">
          The AI
          <br />
          Memory
          <span className="text-cyan-400"> Operating System</span>
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Build AI that remembers, recalls, improves and forgets intelligently.
          Persistent memory powered by Cognee.
        </p>

        <div className="mt-12 flex justify-center gap-4">

          <button
            onClick={handleGetStarted}
            className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-400 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="rounded-xl border border-white/20 px-8 py-4 hover:bg-white/10 transition"
          >
            Watch Demo
          </button>

        </div>

      </motion.div>
    </section>
  );
}