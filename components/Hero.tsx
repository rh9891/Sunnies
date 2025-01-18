import {ReactNode} from "react";
import {Atma, Barrio, Funnel_Display, Kirang_Haerang, Modak, Rubik_Dirt, Shizuru} from "next/font/google";

const atmaSans = Atma({
    variable: "--font-atma-sans",
    subsets: ["latin"], weight: "400",
});

type HeroProps = {
    children?: ReactNode
    className?: string
}

export default function Hero({}: HeroProps) {
    return (
        <div className='py-4 sm:py-10 flex flex-col gap-4 sm:gap-8'>
            <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + atmaSans.className}>Track your mood and symptoms with <span className='textGradient'>Sunnies</span>. Designed to <span className='textGradient'>brighten</span> your days.</h1>
            <p className='text-lg sm:text-xl md:text-2xl text-center'>Create insights and <span className='font-medium'>stay positive every day</span>.</p>
        </div>
    )
}