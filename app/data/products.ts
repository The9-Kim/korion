export interface ProductFeature {
  title: string;
  description: string;
  image?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  features: ProductFeature[];
  specs: ProductSpec[];
  category: "produce" | "import";
  brand?: string; // For imports
}

export const produceProducts: Product[] = [
  {
    id: "m-4",
    name: "M-4",
    category: "produce",
    description: "M-4 모델(4열)은 효율성과 성능의 다용도성을 위해 제작되었습니다. Kemper 헤더를 장착하도록 설계되었으며, PTO 축 오버드라이브 클러치를 통해 180-240 HP의 출력을 제공합니다. M-4는 어떤 작업 환경에서도 최적화된 효율성을 제공합니다.",
    features: [
      { title: "4열", description: "4열 수확의 최적화" },
      { title: "Kemper 헤더", description: "Kemper 헤더 장착" },
      { title: "최대 3m", description: "작업 폭 최대 3m" },
    ],
    specs: [
      { label: "수확기 최적화 된 출력", value: "180-240 HP" },
      { label: "PTO 축", value: "오버드라이브 클러치" },
      { label: "Uni Cracker", value: "장착 가능" },
    ]
  },
  {
    id: "m-6",
    name: "M-6",
    category: "produce",
    description: "M-6 모델은 고성능 작업을 위해 설계되었습니다.",
    features: [],
    specs: []
  },
  {
    id: "m-350",
    name: "M-350",
    category: "produce",
    description: "M-350은 대규모 작업을 위한 강력한 솔루션입니다.",
    features: [],
    specs: []
  },
  {
    id: "m-2200",
    name: "M-2200",
    category: "produce",
    description: "M-2200은 최고의 생산성을 보장합니다.",
    features: [],
    specs: []
  }
];

export const importBrands = [
  {
    name: "Fliegl",
    products: [
      {
        id: "ads-120",
        name: "ADS 120",
        category: "import" as const,
        brand: "Fliegl",
        subtitle: "대규모 작업 & 극도의 효율성",
        description: "ADS 120은 대규모 작업과 극도의 효율성을 위해 제작되었습니다. 대용량과 견고한 설계는 넓은 지역에 걸쳐 거름과 퇴비를 신속하고 균일하게 살포를 보장합니다. 가장 필요한 때에의 추진을 보장하는 생산성을 제공합니다.",
        features: [
          { title: "단일 축 푸시 오프 거름 살포기", description: "약 14m³ 용량" },
          { title: "최대 적재 중량", description: "16,000kg & 드로바 하중 3,000kg" },
          { title: "유압 스프링 견인 장치", description: "안정적인 견인" },
          { title: "유압 슬라이딩 바닥", description: "푸시 오프 시스템" },
          { title: "유압 드로바 서스펜션", description: "최고의 승차감" },
          { title: "살포기에서 트레일러 옵션으로", description: "교체 가능한 뒷문" },
        ],
        specs: []
      },
      {
        id: "ads-100",
        name: "ADS 100",
        category: "import" as const,
        brand: "Fliegl",
        description: "",
        features: [],
        specs: []
      },
      {
        id: "ads-60",
        name: "ADS 60",
        category: "import" as const,
        brand: "Fliegl",
        description: "",
        features: [],
        specs: []
      }
    ]
  },
  {
    name: "BVL",
    products: [
      {
        id: "vertical-mixer",
        name: "수직믹서",
        category: "import" as const,
        brand: "BVL",
        description: "",
        features: [],
        specs: []
      }
    ]
  },
  {
    name: "Dondi",
    products: [
      {
        id: "ditch-digger",
        name: "배수로 굴착기",
        category: "import" as const,
        brand: "Dondi",
        description: "",
        features: [],
        specs: []
      },
      {
        id: "cultivator",
        name: "경운기",
        category: "import" as const,
        brand: "Dondi",
        description: "",
        features: [],
        specs: []
      }
    ]
  }
];
