import React from "react";
import { useTranslation } from "react-i18next";



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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-500 font-medium text-sm uppercase tracking-wider">{t("features.badge")}</span>
          <h2 className="text-2xl font-light text-gray-500 mt-2">{t("features.title")}</h2>
          <h3 className="text-3xl font-bold text-secondary-900 mt-1">{t("features.subtitle")}</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-primary-500 group">
              <div className="w-20 h-20 rounded-full border-2 border-primary-100 flex items-center justify-center mb-4 group-hover:border-primary-500 transition-colors">
                <div className="text-center">
                  <span className="block text-primary-500 font-bold text-sm">Check</span>
                  <span className="block text-primary-500 font-bold text-sm">Point.0{feature.id}</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 font-medium break-keep leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
