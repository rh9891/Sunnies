import {ReactNode} from "react";
import Main from "@/components/Main";

type LoginProps = {
    children?: ReactNode
}

export default function Login({children}: LoginProps) {
    return (
        <Main>
            {children}
        </Main>
    )
}