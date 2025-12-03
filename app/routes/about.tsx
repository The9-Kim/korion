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
        <HeroBottom showText={false} />

        <div
          className="absolute top-0 left-0 w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-20 px-0 z-20"
        >
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-secondary-200">
            {/* Replace with actual background image */}
            <div className="absolute inset-0 bg-[url('/placeholder-tractor-bg.jpg')] bg-cover bg-center opacity-50" />
          </div>

          {/* Content Card */}
          <div className="w-full lg:px-50 px-8">
            <div className="relative z-10 bg-white/90 backdrop-blur-sm w-full rounded-tr-[40px] p-12 lg:p-16 text-center shadow-xl">
              <h2 className="text-2xl lg:text-[40px] text-dark-gray tracking-tighter">
                {t("about.title")}
              </h2>

              <div className="mt-8 mb-12 flex items-center justify-around">
                <img src="/images/logo.png" alt="Korion" className="h-10 w-auto" />
              </div>

              <div className="space-y-4 text-dark-gray leading-relaxed text-sm lg:text-[25px] break-keep tracking-tighter">
                <p>
                  <Trans i18nKey="about.desc1" components={{ br: <br className="hidden lg:block" /> }} />
                </p>
                <p>
                  <Trans i18nKey="about.desc2" components={{ br: <br className="hidden lg:block" /> }} />
                </p>
                <p>
                  <Trans i18nKey="about.desc3" components={{ br: <br className="hidden lg:block" /> }} />
                </p>
              </div>

              <div className="my-8" />

              <div className="space-y-4 text-dark-gray leading-relaxed text-sm lg:text-[25px] break-keep tracking-tighter">
                <p>
                  <Trans i18nKey="about.desc4" components={{ br: <br className="hidden lg:block" /> }} />
                </p>
                <p>
                  <Trans i18nKey="about.desc5" components={{ br: <br className="hidden lg:block" /> }} />
                </p>
              </div>

              <div className="mt-12">
                  <Link
                    to="/contact"
                    className="inline-block bg-brand-gold text-white px-8 py-3 rounded-md transition-colors"
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
