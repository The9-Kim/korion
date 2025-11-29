import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { importBrands } from "../../data/products";

export default function Imports() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

      {importBrands.map((brand) => (
        <div key={brand.name} className="mb-32 last:mb-0">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-brand-navy">{brand.name}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {brand.products.map((product) => (
              <Link key={product.id} to={`/machines/imports/${product.id}`} className="group block max-w-sm mx-auto w-full">
                <div className="relative aspect-square rounded-[30px] overflow-hidden shadow-lg bg-gray-100">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                    <span className="text-gray-400 font-bold text-xl">{product.name} Image</span>
                  </div>

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                    <div className="text-3xl font-bold mb-1">{product.name}</div>
                    <div className="text-xs opacity-70 mb-4">{brand.name}</div>
                    <div className="flex justify-between items-end">
                      <span className="text-xs opacity-80">{t("machines.produce.viewDetail")}</span>
                      <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-black">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
