import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
  useTranslation?: boolean;
  translationKey?: string;
  highlightTranslationKey?: string;
  descriptionTranslationKey?: string;
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
  className = "",
  useTranslation: useTranslationProp = false,
  translationKey,
  highlightTranslationKey,
  descriptionTranslationKey
}) => {
  const { t, i18n } = useTranslation();
  const renderTitle = () => {
    console.log('ContentSection debug:', {
      useTranslationProp,
      translationKey,
      highlightTranslationKey,
      currentLanguage: i18n.language,
      translatedTitle: translationKey ? t(translationKey) : 'no key',
      fallbackTitle: title
    });
    
    const displayTitle = useTranslationProp && translationKey ? t(translationKey) : title;
    const displayHighlight = useTranslationProp && highlightTranslationKey ? t(highlightTranslationKey) : highlightedWord;
    
    if (!displayHighlight) {
      return <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">{displayTitle}</h2>;
    }

    const parts = displayTitle.split(displayHighlight);
    return (
      <h2 className="text-[#454545] text-[42px] font-bold max-md:text-[32px] max-sm:text-2xl text-left">
        {parts[0]}
        <span className="text-[#DCB481]">{displayHighlight}</span>
        {parts[1]}
      </h2>
    );
  };

  const contentElement = (
    <div className={`flex flex-col items-start gap-6 flex-1 max-md:w-full ${reverse ? 'ml-36 max-lg:ml-24 max-md:ml-0' : 'mr-36 max-lg:mr-24 max-md:mr-0'}`}>
      {renderTitle()}
      <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
        {useTranslationProp && descriptionTranslationKey ? t(descriptionTranslationKey) : description}
      </div>
      {additionalDescription && (
        <div className="text-[#454545] text-lg font-normal leading-[26.28px] max-sm:text-base">
          {additionalDescription}
        </div>
      )}
      {showButton && (
        <Link to="/products">
          <button className="flex h-11 justify-center items-center gap-2.5 bg-[#DCB481] px-6 py-4 rounded-[28px] text-[#454545] text-base font-normal hover:bg-[#c9a373] transition-colors">
            {useTranslationProp ? t('getFreeSample') : buttonText}
          </button>
        </Link>
      )}
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
    <section className={`w-full flex justify-between items-center px-8 py-24 gap-12 max-xl:px-6 max-lg:px-6 max-md:flex-col max-md:px-5 max-sm:px-4 max-md:gap-10 max-md:py-[60px] max-sm:py-10 ${reverse ? 'max-md:flex-col-reverse' : ''} ${className}`}>
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
