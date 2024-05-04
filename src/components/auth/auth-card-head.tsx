import AppLogo from "../logo/app-logo";

type AuthCardHeadProps = {
  headerLabel?: string;
};

export default function AuthCardHead({ headerLabel }: AuthCardHeadProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <AppLogo />
      <p className="text-center text-base leading-tight tracking-tighter text-muted-foreground">
        {headerLabel}
      </p>
    </div>
  );
}
