import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Timeline = "15" | "30" | "45";

interface TierPricing {
  clicks: Record<Timeline, string>;
  price: Record<Timeline, string>;
}

const tierPricing: Record<string, TierPricing> = {
  starter: {
    clicks: { "15": "500", "30": "1,200", "45": "2,000" },
    price: { "15": "₹2,999", "30": "₹4,999", "45": "₹6,999" },
  },
  growth: {
    clicks: { "15": "1,000", "30": "2,500", "45": "4,000" },
    price: { "15": "₹5,999", "30": "₹9,999", "45": "₹13,999" },
  },
  premium: {
    clicks: { "15": "2,500", "30": "5,000", "45": "8,000" },
    price: { "15": "₹9,999", "30": "₹17,999", "45": "₹24,999" },
  },
};

const analyticsDetails = {
  starter: "Applies, Applicant details, Click tracking",
  growth: "Applies, Applicant details download, Click tracking",
  premium: "Full access: Applies, Downloads, Clicks, Meta & Google Impressions",
};

const features = [
  { name: "Post Jobs for Free", key: "postJobs" },
  { name: "Ads via Meta & Google", key: "ads" },
  { name: "Analytics Dashboard", key: "analytics" },
  { name: "Auto-generated Images", key: "images" },
  { name: "Auto-generated Videos", key: "videos" },
  { name: "Clicks", key: "clicks" },
  { name: "Price", key: "price" },
];

const tierFeatures = {
  starter: {
    postJobs: true,
    ads: true,
    analytics: "text",
    images: false,
    videos: false,
  },
  growth: {
    postJobs: true,
    ads: true,
    analytics: "text",
    images: true,
    videos: false,
  },
  premium: {
    postJobs: true,
    ads: true,
    analytics: "text",
    images: true,
    videos: true,
  },
};

const TimelineSelector = ({
  selected,
  onSelect,
}: {
  selected: Timeline;
  onSelect: (t: Timeline) => void;
}) => {
  return (
    <div className="flex rounded-lg border border-border overflow-hidden">
      {(["15", "30", "45"] as Timeline[]).map((days) => (
        <button
          key={days}
          onClick={() => onSelect(days)}
          className={cn(
            "flex-1 px-3 py-1.5 text-xs font-medium transition-colors",
            selected === days
              ? "bg-primary text-primary-foreground"
              : "bg-background text-muted-foreground hover:bg-muted"
          )}
        >
          {days} days
        </button>
      ))}
    </div>
  );
};

const FeatureCell = ({
  value,
  analyticsText,
}: {
  value: boolean | string;
  analyticsText?: string;
}) => {
  if (value === "text" && analyticsText) {
    return (
      <span className="text-xs text-muted-foreground leading-tight">
        {analyticsText}
      </span>
    );
  }
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check className="h-5 w-5 text-primary" />
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <X className="h-5 w-5 text-destructive/60" />
    </div>
  );
};

