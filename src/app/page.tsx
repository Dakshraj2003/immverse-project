import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
// import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        {/* <TestimonialsSection /> */}
        <Footer />
      </main>
    </>
  );
}
