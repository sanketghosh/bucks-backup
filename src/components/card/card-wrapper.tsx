import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import AuthCardHead from "@/components/auth/auth-card-head";
import AuthFormSwitchButton from "../auth/auth-form-switch-button";

type CardHeaderProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
};

export default function CardWrapper({
  children,
  backButtonHref,
  backButtonLabel,
  headerLabel,
}: CardHeaderProps) {
  return (
    <Card className="w-[340px] shadow-lg md:w-[400px] lg:w-[440px]">
      <CardHeader>
        <AuthCardHead headerLabel={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <AuthFormSwitchButton
          backButtonLabel={backButtonLabel}
          backButtonHref={backButtonHref}
        />
      </CardFooter>
    </Card>
  );
}
