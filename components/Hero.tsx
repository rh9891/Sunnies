import {ReactNode} from "react";

import {atmaSans} from "@/fonts";
import Button from "@/components/Button";

type HeroProps = {
    children?: ReactNode
    className?: string
}

export default function Hero({}: HeroProps) {
    return (
        <div className='py-4 sm:py-10 flex flex-col gap-4 sm:gap-8'>
            <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + atmaSans.className}>Reflect, grow, and embrace <span className='textGradient'>brighter</span> days with <span className='textGradient'>Sunnies</span>.</h1>
            <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'>Track your journey, share insights, and <span className='font-semibold'>stay positive every day</span>.
            </p>
            <div className='grid grid-cols-2 gap-4'><Button text="Sign Up" /><Button text="Log In" /></div>
        </div>
    )
}