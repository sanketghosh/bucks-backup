/* PACKAGES */
import { navLinks } from "@/constants";
import Link from "next/link";

/* COMPONENTS */
import AppLogo from "@/components/logo/app-logo";
import ThemeToggle from "@/components/navbar/theme-toggle";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/navbar/nav-link";
import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";
import NavAccountDropdown from "@/components/navbar/nav-account-dropdown";

export default async function DesktopNavbar() {
  const { name } = await useFetchLoggedInUserServer();

  return (
    <div className="mx-auto hidden w-full max-w-7xl items-center justify-between px-4 py-4 lg:flex">
      <AppLogo />

      <div className="flex items-center space-x-4">
        {navLinks.map((item) => (
          <NavLink key={item.href} href={item.href} label={item.label} />
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <ThemeToggle />
        {name ? (
          <NavAccountDropdown />
        ) : (
          <Button asChild size={"sm"}>
            <Link href={"/register"} className="text-sm">
              Register
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
