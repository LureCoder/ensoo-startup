"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { t } from "@/i18n";

const SigninPage = () => {
  // Get current locale - default to 'en' on server, then update from localStorage on client
  const [language, setLanguage] = useState('en');
  
  // Update language from localStorage after hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
      
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
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto max-w-[500px] overflow-hidden rounded-lg bg-white px-8 py-10 shadow-one dark:bg-gray-dark sm:p-[55px]">
                <h3 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  {t('signin.title', language)}
                </h3>
                <p className="mb-7 text-base font-medium text-body-color dark:text-body-color-dark">
                  {t('signin.description', language)}
                </p>
                <form>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      {t('signin.email', language)}
                    </label>
                    <input
                      type="email"
                      placeholder={t('signin.email', language)}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="mb-2 block text-sm font-medium text-black dark:text-white">
                      {t('signin.password', language)}
                    </label>
                    <input
                      type="password"
                      placeholder={t('signin.password', language)}
                      className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:text-white"
                    />
                  </div>
                  <div className="mb-6 flex items-center justify-between">
                    <label className="flex cursor-pointer items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm font-medium text-body-color dark:text-body-color-dark">
                        {t('signin.rememberMe', language)}
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      {t('signin.forgotPassword', language)}
                    </a>
                  </div>
                  <div className="mb-6">
                    <button className="flex w-full items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-semibold text-white duration-300 hover:bg-primary/90">
                      {t('signin.signinButton', language)}
                    </button>
                  </div>
                </form>
                <p className="text-center text-base font-medium text-body-color dark:text-body-color-dark">
                  {t('signin.dontHaveAccount', language)} {" "}
                  <a href="/signup" className="text-primary hover:underline">
                    {t('signin.signup', language)}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SigninPage;