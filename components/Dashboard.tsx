import {ReactNode} from "react";

type DashboardProps = {
    children: ReactNode
    className?: string
}

export default function Dashboard({children}: DashboardProps) {
    return (
        <main>
            {children}
        </main>
    )
}