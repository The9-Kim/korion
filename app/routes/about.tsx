import type { Route } from "./+types/about";
import Layout from "../components/Layout";
import { Link } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import Hero from "~/components/landing/Hero";
import HeroBottom from "~/components/landing/HeroBottom";

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
      <div className="relative bg-white">
        <Hero image="/images/produce/m-4_hero.png" />
        <div
          className="absolute top-0 left-0 w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-0 z-20"
        >
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-secondary-200">
            {/* Replace with actual background image */}
            <div className="absolute inset-0 bg-[url('/placeholder-tractor-bg.jpg')] bg-cover bg-center opacity-50" />
          </div>

          {/* Content Card */}
          <div className="w-full lg:px-50 px-8">
            <div className="relative z-10 bg-white/90 backdrop-blur-sm w-full rounded-tr-[40px] p-12 lg:p-24 text-center shadow-xl">
              <h2 className="text-sm lg:text-[20px] font-bold font-gothic text-dark-gray tracking-tighter leading-11">
                {t("about.title")}
              </h2>

              <div className="md:mt-8 md:mb-12 my-4 flex items-center justify-around">
                <img src="/images/logo.png" alt="Korion" className="h-6 w-auto" />
              </div>

              <div className="space-y-4 text-dark-gray leading-6 text-xs lg:text-[13px] break-keep tracking-tighter font-gothic">
                <p>
                  <Trans i18nKey="about.desc1" components={{ br: <br className="hidden lg:block" /> }} />
                </p>
              </div>

              <div className="my-8" />

              <div className="space-y-4 text-dark-gray leading-6 text-xs lg:text-[13px] break-keep tracking-tighter font-gothic">
                <p>
                  <Trans i18nKey="about.desc2" components={{ br: <br className="hidden lg:block" /> }} />
                </p>
              </div>

              <div className="mt-12">
                <Link
                  to="/contact"
                  className="inline-block bg-brand-gold-dark text-white text-[12px] transition-colors w-35 rounded-[10px] py-2"
                >
                  {t("about.contactBtn")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
