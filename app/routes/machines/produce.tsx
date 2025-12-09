import { Link } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import { produceProducts } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Produce() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mb-32">

      {/* Intro Section */}
      <div className="text-center mb-36 mt-20">
        <span className="lg:text-[20px] text-sm font-gothic text-dark-gray mb-2 block tracking-tighter">{t("machines.produce.intro.badge")}</span>
        <h2 className="lg:text-[27px] text-lg font-gothic font-bold text-brand-navy mb-8">
          <Trans i18nKey="machines.produce.intro.title" components={{ br: <br /> }} /></h2>
        <div className="w-40 h-[3px] bg-brand-gold-light mx-auto my-16" />

        <div className="mx-auto text-brand-navy break-keep text-[17px]/[30px] tracking-tight">
          <p>
            <Trans i18nKey="machines.produce.intro.desc1" components={{ br: <br /> }} />
          </p>
        </div>

        <div className="flex items-center justify-center mt-24 mb-20">
          <img src="/images/logo.png" alt="Korion" className="h-5 md:h-6 w-auto opacity-20" />
        </div>

        <div className="mx-auto text-brand-navy break-keep text-[17px]/[30px] tracking-tight">
          <p>
            <Trans i18nKey="machines.produce.intro.desc2" components={{ br: <br /> }} />
          </p>
        </div>
      </div>

      {/* Features Grid (Check Points) */}
      <div className="flex justify-center w-full mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:px-40 max-w-[1040px] w-full">
          {[
            { id: 1, title: t("machines.produce.checkpoints.1.title"), sub: t("machines.produce.checkpoints.1.sub"), video: "/images/produce/produce-1.mp4" },
            { id: 2, title: t("machines.produce.checkpoints.2.title"), sub: t("machines.produce.checkpoints.2.sub"), video: "/images/produce/produce-2.mp4" },
            { id: 3, title: t("machines.produce.checkpoints.3.title"), sub: t("machines.produce.checkpoints.3.sub"), img: "/images/produce/produce-3.png" },
            { id: 4, title: t("machines.produce.checkpoints.4.title"), sub: t("machines.produce.checkpoints.4.sub"), video: "/images/produce/produce-4.mp4" },
            { id: 5, title: t("machines.produce.checkpoints.5.title"), sub: t("machines.produce.checkpoints.5.sub"), img: "/images/produce/produce-5.jpg" },
            { id: 6, title: t("machines.produce.checkpoints.6.title"), sub: t("machines.produce.checkpoints.6.sub"), video: "/images/produce/produce-6.mp4" },
          ].map((item) => (
            <div key={item.id} className="relative w-full aspect-316/408 overflow-hidden shadow-md/30 group rounded-tr-[40px]">
              {/* Background Image */}
              {item.img && (
                <div className="absolute inset-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-contain transition-transform duration-500" />
                </div>
              )}
              {item.video && (
                <div className="absolute inset-0">
                  <video src={item.video} playsInline autoPlay loop muted className="w-full h-full object-cover transition-transform duration-500" />
                </div>
              )}

              {/* Top Content: Check Point */}
              <div className="absolute top-6 left-2 z-10">
                <div className="text-brand-gold-lighter text-[12px] leading-none tracking-[-1px]">Check Point .0{item.id}</div>
              </div>

              {/* Bottom Content: Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-dark-gray/70 rounded-tr-[40px] pl-2 py-8 min-h-[113px]">
                <div className="text-white text-[15px] font-bold font-gothic leading-tighter break-keep">
                  <Trans i18nKey={item.title} components={{ br: <br /> }} />
                </div>
                {item.sub && (
                  <div className="text-white text-[15px] font-bold font-gothic leading-tighter mt-1 break-keep">
                    <Trans i18nKey={item.sub} components={{ br: <br /> }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product List */}
      <div className="text-center">
        <h3 className="font-gothic font-bold text-[27px] text-brand-navy">{t("machines.produce.listTitle")}</h3>
      </div>
      <div className="py-10 bg-white mb-20 relative z-0">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop
            className="py-10! px-6!"
          >
            {produceProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                  subtitle={product.category === 'import' ? product.brand : undefined}
                  to={`/machines/${product.category === "produce" ? "produce" : "imports"}/${product.id}`}
                  nameFont={product.nameFont}
                  className="w-full max-w-[300px] mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
