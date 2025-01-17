import {ReactNode} from "react";

type HeroProps = {
    children: ReactNode
    className?: string
}

export default function Hero({children}: HeroProps) {
    return (
        <main>
            {children}
        </main>
    )
}