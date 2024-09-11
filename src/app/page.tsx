// eslint-disable-next-line no-restricted-exports
import { MainPageV2 } from "@/_pages/_main";
import { allItems } from "@/shared/mock";
import Script from "next/script";
import { seo } from "@/shared/consts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NS - Инновационный Казахстанский Бренд техники для красоты",
  description: seo.description,
  openGraph: {
    images: ['/ns-logo.png'],
    title: 'NS - Инновационный Казахстанский Бренд для Красоты',
    description: seo.description
  },
  icons: {
    icon: './favicon.ico',
    shortcut: './favicon.ico',
    apple: './favicon.ico',
    other: {
      rel: './favicon.ico',
      url: './favicon.ico'
    },
  },
  keywords: [
    'фен стайлер',
    'фен',
    'фены',
    'бритвы',
    'купить фен стайлер',
    'купить бритву',
    'купить фен в Алматы',
    'купить бритву в Алматы',
    'купить бритву онлайн',
    'купить фен онлайн',
    'купить фен стайлер',
    'триммер',
    'инновационная бытовая техника',
    'бытовая техника для красоты',
    'уход за собой',
    'фены и стайлеры',
    'купить бритву и фен'
  ]
};
export default async function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `NS - товары`,
    description: seo.description,
    itemListElement: allItems.map(i => ({
      "@type": "Offer",
      name: i.name,
      description: i.features.map(_i => _i.value).join(', '),
      url: `https://nsbeauty.kz/${i.gender}/product/${i.id}`,
      price: i.price,
      priceCurrency: "KZT",
      image: i.images.find(_i => _i.includes('main.jpg')),
    }))
  };

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainPageV2 />
    </>
  );
}
