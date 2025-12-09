import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../ProductCard";
import { produceProducts, importBrands } from "~/data/products";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductShowcase() {
  const { t } = useTranslation();

  const allProducts = [
    ...produceProducts,
    ...importBrands.flatMap((brand) => brand.products),
  ];

  return (
    <section className="py-10 bg-white mb-20 relative z-0">
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
          {allProducts.map((product) => (
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
    </section>
  );
}
