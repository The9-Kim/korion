import type { Route } from "./+types/about";
import Layout from "../components/Layout";
import { useTranslation, Trans } from "react-i18next";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Korion - About" },
    { name: "description", content: "About Korion Agricultural Machinery" },
  ];
}

export default function About() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="relative w-full min-h-[calc(100vh-80px)] bg-gray-100 flex items-center justify-center py-20 px-4">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-secondary-200">
          {/* Replace with actual background image */}
          <div className="absolute inset-0 bg-[url('/placeholder-tractor-bg.jpg')] bg-cover bg-center opacity-50" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-white/90 backdrop-blur-sm max-w-4xl w-full rounded-[40px] p-12 md:p-16 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
            {t("about.title")}
          </h2>

          <div className="mb-8">
            <span className="text-4xl md:text-5xl font-bold text-brand-gold uppercase tracking-widest">{t("hero.title")}</span>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base break-keep">
            <p>
              <Trans i18nKey="about.desc1" components={{ br: <br className="hidden md:block" /> }} />
            </p>
            <p>
              <Trans i18nKey="about.desc2" components={{ br: <br className="hidden md:block" /> }} />
            </p>
            <p>
              <Trans i18nKey="about.desc3" components={{ br: <br className="hidden md:block" /> }} />
            </p>
          </div>

          <div className="my-8 w-16 h-[1px] bg-gray-300 mx-auto" />

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base break-keep">
            <p>
              <Trans i18nKey="about.desc4" components={{ br: <br className="hidden md:block" /> }} />
            </p>
            <p>
              <Trans i18nKey="about.desc5" components={{ br: <br className="hidden md:block" /> }} />
            </p>
          </div>

          <div className="mt-12">
            <button className="bg-brand-gold text-white px-8 py-3 rounded-md font-bold hover:bg-brand-gold transition-colors">
              {t("about.contactBtn")}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
