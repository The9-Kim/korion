import { useParams, Link } from "react-router";
import { useTranslation } from "react-i18next";
import { produceProducts, importBrands, type Product } from "../../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

  // Product Configuration
  const productConfig: Record<string, { useSwiper: boolean; imageCount: number }> = {
    "m-2200": { useSwiper: false, imageCount: 0 },
    // Default for others
    "default": { useSwiper: true, imageCount: 4 },
  };

  const config = productConfig[id || ""] || productConfig["default"];

  // Get related products for "More Series"
  const relatedProducts = (product.category === 'produce' ? produceProducts : importBrands.find(b => b.name === product.brand)?.products || [])
    .filter(p => p.id !== product!.id);

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Section 1: Hero / Top Info */}
      <div className="relative max-w-[1920px] mx-auto pt-20 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-auto">
        <div className="flex flex-col lg:flex-row items-start lg:pl-[200px]">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/3 z-10 pt-10 lg:pt-20 lg:pl-10 text-center lg:text-left">
            <div className="text-[20px] lg:text-[30px] font-gothic text-dark-gray mb-2 tracking-tighter">
              {t(`productData.${product.id}.subtitle`, product.subtitle || "최적화된 효율성")}
            </div>
            <h1 className="text-[40px] lg:text-[65px] font-gothic font-bold text-brand-navy leading-tight mb-8">
              {product.category === 'produce' ? `KORION ${product.name}` : product.name}
            </h1>
            <div className="w-[100px] lg:w-[171px] h-[3px] bg-brand-gold-light mb-8 mx-auto lg:mx-0" />
            <button className="text-[18px] lg:text-[22px] font-gothic text-brand-navy underline hover:text-brand-gold transition-colors">
              {t("machines.detail.downloadCatalog")}
            </button>
          </div>

          {/* Right Carousel or Single Image */}
          <div className="lg:w-2/3 w-full mt-10 lg:mt-0 relative">
            {/* Placeholder for the gray background shape from design */}
            <div className="absolute top-20 right-0 w-[90%] h-[300px] lg:h-[500px] bg-light-gray rounded-tl-[40px] -z-10 hidden lg:block" />

            {config.useSwiper ? (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full aspect-[1082/586] rounded-tl-[40px]"
              >
                {Array.from({ length: config.imageCount }).map((_, idx) => {
                  const num = idx + 1;
                  return (
                    <SwiperSlide key={num} className="flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <img
                          src={`/images/${product?.category === 'produce' ? 'produce' : 'imports'}/${product?.id}-image-0${num}.png`}
                          alt={`${product?.name} ${num}`}
                          className="w-full h-full object-cover rounded-tl-[40px]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://placehold.co/1082x586?text=No+Image";
                          }}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {/* Section 2: Description Text */}
      <div className="max-w-4xl mx-auto px-4 pb-24 text-center">
        <p className="text-[25px] leading-[50px] font-gothic text-brand-navy break-keep">
          {t(`productData.${product.id}.description`, product.description)}
        </p>
      </div>

      {/* Section 3: Visual Feature 1 */}
      <div className="relative w-full h-[660px] bg-light-gray overflow-hidden">
        {/* Background Image Placeholder - M-6(3) */}
        <div className="absolute inset-0 opacity-50 bg-cover bg-center" style={{ backgroundImage: 'url(/images/produce/produce-feature-1.png)' }}>
          {/* Fallback if image missing */}
        </div>

        <div className="absolute inset-0 bg-black/10" /> {/* Slight overlay */}

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-white text-center">
          <div className="grid grid-cols-3 gap-20 w-full px-4">
            <div>
              <div className="text-[40px] font-gothic font-bold mb-4 drop-shadow-md">4열</div>
              <div className="text-[25px] font-gothic drop-shadow-md">4열 수확의 최적화</div>
              <div className="w-[110px] h-[5px] bg-white/80 mx-auto mt-8" />
            </div>
            <div>
              <div className="text-[40px] font-gothic font-bold mb-4 drop-shadow-md">최대 3m</div>
              <div className="text-[25px] font-gothic drop-shadow-md">작업 폭</div>
            </div>
            <div>
              <div className="text-[40px] font-gothic font-bold mb-4 drop-shadow-md">Kemper 헤더</div>
              <div className="text-[25px] font-gothic drop-shadow-md">장착 가능</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Visual Feature 2 (Black Background) */}
      <div className="relative w-full h-[660px] bg-black overflow-hidden">
        {/* Background Image Placeholder - M-6(5) */}
        <div className="absolute inset-0 opacity-60 bg-cover bg-center" style={{ backgroundImage: 'url(/images/produce/produce-feature-2.png)' }}>
        </div>

        <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-white text-center">
          <div className="grid grid-cols-3 gap-20 w-full px-4">
            <div>
              <div className="text-[40px] font-gothic font-bold mb-4 drop-shadow-md">수확에 최적화 된 출력</div>
              <div className="text-[25px] font-gothic drop-shadow-md">고효율 엔진</div>
              <div className="w-[110px] h-[5px] bg-white/80 mx-auto mt-8" />
            </div>
            <div>
              <div className="text-[40px] font-gothic font-bold mb-4 drop-shadow-md">180-240 HP</div>
              <div className="text-[25px] font-gothic drop-shadow-md">강력한 파워</div>
            </div>
            <div>
              <div className="text-[40px] font-gothic font-bold mb-4 drop-shadow-md">Uni Cracker</div>
              <div className="text-[25px] font-gothic drop-shadow-md">장착 가능</div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: More Series Navigation */}
      <div className="py-32 bg-white text-center">
        <h3 className="text-[30px] font-gothic font-bold text-brand-navy mb-16">
          {t("machines.detail.moreSeries", { brand: product.category === 'produce' ? 'M' : product.brand })} &gt;
        </h3>

        <div className="flex justify-center gap-16 flex-wrap">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              to={`/machines/${related.category === 'produce' ? 'produce' : 'imports'}/${related.id}`}
              className="group flex flex-col items-center"
            >
              <div className="relative w-[162px] h-[162px] rounded-full bg-white border border-light-gray shadow-md flex items-center justify-center mb-6 overflow-hidden group-hover:border-brand-gold transition-colors duration-300">
                {related.image ? (
                  <img src={related.image} alt={related.name} className="w-[80%] h-[80%] object-contain" />
                ) : (
                  <span className="text-gray-400">{related.name}</span>
                )}
              </div>
              <span className="text-[30px] font-gothic font-bold text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                {related.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
