import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error Page | Free Next.js Template for Startup and SaaS",
  description: "This is Error Page for Startup Nextjs Template",
  // other metadata
};

const ErrorPage = () => {
  return (
    <>
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-8 text-[50px] font-bold leading-none text-black dark:text-white sm:text-[80px]">
                  404
                </h2>
                <h3 className="mb-3 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl sm:leading-tight">
                  Page Not Found
                </h3>
                <p className="mb-7 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark">
                  Sorry, the page you are looking for does not exist.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-white duration-300 hover:bg-primary/90"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;