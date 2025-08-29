// App.tsx
import React from "react";
import Navbar from "@/components/nav";
import Footer from "@/components/footer";
import Body from "@/components/body";

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