const PricingTable = () => {
  const [timelines, setTimelines] = useState<Record<string, Timeline>>({
    starter: "30",
    growth: "30",
    premium: "30",
  });

  const updateTimeline = (tier: string, timeline: Timeline) => {
    setTimelines((prev) => ({ ...prev, [tier]: timeline }));
  };

  const tiers = [
    { key: "starter", name: "Starter", popular: false },
    { key: "growth", name: "Growth", popular: true },
    { key: "premium", name: "Premium", popular: false },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground">
            Choose the plan that's right for your hiring needs
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-4">
            {/* Header Row */}
            <div className="bg-muted p-4 border-b border-border">
              <span className="font-semibold text-foreground">Features</span>
            </div>
            {tiers.map((tier) => (
              <div
                key={tier.key}
                className={cn(
                  "p-4 text-center border-b border-l border-border",
                  tier.popular && "bg-primary/5"
                )}
              >
                {tier.popular && (
                  <span className="inline-block mb-1 px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Popular
                  </span>
                )}
                <h3 className="font-bold text-lg text-foreground">{tier.name}</h3>
              </div>
            ))}

            {/* Feature Rows */}
            {features.map((feature, idx) => (
              <>
                <div
                  key={`label-${feature.key}`}
                  className={cn(
                    "p-4 bg-background border-b border-border flex items-center",
                    idx === features.length - 1 && "border-b-0"
                  )}
                >
                  <span className="text-sm font-medium text-foreground">
                    {feature.name}
                  </span>
                </div>
                {tiers.map((tier) => (
                  <div
                    key={`${tier.key}-${feature.key}`}
                    className={cn(
                      "p-4 border-b border-l border-border flex items-center justify-center",
                      tier.popular && "bg-primary/5",
                      idx === features.length - 1 && "border-b-0"
                    )}
                  >
                    {feature.key === "clicks" ? (
                      <span className="font-semibold text-foreground">
                        {tierPricing[tier.key].clicks[timelines[tier.key]]}
                      </span>
                    ) : feature.key === "price" ? (
                      <span className="font-bold text-lg text-primary">
                        {tierPricing[tier.key].price[timelines[tier.key]]}
                      </span>
                    ) : (
                      <FeatureCell
                        value={tierFeatures[tier.key as keyof typeof tierFeatures][feature.key as keyof typeof tierFeatures.starter]}
                        analyticsText={
                          feature.key === "analytics"
                            ? analyticsDetails[tier.key as keyof typeof analyticsDetails]
                            : undefined
                        }
                      />
                    )}
                  </div>
                ))}
              </>
            ))}

            {/* Timeline Selector Row */}
            <div className="p-4 bg-background border-t border-border flex items-center">
              <span className="text-sm font-medium text-foreground">Timeline</span>
            </div>
            {tiers.map((tier) => (
              <div
                key={`timeline-${tier.key}`}
                className={cn(
                  "p-4 border-t border-l border-border",
                  tier.popular && "bg-primary/5"
                )}
              >
                <TimelineSelector
                  selected={timelines[tier.key]}
                  onSelect={(t) => updateTimeline(tier.key, t)}
                />
              </div>
            ))}

            {/* CTA Row */}
            <div className="p-4 bg-background" />
            {tiers.map((tier) => (
              <div
                key={`cta-${tier.key}`}
                className={cn(
                  "p-4 border-l border-border",
                  tier.popular && "bg-primary/5"
                )}
              >
                <Button
                  className={cn(
                    "w-full",
                    tier.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  Choose {tier.name}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-6">
          {tiers.map((tier) => (
            <Card
              key={tier.key}
              className={cn(
                "overflow-hidden",
                tier.popular && "ring-2 ring-primary"
              )}
            >
              <div className="p-6">
                <div className="text-center mb-4">
                  {tier.popular && (
                    <span className="inline-block mb-2 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      Popular
                    </span>
                  )}
                  <h3 className="font-bold text-xl text-foreground">{tier.name}</h3>
                  <p className="text-2xl font-bold text-primary mt-2">
                    {tierPricing[tier.key].price[timelines[tier.key]]}
                  </p>
                </div>

                <div className="mb-4">
                  <label className="text-xs font-medium text-muted-foreground mb-2 block">
                    Select Timeline
                  </label>
                  <TimelineSelector
                    selected={timelines[tier.key]}
                    onSelect={(t) => updateTimeline(tier.key, t)}
                  />
                </div>

                <div className="space-y-3 mb-6">
                  {features.slice(0, -2).map((feature) => (
                    <div
                      key={feature.key}
                      className="flex items-start justify-between gap-2"
                    >
                      <span className="text-sm text-muted-foreground">
                        {feature.name}
                      </span>
                      <div className="flex-shrink-0">
                        {feature.key === "analytics" ? (
                          <span className="text-xs text-right text-muted-foreground max-w-[150px] block">
                            {analyticsDetails[tier.key as keyof typeof analyticsDetails]}
                          </span>
                        ) : (
                          <FeatureCell
                            value={tierFeatures[tier.key as keyof typeof tierFeatures][feature.key as keyof typeof tierFeatures.starter]}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-sm font-medium text-foreground">Clicks</span>
                    <span className="font-semibold text-foreground">
                      {tierPricing[tier.key].clicks[timelines[tier.key]]}
                    </span>
                  </div>
                </div>

                <Button
                  className={cn(
                    "w-full",
                    tier.popular
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  Choose {tier.name}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
