import { useLocation, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Header from "@/components/Header";
import StepIndicator from "@/components/StepIndicator";
import { Upload, X, Image, Video } from "lucide-react";

interface CreativeFile {
  file: File;
  preview: string;
  type: "image" | "video";
}

interface CreativeSlot {
  label: string;
  ratio: string;
  dimensions: string;
  aspectRatio: number;
  file: CreativeFile | null;
}

const AttachCreatives = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedTier = location.state?.selectedTier || "Starter";
  const userDetails = location.state?.userDetails;

  // Determine tier number for messaging
  const getTierNumber = () => {
    if (selectedTier === "Starter") return 1;
    if (selectedTier === "Growth") return 2;
    return 3;
  };

  const tierNumber = getTierNumber();

  // Determine if "Attach creatives" is optional (Growth or Premium)
  const isCreativesOptional = selectedTier === "Growth" || selectedTier === "Premium";

  const steps = [
    { name: "User Details" },
    { name: "Post a Job" },
    { name: "Attach Creatives", optional: isCreativesOptional },
  ];

  const [creatives, setCreatives] = useState<CreativeSlot[]>([
    { label: "9x16", ratio: "9:16", dimensions: "1080x1920", aspectRatio: 9 / 16, file: null },
    { label: "1x1", ratio: "1:1", dimensions: "1200x1200", aspectRatio: 1, file: null },
    { label: "4x3", ratio: "4:3", dimensions: "1200x628", aspectRatio: 1200 / 628, file: null },
  ]);

  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleFileSelect = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isVideo = file.type.startsWith("video/");
    const isImage = file.type.startsWith("image/");

    if (!isVideo && !isImage) {
      alert("Please upload an image or video file");
      return;
    }

    const preview = URL.createObjectURL(file);
    const newCreatives = [...creatives];
    newCreatives[index].file = {
      file,
      preview,
      type: isVideo ? "video" : "image",
    };
    setCreatives(newCreatives);
  };

  const handleRemoveFile = (index: number) => {
    const newCreatives = [...creatives];
    if (newCreatives[index].file) {
      URL.revokeObjectURL(newCreatives[index].file!.preview);
      newCreatives[index].file = null;
    }
    setCreatives(newCreatives);
    // Reset the file input
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]!.value = "";
    }
  };

  const getTierMessage = () => {
    switch (tierNumber) {
      case 1:
        return "Please submit a creative to proceed with the ad. Or you can post the creative later via the dashboard, and then we'll start the advertisements.";
      case 2:
        return "We will autogenerate images to start the advertisement. If you want to submit your own creatives, you can submit here, or later add it in the dashboard.";
      case 3:
        return "We will autogenerate videos to start the advertisement. If you want to submit your own creatives, you can submit here, or later add it in the dashboard.";
      default:
        return "";
    }
  };

  const handleSubmit = () => {
    // TODO: Connect to backend to upload creatives
    console.log("Creatives submitted:", creatives);
    // Navigate to confirmation page
    navigate("/confirmation", { 
      state: { 
        selectedTier,
        userDetails,
        creatives: creatives.filter(c => c.file !== null)
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-4xl px-4 py-8">
        {/* Step Indicator */}
        <StepIndicator steps={steps} currentStep={2} />

        {/* Main Card */}
        <Card className="mt-8 p-6 md:p-8">
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-foreground">
              Attach Creatives
            </h1>
            <p className="text-muted-foreground mt-1">
              Upload your creative assets for the advertisement
            </p>
          </div>

          {/* Tier-specific Message */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-5 mb-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5">
                <span className="text-primary-foreground text-xs font-bold">i</span>
              </div>
              <p className="text-base font-medium text-foreground">
                {getTierMessage()}
              </p>
            </div>
          </div>

          {/* Creative Upload Slots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {creatives.map((creative, index) => (
              <div key={creative.label} className="space-y-3">
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">{creative.label}</h3>
                  <p className="text-sm text-muted-foreground">{creative.dimensions}</p>
                </div>

                <div className="relative border-2 border-dashed border-muted-foreground/30 rounded-lg overflow-hidden bg-muted/20">
                  <AspectRatio ratio={creative.aspectRatio}>
                    {creative.file ? (
                      <div className="relative w-full h-full">
                        {creative.file.type === "image" ? (
                          <img
                            src={creative.file.preview}
                            alt={`${creative.label} creative`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <video
                            src={creative.file.preview}
                            className="w-full h-full object-cover"
                            controls
                          />
                        )}
                        <button
                          onClick={() => handleRemoveFile(index)}
                          className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-background/80 rounded text-xs flex items-center gap-1">
                          {creative.file.type === "image" ? (
                            <Image className="h-3 w-3" />
                          ) : (
                            <Video className="h-3 w-3" />
                          )}
                          <span className="truncate max-w-[100px]">
                            {creative.file.file.name}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center w-full h-full text-muted-foreground">
                        <Upload className="h-8 w-8 mb-2" />
                        <p className="text-xs text-center px-2">
                          Click to upload
                        </p>
                      </div>
                    )}
                  </AspectRatio>
                </div>

                <input
                  ref={(el) => (fileInputRefs.current[index] = el)}
                  type="file"
                  accept="image/*,video/*"
                  onChange={(e) => handleFileSelect(index, e)}
                  className="hidden"
                  id={`creative-${index}`}
                />
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => fileInputRefs.current[index]?.click()}
                >
                  <Upload className="h-4 w-4 mr-2" />
                  {creative.file ? "Replace" : "Upload"}
                </Button>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <Button onClick={handleSubmit} className="w-full">
            {tierNumber === 1 ? "Submit Creatives" : "Continue"}
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default AttachCreatives;
