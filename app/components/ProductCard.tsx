import React from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

interface ProductCardProps {
  id: string;
  name: string;
  image?: string;
  to?: string;
  subtitle?: string;
  category?: string;
  className?: string;
  nameFont?: "gothic";
}

export default function ProductCard({ id, name, image, to, subtitle, category, className, nameFont }: ProductCardProps) {
  const { t } = useTranslation();

  const Content = () => (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 bg-gray-200 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
      </div>

      {/* Overlay Box */}
      <div className="absolute bottom-8 left-0 w-full bg-black/50 px-6 pt-20 pb-4">
        <div className="w-22 h-[6px] bg-brand-gold-lighter" />
        <h3 className={`text-[26px] text-white mb-0 ${nameFont === 'gothic' ? 'font-gothic font-bold' : ''}`}>{name}</h3>
        <div className="flex flex-wrap justify-between items-center gap-y-1">
          <p className="text-[12px] text-white whitespace-nowrap">
            {subtitle || (category === 'produce' ? "Korion M Series" : "")}
          </p>
          <button className="bg-brand-gold-lighter text-black px-1.5 py-0.5 rounded-full text-[8px] font-gothic font-bold hover:bg-white transition-colors flex items-center">
            {t("products.more")}
            <svg className="w-3 h-3 ml-[1px]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </button>
        </div>
      </div>

    </>
  );

  const containerClasses = `relative aspect-[3/4] rounded-[60px] overflow-hidden group cursor-pointer transition-transform transition-colors transition-all duration-300 hover:scale-110 block shadow-md/50 hover:border-2 hover:border-brand-gold-lighter/60 ${className || ""}`;

  if (to) {
    return (
      <Link to={to} className={containerClasses}>
        <Content />
      </Link>
    );
  }

  return (
    <div className={containerClasses}>
      <Content />
    </div>
  );
}
