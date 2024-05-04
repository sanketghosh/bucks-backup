/* PACKAGES */
import Link from "next/link";
import { CrossIcon, MenuIcon, XIcon } from "lucide-react";
import { navLinks } from "@/constants";

/* COMPONENTS */
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import AppLogo from "@/components/logo/app-logo";
import ThemeToggle from "@/components/navbar/theme-toggle";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/navbar/nav-link";
import { useState } from "react";
import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";
import NavAccountDropdown from "./nav-account-dropdown";

export default async function MobileNavbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { name } = await useFetchLoggedInUserServer();

  return (
    <div className="flex w-full items-center justify-between px-4 py-5 lg:hidden">
      <AppLogo iconClassNames="size-5" logoTextClassNames="text-xl" />

      <Sheet>
        <SheetTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col justify-between" side={"left"}>
          <SheetHeader>
            <AppLogo />
          </SheetHeader>
          <div className="flex flex-col items-start justify-between space-y-4">
            {navLinks.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {name ? (
              <NavAccountDropdown />
            ) : (
              <Button asChild>
                <Link href={"/register"}>Register</Link>
              </Button>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
