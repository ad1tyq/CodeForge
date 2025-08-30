import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/FooterPage";
import AuthProvider from "@/components/AuthProvider";
import { XPProvider } from "../contexts/XPcontext.tsx"
import { LevelProvider } from "../contexts/LevelContext.tsx";
import { GameTwoProvider } from "@/contexts/GameTwoContext.tsx";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CodeForge",
  description: "Gamified Code Tutor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <AuthProvider>
        <XPProvider>
          <LevelProvider>
            <GameTwoProvider>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
      </GameTwoProvider>
      </LevelProvider>
      </XPProvider>
      </AuthProvider>
    </html>
  );
}
