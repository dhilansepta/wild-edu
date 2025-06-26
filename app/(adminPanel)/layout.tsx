import Sidebar from "../components/Sidebar"

// app/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-row h-screen bg-dark">
      <Sidebar />

      <nav className="hidden md:flex flex-col justify-center items-end fixed w-screen h-24 bg-primary p-4 ">
        <h1 className="text-xl font-bold text-dark">Username - Role</h1>
      </nav>
      
      <main className="flex pt-16 p-4 md:p-8 md:pt-30 w-screen max-w-screen">
        {children}
      </main>
    </div>
  )
}