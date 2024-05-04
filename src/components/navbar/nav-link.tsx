"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export default function NavLink({ href, label, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "rounded-md text-base capitalize text-muted-foreground transition-all hover:text-foreground",
        className,
        isActive && "text-foreground",
      )}
    >
      {label}
    </Link>
  );
}
