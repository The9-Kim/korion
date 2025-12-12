import { useParams, Link } from "react-router";
import { Trans, useTranslation } from "react-i18next";
import { produceProducts, importBrands, type Product } from "../../data/products";
import ImageOrText from "../../components/ui/ImageOrText";
import ProductFeatureSection from "../../components/ProductFeatureSection";
import ProductHero from "../../components/ProductHero";

export default function ProductDetail() {
  const { id } = useParams();
  const { t } = useTranslation();

  // Find product data
  const produceProduct = produceProducts.find((p) => p.id === id);
  const importBrand = importBrands.find((b) => b.products.some((p) => p.id === id));
  const importProduct = importBrand?.products.find((p) => p.id === id);

  const product = produceProduct || importProduct;

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  // Product Configuration
  const productConfig: Record<string, { useSwiper: boolean; imageCount: number; showFeatures: boolean }> = {
    "m-6": { useSwiper: true, imageCount: 7, showFeatures: true },
    "m-350": { useSwiper: true, imageCount: 6, showFeatures: true },
    "m-2200": { useSwiper: false, imageCount: 1, showFeatures: false },
    "others": { useSwiper: true, imageCount: 0, showFeatures: false },
    "ditch-digger": { useSwiper: true, imageCount: 8, showFeatures: true },
    // Default for others
    "default": { useSwiper: true, imageCount: 4, showFeatures: true },
  };

  const config = productConfig[product.id] || productConfig["default"];

  // Get related products for "More Series"
  const relatedProducts = (product.category === 'produce' ? produceProducts : importBrands.find(b => b.name === product.brand)?.products || [])
    .filter(p => p.id !== product!.id);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Section 1: Hero / Top Info (Standard for non-others) */}
      {product.id !== 'others' && (
        <ProductHero
          id={product.id}
          category={product.category}
          name={product.category === 'produce' ? `KORION ${product.name}` : t(`productData.${product.id}.name`)}
          subtitle={
            <Trans
              i18nKey={`productData.${product.id}.subtitle`}
              components={{ br: <br /> }}
              defaults={product.subtitle || ""}
            />
          }
          description={t(`productData.${product.id}.description`)}
          imageCount={config.imageCount}
          useSwiper={config.useSwiper}
          pdfLabel={product.pdfUrl ? t("machines.detail.downloadCatalog") : undefined}
          onPdfClick={() => {
            if (product.pdfUrl) {
              window.open(product.pdfUrl, "_blank");
            }
          }}
        />
      )}

      {/* Feature Sections (Conditional) */}
      {config.showFeatures && (
        <>
          {/* Section 3: Visual Feature 1 */}
          <ProductFeatureSection
            backgroundImage={`/images/${product?.category === 'produce' ? 'produce' : 'imports'}/${product?.id}-feature-01.png`}
            className="bg-light-gray"
            title={t(`productData.${product.id}.visualFeatures.section1.title`, "")}
            withUnderline
            features={t(`productData.${product.id}.visualFeatures.section1.features`, { returnObjects: true }) as string[]}
          />

          {/* Section 4: Visual Feature 2 (조건부) */}
          {(() => {
            let section2Features = t(`productData.${product.id}.visualFeatures.section2.features`, { returnObjects: true });
            if (!Array.isArray(section2Features)) {
              return null;
            }

            const section2Title = t(`productData.${product.id}.visualFeatures.section2.title`, "");
            return section2Features.length > 0 ? (
              <ProductFeatureSection
                backgroundImage={`/images/${product?.category === 'produce' ? 'produce' : 'imports'}/${product?.id}-feature-02.png`}
                className="bg-black"
                title={section2Title}
                withUnderline
                features={section2Features as string[]}
              />
            ) : null;
          })()}
        </>
      )}

      {/* Sub Products for Others (Alternating Hero Layout) */}
      {product.id === 'others' && (
        <div className="w-full pb-20">
          {(t(`productData.${product.id}.subProducts`, { returnObjects: true }) as any[]).map((subProduct, idx) => {
            const isEven = idx % 2 === 0; // 0, 2, 4... -> Text Left, Image Right
            return (
              <ProductHero
                key={subProduct.id || idx}
                id={subProduct.id}
                category="import"
                name={subProduct.name}
                subtitle={subProduct.subtitle}
                description={subProduct.description}
                imageCount={3} // Defaulting to 3 images for sub-products as requested (01~03)
                useSwiper={true}
                isReversed={!isEven}
                pdfLabel={t("machines.detail.downloadCatalog")}
              />
            );
          })}
        </div>
      )}

      {/* Section 5: More Series Navigation */}
      <div className="py-32 bg-white text-center">
        {relatedProducts.length > 0 && (
          <>
            <h3 className="text-xl lg:text-[27px] font-gothic font-bold text-brand-navy mb-16">
              {t("machines.detail.moreSeries", { brand: product.category === 'produce' ? 'M' : product.brand })} &gt;
            </h3>

            <div className="flex justify-center gap-16 flex-wrap">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  to={`/machines/${related.category === 'produce' ? 'produce' : 'imports'}/${related.id}`}
                  className="group flex flex-col items-center"
                >
                  <div className="relative w-[72px] h-[72px] rounded-full bg-white border border-light-gray shadow-md flex items-center justify-center mb-6 transition-colors duration-300">
                    <ImageOrText
                      src={`/images/${related.category === 'produce' ? 'produce' : 'imports'}/${related.id}-circle.png`}
                      alt={related.name}
                      text={related.name}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-120"
                    />
                  </div>
                  <span className="text-[20px] font-gothic font-bold text-brand-navy ">
                    {related.name}
                  </span>
                </Link>
              ))}
            </div></>
        )}

      </div>
    </div>
  );
}
