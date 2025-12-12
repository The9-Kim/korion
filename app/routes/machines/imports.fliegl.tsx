import { useTranslation } from "react-i18next";
import { importBrands } from "../../data/products";
import BrandProductRow from "../../components/BrandProductRow";

export default function Fliegl() {
  const { t } = useTranslation();
  const brandData = importBrands.find((b) => b.name() === "Fliegl");

  if (!brandData) return null;

  return (
    <div className="w-full bg-white pb-20 mt-40">
      {brandData.products.map((product, idx) => {
        // Alternating layout: Even index (0, 2) -> Image Left (Default, isReversed=false), Odd index (1, 3) -> Image Right (Reversed, isReversed=true)
        const isReversed = idx % 2 !== 0;

        return (
          <BrandProductRow
            key={product.id}
            id={product.id}
            category="import"
            name={product.name()}
            subtitle={t(`productData.${product.id}.landingSubtitle`)}
            description={`productData.${product.id}.landingDescription`}
            isReversed={isReversed}
            to={`/machines/imports/${product.id}`}
          />
        );
      })}
    </div>
  );
}
