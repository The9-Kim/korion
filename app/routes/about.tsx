import type { Route } from "./+types/about";
import Layout from "../components/Layout";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Korion - About" },
    { name: "description", content: "About Korion Agricultural Machinery" },
  ];
}

export default function About() {
  return (
    <Layout>
      <div className="relative w-full min-h-[calc(100vh-80px)] bg-gray-100 flex items-center justify-center py-20 px-4">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-secondary-200">
          {/* Replace with actual background image */}
          <div className="absolute inset-0 bg-[url('/placeholder-tractor-bg.jpg')] bg-cover bg-center opacity-50" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 bg-white/90 backdrop-blur-sm max-w-4xl w-full rounded-[40px] p-12 md:p-16 text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 mb-6">
            지역을 위한 기술, 세계 수준의 성능
          </h2>

          <div className="mb-8">
            <span className="text-4xl md:text-5xl font-bold text-brand-gold uppercase tracking-widest">Korion</span>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base break-keep">
            <p>
              코리온(KORION)은 한국 최대 농업 지역에 기반을 둔 한국 농업 기계 기업으로,<br className="hidden md:block" />
              아시아 농민들의 고유한 요구를 충족시키는 데 전념하고 있습니다.
            </p>
            <p>
              우리의 임무는 간단합니다: 안전을 최우선으로 생각하며,<br className="hidden md:block" />
              초고품질 장비를 사용하여 농작물 품질을 높이고 손실을 줄이는 것입니다.
            </p>
            <p>
              대부분 광활하고 평평한 밭에 최적화된 유럽산 수입 모델과는 달리,<br className="hidden md:block" />
              저희의 R&D 및 제조 공정은 아시아의 니즈에 특화된 지형 적응성과 기동성에 중점을 두고 있습니다.
            </p>
          </div>

          <div className="my-8 w-16 h-[1px] bg-gray-300 mx-auto" />

          <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base break-keep">
            <p>
              저희는 특수 트랙터 장착형 수확기 생산과 함께,<br className="hidden md:block" />
              BVL 믹서, Fliegl 살포기, Kemper 헤더, Dondi 배수로 굴착기 및 경운기 등<br className="hidden md:block" />
              세계 최고의 장비를 수입하여 맞춤형 솔루션을 제공합니다.
            </p>
            <p>
              코리온의 장비는 아시아의 밭에 맞게 한국에서 설계됩니다.<br className="hidden md:block" />
              우리는 현지 성공에 최적화된 세계적 수준의 장비를 위한 파트너입니다.
            </p>
          </div>

          <div className="mt-12">
            <button className="bg-brand-gold text-white px-8 py-3 rounded-md font-bold hover:bg-brand-gold-hover transition-colors">
              Contact US
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
