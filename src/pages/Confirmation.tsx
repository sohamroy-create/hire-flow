import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import { CheckCircle, Clock, Mail } from "lucide-react";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto max-w-2xl px-4 py-16">
        <Card className="p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Thank You!
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-8">
            Your request has been received successfully.
          </p>

          {/* Main Message */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                What's Next?
              </span>
            </div>
            <p className="text-base text-foreground">
              We will reach out to you within the next <strong>24 hours</strong> for finalising the payment.
            </p>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <span className="text-sm">
              Meanwhile, your job is live on our website.
            </span>
          </div>

          {/* Action Button */}
          <Button 
            onClick={() => navigate("/")} 
            className="w-full md:w-auto md:px-12"
          >
            Back to Home
          </Button>
        </Card>
      </main>
    </div>
  );
};

export default Confirmation;
