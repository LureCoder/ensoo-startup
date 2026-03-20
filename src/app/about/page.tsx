"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { t } from "@/i18n";

const AboutPage = () => {
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
      <Breadcrumb
        pageName={t('about.breadcrumb.pageName', language)}
        description={t('about.breadcrumb.description', language)}
        language={language}
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;