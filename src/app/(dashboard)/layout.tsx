import Sidebar from "@/components/sidebar/sidebar";
import SidebarToggleBtn from "@/components/sidebar/sidebar-toggle-btn";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen w-full flex-col">
      <main className="relative flex h-screen space-x-3">
        <Sidebar />
        <section className="h-full w-full flex-1 overflow-y-scroll">
          <SidebarToggleBtn />
          {children}
        </section>
      </main>
    </div>
  );
}
