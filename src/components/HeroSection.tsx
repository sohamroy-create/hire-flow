import { Megaphone, Palette, BarChart3, Send } from "lucide-react";

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
    <section className="relative w-full overflow-hidden bg-foreground text-background">
      {/* Subtle background pattern — social/recruitment motif */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative container mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Marketing text */}
          <div className="flex flex-col justify-center lg:sticky lg:top-24">
            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.1] tracking-tight">
              Social media is everywhere.{" "}
              <span className="text-primary">Everyone is on it.</span>{" "}
              <span className="text-muted-foreground/70">So are the candidates.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground/80 max-w-lg">
              We take your job, advertise it on optimal channels, and ensure you
              fill that position —{" "}
              <span className="font-semibold text-primary">fast!</span>
            </p>

            {/* Small decorative line */}
            <div className="mt-8 h-1 w-16 rounded-full bg-primary" />
          </div>

          {/* Right — Process steps */}
          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex gap-5 rounded-xl border border-background/10 bg-background/[0.04] p-5 backdrop-blur-sm transition-colors hover:bg-background/[0.08]"
              >
                {/* Step number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold tracking-widest text-primary">
                    {step.number}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-bold text-lg text-background">
                    {step.header}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground/70">
                    {step.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
