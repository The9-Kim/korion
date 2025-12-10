export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  image?: string;
  category: "produce" | "import";
  brand?: string; // For imports
  nameFont?: "gothic";
  pdfUrl?: string;
}

export const produceProducts: Product[] = [
  {
    id: "m-4",
    name: "M-4",
    category: "produce",
    subtitle: "최적화된 효율성",
    image: "/images/main/m-4.png",
    pdfUrl: "/pdf/코리온농업기계 리플렛 out 241112.pdf"
  },
  {
    id: "m-6",
    name: "M-6",
    category: "produce",
    subtitle: "Kemper header",
    image: "/images/main/m-6.png",
    pdfUrl: "/pdf/코리온농업기계 리플렛 out 241112.pdf"
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

export const importBrands: {
  name: string;
  products: Product[];
}[] = [
  {
    name: "Fliegl",
    products: [
      {
        id: "ads120",
        name: "ADS 120",
        category: "import" as const,
        brand: "Fliegl",
        image: "/images/imports/ads120_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
      },
      {
        id: "ads100",
        name: "ADS 100",
        category: "import" as const,
        brand: "Fliegl",
        image: "/images/imports/ads100_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
      },
      {
        id: "ads60",
        name: "ADS 60",
        category: "import" as const,
        brand: "Fliegl",
        image: "/images/imports/ads60_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
      },
      {
        id: "others",
        name: "Others",
        category: "import" as const,
        brand: "Fliegl",
        image: "/images/imports/others_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
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
        image: "/images/imports/bvl_card.png",
        nameFont: "gothic",
        pdfUrl: "/pdf/bvl_product_sheet_V-MIX-Fix_EN_web.pdf"
      }
    ]
  },
  {
    name: "Dondi",
    products: [
      {
        id: "ditch-digger",
        name: "배수로 조성기",
        category: "import" as const,
        brand: "Dondi",
        image: "/images/imports/bsr_card.png",
        nameFont: "gothic",
        pdfUrl: "https://www.dondinet.it/en/ditcher/side-excavation/with-bilateral-displacement/#monodouble-wheel"
      },
      {
        id: "cultivator",
        name: "치즐쟁기",
        category: "import" as const,
        brand: "Dondi",
        image: "/images/imports/gwg_card.png",
        nameFont: "gothic",
        pdfUrl: "https://www.dondinet.it/en/open-field-soil-tillage/subsoilers-and-decompactors/mounted-subsoilers/#800-series-evo"
      }
    ]
  }
];
