// App.tsx
import React from "react";
import Navbar from "@/components/questsnav";
import Footer from "@/components/footer";
import Body from "@/components/body";
import Leaderboard from "@/components/leaderbody";

const App: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden bg-[var(--background-dark)] text-[var(--text-primary)]">
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
