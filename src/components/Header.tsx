import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">
              joblet<span className="text-primary">.ai</span>
            </span>
          </NavLink>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/find-jobs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Find Jobs
          </NavLink>
          <NavLink
            to="/post-job"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Post a Job
          </NavLink>
          <NavLink
            to="/blogs"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Blogs
          </NavLink>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
