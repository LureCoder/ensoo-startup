import { Feature } from "@/types/feature";
import { t } from "@/i18n";

const SingleFeature = ({ feature, language }: { feature: Feature; language: string }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {t(`features.items.${title}`, language)}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {t(`features.items.${title}_desc`, language)}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
