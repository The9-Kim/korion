
import React from "react";
import { useTranslation } from "react-i18next";

interface HeroProps {
  image?: string;
  title?: string;
  subtitle?: string;
}

export default function Hero({ image, title, subtitle }: HeroProps) {
  const { t } = useTranslation();

  // Use props if provided, otherwise fallback to translation keys (for home page)
  const displayTitle = title || t("hero.title");
  const displaySubtitle = subtitle || t("hero.subtitle");

  return (
    <div className="flex flex-col w-full">
      {/* Top Section: Main Banner / Slider */}
      <section className="relative w-full h-[600px] bg-gray-100 overflow-hidden group">
        {image ? (
          // Static Image Mode (for Machines, etc.)
          <>
            <div className="absolute inset-0 bg-secondary-800">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-transparent" />
          </>
        ) : (
          // Default Slider Mode (for Home)
          <>
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-secondary-200 flex items-center justify-center">
              <span className="text-secondary-400 text-lg font-medium">Main Banner Image Placeholder</span>
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
        <div className="absolute top-12 left-12 md:top-20 md:left-20 z-10">
          <div className="bg-secondary-800/80 backdrop-blur-sm p-6 rounded-sm inline-block text-white">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">{displayTitle}</h1>
            <p className="text-lg md:text-xl font-light mt-1">{displaySubtitle}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
