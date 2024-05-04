// ABANDONING Desktop and Mobile nav for now
/* import DesktopNavbar from "@/components/navbar/desktop-navbar";
import MobileNavbar from "@/components/navbar/mobile-navbar";
 */

// PACKAGES
import Link from "next/link";
import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";

// COMPONENTS
import AppLogo from "@/components/logo/app-logo";
import { Button } from "@/components/ui/button";
import NavAccountDropdown from "@/components/navbar/nav-account-dropdown";

export default async function Navbar() {
  const { user } = await useFetchLoggedInUserServer();

  return (
    <nav className="w-full border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <AppLogo />
        {user ? (
          <NavAccountDropdown />
        ) : (
          <Button asChild size={"sm"}>
            <Link href={"/register"}>Register</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
