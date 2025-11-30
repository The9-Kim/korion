import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../ProductCard";

const products = [
  { id: "M-4", name: "M-4", sub: "Kemper header", image: "/images/main/m-4.png" },
  { id: "M-6", name: "M-6", sub: "Kemper header", image: "/images/main/m-6.png" },
  { id: "M-350", name: "M-350", sub: "", image: "/images/main/m-350.png" },
  { id: "M-2200", name: "M-2200", sub: "", image: "/images/main/m-2200.png" },
];

export default function ProductShowcase() {
  const { t } = useTranslation();
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              // ProductShowcase items currently don't link anywhere, or should they?
              // The original code didn't have Link, just cursor-pointer.
              // I'll leave 'to' undefined for now, or maybe link to produce detail?
              // User didn't specify, but usually these link to details.
              // Let's link them to /machines/produce/{id} (lowercase id)
              to={`/machines/produce/${product.id.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
