import { Megaphone, Palette, BarChart3, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const steps = [
  {
    number: "01",
    icon: Palette,
    header: "Brand Value Analysis",
    explanation:
      "We analyse your brand values, your brand image, colours, using a dynamic process",
  },
  {
    number: "02",
    icon: Megaphone,
    header: "Ad Copy Creation",
    explanation:
      "We create the ad copies and the creatives that reflect your brand values, so you get the desired candidates",
  },
  {
    number: "03",
    icon: Send,
    header: "Channel Actuation",
    explanation:
      "We post the creatives in the effective channels depending on your requirements for optimised performance",
  },
  {
    number: "04",
    icon: BarChart3,
    header: "Analysis & Tracking",
    explanation:
      "While we keep optimising performance, you get a dashboard that tracks the applications and related performance for you to obsess over",
  },
];

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      {/* Background creative */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      <div className="relative container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Marketing text */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight text-foreground">
                Everyone's on social media.{" "}
                <span className="text-primary">So are your candidates.</span>{" "}
                <span className="text-muted-foreground">Are you?</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-lg">
                We take your job, advertise it on optimal channels, and ensure you
                fill that position —{" "}
                <span className="font-semibold text-primary">fast!</span>
              </p>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-lg">
                You just post your job on our website, and throw your worries away.
              </p>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() =>
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Right — 2x2 Process steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-xl border border-border bg-card/80 backdrop-blur-sm p-5 transition-shadow hover:shadow-md"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{step.header}</h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {step.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
