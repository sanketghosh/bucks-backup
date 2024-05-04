import { MenuIcon } from "lucide-react";

import SidebarContent from "@/components/sidebar/sidebar-content";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";

export default function SidebarToggleBtn() {
  return (
    <Sheet>
      <SheetTrigger className="p-2 md:hidden">
        <Button variant={"secondary"} size={"icon"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="">
        <SidebarContent />
      </SheetContent>
    </Sheet>
  );
}
