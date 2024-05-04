import { MailOpenIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section className="mx-auto mt-5 max-w-xl px-4 pb-20 pt-10 md:px-8">
      <div className="space-y-3 text-center">
        <MailOpenIcon className="mx-auto size-14" />
        <h3 className="text-3xl font-bold tracking-tight text-foreground">
          Subscribe to our newsletter
        </h3>
        <p className="leading-tight tracking-tight text-muted-foreground">
          Be the first to know when Bucks launches and receive exclusive
          updates, tips, and offers to help you master your finances.
        </p>
      </div>
      <div className="mt-6">
        <form className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <Input placeholder="Enter your email address..." />
          <Button className="w-full md:w-fit" size={"sm"}>
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
