import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingTable from "@/components/PricingTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PricingTable />
      </main>
    </div>
  );
};

export default Index;
