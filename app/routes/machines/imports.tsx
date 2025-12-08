import { useTranslation } from "react-i18next";
import { importBrands } from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function Imports() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto py-16">

      {importBrands.map((brand) => (
        <div key={brand.name} className="mb-36 last:mb-0 justify-center">
          <div className="text-center mb-20">
            <h3 className="text-[20px] font-gothic font-bold text-brand-navy">{brand.name}</h3>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {brand.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image || ""}
                to={`/machines/imports/${product.id}`}
                category="imports"
                subtitle={product.brand}
                className="w-[217px] h-[285px] mx-2"
                nameFont={product.nameFont}
                
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
