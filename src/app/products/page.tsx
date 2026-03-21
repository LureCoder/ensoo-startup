"use client";

import SingleProduct from "@/components/Products/SingleProduct";
import productData from "@/components/Products/productData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useEffect, useState } from "react";
import { t18n } from "@/i18n";
import { useLanguage } from "@/hooks/useLanguage";

const ProductsPage = () => {
  // Use custom hook for language management
  const language = useLanguage();

  return (
    <>
      <Breadcrumb
        pageName={t18n('products.breadcrumb.pageName', language)}
        description={t18n('products.breadcrumb.description', language)}
        language={language}
      />

      <section className="pb-[120px] pt-[120px] dark:bg-gray-dark">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {productData.map((product, index) => (
              <div
                key={product.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <div className="mb-8 border-b border-body-color/10 pb-8 dark:border-white/10">
                  <SingleProduct product={product} language={language} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
