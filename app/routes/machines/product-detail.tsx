import { useParams, Link } from "react-router";
import { useTranslation } from "react-i18next";
import { produceProducts, importBrands, type Product } from "../../data/products";

export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();

  // Find product in produce or imports
  let product: Product | undefined = produceProducts.find(p => p.id === id);

  if (!product) {
    for (const brand of importBrands) {
      const found = brand.products.find(p => p.id === id);
      if (found) {
        product = found;
        break;
      }
    }
  }

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  return (
    <div className="w-full">
      {/* Product Hero / Slider Area */}
      <div className="relative w-full h-[500px] md:h-[600px] bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-4xl text-gray-400 ">{product.name} Image</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <div className="mb-2 text-brand-navy ">
              {t(`productData.${product.id}.subtitle`, product.subtitle || "최적화된 효율성")}
            </div>
            <h1 className="text-4xl md:text-5xl  text-brand-navy mb-6">
              {product.brand ? `${product.brand} ` : "KORION "}{t(`productData.${product.id}.name`, product.name)}
            </h1>

            <button className="text-gray-500 text-sm underline mb-12 hover:text-brand-navy">
              {t("machines.detail.downloadCatalog")}
            </button>

            <div className="text-gray-600 leading-relaxed space-y-4 break-keep mb-16">
              <p>{t(`productData.${product.id}.description`, product.description)}</p>
            </div>

            {/* Specs / Features List */}
            <div className="space-y-8">
              {product.features.map((feature, idx) => (
                <div key={idx} className="border-t border-gray-200 pt-8">
                  <h4 className="text-xl  text-gray-900 mb-2">
                    {t(`productData.${product.id}.features.${idx}.title`, feature.title)}
                  </h4>
                  <p className="text-gray-600">
                    {t(`productData.${product.id}.features.${idx}.desc`, feature.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content (Specs Box or Additional Images) */}
          <div className="w-full md:w-1/3">
            <div className="bg-gray-900 text-white p-8 rounded-2xl sticky top-24">
              <h3 className="text-xl  mb-6 border-b border-gray-700 pb-4">{t("machines.detail.specs")}</h3>
              <div className="space-y-4">
                {product.specs.length > 0 ? (
                  product.specs.map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">
                        {t(`productData.${product.id}.specs.${idx}.label`, spec.label)}
                      </span>
                      <span className="">
                        {t(`productData.${product.id}.specs.${idx}.value`, spec.value)}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 text-sm">{t("machines.detail.noSpecs")}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "More Series" Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-brand-navy  mb-8">
            {t("machines.detail.moreSeries", { brand: product.category === 'produce' ? 'M' : product.brand })}
          </h3>
          <div className="flex gap-8 overflow-x-auto pb-4">
            {/* Logic to show related products */}
            {(product.category === 'produce' ? produceProducts : importBrands.find(b => b.name === product.brand)?.products || [])
              .filter(p => p.id !== product!.id)
              .map(related => (
                <Link key={related.id} to={`/machines/${related.category === 'produce' ? 'produce' : 'imports'}/${related.id}`} className="flex-shrink-0 w-40 text-center group">
                  <div className="w-32 h-32 mx-auto rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-4 group-hover:border-brand-gold transition-colors">
                    <span className="text-xs  text-gray-400">{related.name}</span>
                  </div>
                  <span className="text-sm  text-brand-navy group-hover:text-brand-gold transition-colors">{related.name}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
