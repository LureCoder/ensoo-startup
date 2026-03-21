import AnimatedText from "./AnimatedText";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string | string[];
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  const renderParagraph = () => {
    if (Array.isArray(paragraph)) {
      return paragraph.map((line, index) => (
        <p key={index} className="text-base leading-relaxed! text-body-color md:text-lg mb-4 last:mb-0">
          <AnimatedText>{line}</AnimatedText>
        </p>
      ));
    }
    return (
      <p className="text-base leading-relaxed! text-body-color md:text-lg">
        <AnimatedText>{paragraph}</AnimatedText>
      </p>
    );
  };

  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
          <AnimatedText>{title}</AnimatedText>
        </h2>
        {renderParagraph()}
      </div>
    </>
  );
};

export default SectionTitle;
