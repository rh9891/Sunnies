import {ReactNode} from "react";

import Main from "@/components/Main";

type DashboardProps = {
    className?: string
    children?: ReactNode
}

export default function Dashboard({children, className}: DashboardProps) {
    return (
        <Main className={className}>{children}</Main>
    )
}