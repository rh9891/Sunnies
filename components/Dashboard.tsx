import Main from "@/components/Main";
import Login from "@/components/Login";

type DashboardProps = {
    className?: string
}

export default function Dashboard({}: DashboardProps) {
    const isAuthenticated: boolean = false

    let children = (<Login />)

    if (isAuthenticated) {
        children = (<Dashboard />)
    }
    return (
        <Main>{children}</Main>
    )
}