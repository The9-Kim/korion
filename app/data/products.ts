export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  image?: string;
  category: "produce" | "import";
  brand?: string; // For imports
}

export const produceProducts: Product[] = [
  {
    id: "m-4",
    name: "M-4",
    category: "produce",
    subtitle: "최적화된 효율성",
    image: "/images/main/m-4.png"
  },
  {
    id: "m-6",
    name: "M-6",
    category: "produce",
    subtitle: "Kemper header",
    image: "/images/main/m-6.png"
  },
  {
    id: "m-350",
    name: "M-350",
    category: "produce",
    image: "/images/main/m-350.png"
  },
  {
    id: "m-2200",
    name: "M-2200",
    category: "produce",
    image: "/images/main/m-2200.png"
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
        image: "/images/main/m-2200.png"
      },
      {
        id: "ads-100",
        name: "ADS 100",
        category: "import" as const,
        brand: "Fliegl",
        subtitle: "대규모 작업 & 극도의 효율성",
        image: "/images/main/m-2200.png"
      },
      {
        id: "ads-60",
        name: "ADS 60",
        category: "import" as const,
        brand: "Fliegl",
        subtitle: "대규모 작업 & 극도의 효율성",
        image: "/images/main/m-2200.png"
      },
      {
        id: "ads-60",
        name: "ADS 60",
        category: "import" as const,
        brand: "Fliegl",
        subtitle: "대규모 작업 & 극도의 효율성",
        image: "/images/main/m-2200.png"
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
        subtitle: "대규모 작업 & 극도의 효율성",
        image: "/images/main/m-2200.png"
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
        subtitle: "대규모 작업 & 극도의 효율성",
        image: "/images/main/m-2200.png"
      },
      {
        id: "cultivator",
        name: "경운기",
        category: "import" as const,
        brand: "Dondi",
        subtitle: "대규모 작업 & 극도의 효율성",
        image: "/images/main/m-2200.png"
      }
    ]
  }
];
