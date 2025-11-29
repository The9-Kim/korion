import React from "react";
import { Link, useLocation } from "react-router";
import { clsx } from "clsx";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/machines", label: "Machines" },
    { path: "/contact", label: "Contact" },
  ];

  // Check if any of the nav items are currently active
  const isAnyNavActive = navItems.some(item => location.pathname === item.path);

  return (
    <div className="min-h-screen flex flex-col bg-white text-secondary-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-widest text-brand-gold uppercase">Korion</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              // Logic: 
              // - If this item is active: #183B63
              // - If another item is active: #A8C3E3
              // - If no item is active (e.g. Home): #183B63
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
                    "relative py-1 transition-colors hover:text-brand-navy",
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

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-brand-navy text-white px-6 py-2 text-sm font-medium hover:bg-brand-navy transition-colors rounded-sm">
              Catalogue
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-brand-gold">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            <p className="mb-2">개인정보처리방침 | 이용약관</p>
            <p>대표자 : 고성호</p>
            <p>사업자등록 번호 : 000-0000-000</p>
            <p className="mt-2">© 2025 Korion. All rights reserved.</p>
          </div>
          <div className="text-2xl font-bold text-primary-300 uppercase">
            Korion
          </div>
        </div>
      </footer>
    </div>
  );
}
