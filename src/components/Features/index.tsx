"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { useEffect, useState } from "react";
import { t } from "@/i18n";

const Features = () => {
  // Get current locale - default to 'en' on server, then use localStorage value on client
  const [language, setLanguage] = useState(() => {
    // On server, default to 'en'
    // On client, try to get from localStorage
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage || 'en';
    }
    return 'en';
  });
  
  // Update language from localStorage after hydration and listen for language changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Listen for language changes using custom event
      const handleLanguageChange = () => {
        const newLanguage = localStorage.getItem('language') || 'en';
        setLanguage(newLanguage);
      };
      
      window.addEventListener('languageChange', handleLanguageChange);
      
      return () => {
        window.removeEventListener('languageChange', handleLanguageChange);
      };
    }
  }, []);

  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={t('features.title', language)}
            paragraph={t('features.description', language)}
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} language={language} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
