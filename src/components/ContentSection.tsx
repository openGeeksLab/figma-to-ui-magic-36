import React from 'react';

interface ContentSectionProps {
  title: string;
  highlightedWord?: string;
  description: string;
  additionalDescription?: string;
  imageUrl?: string;
  imageAlt?: string;
  reverse?: boolean;
  showButton?: boolean;
  buttonText?: string;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  highlightedWord,
  description,
  additionalDescription,
  imageUrl,
  imageAlt = "",
  reverse = false,
  showButton = true,
  buttonText = "Get a Free Sample",
  className = ""
}) => {
  const renderTitle = () => {
    if (!highlightedWord) {
      return <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">{title}</h2>;
    }

    const parts = title.split(highlightedWord);
    return (
      <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
        {parts[0]}
        <span className="text-[#DCB481]">{highlightedWord}</span>
        {parts[1]}
      </h2>
    );
  };

  const contentElement = (
    <div className="flex justify-center items-start gap-72 flex-1 max-md:w-full max-md:flex-col">
      <div className="flex-1 max-md:w-full">
        {renderTitle()}
      </div>
      <div className="flex flex-col items-start gap-8 flex-1">
        <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
          {description}
        </div>
        {additionalDescription && (
          <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
            {additionalDescription}
          </div>
        )}
        {showButton && (
          <button className="flex h-11 justify-center items-center gap-2.5 bg-[#DCB481] px-6 py-4 rounded-[28px] text-[#454545] text-base font-normal hover:bg-[#c9a373] transition-colors">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );

  const imageElement = imageUrl ? (
    <div className="flex justify-center items-center flex-1 max-md:w-full max-md:h-[400px]">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-[539px] h-[539px] object-cover rounded-[28px] max-md:w-full max-md:h-[400px]"
      />
    </div>
  ) : null;

  return (
    <section className={`flex justify-between items-center w-full px-8 py-24 max-md:px-5 max-md:py-[60px] max-sm:px-4 max-sm:py-10 ${reverse ? 'max-md:flex-col-reverse' : 'max-md:flex-col'} max-md:gap-10 ${className}`}>
      {reverse ? (
        <>
          {contentElement}
          {imageElement}
        </>
      ) : (
        <>
          {imageElement}
          {contentElement}
        </>
      )}
    </section>
  );
};

export default ContentSection;
