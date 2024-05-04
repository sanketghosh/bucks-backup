import { GithubIcon, UsersIcon, GlobeIcon, TwitterIcon } from "lucide-react";
import AppLogo from "@/components/logo/app-logo";

export default function FooterSection() {
  const footerIcons = [
    {
      icon: <GithubIcon size={21} />,
      href: "https://github.com/sanketghosh/bucks",
    },
    {
      icon: <UsersIcon size={21} />,
      href: "https://github.com/sanketghosh/",
    },
    {
      icon: <TwitterIcon size={21} />,
      href: "https://x.com/",
    },
    {
      icon: <GlobeIcon size={21} />,
      href: "https://github.com/sanketghosh",
    },
  ];

  return (
    <footer className="border-t py-5">
      <div className="mx-auto w-full max-w-7xl space-y-3 px-4 py-3 md:flex md:items-center md:justify-between md:space-y-0">
        <AppLogo />
        <p className="text-muted-foreground">
          &copy; Bucks {new Date().getFullYear()}. All rights reserved.
        </p>
        <ul className="mt-3 flex flex-wrap items-center space-x-3 text-sm sm:mt-0">
          {footerIcons.map((i) => (
            <li
              key={i.href}
              className="rounded-full bg-secondary p-2 shadow-lg"
            >
              <a href={i.href} className="text-foreground">
                {i.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
