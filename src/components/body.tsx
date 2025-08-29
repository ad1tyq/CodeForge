import React from "react";
import { UserImage } from "../../Images";
const Body: React.FC = () => {
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
              <h2 className="text-3xl text-purple mt-2">Aayush nikam</h2>
              <p className="text-base text-[var(--text-secondary)] mb-6">
                1200 / 2000 XP
              </p>
              <div className="w-full xp-progress mb-6">
                <div className="h-3 xp-progress-bar" style={{ width: "60%" }} />
              </div>
              <button className="w-full rounded-xl h-12 bg-white/5 text-[var(--text-secondary)] hover:bg-white/10 hover:text-white text-base font-semibold transition-colors">
                View Full Profile
              </button>
            </div>

            {/* Leaderboard */}
            <div className="card p-8">
              <h2 className="text-2xl text-white mb-6">Leaderboard</h2>
              <table className="w-full text-left leaderboard-table">
                <thead>
                  <tr>
                    <th className="p-3">Rank</th>
                    <th className="p-3">User</th>
                    <th className="p-3 text-right">XP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3 font-bold text-[var(--accent-amethyst)]">
                      1
                    </td>
                    <td className="p-3 text-white">CyberNinja</td>
                    <td className="p-3 text-right text-[var(--text-secondary)]">
                      5000
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-bold text-[var(--accent-amethyst)]">
                      2
                    </td>
                    <td className="p-3 text-white">SyntaxSorcerer</td>
                    <td className="p-3 text-right text-[var(--text-secondary)]">
                      4800
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3 font-bold text-[var(--accent-amethyst)]">
                      3
                    </td>
                    <td className="p-3 text-white">GlitchWitch</td>
                    <td className="p-3 text-right text-[var(--text-secondary)]">
                      4500
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td
                      className="p-3 text-center text-[var(--text-secondary)]"
                      colSpan={3}
                    >
                      ...
                    </td>
                  </tr>
                  <tr className="border-t current-user">
                    <td className="p-3 font-bold">15</td>
                    <td className="p-3 text-white">Alex</td>
                    <td className="p-3 text-right text-[var(--text-secondary)]">
                      3200
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column (Quests, Challenges, News) */}
          <div className="lg:col-span-2 flex flex-col gap-12">
            {/* Continue Your Quest */}
            <div className="card p-10">
              <h2 className="text-3xl text-white mb-6">Continue Your Quest</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <img
                  alt="Quest Image"
                  className="w-full md:w-1/3 h-auto object-cover rounded-2xl border border-white/10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWRmrLBEBZDNHEGFdLuPl962s5HGrs5tHwj2AyeseBQo9Dv0pAdXGq3xY1YGEHuwjlwDRCvKOMvq5fVI1lDEuPfvwlhbmZpYbqLzkTgQWBG6jr9ZzJnwXQLXQE8_PmO87U77iUFrBEO3q_H9jprBvArhhlWoxMBy8f-RI1YZCRWoPpdLE59jlZb3WumdNTKpl7LOJ2WicwW1h7Hhzz2L88HVX-dpQLdOxwoSpLFt5MfLITausFWmNW3o5qlj9s4b0yVOE1fVTZ_zQ"
                />
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl text-white">
                    Challenge: Data Structures
                  </h3>
                  <p className="text-[var(--text-secondary)] mt-2 text-sm">
                    <span className="font-semibold text-[var(--accent-amethyst)]">
                      Difficulty:
                    </span>{" "}
                    Intermediate
                  </p>
                  <p className="text-[var(--text-primary)] mt-4 flex-grow leading-relaxed">
                    Continue your journey in mastering data structures. This
                    challenge focuses on linked lists and hash maps.
                  </p>
                  <button className="mt-8 self-start flex items-center justify-center rounded-xl h-14 px-10 text-white text-base font-bold elegant-button">
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
