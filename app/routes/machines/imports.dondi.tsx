import { useTranslation } from "react-i18next";
import { importBrands } from "../../data/products";
import BrandProductRow from "../../components/BrandProductRow";

export default function Dondi() {
  const { t } = useTranslation();
  const brandData = importBrands.find((b) => b.name === "Dondi");
  console.log(brandData);

  if (!brandData) return null;

  return (
    <div className="w-full bg-white pb-20 mt-20">
      {brandData.products.map((product, idx) => {
        const isReversed = idx % 2 !== 0;
        return (
          <BrandProductRow
            key={product.id}
            id={product.id}
            category="import"
            name={product.name}
            subtitle={t(`productData.${product.id}.landingSubtitle`)}
            description={`productData.${product.id}.landingDescription`}
            isReversed={isReversed}
          />
        );
      })}
    </div>
  );
}
