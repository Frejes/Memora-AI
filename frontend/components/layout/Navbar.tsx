"use client";

import Link from "next/link";
import { Brain } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Brain className="w-7 h-7 text-cyan-400" />
          <span className="font-bold text-xl">Memora AI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#how" className="hover:text-white transition">
            How it Works
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <button className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-medium">
          Get Started
        </button>
      </div>
    </header>
  );
}