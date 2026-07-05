"use client";

import { useState } from "react";
import { remember, recall } from "@/lib/api";
import Link from "next/link";
import UploadFile from "@/components/UploadFile";
import FileList from "@/components/FileList";
import { chatHistory } from "@/lib/chatMemory";
import { useEffect } from "react";
import { getUploadedFiles } from "@/lib/files";

export default function Dashboard() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; text: string }[]
  >([
    {
      role: "assistant",
      text: "👋 Welcome to Memora AI. Ask me anything or tell me something to remember.",
    },
  ]);

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
  async function loadFiles() {
    try {
      const files = await getUploadedFiles();

      console.log("FILES:", files);
      
      if (Array.isArray(files)) {
      setUploadedFiles(
        files.map((f: any) => f.filename)
      );
    } else{
        console.error("Not an array:", files);
    }
    } catch (err) {
      console.error(err);
    }
  }

  loadFiles();
}, []);

  const sendMessage = async (message?: string) => {
    const userMessage = message ?? input;

    if (!userMessage.trim()) return;

    setLoading(true);

    // Show user message
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    // Save conversation history
    chatHistory.push({
      role: "user",
      content: userMessage,
    });

    setInput("");

    try {
      if (userMessage.toLowerCase().startsWith("remember")) {
        const response = await remember(userMessage);

        console.log("Remember Response:", response);

        const answer = "✅ Memory stored successfully.";

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: answer,
          },
        ]);

        chatHistory.push({
          role: "assistant",
          content: answer,
        });
        setLoading(false);
      } else {
        const response = await recall(userMessage, chatHistory);

        console.log("Recall Response:", response);

        let answer = "I couldn't find anything.";

        if (typeof response.result === "string") {
          answer = response.result;
        } else if (
          Array.isArray(response.result) &&
          response.result.length > 0
        ) {
          answer = response.result[0].text;
        }

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: answer,
          },
        ]);

        chatHistory.push({
          role: "assistant",
          content: answer,
        });
        setLoading(false);
      }
    } catch (err) {
      console.error(err);

      const errorMessage = "❌ Something went wrong.";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: errorMessage,
        },
      ]);

      chatHistory.push({
        role: "assistant",
        content: errorMessage,
      });
      setLoading(false);
    }

    console.log(chatHistory);
  };

  return (
    <main className="min-h-screen bg-[#070B14] text-white flex">

      {/* Sidebar */}

      <aside className="w-72 border-r border-white/10 p-6">

        <h1 className="text-2xl font-bold text-cyan-400">
          Memora AI
        </h1>

        <div className="mt-10 space-y-4">

          <button className="w-full rounded-lg bg-cyan-500 p-3">
            + New Memory
          </button>

          <Link href="/graph">
            <button className="w-full rounded-lg border border-white/10 p-3">
              Knowledge Graph
            </button>
          </Link>

          <UploadFile
            onUploadSuccess={(filename) => {
                console.log("Uploaded:", filename);

                setUploadedFiles((prev) => {
                    console.log("Previous:", prev);

                    return [...prev, filename];
                  });
                }}
            />

          <FileList
            files={uploadedFiles}
            onSelectFile={(prompt) => {
                sendMessage(prompt);
            }}
            />

          <button className="w-full rounded-lg border border-white/10 p-3">
            Settings
          </button>

        </div>

      </aside>

      {/* Chat */}

      <section className="flex-1 flex flex-col">

        <div className="border-b border-white/10 p-6">
          <h2 className="text-2xl font-bold">
            AI Memory Assistant
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-8">

          <div className="space-y-4">

            <div className="space-y-4">

            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={`max-w-xl rounded-xl p-4 ${
                        msg.role === "assistant"
                            ? "bg-cyan-500/20"
                            : "bg-white/10 ml-auto"
                }`}
            >
                {msg.text}
            </div>
            ))}

            {loading && (
                <div className="max-w-xl rounded-xl bg-cyan-500/20 p-4 animate-pulse">
                    🤖 Thinking...
                </div>
                )}
        </div>

        </div>
        </div>

        <div className="border-t border-white/10 p-5">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Ask anything..."
            className="w-full rounded-xl bg-[#111827] p-4 outline-none"
          />

        </div>

      </section>

    </main>
  );
}