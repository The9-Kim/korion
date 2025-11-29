import React from "react";
import { Link } from "react-router";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-secondary-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-widest text-primary-500 uppercase">Korion</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary-600">
            <Link to="/about" className="hover:text-primary-600 transition-colors">About</Link>
            <Link to="/machines" className="hover:text-primary-600 transition-colors">Machines</Link>
            <Link to="/contact" className="hover:text-primary-600 transition-colors">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block bg-secondary-900 text-white px-6 py-2 text-sm font-medium hover:bg-secondary-800 transition-colors">
              Catalogue
            </button>
            <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center overflow-hidden">
              <span className="sr-only">Language</span>
              <img src="https://flagcdn.com/w40/us.png" alt="US Flag" className="w-full h-full object-cover" />
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
