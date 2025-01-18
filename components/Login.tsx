import {ReactNode} from "react";
import Main from "@/components/Main";

type LoginProps = {
    children?: ReactNode
    className?: string
}

export default function Login({children}: LoginProps) {
    return (
        <Main>
            {children}
        </Main>
    )
}