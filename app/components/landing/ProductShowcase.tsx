import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  { id: "M-350", name: "M-350", sub: "", imageColor: "bg-gray-300" },
  { id: "M-4", name: "M-4", sub: "Kemper header", imageColor: "bg-gray-400" },
  { id: "M-6", name: "M-6", sub: "Kemper header", imageColor: "bg-gray-500" },
];

export default function ProductShowcase() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer">
              {/* Background Image Placeholder */}
              <div className={`absolute inset-0 ${product.imageColor} transition-transform duration-500 group-hover:scale-105`}>
                <div className="absolute inset-0 flex items-center justify-center text-white/50 font-bold text-4xl">
                  {product.name} Image
                </div>
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-5xl font-bold text-white mb-2">{product.name}</h3>
                {product.sub && (
                  <p className="text-xl text-gray-300 font-medium mb-4">{product.sub}</p>
                )}
                <button className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-primary-600 transition-colors flex items-center gap-2">
                  {t("products.more")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
