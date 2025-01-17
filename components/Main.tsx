import {ReactNode} from "react";

type MainProps = {
    children: ReactNode
    className?: string
}

export default function Main({children}: MainProps) {
    return (
        <main>
            {children}
        </main>
    )
}