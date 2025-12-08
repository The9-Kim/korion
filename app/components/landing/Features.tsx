import React from "react";
import { Trans, useTranslation } from "react-i18next";



export default function Features() {
  const { t } = useTranslation();

  const features = [
    { id: 1, title: t("features.items.1.title"), desc: t("features.items.1.desc") },
    { id: 2, title: t("features.items.2.title"), desc: t("features.items.2.desc") },
    { id: 3, title: t("features.items.3.title"), desc: t("features.items.3.desc") },
    { id: 4, title: t("features.items.4.title"), desc: t("features.items.4.desc") },
    { id: 5, title: t("features.items.5.title"), desc: t("features.items.5.desc") },
    { id: 6, title: t("features.items.6.title"), desc: t("features.items.6.desc") },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold-light lg:text-[15px] text-xs">{t("features.badge")}</span>
          <h2 className="lg:text-[20px] text-sm font-gothic text-dark-gray mt-2">{t("features.title")}</h2>
          <h3 className="lg:text-[27px] text-lg text-brand-navy font-gothic font-extrabold mt-2">{t("features.subtitle")}</h3>
        </div>
        <div className="items-center justify-center flex">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-light-gray/30 max-w-[700px] shadow-xl">
            {features.map((feature) => (
              <div key={feature.id} className="h-[184px] flex flex-col items-center border border-white group py-5">
                <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center mb-4 shadow-sm bg-white">
                  <span className="text-brand-gold-lighter text-[15px]/[20px] font-gothic font-bold">Check</span>
                  <span className="text-brand-gold-lighter text-[15px]/[20px] font-gothic font-bold">Point.0{feature.id}</span>
                </div>
                <h4 className="font-gothic font-bold text-[14px]/[17px] text-brand-navy break-keep text-center px-8">
                  <Trans i18nKey={feature.desc} components={{ br: <br /> }} />
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
