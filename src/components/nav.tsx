const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--border-color)] px-10 py-5">
      <div className="flex items-center gap-4 text-[var(--accent-amethyst)]">
        <svg
          className="size-8"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 14.25L9.66 12 13 9.75v-1.5L7.5 12l5.5 3.75v-1.5zM21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12z"></path>
        </svg>
        <h1 className="text-3xl">CodeQuest</h1>
      </div>

      <div className="flex flex-1 justify-end gap-6 items-center">
        <div className="flex items-center gap-8">
          <a className="text-[var(--text-secondary)] hover:text-white text-base font-medium transition-colors" href="#">Quests</a>
          <a className="text-[var(--text-secondary)] hover:text-white text-base font-medium transition-colors" href="#">Leaderboard</a>
          <a className="text-[var(--text-secondary)] hover:text-white text-base font-medium transition-colors" href="#">Community</a>
        </div>

        {/* Notification Button */}
        <button className="flex items-center justify-center rounded-full h-11 w-11 bg-white/5 text-[var(--text-secondary)] hover:bg-white/10 hover:text-white transition-colors">
          <svg
            fill="currentColor"
            height="22px"
            viewBox="0 0 256 256"
            width="22px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
          </svg>
        </button>

        {/* Avatar */}
        <div className="relative">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-[var(--accent-emerald)] shadow-[0_0_20px_rgba(46,204,113,0.3)]"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3X8Thhs_iAb9A79zRIOAqGI0bVRx06GAO4iEHgcxTfwMfrP_oc3pn3Lfwqd0bYwhdFu9Mj_T9cLauK2WC8tVKqF2iN3xGVCNGyHGuBtKiInZiQq1mrwAFUGUQ4L0Cw3IDkj1g5ilvqzgWFqGkZT6nBpD5hH8Hyv2-lnuzGc2b53Kli-bC9k4sP4YxttpioTl-gLxb1Uwd8Sskf_XAF5SfkWiSO09bdAdgDt2nFWkgTqdOYPULJnnq15pwIYg6C7UUodCVpD0VbRE")`,
            }}
          />
          <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-500 border-2 border-[var(--background-dark)] shadow-[0_0_10px_rgba(50,205,50,0.6)]"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;