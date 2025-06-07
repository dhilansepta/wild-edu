import Sidebar from "../components/Sidebar"

// app/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex pt-16 p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}