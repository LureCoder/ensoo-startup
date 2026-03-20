import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
  description: "This is Blog Details Page for Startup Nextjs Template",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="overflow-hidden pb-[120px] pt-[120px] dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <div className="mb-8 rounded-md bg-white p-6 shadow-one dark:bg-gray-dark sm:p-[55px] lg:mb-0 lg:px-8 xl:p-[55px]">
                  <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Blog Post Title
                  </h2>
                  <p className="mb-6 text-base font-medium text-body-color dark:text-body-color-dark">
                    This is a blog post description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className="mb-6 flex items-center border-b border-body-color/10 pb-6 dark:border-white/10">
                    <Image
                      src="/images/blog/author-01.png"
                      alt="author"
                      width={50}
                      height={50}
                      className="mr-4 h-[50px] w-[50px] rounded-full"
                    />
                    <div>
                      <h4 className="text-base font-semibold text-black dark:text-white">
                        Author Name
                      </h4>
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        Jan 01, 2024
                      </p>
                    </div>
                  </div>
                  <SharePost />
                  <TagButton text="Next.js" />
                  <TagButton text="Tailwind" />
                  <TagButton text="React" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;