// PACKAGES
import { getInitials } from "@/helpers/get-initials";
import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";
import { LayoutPanelLeftIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { logout } from "@/actions/logout-action";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default async function NavAccountDropdown() {
  const { name } = await useFetchLoggedInUserServer();

  const dropdownLinks = [
    {
      icon: <LayoutPanelLeftIcon size={19} />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <User2Icon size={19} />,
      label: "Account",
      href: "/account",
    },
  ];

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback>{getInitials(name)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5 w-40 space-y-3">
          <DropdownMenuLabel>{name}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {dropdownLinks.map((item) => (
            <DropdownMenuItem asChild key={item.href}>
              <Link
                href={item.href}
                className="flex cursor-pointer items-center gap-3 py-2"
              >
                {item.icon}
                {item.label}
              </Link>
            </DropdownMenuItem>
          ))}
          <form action={logout} className="pb-2">
            <Button
              className="w-full text-sm font-medium"
              variant={"destructive"}
              size={"sm"}
            >
              Logout
            </Button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
