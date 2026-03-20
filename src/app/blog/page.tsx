"use client";

import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { t } from "@/i18n";

const Blog = () => {
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
        pageName={t('blog.breadcrumb.pageName', language)}
        description={t('blog.breadcrumb.description', language)}
        language={language}
      />

      <section className="pb-[120px] pt-[120px] dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} language={language} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;