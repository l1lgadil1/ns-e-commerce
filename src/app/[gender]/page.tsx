// eslint-disable-next-line no-restricted-exports
// export { MainPageV2 as default } from "@/_pages/_main";
import { MainPageV2 } from "@/_pages/_main";
import Script from "next/script";
import { allItems } from "@/shared/mock";
import { seo } from "@/shared/consts";

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
