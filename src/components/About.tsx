import AboutPoints from "../../data/aboutdata";
import { AboutImage } from "../../Images";
import Image from "next/image";
function About(){
    return(
        <div className="mt-78 flex flex-col text-black items-center gap-15 py-15 pb-15">
            <h1 className="text-center text-xl font-bold md:text-4xl py-3 w-[10rem] border-amber-700 border-b-3 ">About Us</h1>
            <div className="flex gap-10">
                <div className="flex flex-col w-[40rem] gap-5">
                    <h1 className="font-bold text-2xl">CodeForge Experience</h1>
                    <p className="font-light w-[40vw]">Dive into an epic adventure where you master programming through interactive quests and real-time coding battles. CodeForge is the first gamified platform in India that transforms learning into a competitive sport, letting you earn exclusive digital badges and climb the national leaderboard.</p>
                    {AboutPoints.map((point,index)=>{
                        return(
                            <div key={index} className="flex gap-5">
                                <Image src={point.image} alt="point img" height={26} width={26}/>
                                <div>
                                    <p className="font-bold">{point.title}</p>
                                    <p className="font-light">{point.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <AboutImage/>
            </div>
        </div>
    )
}
export default About;