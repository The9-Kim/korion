import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";



export default function Features() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isEn = i18n.language === "en";

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-gold-light lg:text-[15px] text-xs">{t("features.badge")}</span>
          <h2 className="lg:text-[20px] text-sm font-gothic text-dark-gray mt-2">{t("features.title")}</h2>
          <h3 className="lg:text-[27px] text-lg text-brand-navy font-gothic font-extrabold mt-3">{t("features.subtitle")}</h3>
        </div>
        <div className="items-center justify-center flex flex-col">
          <h2 className="text-sm lg:text-[20px] font-bold font-gothic text-dark-gray tracking-tighter leading-11">
            {t("about.title")}
          </h2>

          <div className="md:mt-8 md:mb-12 my-5 flex items-center justify-around">
            <img src="/images/logo.png" alt="Korion" className="h-6 w-auto opacity-35" />
          </div>

          <div className={`my-4 text-dark-gray leading-6 text-xs lg:text-[20px]/8 break-keep tracking-tighter font-gothic`}>
            <p className="text-center">
              <Trans i18nKey="about.desc1" components={{ br: <br className="hidden lg:block" /> }} />
            </p>
          </div>

          <div className="mt-12">
            <Link
              to="/contact"
              className="inline-block bg-brand-gold-dark text-white text-[12px] transition-colors w-35 rounded-[10px] py-2 text-center"
            >
              {t("about.contactBtn")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
