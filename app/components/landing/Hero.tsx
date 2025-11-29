
import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Section: Main Banner / Slider */}
      <section className="relative w-full h-[600px] bg-gray-100 overflow-hidden group">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-secondary-200 flex items-center justify-center">
          <span className="text-secondary-400 text-lg font-medium">Main Banner Image Placeholder</span>
        </div>

        {/* Overlay Content (Top Left Logo) */}
        <div className="absolute top-12 left-12 md:top-20 md:left-20">
          <div className="bg-secondary-800/80 backdrop-blur-sm p-6 rounded-sm inline-block text-white">
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">Korion</h1>
            <p className="text-lg md:text-xl font-light mt-1">Agricultural Machinery</p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-black/20 rounded-full transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-black/20 rounded-full transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>

      {/* Bottom Section: Intro Text with Background */}
      <section className="relative w-full py-24 bg-white overflow-hidden">
        {/* Background Image Placeholder for Bottom Section */}
        <div className="absolute inset-0 bg-[url('/placeholder-bg.jpg')] bg-cover bg-center opacity-10">
          {/* Note: User can replace this div or the bg-image with an actual <img> tag later */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/20 to-white/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl md:text-6xl font-bold text-brand-navy mb-2 tracking-tight">Korion</h2>
          <p className="text-2xl md:text-3xl text-brand-blue-light font-medium mb-8">Agricultural Machinery</p>
          <p className="text-lg md:text-xl text-gray-600 font-medium tracking-wide break-keep">
            더 나은 품질, 더 적은 손실, 그리고 절대적인 안전
          </p>
        </div>
      </section>
    </div>
  );
}
