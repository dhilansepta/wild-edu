import { auth } from "@/auth"
import Sidebar from "../components/Sidebar"
import { redirect } from "next/navigation"

// app/layout.tsx
export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()
    if(!session) redirect('/login');

    return (
        <div className="flex flex-row h-screen bg-dark">
            <Sidebar />

            <nav className="hidden md:flex flex-col justify-center items-end fixed w-screen h-24 bg-primary p-4 ">
                <h1 className="text-xl font-bold text-dark">{session.user?.name} - {session.user?.role?.charAt(0).toUpperCase() + session.user?.role?.slice(1).toLowerCase()}</h1>
            </nav>

            <main className="flex pt-16 p-4 md:p-8 md:pt-30 w-screen max-w-screen">
                {children}
            </main>
        </div>
    )
}