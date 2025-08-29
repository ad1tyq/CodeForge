const Leaderboard: React.FC = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Sophia Lee",
      username: "SophiaLee",
      xp: "15,800 XP",
      avatar:
        "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      rank: 2,
      name: "Liam Johnson",
      username: "LiamJ",
      xp: "13,500 XP",
      avatar:
        "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      rank: 3,
      name: "You",
      username: "Noah Thompson",
      xp: "11,200 XP",
      avatar:
        "https://randomuser.me/api/portraits/men/3.jpg",
      highlight: true,
    },
    {
      rank: 4,
      name: "Emma Wilson",
      username: "EmmaW",
      xp: "10,750 XP",
      avatar:
        "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      rank: 5,
      name: "James Brown",
      username: "JamesB",
      xp: "9,980 XP",
      avatar:
        "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      rank: 6,
      name: "Olivia Davis",
      username: "OliviaD",
      xp: "9,500 XP",
      avatar:
        "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      rank: 7,
      name: "Ethan Miller",
      username: "EthanM",
      xp: "8,700 XP",
      avatar:
        "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      rank: 8,
      name: "Ava Martinez",
      username: "AvaM",
      xp: "8,200 XP",
      avatar:
        "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];

  return (
    <main className="flex flex-1 justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl">
        {/* Title */}
        <div className="mb-8 px-4">
          <h2 className="nike-font text-4xl font-black tracking-wide text-white">
            Leaderboard
          </h2>
          <p className="mt-2 text-zinc-400">
            See how you stack up against other coders on CodeQuest.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-zinc-800">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8 px-4">
            <a className="nike-font border-[var(--primary-color)] text-white whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Global
            </a>
            <a className="nike-font border-transparent text-zinc-400 hover:text-white hover:border-zinc-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Friends
            </a>
            <a className="nike-font border-transparent text-zinc-400 hover:text-white hover:border-zinc-400 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
              Weekly
            </a>
          </nav>
        </div>

        {/* Table */}
        <div className="overflow-hidden bg-zinc-900 sm:rounded-lg">
          <table className="min-w-full divide-y divide-zinc-800">
            <thead className="bg-zinc-800/50">
              <tr>
                <th className="w-24 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6 nike-font">
                  Rank
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white nike-font">
                  User
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-semibold text-white nike-font">
                  XP
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {leaderboardData.map((player) => (
                <tr
                  key={player.rank}
                  className={`transition-colors ${
                    player.highlight ? "highlighted-row" : ""
                  }`}
                >
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6 text-center">
                    {player.rank}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-zinc-300">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 flex-shrink-0 bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                        style={{
                          backgroundImage: `url('${player.avatar}')`,
                        }}
                      ></div>
                      <div className="flex flex-col">
                        <span
                          className={`${
                            player.highlight
                              ? "font-bold text-white"
                              : "font-medium text-white"
                          }`}
                        >
                          {player.name}
                        </span>
                        <span className="text-xs text-zinc-400">
                          {player.username}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-[var(--primary-color)]">
                    {player.xp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Leaderboard;