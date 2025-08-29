"use client";
import CustomLink from "./CustomLink";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react"
import SignOut from "./SignOut";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const { data: session } = useSession();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${isScrolled ? "bg-black/20 backdrop-blur-lg shadow-sm" : "bg-gray-900"} w-full h-[5rem] flex items-center justify-between px-10 sticky top-0 z-20 transition-all duration-300`}>
            <CustomLink href="/">
                <div className="flex justify-center p-2 gap-3">
                    <i className="bi bi-code-square mt-[2px]"></i>
                    <span className="font-semibold text-[1.25rem]">CodeForge</span>
                </div>
            </CustomLink>
            <div className="flex text-md font-semibold gap-10">
                <CustomLink href="/#about">
                    <span className="py-2 pr-2">About</span>
                </CustomLink>
                {session ? (
                    <>
                        <CustomLink href="/dashboard">
                            <span className="py-2 pr-2 pl-3">Dashboard</span>
                        </CustomLink>
                        <CustomLink href="/quests">
                            <span className="py-2 pr-2 pl-3">Quests</span>
                        </CustomLink>
                    </>
                ) : (
                    <></>
                )}
                {session ? (
                    <div className="flex justify-center gap-5 items-center">
                        <SignOut />
                    </div>

                ) : (
                    <div className="flex justify-center items-center">
                        <button className="bg-white border text-black hover:text-white transition-all duration-200 border-white hover:bg-white/20 p-[0.2rem] px-[1rem] rounded-md cursor-pointer"
                            onClick={() => signIn()}>Sign in</button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Navbar;
