// App.tsx
import React from "react";
import Body from "@/components/body";
import Leaderboard from "@/components/leaderbody";

const App: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[var(--background-dark)] text-[var(--text-primary)]">
      <Body />
    </div>
  );
};

export default App;
