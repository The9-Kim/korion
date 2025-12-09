import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Trans } from "react-i18next";

interface ProductHeroProps {
  id: string;
  category: "produce" | "import";
  name: string;
  subtitle: string;
  description?: string;
  imageCount?: number;
  useSwiper?: boolean;
  isReversed?: boolean; // For alternating layout
  pdfLabel?: string;
  onPdfClick?: () => void;
}

export default function ProductHero({
  id,
  category,
  name,
  subtitle,
  description,
  imageCount = 1,
  useSwiper = true,
  isReversed = false,
  pdfLabel,
  onPdfClick,
}: ProductHeroProps) {
  const imageCategory = category === "produce" ? "produce" : "imports";
  const autoplay = id === "ads60" || id === 'ditch-digger' ? false : { delay: 3000, disableOnInteraction: false };
  
  return (
    <div className="relative max-w-[1920px] mx-auto pt-20 lg:pt-32 pb-20 min-h-auto">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start`}>

        {/* Text Content */}
        <div className={`w-full z-10 pt-10 lg:pt-20 text-center lg:text-left ${isReversed ? 'lg:px-8' : 'lg:pl-50 lg:pr-8'}`}>
          <div className="text-sm lg:text-[20px] font-gothic text-dark-gray mb-2 tracking-tighter">
            {subtitle}
          </div>
          <h1 className="text-[20px] lg:text-[35px] font-gothic font-bold text-brand-navy leading-tight mb-4">
            {name}
          </h1>
          <div className="w-[100px] lg:w-[171px] h-[3px] bg-brand-gold-light mb-3 mx-auto lg:mx-0" />

          {pdfLabel && (
            <button
              onClick={onPdfClick}
              className="text-[16px] lg:text-[22px] font-gothic text-brand-navy underline hover:text-brand-gold transition-colors"
            >
              {pdfLabel}
            </button>
          )}
        </div>

        {/* Carousel / Image */}
        <div className="lg:w-2/3 w-full mt-10 lg:mt-0 relative max-w-[1082px]">
          {/* Background Shape */}
          <div className={`absolute top-20 w-[90%] h-[300px] lg:h-[500px] bg-light-gray -z-10 hidden lg:block ${isReversed ? 'left-0 rounded-tr-[40px]' : 'right-0 rounded-tl-[40px]'}`} />

          {useSwiper ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop
              navigation
              pagination={{
                clickable: true,
              }}
              autoplay={autoplay}
              className={`w-full aspect-1082/586 ${isReversed ? 'rounded-tr-[40px]' : 'rounded-tl-[40px]'}`}
              onSlideChange={(swiper) => {
                // Pause all videos
                swiper.slides.forEach((slide: HTMLElement) => {
                  const video = slide.querySelector("video");
                  if (video) {
                    video.pause();
                  }
                });

                // Play active video
                const activeSlide = swiper.slides[swiper.activeIndex];
                const activeVideo = activeSlide.querySelector("video");
                if (activeVideo) {
                  activeVideo.currentTime = 0;
                  activeVideo.play().catch(() => {
                    // Silently fail if autoplay is blocked
                  });
                }
              }}
              onSwiper={(swiper) => {
                // Check initial slide
                const activeSlide = swiper.slides[swiper.activeIndex];
                const activeVideo = activeSlide.querySelector("video");
                if (activeVideo) {
                  activeVideo.currentTime = 0;
                  activeVideo.play().catch(() => {
                    // Silently fail if autoplay is blocked
                  });
                }
              }}
            >
              {id === 'ditch-digger' && (
                <SwiperSlide className="flex items-center justify-center">
                  <div className="relative w-full h-full bg-black">
                    <video
                      className={`w-full h-full object-cover ${isReversed ? "rounded-tr-[40px]" : "rounded-tl-[40px]"
                        }`}
                      controls
                      muted
                      playsInline
                    >
                      <source
                        src="/images/imports/ditch-digger-video-01.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </SwiperSlide>
              )}
              {id === "ads60" && (
                <>
                  <SwiperSlide className="flex items-center justify-center">
                    <div className="relative w-full h-full bg-black">
                      <video
                        className={`w-full h-full object-cover ${isReversed ? "rounded-tr-[40px]" : "rounded-tl-[40px]"
                          }`}
                        controls
                        muted
                        playsInline
                      >
                        <source
                          src="/images/imports/ads60-video-01.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex items-center justify-center">
                    <div className="relative w-full h-full bg-black">
                      <video
                        className={`w-full h-full object-cover ${isReversed ? "rounded-tr-[40px]" : "rounded-tl-[40px]"
                          }`}
                        controls
                        muted
                        playsInline
                      >
                        <source
                          src="/images/imports/ads60-video-02.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </SwiperSlide>
                </>
              )}

              {Array.from({ length: imageCount }).map((_, idx) => {
                const num = idx + 1;
                return (
                  <SwiperSlide key={num} className="flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <img
                        src={`/images/${imageCategory}/${id}-image-0${num}.png`}
                        alt={`${name} ${num}`}
                        className={`w-full h-full object-cover ${isReversed ? 'rounded-tr-[40px]' : 'rounded-tl-[40px]'}`}
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

      {/* Description (Optional, rendered below) */}
      {description && (
        <div className="max-w-4xl mx-auto px-4 pt-30 text-center">
          <p className="text-[17px] leading-[30px] tracking-tighter font-gothic text-brand-navy">
            <Trans i18nKey={description} components={{ br: <br /> }} />
          </p>
        </div>
      )}
    </div>
  );
}
