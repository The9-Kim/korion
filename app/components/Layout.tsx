import React from "react";
import { Link, useLocation } from "react-router";
import { clsx } from "clsx";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);

  const navItems = [
    // { path: "/about", label: t("nav.about") },
    { path: "/machines", label: t("nav.machines") },
    { path: "/contact", label: t("nav.contact") },
  ];

  // Check if any of the nav items are currently active
  const isAnyNavActive = navItems.some(item => location.pathname === item.path);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const onClickYoutube = () => {
    window.open('https://www.youtube.com/@KorionAgMachines', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-aldrich">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Korion" className="h-4 md:h-4 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-16 text-sm ">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const textColor = isActive
                ? "text-brand-navy"
                : isAnyNavActive
                  ? "text-brand-blue-light"
                  : "text-brand-navy";

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={clsx(
                    "relative py-1 transition-colors hover:text-brand-navy text-[20px]",
                    textColor
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-brand-blue-light" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-brand-navy text-white px-9 py-[6px] text-[12px]  hover:bg-brand-navy-hover transition-colors rounded-sm cursor-pointer">
              {t("nav.catalogue")}
            </button>
            <button className="w-10 h-10 gap-7 flex items-center justify-center cursor-pointer"
              onClick={onClickYoutube}
            >
              <img src="/images/icons/youtube_btn.svg" alt="youtube" className="w-full h-full" />
            </button>
            <div className="relative">
              <button
                className="w-10 h-10 flex items-center justify-center p-0 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <img src="/images/icons/language_btn.svg" alt="language" className="w-full h-full" />
              </button>

              {isLangMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangMenuOpen(false)}
                  />
                  <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-20 overflow-hidden transform origin-top-right transition-all">
                    <button
                      className={clsx(
                        "w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between",
                        i18n.language === 'en' ? 'text-brand-navy font-bold bg-gray-50' : 'text-gray-600'
                      )}
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setIsLangMenuOpen(false);
                      }}
                    >
                      <span>English</span>
                      {i18n.language === 'en' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                      )}
                    </button>
                    <button
                      className={clsx(
                        "w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between",
                        i18n.language === 'ko' ? 'text-brand-navy font-bold bg-gray-50' : 'text-gray-600'
                      )}
                      onClick={() => {
                        i18n.changeLanguage('ko');
                        setIsLangMenuOpen(false);
                      }}
                    >
                      <span>한국어</span>
                      {i18n.language === 'ko' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center text-brand-navy"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-lg  text-brand-navy py-2 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-brand-navy text-white w-full py-3 text-lg  rounded-sm mt-2">
              {t("nav.catalogue")}
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer Section */}
      <div className="mt-auto">
        {(() => {
          const noFooterImagePaths = [
            "/about",
            "/contact",
            "/machines/imports/fliegl",
            "/machines/imports/dondi"
          ];

          return !noFooterImagePaths.includes(location.pathname) && (
            <img src="/images/footer-image.png" alt="" className="w-full h-auto object-cover" />
          );
        })()}
        <footer className="bg-gray-50 border-t border-gray-100 py-12 lg:px-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between items-start gap-6">
            <img src="/images/logo.png" alt="Korion" className="h-5 md:h-6 w-auto" />
            <p className="text-dark-gray">© 2025 Korion. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
