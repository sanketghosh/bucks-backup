import { cn } from "@/lib/utils";
import { ReceiptIndianRupeeIcon } from "lucide-react";
import Link from "next/link";

type AppLogoProps = {
  iconClassNames?: string;
  logoTextClassNames?: string;
} & React.ComponentPropsWithRef<"div">;

export default function AppLogo({
  iconClassNames,
  logoTextClassNames,
  className,
}: AppLogoProps) {
  return (
    <Link className="flex items-center gap-1" href={"/"}>
      <ReceiptIndianRupeeIcon className={cn("size-7", iconClassNames)} />
      <h2 className={cn("text-2xl font-bold", logoTextClassNames)}>Bucks</h2>
    </Link>
  );
}
