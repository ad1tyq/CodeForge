"use client"
import { useXP } from "../../contexts/XPcontext.tsx"
function XP(){
    const { XP } = useXP();
    return(
        <div className="bg-amber-400 flex justify-center rounded-2xl">
            <h1 className="font-bold text-xl">XP: {XP}/2000</h1>
        </div>
    )
}
export default XP;