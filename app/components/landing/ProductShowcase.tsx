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
    <section className="py-10 bg-white">
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

              {/* Overlay Box */}
              <div className="absolute bottom-16 left-0 w-full bg-black/50 px-6 pt-24 pb-4">
                <div className="w-22 h-[6px] bg-brand-gold-light" />
                <h3 className="text-[40px] text-white mb-0">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-[15px] text-white">Korion M Series</p>
                  <button className="bg-brand-gold-light text-black px-1.5 py-0.5 rounded-full text-[10px] font-gothic font-bold hover:bg-white transition-colors flex items-center">
                    {t("products.more")}
                    <svg className="w-3 h-3 ml-[1px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
