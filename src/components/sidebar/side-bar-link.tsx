"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function SidebarLink({
  href,
  children,
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "flex w-full items-center justify-start gap-2 rounded-lg px-3 py-2 text-base hover:bg-secondary md:justify-center lg:w-full lg:justify-start",
        className,
        isActive && "bg-secondary",
      )}
    >
      {children}
    </Link>
  );
}
