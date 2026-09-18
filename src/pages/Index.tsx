import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import HeroSection from "@/components/home/HeroSection";

import ServicesPreview from "@/components/home/ServicesPreview";

import AboutSection from "@/components/home/AboutSection";

import TestimonialsSection from "@/components/home/TestimonialsSection";
import heroImage from "@/assets/hero-reception-wide.jpg.asset.json";

const LOVABLE_ASSET_HOST =
  "https://86813c44-950e-47a0-a04b-b5764be49fcc.lovableproject.com";

const assetUrl = (asset: { url: string }) =>
  `${LOVABLE_ASSET_HOST}${asset.url}`;

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Eliza Haimi DDS Great Neck Cosmetic Dentist"
        description="Boutique cosmetic and family dentistry in Great Neck, NY. Conservative smile design, Invisalign, veneers, and implants with Dr. Eliza Haimi."
        path="/"
      />
      <HeroSection heroImage={assetUrl(heroImage)} />
      
      <ServicesPreview />
      
      <AboutSection />
      
      <TestimonialsSection />
    </Layout>
  );
};

export default Index;
