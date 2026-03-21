import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import sectionConfig from "@/config/sectionsVisibility";

export default function Home() {
  return (
    <>
      <ScrollUp />
      {sectionConfig.hero && <Hero />}
      {sectionConfig.features && <Features />}
      {sectionConfig.video && <Video />}
      {sectionConfig.brands && <Brands />}
      {sectionConfig.aboutSectionOne && <AboutSectionOne />}
      {sectionConfig.aboutSectionTwo && <AboutSectionTwo />}
      {sectionConfig.testimonials && <Testimonials />}
      {sectionConfig.pricing && <Pricing />}
      {sectionConfig.blog && <Blog />}
      {sectionConfig.contact && <Contact />}
    </>
  );
}