//COMPONENTS
import SidebarContent from "@/components/sidebar/sidebar-content";

export default function Sidebar() {
  return (
    <aside className="hidden h-screen flex-shrink-0 border-r md:block md:w-fit lg:w-[17rem]">
      <SidebarContent />
    </aside>
  );
}
