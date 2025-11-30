import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroBottom() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-24 2xl:py-0 2xl:h-[440px] bg-white overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/images/main/hero_bottom_bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/80"></div>
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
