import { Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 py-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Brain className="text-cyan-400" />
          <span className="font-bold">
            Memora AI
          </span>
        </div>

        <p className="text-gray-500">
          © 2026 Memora AI. Built for the Cognee Hackathon.
        </p>
      </div>
    </footer>
  );
}