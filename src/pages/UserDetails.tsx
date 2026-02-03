import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import StepIndicator from "@/components/StepIndicator";

const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTier = location.state?.selectedTier || "Starter";

  // Determine if "Attach creatives" is optional (Growth or Premium)
  const isCreativesOptional = selectedTier === "Growth" || selectedTier === "Premium";

  const steps = [
    { name: "User Details" },
    { name: "Post a Job" },
    { name: "Attach Creatives", optional: isCreativesOptional },
  ];

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    email: "",
    contactNo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend to save user details
    console.log("User details submitted:", { ...formData, selectedTier });
    // Navigate to next step
    navigate("/post-job", { state: { selectedTier, userDetails: formData } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-2xl px-4 py-8">
        {/* Step Indicator */}
        <StepIndicator steps={steps} currentStep={0} />

        {/* Form Card */}
        <Card className="mt-8 p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">
              Tell us about yourself
            </h1>
            <p className="text-muted-foreground mt-1">
              We need a few details to get you started with the {selectedTier} plan
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                name="designation"
                type="text"
                placeholder="HR Manager"
                value={formData.designation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactNo">Contact No</Label>
              <Input
                id="contactNo"
                name="contactNo"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.contactNo}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full mt-6">
              Continue to Post a Job
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default UserDetails;
