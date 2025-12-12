import { Trans } from "react-i18next";
import { Link } from "react-router";

interface BrandProductRowProps {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  category: "produce" | "import";
  isReversed?: boolean; // false: Image Left, Text Right | true: Text Left, Image Right
  to?: string;
}

export default function BrandProductRow({
  id,
  name,
  subtitle,
  description,
  category,
  isReversed = false,
  to,
}: BrandProductRowProps) {
  const imageCategory = category === "produce" ? "produce" : "imports";

  const content = (
    <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-20 group`}>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center max-w-[500px]">
        <div className="relative w-full aspect-[3/2] bg-white border border-gray-200 flex items-center justify-center p-8 transition-shadow duration-300 group-hover:shadow-lg">
          <img
            src={`/images/${imageCategory}/${id}-product.png`}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://placehold.co/600x400?text=No+Image";
            }}
          />
        </div>
      </div>

      {/* Text Section */}
      <div className={`w-full lg:w-1/2 flex flex-col ${isReversed ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"} text-center`}>
        {/* Title with Blue Color */}
        <h2 className="text-[28px] lg:text-[35px] text-brand-navy mb-2 uppercase font-bold transition-colors duration-300">
          {name} <span className="text-xl lg:text-[20px] normal-case font-normal">{subtitle}</span>
        </h2>

        {/* Subtitle/Description - styled as per image reference (Clean blocks) */}
        <div className={`text-[20px] leading-[1.6] text-dark-gray font-gothic tracking-tight break-keep ${isReversed ? "lg:text-right" : "lg:text-left"}`}>
          <Trans i18nKey={description} components={{ br: <br /> }} />
        </div>

      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1280px] mx-auto py-20 px-4 lg:px-8">
      {to ? (
        <Link to={to} className="block">
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}
