import { clsx } from "clsx";

interface ProductFeatureSectionProps {
  backgroundImage: string;
  title?: string;
  features: string[];
  className?: string;
  withUnderline?: boolean;
}

export default function ProductFeatureSection({
  backgroundImage,
  title,
  features,
  className,
  withUnderline = false,
}: ProductFeatureSectionProps) {
  return (
    <div className={clsx("relative w-full h-[660px] overflow-hidden", className)}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
        {/* Title */}
        {title && (
          <div className="flex flex-col items-center">
            <div className="text-lg lg:text-[25px] font-gothic drop-shadow-md leading-tight">
              {title}
            </div>
          </div>
        )}
        {withUnderline && (
          <div className="w-[110px] h-[5px] bg-white/80 mt-20 mb-12" />
        )}

        {/* Features */}
        <div className="flex flex-col gap-12 items-center">
          {features.map((feature, idx) => (
            <div key={idx} className="text-lg lg:text-[27px] font-gothic font-bold drop-shadow-md leading-tight">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
