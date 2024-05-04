import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useFetchLoggedInUserServer } from "@/hooks/useFetchLoggedInUserServer";

export default async function HeroSection() {
  const { user } = await useFetchLoggedInUserServer();

  return (
    <div className="w-full">
      <div className="w-full gap-12 py-10 text-foreground">
        <div className="mx-auto max-w-4xl space-y-5 text-center">
          <div className="flex items-center justify-center">
            <h1 className="w-fit rounded-3xl bg-secondary px-3 py-1 text-sm font-medium text-foreground">
              Tracking expense made easy.
            </h1>
          </div>
          <h2 className="mx-auto text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
            Master your money management. Your trusted expense partner.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Simplify expense tracking, set budgets, receive timely
            notifications, and achieve financial freedom effortlessly. Start
            your journey now!
          </p>
          <div className="flex items-center justify-center gap-4">
            {user ? (
              <Button
                size={"lg"}
                className="mt-5 animate-button-heart-beat rounded-full font-semibold"
                variant={"default"}
              >
                <Link href={"/dashboard"}>Go To Dashboard</Link>
              </Button>
            ) : (
              <Button
                size={"lg"}
                className="mt-5 animate-button-heart-beat rounded-full font-semibold"
                variant={"default"}
              >
                <Link href={"/register"}>Get Started</Link>
              </Button>
            )}
          </div>
        </div>
        <div className="mt-14">
          <img
            src="/hero-image.png"
            className="w-full rounded-lg border shadow-xl shadow-foreground/20 dark:shadow-black md:rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
