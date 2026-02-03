import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import StepIndicator from "@/components/StepIndicator";

const PostJob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTier = location.state?.selectedTier || "Starter";
  const userDetails = location.state?.userDetails;

  // Determine if "Attach creatives" is optional (Growth or Premium)
  const isCreativesOptional = selectedTier === "Growth" || selectedTier === "Premium";

  const steps = [
    { name: "User Details" },
    { name: "Post a Job" },
    { name: "Attach Creatives", optional: isCreativesOptional },
  ];

  const handleContinue = () => {
    // Navigate to next step
    navigate("/attach-creatives", { state: { selectedTier, userDetails } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-2xl px-4 py-8">
        {/* Step Indicator */}
        <StepIndicator steps={steps} currentStep={1} />

        {/* Placeholder Card */}
        <Card className="mt-8 p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">
              Post a Job
            </h1>
            <p className="text-muted-foreground mt-1">
              This page will contain the job posting form
            </p>
          </div>

          <div className="py-12 text-center text-muted-foreground">
            <p>Job posting form coming soon...</p>
          </div>

          <Button onClick={handleContinue} className="w-full mt-6">
            Continue to Attach Creatives
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default PostJob;
