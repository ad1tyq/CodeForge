import React from "react";
import QuestsBody from "./questbody";
import CBody from "./combody";
import Leaderboard from "./leaderbody";
const Body: React.FC = () => {
  return (
    <>
    <main className="px-5 md:px-10 lg:px-20 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column (Profile + Leaderboard) */}
        <div className="lg:col-span-1 flex flex-col gap-12">
          {/* Profile Card */}
          <div className="card p-8 flex flex-col items-center text-center">
            <div className="relative mb-5">
              <img
                alt="User Avatar"
                className="w-36 h-36 rounded-full border-4 border-[var(--accent-emerald)] shadow-[0_0_35px_rgba(46,204,113,0.2)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3X8Thhs_iAb9A79zRIOAqGI0bVRx06GAO4iEHgcxTfwMfrP_oc3pn3Lfwqd0bYwhdFu9Mj_T9cLauK2WC8tVKqF2iN3xGVCNGyHGuBtKiInZiQq1mrwAFUGUQ4L0Cw3IDkj1g5ilvqzgWFqGkZT6nBpD5hH8Hyv2-lnuzGc2b53Kli-bC9k4sP4YxttpioTl-gLxb1Uwd8Sskf_XAF5SfkWiSO09bdAdgDt2nFWkgTqdOYPULJnnq15pwIYg6C7UUodCVpD0VbRE"
              />
              <span className="absolute -bottom-1 -right-1 bg-[var(--primary-dark)] text-[var(--accent-amethyst)] text-base font-bold px-4 py-1.5 rounded-full border-2 border-[var(--accent-amethyst)]">
                Lv. 7
              </span>
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

          {/* Daily Challenge */}
          <div className="card p-10">
            <h2 className="text-3xl text-white mb-6">Daily Challenge</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <img
                alt="Challenge Image"
                className="w-full md:w-1/3 h-auto object-cover rounded-2xl border border-white/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuAM5qqsb48ayOdXGBeRGQDN_8zt46Ssj_aRdrdZrXLiQROw3lYV1g_7TwAlzU2J4FYfxMZqJOkuXdBBQgSpOl_84NCS45NLv4OqayegtSZV8zW_MxodRwdy5jMSf4uQofPa5DU3siTfEgOpdSQ3pADadh1UUBaygcpunl45RSP_Oh1ORH996HDx_rDvRVKMU97GmQ3VDzFFnFNenKD_JUPgOKTLLxgLgQGburDPJmNJnLbLPLTMBzv7UdLtBIOgnLyAGmzmFfva8"
              />
              <div className="flex-1 flex flex-col">
                <h3 className="text-2xl text-white">
                  Challenge: Algorithm Efficiency
                </h3>
                <p className="text-[var(--text-secondary)] mt-2 text-sm">
                  <span className="font-semibold text-[var(--accent-amethyst)]">
                    Difficulty:
                  </span>{" "}
                  Advanced
                </p>
                <p className="text-[var(--text-primary)] mt-4 flex-grow leading-relaxed">
                  Test your skills optimizing for Big O notation. Can you solve
                  it in linear time?
                </p>
                <button className="mt-8 self-start flex items-center justify-center rounded-xl h-14 px-10 text-[var(--accent-emerald)] text-base font-bold bg-[rgba(46,204,113,0.1)] border border-[var(--accent-emerald)] hover:bg-[rgba(46,204,113,0.2)] transition-colors">
                  Start Challenge
                </button>
              </div>
            </div>
          </div>

          {/* News & Updates */}
          <div className="card p-10">
            <h2 className="text-3xl text-white mb-8">News & Updates</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div
                  className="w-24 h-24 rounded-2xl bg-center bg-cover border border-white/10 shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_AtO3gETh41oA7EpPgo0eAeVthb6Am8Y9jyIbbWwHa6iSTtV7vwNsvJYtbU1jAu4mUOsI4H3yvJwLkoju56KNP6_aT8pzFXKidizOw85_uiqRMICWXfJSfabPcMQgemsBArwzvlI5ZAdWg0vz2OiQh9FmvcHQZKHmsECLFC5iIl9lEj1Tnsj4fcXKRPWPBEibWV_iYBQl96xFdwkMnJulGEWUB76f3gS32tR5ypZF5scNJvq-9WdAsJ8qSpaGcB6k-rtiXyMN7yA")`,
                  }}
                />
                <div className="flex-1">
                  <p className="text-xl font-semibold text-white">
                    New Web Dev & ML Quests
                  </p>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mt-2">
                    Dive into the latest challenges and expand your skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div
                  className="w-24 h-24 rounded-2xl bg-center bg-cover border border-white/10 shrink-0"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWv3qTCxa4IKx1rm6v-9mpBEMWe8Nx4_413WSP78C4puN1DYPMGhSoKNsJAvxLluRIGfI1NZEvUc2HAt8IcAAzJ6T6AubTDyPWFGd4RHaI-X0hECNGCZtZ5hBkI8YLc-6Tz-k-JibksX5OLGQkTkVkw22lRRTN2psIGS7WIi7KAZrPxQgoKidUz8nM2GFeG30oNpQDRH0vQlFr3Oz5cXIMRKIk9L-LYpzdAsd2qtjTy7T0GC67cHmVmT8YTMKS_-qVO81743rAUFw")`,
                  }}
                />
                <div className="flex-1">
                  <p className="text-xl font-semibold text-white">
                    Community CodeJam Event
                  </p>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed mt-2">
                    Join our upcoming online event with guest speakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    {/*quets */}  
                  <QuestsBody/>
                  <CBody/>
                  <Leaderboard/>
                  </>
  );
};

export default Body;
