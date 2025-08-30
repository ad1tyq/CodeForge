import leaderboardData from "../../data/leaderboardData"
export default function Leaderboard() {
    const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.XP - a.XP);
    let rank = 0;
    return (
        <div id="leaderboard">
            {/* Leaderboard */}
            <div className="card p-8">
                <h2 className="text-2xl text-white mb-6">Leaderboard</h2>
                <table className="w-full text-left leaderboard-table">
                    <thead>
                        <tr>
                            <th className="p-3">Rank</th>
                            <th className="p-3">User</th>
                            <th className="p-3">Bridge Levels</th>
                            <th className="p-3">Sphinx Levels</th>
                            <th className="p-3 text-right">XP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedLeaderboard.map((user) => {
                            return (
                                <tr className="border-t" key={user.id}>
                                    <td className="p-3 font-bold text-[var(--accent-amethyst)]">
                                        {rank+=1}
                                    </td>
                                    <td className="p-3 text-white">{user.user}</td>
                                    <td className="p-3 text-white">{user.bridgeLevel}</td>
                                    <td className="p-3 text-white">{user.sphinxLevel}</td>
                                    <td className="p-3 text-right text-[var(--text-secondary)]">
                                        {user.XP}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}