import React from "react";
import { useTranslation } from "react-i18next";

const products = [
  { id: "M-4", name: "M-4", sub: "Kemper header", image: "/images/main/m-4.png" },
  { id: "M-6", name: "M-6", sub: "Kemper header", image: "/images/main/m-6.png" },
  { id: "M-350", name: "M-350", sub: "", image: "/images/main/m-350.png" },
  { id: "M-2200", name: "M-2200", sub: "", image: "/images/main/m-2200.png" },
];

export default function ProductShowcase() {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="relative aspect-[3/4] rounded-[60px] overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-110">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              {/* Content */}
              <div className="absolute bottom-10 left-8 right-8">
                <h3 className="text-4xl  text-white mb-2">{product.name}</h3>
                {product.sub && (
                  <p className="text-lg text-gray-300  mb-4">{product.sub}</p>
                )}
                <button className="bg-brand-gold text-white px-6 py-2 rounded-full text-sm  hover:bg-brand-gold-light transition-colors flex items-center gap-2">
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
