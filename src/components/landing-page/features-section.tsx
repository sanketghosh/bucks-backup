import { BarChart4Icon, ShieldAlertIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart4Icon size={20} />,
      title: "Analytics",
      desc: "Leverage Bucks' analytics for better and smarter spending decisions.",
    },
    {
      icon: <ShieldAlertIcon size={20} />,
      title: "Security",
      desc: "Bucks' top-notch security, safeguarding your financial privacy.",
    },
  ];

  return (
    <section className="w-full py-10">
      <div className="w-full items-center justify-between gap-10 lg:flex">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-center text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-left">
              Simple solutions for your complex issues
            </p>
            <p className="text-center leading-tight tracking-tight text-muted-foreground lg:text-left">
              Packed with robust features, it's the ultimate tool to streamline
              expenses, manage budgets, and achieve financial success.
            </p>
          </div>
          <div className="lg:max-w-none">
            <ul className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:flex-col lg:space-x-0 lg:space-y-4">
              {features.map((item, idx) => (
                <Card
                  key={idx}
                  className="flex cursor-pointer  items-center space-x-4 bg-secondary/40 p-3 transition-colors hover:bg-gradient-to-br hover:from-secondary/20 hover:via-secondary/25 hover:to-secondary"
                >
                  <div className="flex size-12 flex-none items-center justify-center rounded-md bg-background text-foreground">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <img
            src="/hero-image.png"
            className="w-full rounded-lg border shadow-xl shadow-foreground/20 dark:shadow-black md:rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
