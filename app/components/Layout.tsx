import React from "react";
import { Link, useLocation } from "react-router";
import { clsx } from "clsx";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { path: "/about", label: t("nav.about") },
    { path: "/machines", label: t("nav.machines") },
    { path: "/contact", label: t("nav.contact") },
  ];

  // Check if any of the nav items are currently active
  const isAnyNavActive = navItems.some(item => location.pathname === item.path);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
            <button className="hidden md:block bg-brand-navy text-white px-9 py-[6px] text-[12px]  hover:bg-brand-navy-hover transition-colors rounded-sm">
              {t("nav.catalogue")}
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-brand-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>

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
        {(location.pathname !== "/about" && location.pathname !== "/contact") && (
          <img src="/images/footer-image.png" alt="" className="w-full h-auto object-cover" />
        )}
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[15px] text-dark-gray">
              <p>대표자 : 고성호</p>
              <p>사업자등록 번호 : 000-0000-000</p>
              <p>© 2025 Korion. All rights reserved.</p>
            </div>
            <img src="/images/logo.png" alt="Korion" className="h-5 md:h-6 w-auto" />
          </div>
        </footer>
      </div>
    </div>
  );
}
