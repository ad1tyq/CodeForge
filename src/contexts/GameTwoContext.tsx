"use client";
import React, { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface GameTwoContextType {
    GameTwo: number;
    setGameTwo: Dispatch<SetStateAction<number>>;
}

const GameTwoContext = createContext<GameTwoContextType | undefined>(undefined);

interface GameTwoProviderProps {
    children: ReactNode;
}

export function GameTwoProvider({ children }: GameTwoProviderProps) {
    const [GameTwo, setGameTwo] = useState<number>(0);
    
    return (
        <GameTwoContext.Provider value={{ GameTwo, setGameTwo }}>
            {children}
        </GameTwoContext.Provider>
    );
}

export function useGameTwo() {
    const context = useContext(GameTwoContext);
    if (context === undefined) {
        throw new Error("useGameTwo must be used within an GameTwoProvider");
    }
    return context;
}