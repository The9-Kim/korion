import { Link } from "react-router";
import { useTranslation, Trans } from "react-i18next";
import { produceProducts } from "../../data/products";
import ProductCard from "../../components/ProductCard";

export default function Produce() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {/* Intro Section */}
      <div className="text-center mb-36">
        <span className="text-[30px] font-gothic text-dark-gray mb-2 block tracking-tighter">{t("machines.produce.intro.badge")}</span>
        <h2 className="text-[45px] font-gothic font-bold text-brand-navy mb-8">{t("machines.produce.intro.title")}</h2>
        <div className="w-40 h-[2px] bg-brand-gold-lighter mx-auto my-16" />

        <div className="mx-auto text-brand-navy break-keep text-[25px]/[50px] tracking-tight">
          <p>
            <Trans i18nKey="machines.produce.intro.desc1" components={{ br: <br /> }} />
          </p>
        </div>

        <div className="flex items-center justify-center mt-24 mb-20">
          <img src="/images/logo.png" alt="Korion" className="h-5 md:h-6 w-auto" />
        </div>

        <div className="mx-auto text-brand-navy break-keep text-[25px]/[50px] tracking-tight">
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
        {[
          { id: 1, title: t("machines.produce.checkpoints.1.title"), sub: t("machines.produce.checkpoints.1.sub"), img: "/images/produce/produce-1.png" },
          { id: 2, title: t("machines.produce.checkpoints.2.title"), sub: t("machines.produce.checkpoints.2.sub"), img: "/images/produce/produce-2.png" },
          { id: 3, title: t("machines.produce.checkpoints.3.title"), sub: t("machines.produce.checkpoints.3.sub"), img: "/images/produce/produce-3.png" },
          { id: 4, title: t("machines.produce.checkpoints.4.title"), sub: t("machines.produce.checkpoints.4.sub"), img: "/images/produce/produce-4.png" },
          { id: 5, title: t("machines.produce.checkpoints.5.title"), sub: t("machines.produce.checkpoints.5.sub"), img: "/images/produce/produce-5.png" },
          { id: 6, title: t("machines.produce.checkpoints.6.title"), sub: t("machines.produce.checkpoints.6.sub"), img: "/images/produce/produce-6.png" },
        ].map((item) => (
          <div key={item.id} className="relative w-full aspect-316/408 overflow-hidden shadow-md/30 group rounded-tr-[40px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={item.img} alt={item.title} className="w-full h-full object-contain transition-transform duration-500" />
            </div>

            {/* Top Content: Check Point */}
            <div className="absolute top-8 left-8 z-10">
              <div className="text-brand-gold-lighter text-[30px] leading-none tracking-[-3px]">Check</div>
              <div className="text-brand-gold-lighter text-[30px] leading-none tracking-[-3px]">Point .0{item.id}</div>
            </div>

            {/* Bottom Content: Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-dark-gray/70 rounded-tr-[40px] p-8 min-h-[140px]">
              <div className="text-white text-[28px] font-bold font-gothic leading-tight break-keep">
                <Trans i18nKey={item.title} components={{ br: <br /> }} />
              </div>
              {item.sub && (
                <div className="text-white text-[28px] font-bold font-gothic leading-tight mt-1 break-keep">
                  <Trans i18nKey={item.sub} components={{ br: <br /> }} />
                </div>
              )}
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
