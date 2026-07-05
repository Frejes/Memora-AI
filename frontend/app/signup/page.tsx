"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("Data:", data);
    console.log("Error:", error);
    
    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully!");
    router.push("/login");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#070B14]">
      <div className="w-[420px] rounded-xl bg-[#111827] p-8">

        <h1 className="mb-6 text-3xl font-bold text-white">
          Create Account
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
          onClick={signup}
          className="w-full rounded-lg bg-cyan-500 p-3 font-semibold text-white hover:bg-cyan-400"

        >
          Create Account
        </button>

        <p className="mt-6 text-center text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-400">
            Login
          </Link>
        </p>

      </div>
    </main>
  );
}