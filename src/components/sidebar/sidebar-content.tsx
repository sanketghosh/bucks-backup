// PACKAGES
import { logout } from "@/actions/logout-action";
import { getInitials } from "@/helpers/get-initials";
import Link from "next/link";
import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";
import {
  LogOutIcon,
  ArrowLeftRightIcon,
  BarChart2Icon,
  LayoutPanelLeftIcon,
  Settings2Icon,
  User2Icon,
} from "lucide-react";

// COMPONENTS
import AppLogo from "@/components/logo/app-logo";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeToggle from "@/components/navbar/theme-toggle";
import SidebarLink from "@/components/sidebar/side-bar-link";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: <LayoutPanelLeftIcon size={22} />,
    href: "/dashboard",
  },
  {
    title: "Transactions",
    icon: <ArrowLeftRightIcon size={22} />,
    href: "/transactions",
  },
  {
    title: "Manage",
    icon: <Settings2Icon size={22} />,
    href: "/manage",
  },
  {
    title: "Statistics",
    icon: <BarChart2Icon size={22} />,
    href: "/statistics",
  },
  {
    title: "Account",
    icon: <User2Icon size={22} />,
    href: "/account",
  },
];

export default async function SidebarContent() {
  const { name, email } = await useFetchLoggedInUserServer();

  return (
    <div className="flex h-screen w-full flex-col p-3">
      <div className="my-3 flex w-full items-center justify-start px-3 py-2 md:justify-center lg:justify-start">
        <AppLogo logoTextClassNames="block md:hidden lg:block" />
      </div>
      <Separator />
      <div className="my-3 flex h-screen w-full flex-col items-center justify-between lg:items-start">
        <div className="flex w-full flex-col items-start space-y-3 md:items-center lg:items-start lg:space-y-2">
          {sidebarItems.map((i) => (
            <SidebarLink href={i.href}>
              {i.icon}
              <p className="block font-medium md:hidden lg:block"> {i.title}</p>
            </SidebarLink>
          ))}
        </div>

        <div className="mb-3 flex w-full flex-col space-y-3 md:items-center lg:items-start lg:space-y-2">
          <form action={logout} className="lg:w-full">
            <button className="flex w-full items-start gap-2 rounded-lg bg-destructive px-3 py-3 transition-all hover:bg-destructive/70 md:items-center">
              <LogOutIcon size={22} />
              <p className="block font-medium md:hidden lg:block">Logout</p>
            </button>
          </form>
          <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 md:rounded-none md:bg-background md:px-0 md:py-0 lg:w-full lg:rounded-lg lg:border lg:bg-secondary lg:px-3 lg:py-2">
            <Avatar>
              <AvatarFallback className="bg-background md:bg-secondary lg:bg-background">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col leading-tight md:hidden lg:flex">
              <p>{name}</p>
              <p className="text-sm text-muted-foreground">{email}</p>
            </div>
          </div>
          <ThemeToggle buttonClass="w-full" />
        </div>
      </div>
    </div>
  );
}
