import React from "react";
import { UserImage } from "../../Images";
import Image from "next/image";
import Leaderboard from "./leaderboard";
import { useSession } from "next-auth/react"
import { useXP } from "@/contexts/XPcontext";
import { useRouter } from "next/navigation";
const Body: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { XP } = useXP();
  return (
    <>
      <main className="px-5 b md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column (Profile + Leaderboard) */}
          <div className="lg:col-span-1 flex flex-col gap-12">
            {/* Profile Card */}
            <div className="card p-8 flex flex-col items-center text-center">
              <div className="relative bg-white rounded-full p-2 mb-5">
                <UserImage/>
              </div>
              <h2 className="text-xl text-purple mt-2">{session?.user?.email}</h2>
              <p className="text-base mt-2 text-[var(--text-secondary)] mb-6">
                {XP} / 2000 XP
              </p>
              <div className="w-full xp-progress mb-6">
                <div className="h-3 xp-progress-bar" style={{ width: "60%" }} />
              </div>
              <button onClick={()=>router.push('#leaderboard')}
              className="w-full cursor-pointer rounded-xl h-12 bg-white/5 text-[var(--text-secondary)]
              hover:bg-white/10 hover:text-white text-base font-semibold transition-colors">
                View Leaderboard
              </button>
            </div>

            {/* leaderboard */}
            <Leaderboard/>
          </div>

          {/* Right Column (Quests, Challenges, News) */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* Continue Your Quest */}
            <div className="card p-10">
              <h2 className="text-3xl text-white mb-6">Continue Your Quest</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <Image
                  alt="Quest Image"
                  width={100} height={100}
                  className="w-full md:w-1/3 h-auto object-cover rounded-2xl border border-white/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWRmrLBEBZDNHEGFdLuPl962s5HGrs5tHwj2AyeseBQo9Dv0pAdXGq3xY1YGEHuwjlwDRCvKOMvq5fVI1lDEuPfvwlhbmZpYbqLzkTgQWBG6jr9ZzJnwXQLXQE8_PmO87U77iUFrBEO3q_H9jprBvArhhlWoxMBy8f-RI1YZCRWoPpdLE59jlZb3WumdNTKpl7LOJ2WicwW1h7Hhzz2L88HVX-dpQLdOxwoSpLFt5MfLITausFWmNW3o5qlj9s4b0yVOE1fVTZ_zQ"
                />
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl text-white">
                    Challenge: Broken Bridge Game
                  </h3>
                  <p className="text-[var(--text-primary)] mt-4 flex-grow leading-relaxed">
                    Continue your journey in mastering your basic concepts. This
                    challenge focuses on conditionals, loops and functions.
                  </p>
                  <button onClick={()=>router.push('quests')}
                  className="mt-8 self-start flex bg-white/20 hover:bg-white/10 cursor-pointer items-center justify-center rounded-xl h-14 px-10 text-white text-base font-bold elegant-button">
                    Continue Quest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Body;
