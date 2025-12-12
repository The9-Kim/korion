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

  // Helper to get the current ID from the path (e.g., /machines/produce/m-4 -> m-4)
  const pathSegments = location.pathname.split("/");
  const currentId = pathSegments[3]; // 0: "", 1: "machines", 2: "produce"|"imports", 3: ID

  // Hero Image Configuration
  const getHeroImage = () => {
    // 1. Check for specific Produce Product Hero
    if (!isImports && currentId) {
      // Example: /images/produce/m-4_hero.png
      // You can customize this mapping or naming convention
      return `/images/produce/${currentId}-image-01.png`;
    }

    if (isImports && (currentId === "fliegl" || currentId === "dondi")) {
      return `/images/imports/fliegl_landing.png`;
    }

    // 2. Check for specific Import Brand Hero
    if (isImports && currentId) {
      // Example: /images/imports/fliegl_hero.png
      return `/images/imports/${currentId}-image-01.png`;
    }

    // 3. Default Category Hero
    if (isImports) {
      return "/images/imports/imports_hero.png";
    } else {
      return "/images/produce/produce_hero.png";
    }
  };

  return (
    <Layout>
      {/* Machines Hero */}
      <Hero
        image={getHeroImage()}
        title={t("machines.hero.title")}
        subtitle={t("machines.hero.subtitle")}
      />

      {/* Tabs Navigation */}
      <div className="bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start gap-12 pt-12 border-b border-light-gray">
            <Link
              to="/machines/produce"
              className={clsx(
                "text-[25px] transition-colors relative pb-4",
                !isImports ? "text-brand-navy" : "text-brand-blue-light hover:text-brand-navy"
              )}
            >
              {t("machines.tabs.produce")}
              {!isImports && <span className="absolute -bottom-[1px] left-0 w-full h-[4px] bg-brand-blue-light" />}
            </Link>
            <Link
              to="/machines/imports"
              className={clsx(
                "text-[25px] transition-colors relative pb-4",
                isImports ? "text-brand-navy" : "text-brand-blue-light hover:text-brand-navy"
              )}
            >
              {t("machines.tabs.imports")}
              {isImports && <span className="absolute -bottom-[1px] left-0 w-full h-[4px] bg-brand-blue-light" />}
            </Link>
          </div>

          {/* Sub Navigation */}
          <div className="flex justify-start gap-12 pt-6 pb-2 text-[15px] text-brand-blue-light">
            {!isImports ? (
              produceProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/machines/produce/${product.id}`}
                  className={clsx(
                    "hover:text-brand-navy transition-colors",
                    currentId === product.id && "text-brand-navy font-bold"
                  )}
                >
                  {product.name()}
                </Link>
              ))
            ) : (
              importBrands.map((brand) => {
                // Map brand to specific product ID
                let targetId = "";
                if (brand.name() === "Fliegl") targetId = "fliegl";
                else if (brand.name() === "BVL") targetId = "vertical-mixer";
                else if (brand.name() === "Dondi") targetId = "dondi";
                else targetId = brand.name().toLowerCase();

                return (
                  <Link
                    key={brand.name()}
                    to={`/machines/imports/${targetId}`}
                    className={clsx(
                      "cursor-pointer hover:text-brand-navy transition-colors",
                      // Check if the current path includes any of the brand's products OR matches the brand name
                      (currentId === targetId || brand.products.some(p => p.id === currentId)) && "text-brand-navy font-bold"
                    )}
                  >
                    {brand.name()}
                  </Link>
                );
              })
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