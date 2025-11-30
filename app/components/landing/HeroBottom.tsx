import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroBottom() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-24 bg-white overflow-hidden">
      {/* Background Image Placeholder for Bottom Section */}
      <div className="absolute inset-0 bg-[url('/placeholder-bg.jpg')] bg-cover bg-center opacity-10">
        {/* Note: User can replace this div or the bg-image with an actual <img> tag later */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/50"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-5xl md:text-[100px]  text-brand-navy mb-8 tracking-tight font-normal">{t("hero.title")}</h2>
        <p className="text-2xl md:text-[50px] text-brand-blue-light  mb-4">{t("hero.subtitle")}</p>
        <p className="text-lg md:text-[40px] text-dark-gray  tracking-wide break-keep font-gothic">
          {t("hero.slogan")}
        </p>
      </div>
    </section>
  );
}
