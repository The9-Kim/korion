import { t } from "i18next";

import i18n from "i18next";

export interface Product {
  id: string;
  name: () => string;
  image?: string;
  category: "produce" | "import";
  brand?: string; // For imports
  nameFont?: "gothic";
  pdfUrl?: string | (() => string);
}

export const produceProducts: Product[] = [
  {
    id: "m-4",
    name: () => t("productData.m-4.cardName"),
    category: "produce",
    image: "/images/main/m-4.png",
    pdfUrl: "/pdf/produce_m4_m6_leaflet.pdf"
  },
  {
    id: "m-6",
    name: () => t("productData.m-6.cardName"),
    category: "produce",
    image: "/images/main/m-6.png",
    pdfUrl: "/pdf/produce_m4_m6_leaflet.pdf"
  },
  {
    id: "m-350",
    name: () => t("productData.m-350.cardName"),
    category: "produce",
    image: "/images/main/m-350.png",
    pdfUrl: () =>
      i18n.language === "ko"
        ? "/pdf/korion_Catalog_Korean.pdf"
        : "/pdf/korion_Catalog_English.pdf"
  },
  {
    id: "m-2200",
    name: () => t("productData.m-2200.cardName"),
    category: "produce",
    image: "/images/main/m-2200.png",
    pdfUrl: () =>
      i18n.language === "ko"
        ? "/pdf/korion_Catalog_Korean.pdf"
        : "/pdf/korion_Catalog_English.pdf"
  }
];

export const importBrands: {
  name: () => string;
  products: Product[];
}[] = [
  {
    name: () => t("Fliegl"),
    products: [
      {
        id: "ads120",
        name: () => t("productData.ads120.cardName"),
        category: "import" as const,
        brand: "ADS",
        image: "/images/imports/ads120_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
      },
      {
        id: "ads100",
        name: () => t("productData.ads100.cardName"),
        category: "import" as const,
        brand: "ADS",
        image: "/images/imports/ads100_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
      },
      {
        id: "ads60",
        name: () => t("productData.ads60.cardName"),
        category: "import" as const,
        brand: "ADS",
        image: "/images/imports/ads60_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
      },
      {
        id: "others",
        name: () => t("productData.others.cardName"),
        category: "import" as const,
        brand: "ADS",
        image: "/images/imports/others_card.png",
        pdfUrl: "/pdf/Transportprogramm_GB_2026_www.pdf"
      }
    ]
  },
  {
    name: () => t("BVL"),
    products: [
      {
        id: "vertical-mixer",
        name: () => t("productData.vertical-mixer.cardName"),
        category: "import" as const,
        brand: "BVL",
        image: "/images/imports/bvl_card.png",
        nameFont: "gothic",
        pdfUrl: "/pdf/bvl_product_sheet_V-MIX-Fix_EN_web.pdf"
      }
    ]
  },
  {
    name: () => t("Dondi"),
    products: [
      {
        id: "ditch-digger",
        name: () => t("productData.ditch-digger.cardName"),
        category: "import" as const,
        brand: "Dondi",
        image: "/images/imports/bsr_card.png",
        nameFont: "gothic",
        pdfUrl: "https://www.dondinet.it/en/ditcher/side-excavation/with-bilateral-displacement/#monodouble-wheel"
      },
      {
        id: "cultivator",
        name: () => t("productData.cultivator.cardName"),
        category: "import" as const,
        brand: "Dondi",
        image: "/images/imports/gwg_card.png",
        nameFont: "gothic",
        pdfUrl: "https://www.dondinet.it/en/open-field-soil-tillage/subsoilers-and-decompactors/mounted-subsoilers/#800-series-evo"
      }
    ]
  }
];
