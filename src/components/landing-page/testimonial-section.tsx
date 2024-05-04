import { testimonials } from "@/constants";
import { Card } from "@/components/ui/card";

export default function TestimonialSection() {
  return (
    <section className="w-full py-14">
      <div className="w-full">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            See what others saying about us
          </h3>
          <p className="mt-3 leading-tight tracking-tight text-muted-foreground">
            See how Bucks has transformed lives: Real users share their success
            stories and how Bucks made financial management effortless.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <Card
                key={idx}
                className="cursor-pointer bg-secondary/40 px-5 py-4 transition-colors hover:bg-gradient-to-br hover:from-secondary/20 hover:via-secondary/25 hover:to-secondary"
              >
                <figure className="">
                  <div className="flex items-center gap-x-2">
                    <img src={item.avatar} className="size-12 rounded-full" />
                    <div>
                      <span className="block font-semibold text-foreground">
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-3 text-sm text-foreground">{item.quote}</p>
                  </blockquote>
                </figure>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
