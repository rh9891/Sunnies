import Main from "@/components/Main";
import Login from "@/components/Login";

export default function Dashboard() {
    const isAuthenticated: boolean = false

    let children = (<Login />)

    if (isAuthenticated) {
        children = (<Dashboard />)
    }
    return (
        <Main>{children}</Main>
    )
}