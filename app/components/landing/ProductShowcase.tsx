import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard";
import { produceProducts } from "~/data/products";

export default function ProductShowcase() {
  const { t } = useTranslation();
  return (
    <section className="py-10 bg-white -mb-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produceProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              category={product.category}
              to={`/machines/produce/${product.id.toLowerCase()}`}
              className="w-[217px] h-[285px] mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
