import { Outlet, Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { clsx } from "clsx";
import Layout from "../../components/Layout";
import Hero from "../../components/landing/Hero";
import { produceProducts, importBrands } from "../../data/products";

export default function MachinesLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  const isImports = location.pathname.includes("imports");

  return (
    <Layout>
      {/* Machines Hero */}
      <Hero
        image="/placeholder-machines-hero.jpg"
        title={t("machines.hero.title")}
        subtitle={t("machines.hero.subtitle")}
      />

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
