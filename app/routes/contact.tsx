import type { Route } from "./+types/contact";
import Layout from "../components/Layout";
import { useTranslation, Trans } from "react-i18next";

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
      <div className="relative w-full min-h-[calc(100vh-80px)] bg-gray-100 flex items-center justify-center py-20 px-4">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-secondary-200">
          {/* Replace with actual background image */}
          <div className="absolute inset-0 bg-[url('/placeholder-tractor-bg.jpg')] bg-cover bg-center opacity-50" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-white/90 backdrop-blur-sm max-w-4xl w-full rounded-[40px] overflow-hidden shadow-xl">
          <div className="p-12 md:p-16">
            <div className="mb-10">
              <span className="text-4xl md:text-5xl font-bold text-brand-gold uppercase tracking-widest">{t("hero.title")}</span>
            </div>

            <div className="space-y-6 text-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue-light flex items-center justify-center text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-lg">{t("contact.email")} KoSeongho@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue-light flex items-center justify-center text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-lg">{t("contact.phone")} +82 063 535 8294</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue-light flex items-center justify-center text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="text-lg">{t("contact.mobile")} +82 010 8411 9944</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue-light flex items-center justify-center text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-lg">{t("contact.fax")} +82 0504 333 9944</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-blue-light flex items-center justify-center text-white shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-lg">{t("contact.address")} 대한민국 전라북도 정읍시 서부산업도로 570-69</span>
              </div>
            </div>

            <div className="mt-16 relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <span className="text-8xl font-bold text-gray-400 uppercase tracking-widest">{t("hero.title")}</span>
              </div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="text-brand-navy font-bold text-3xl whitespace-nowrap">
                  {t("contact.serviceTitle")}
                </div>
                <div className="w-[1px] h-16 bg-gray-300 mx-2" />
                <div className="text-gray-600 text-sm leading-relaxed pt-1">
                  <Trans i18nKey="contact.serviceDesc" components={{ br: <br /> }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
