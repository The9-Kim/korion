
import React from "react";
import { useTranslation } from "react-i18next";

interface HeroProps {
  image?: string;
  video?: string;
  title?: string;
  subtitle?: string;
}

export default function Hero({ image, video, subtitle }: HeroProps) {
  const { t } = useTranslation();

  const displaySubtitle = subtitle || t("hero.subtitle");

  return (
    <div className="flex flex-col w-full">
      {/* Top Section: Main Banner / Slider */}
      <section className="relative w-full 2xl:h-[1080px] bg-gray-100 overflow-hidden group aspect-[16/9]">
        {video ? (
          // Video Mode (for Home)
          <>
            <div className="absolute inset-0 bg-secondary-800 aspect-[16/9]">
              <video
                ref={(el) => {
                  if (el) {
                    el.muted = true; // Ensure muted property is set
                    el.playsInline = true; // Ensure playsInline property is set
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover aspect-[16/9]"
                src={video}
                poster={image}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            {/* Dark overlay for better text visibility */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 aspect-[16/9]" />
          </>
        ) : image ? (
          // Static Image Mode (for Machines, etc.)
          <>
            <div className="absolute inset-0 bg-secondary-800 aspect-[16/9]">
              <div
                className="absolute inset-0 bg-cover bg-center aspect-[16/9]"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </div>
          </>
        ) : (
          // Default Slider Mode (for Home)
          <>
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-secondary-200 flex items-center justify-center aspect-[16/9]">
              <span className="text-secondary-400 text-lg ">Main Banner Image Placeholder</span>
            </div>

            {/* Navigation Arrows (Only for slider) */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-black/20 rounded-full transition-colors z-20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-black/20 rounded-full transition-colors z-20">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Overlay Content (Top Left Logo) - Common for both */}
        <div className="absolute left-0 md:left-40 top-0 z-10 w-full md:w-auto flex justify-start">
          <div className="bg-black/33 py-4 px-6 md:p-20 inline-block rounded-br-[15px] md:rounded-br-[30px] flex flex-col justify-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white max-w-[60%] md:max-w-none">
            <img src="/images/logo.png" alt="Korion" className="h-5 md:h-10 w-auto brightness-0 invert mb-2 md:mb-4" />
            <p className="text-sm md:text-[40px] font-light leading-tight whitespace-pre-line">{displaySubtitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
