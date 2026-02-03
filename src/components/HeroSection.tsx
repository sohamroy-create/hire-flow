const HeroSection = () => {
  return (
    <section className="relative w-full bg-muted">
      {/* Placeholder container for hero image */}
      <div className="relative h-[33vh] min-h-[300px] max-h-[450px] w-full overflow-hidden">
        {/* Placeholder background */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-muted to-accent flex items-center justify-center">
          {/* Placeholder content */}
          <div className="text-center space-y-4 px-4">
            <div className="mx-auto w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Hero image placeholder - Replace with image of happy recruiters celebrating with resumes and analytics dashboards
            </p>
          </div>
        </div>

        {/* Overlay with headline */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Hire Smarter, Faster
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Choose the plan that fits your recruitment needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
