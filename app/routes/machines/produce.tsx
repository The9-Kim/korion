import { Link } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import { produceProducts } from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function Produce() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Intro Section */}
      <div className="text-center mb-20">
        <span className="text-sm  text-gray-500 mb-2 block">{t("machines.produce.intro.badge")}</span>
        <h2 className="text-3xl md:text-4xl  text-brand-navy mb-8">{t("machines.produce.intro.title")}</h2>
        <div className="w-16 h-[2px] bg-brand-gold mx-auto mb-8" />

        <div className="max-w-3xl mx-auto text-gray-600 space-y-4 break-keep">
          <p>
            <Trans i18nKey="machines.produce.intro.desc1" components={{ br: <br /> }} />
          </p>
        </div>

        <div className="mt-12 mb-20">
          <span className="text-4xl  text-brand-gold uppercase tracking-widest opacity-30">{t("machines.hero.title")}</span>
        </div>

        <div className="max-w-3xl mx-auto text-gray-600 space-y-2 text-sm break-keep">
          <p>
            <Trans i18nKey="machines.produce.intro.desc2" components={{ br: <br /> }} />
          </p>
          <p>
            <Trans i18nKey="machines.produce.intro.desc3" components={{ br: <br /> }} />
          </p>
        </div>
      </div>

      {/* Features Grid (Check Points) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {/* Reusing the style from Features.tsx but static for now as per design image */}
        {[
          { id: 1, title: t("machines.produce.checkpoints.1.title"), sub: t("machines.produce.checkpoints.1.sub"), img: "bg-gray-200" },
          { id: 2, title: t("machines.produce.checkpoints.2.title"), sub: t("machines.produce.checkpoints.2.sub"), img: "bg-gray-300" },
          { id: 3, title: t("machines.produce.checkpoints.3.title"), sub: t("machines.produce.checkpoints.3.sub"), img: "bg-gray-400" },
          { id: 4, title: t("machines.produce.checkpoints.4.title"), sub: t("machines.produce.checkpoints.4.sub"), img: "bg-gray-500" },
          { id: 5, title: t("machines.produce.checkpoints.5.title"), sub: t("machines.produce.checkpoints.5.sub"), img: "bg-gray-600" },
          { id: 6, title: t("machines.produce.checkpoints.6.title"), sub: t("machines.produce.checkpoints.6.sub"), img: "bg-gray-700" },
        ].map((item) => (
          <div key={item.id} className="relative aspect-square rounded-2xl overflow-hidden group">
            <div className={`absolute inset-0 ${item.img} transition-transform duration-500 group-hover:scale-105`} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-brand-gold  mb-1">Check Point.0{item.id}</div>
              <div className=" text-lg">{item.title}</div>
              {item.sub && <div className="text-sm opacity-90">{item.sub}</div>}
            </div>
          </div>
        ))}
      </div>

      {/* Product List */}
      <div className="text-center mb-12">
        <h3 className="text-3xl  text-brand-navy">{t("machines.produce.listTitle")}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {produceProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            to={`/machines/produce/${product.id}`}
          />
        ))}
      </div>
    </div>
  );
}
