"use client";
import React, { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface LevelContextType {
    Level: number;
    setLevel: Dispatch<SetStateAction<number>>;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

interface LevelProviderProps {
    children: ReactNode;
}

export function LevelProvider({ children }: LevelProviderProps) {
    const [Level, setLevel] = useState<number>(0);
    
    return (
        <LevelContext.Provider value={{ Level, setLevel }}>
            {children}
        </LevelContext.Provider>
    );
}

export function useLevel() {
    const context = useContext(LevelContext);
    if (context === undefined) {
        throw new Error("useLevel must be used within an LevelProvider");
    }
    return context;
}