import {ReactNode} from "react";

type LoginProps = {
    children: ReactNode
    className?: string
}

export default function Login({children}: LoginProps) {
    return (
        <main>
            {children}
        </main>
    )
}