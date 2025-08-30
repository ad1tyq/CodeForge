"use client"
import { GameSelector } from "@/components/GameSelector";
import { useSession } from "next-auth/react";
import Link from "next/link";
export default function App() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[var(--background-dark)] text-[var(--text-primary)]">
        <div className="flex flex-col items-center">
          <div className="shadow-lg bg-gray-800 mt-10 rounded-[10px] w-[auto]
            text-[clamp(0.9rem,1.1vw,1.1rem)] h-auto py-10 px-8 gap-5 flex flex-col justify-center">
            <p><b>Session Logged Out</b></p>
          </div>
          <Link href="/"
            className="rounded cursor-pointer hover:bg-gray-400 hover:text-gray-700 px-5 py-[2px] font-semibold text-lg mt-5 text-gray-800 bg-gray-300">home
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 text-black to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <GameSelector />
        <footer className="text-center mt-12 text-muted-foreground">
          <p>Master programming fundamentals through interactive challenges! 🎮</p>
        </footer>
      </div>
    </div>
  );
}