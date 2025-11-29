import { Outlet, Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { clsx } from "clsx";
import Layout from "../../components/Layout";
import { produceProducts, importBrands } from "../../data/products";

export default function MachinesLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  const isImports = location.pathname.includes("imports");

  return (
    <Layout>
      {/* Machines Hero */}
      <div className="relative w-full h-[400px] bg-gray-900 overflow-hidden">
        {/* Background Placeholder */}
        <div className="absolute inset-0 bg-secondary-800">
          <div className="absolute inset-0 bg-[url('/placeholder-machines-hero.jpg')] bg-cover bg-center opacity-60" />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">{t("machines.hero.title")}</h1>
            <p className="text-xl md:text-2xl font-light">{t("machines.hero.subtitle")}</p>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white sticky top-20 z-40 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start gap-12 pt-12 border-b border-gray-200">
            <Link
              to="/machines/produce"
              className={clsx(
                "text-2xl md:text-3xl font-bold transition-colors relative pb-4",
                !isImports ? "text-brand-navy" : "text-brand-blue-light hover:text-brand-navy"
              )}
            >
              {t("machines.tabs.produce")}
              {!isImports && <span className="absolute -bottom-[1px] left-0 w-full h-[4px] bg-brand-blue-light" />}
            </Link>
            <Link
              to="/machines/imports"
              className={clsx(
                "text-2xl md:text-3xl font-bold transition-colors relative pb-4",
                isImports ? "text-brand-navy" : "text-brand-blue-light hover:text-brand-navy"
              )}
            >
              {t("machines.tabs.imports")}
              {isImports && <span className="absolute -bottom-[1px] left-0 w-full h-[4px] bg-brand-blue-light" />}
            </Link>
          </div>

          {/* Sub Navigation */}
          <div className="flex justify-start gap-12 py-8 text-xl font-bold text-brand-blue-light">
            {!isImports ? (
              produceProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/machines/produce/${product.id}`}
                  className="hover:text-brand-navy transition-colors"
                >
                  {product.name}
                </Link>
              ))
            ) : (
              importBrands.map((brand) => (
                <span key={brand.name} className="cursor-pointer hover:text-brand-navy transition-colors">
                  {brand.name}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-screen bg-white">
        <Outlet />
      </div>
    </Layout>
  );
}
