import { GameSelector } from "@/components/GameSelector";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 p-4">
      <div className="max-w-7xl mx-auto">
        <GameSelector />
        
        <footer className="text-center mt-12 text-muted-foreground">
          <p>Master programming fundamentals through interactive challenges! 🎮</p>
        </footer>
      </div>
    </div>
  );
}