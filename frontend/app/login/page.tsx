"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#070B14]">
      <div className="w-[400px] rounded-xl bg-[#111827] p-8">
        <h1 className="mb-6 text-3xl font-bold text-white">
          Login
        </h1>

        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-lg border border-gray-600 bg-[#1F2937] p-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-500"
        />

        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 w-full rounded-lg border border-gray-600 bg-[#1F2937] p-3 text-white placeholder:text-gray-400 outline-none focus:border-cyan-500"
        />

        <button
          onClick={login}
          className="w-full rounded-lg bg-cyan-500 p-3 font-semibold text-white hover:bg-cyan-400"
        >
          Login
        </button>
      </div>
    </main>
  );
}