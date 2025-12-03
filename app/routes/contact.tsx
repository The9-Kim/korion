import type { Route } from "./+types/contact";
import Layout from "../components/Layout";
import { useTranslation, Trans } from "react-i18next";
import Hero from "~/components/landing/Hero";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Korion - Contact" },
    { name: "description", content: "Contact Korion" },
  ];
}

export default function Contact() {
  const { t } = useTranslation();
  return (
    <Layout>
      <div className="relative bg-white">
        <Hero image="/images/produce/m-6_hero.png" />
        <div
          className="absolute top-0 left-0 w-full flex items-center justify-center z-20 lg:px-50 px-8"
        >
          {/* Content Card */}
          <div className="relative z-10 bg-white/90 backdrop-blur-sm w-full rounded-tr-[40px] overflow-hidden shadow-xl xl:my-40 lg:my-30 my-20">
            <div className="p-12 md:p-24 md:pt-32">
              <div className="mb-10">
                <img src="/images/logo.png" alt="Korion" className="h-5 md:h-11 w-auto" />
              </div>

              <div className="space-y-6 text-gray-700">
                <div className="flex items-center gap-4">
                  <img src="/images/icons/email_icon.png" alt="email" width={32} height={32} className="shrink-0" />
                  <span className="font-gothic lg:text-[23px] text-sm">{t("contact.email")} KoSeongho@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/images/icons/phone_icon.png" alt="phone" width={32} height={32} className="shrink-0" />
                  <span className="font-gothic lg:text-[23px] text-sm">{t("contact.phone")} +82 063 535 8294</span>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/images/icons/phone_icon.png" alt="mobile" width={32} height={32} className="shrink-0" />
                  <span className="font-gothic lg:text-[23px] text-sm">{t("contact.mobile")} +82 010 8411 9944</span>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/images/icons/fax_icon.png" alt="fax" width={32} height={32} className="shrink-0" />
                  <span className="font-gothic lg:text-[23px] text-sm">{t("contact.fax")} +82 0504 333 9944</span>
                </div>

                <div className="flex items-center gap-4">
                  <img src="/images/icons/location_icon.png" alt="address" width={32} height={32} className="shrink-0" />
                  <span className="font-gothic lg:text-[23px] text-sm">{t("contact.address")} 대한민국 전라북도 정읍시 서부산업도로 570-69</span>
                </div>
              </div>
              <div className="mt-12 flex w-full justify-end opacity-15 ml-20 absolute">
                <img src="/images/logo.png" alt="Korion" className="h-16 md:h-20 w-auto" />
              </div>
              <div className="mt-40 relative">
                <div className="relative z-10 flex items-center justify-start gap-4">

                  <div className="text-sm md:text-[50px] tracking-tighter font-gothic font-bold text-brand-navy whitespace-nowrap">
                    {t("contact.serviceTitle")}
                  </div>
                  <div className="w-[5px] h-16 bg-brand-blue-light mx-2" />
                  <div className="text-dark-gray text-sm md:text-[22px] font-gothic leading-relaxed pt-1">
                    <Trans i18nKey="contact.serviceDesc" components={{ br: <br /> }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
