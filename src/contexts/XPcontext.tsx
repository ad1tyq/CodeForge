"use client";
import React, { useState, useContext, createContext, ReactNode, Dispatch, SetStateAction } from "react";

interface XPContextType {
    XP: number;
    setXP: Dispatch<SetStateAction<number>>;
}

const XPContext = createContext<XPContextType | undefined>(undefined);

interface XPProviderProps {
    children: ReactNode;
}

export function XPProvider({ children }: XPProviderProps) {
    const [XP, setXP] = useState<number>(0);
    
    return (
        <XPContext.Provider value={{ XP, setXP }}>
            {children}
        </XPContext.Provider>
    );
}

export function useXP() {
    const context = useContext(XPContext);
    if (context === undefined) {
        throw new Error("useXP must be used within an XPProvider");
    }
    return context;
}