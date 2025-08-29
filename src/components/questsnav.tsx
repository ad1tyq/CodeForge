import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-800 px-10 py-4">
      <div className="flex items-center gap-4">
        <svg
          className="h-8 w-8 text-[var(--primary-color)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM4 8.236L12 12.528L20 8.236V15.764L12 20.056L4 15.764V8.236Z"></path>
        </svg>
        <h1 className="text-2xl font-bold tracking-[-0.015em]">CodeQuest</h1>
      </div>

      <nav className="flex items-center gap-8 text-lg">
        <a className="font-medium hover:text-[var(--primary-color)] transition-colors" href="#">
          Learn
        </a>
        <a className="font-medium text-[var(--primary-color)]" href="#">
          Quests
        </a>
        <a className="font-medium hover:text-[var(--primary-color)] transition-colors" href="#">
          Compete
        </a>
        <a className="font-medium hover:text-[var(--primary-color)] transition-colors" href="#">
          Leaderboards
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
          <svg
            fill="currentColor"
            height="24px"
            viewBox="0 0 256 256"
            width="24px"
          >
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
          </svg>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 border-2 border-[var(--primary-color)]"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAHrL7vOLUvpGH3qhwk-n0p7YBmFF8q_0G-YOo8bnMI6GvAM-HtktzarC6TYn7CcC2fsJjMrfrtJgqVk73GFCddm_o9H7WF3jMEgLwvku9Rz8cI_BPYMuaSODCWWitUwZr8EXG_AYCmuENZ8Geyv9PzOWHtRo3y8hZYUjVzLdro8-nimVpfy9vZgEcxFvOX6OlfutrghpeWb2rI2EfPpihIM0yyPZ1O7h7S4plZ3OTSjaAO7-U8p82HPV5GNqguHf6ULIidgOSIXU4")',
          }}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;