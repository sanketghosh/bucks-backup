import Link from "next/link";

type AuthFormSwitchButtonProps = {
  backButtonLabel: string;
  backButtonHref: string;
};

export default function AuthFormSwitchButton({
  backButtonHref,
  backButtonLabel,
}: AuthFormSwitchButtonProps) {
  return (
    <div className="flex w-full items-center justify-center">
      <Link
        href={backButtonHref}
        className="text-center text-sm font-medium hover:underline hover:underline-offset-4"
      >
        {backButtonLabel}
      </Link>
    </div>
  );
}
