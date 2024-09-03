// eslint-disable-next-line no-restricted-exports
// export { ProductPage as default } from "@/_pages/_product";

import type { Metadata } from 'next';
import { allItems } from "@/shared/mock";
import { ProductPage } from "@/_pages/_product";

type Props = {
    params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const { id } = params;

  // fetch data
  const product = allItems.find(i => i.id === id);

  if (product) {
    return {
      title: product.name,
      openGraph: {
        images: product.images,
        title: product.name,
        description: [product.features.map(i => `${i.value}`).join(', '), product.characteristics.map(i => `${i.title}:${i.value}`).join(', ')].join(', ')
      },
      keywords: product.features.map(i => i.value).join(', '),
      description: [product.features.map(i => `${i.value}`).join(', '), product.characteristics.map(i => `${i.title}:${i.value}`).join(', ')].join(', ')

    };
  }
  return {
    title: 'NS',
    description: 'NS - инновационный казахстанский бренд номер один. Бытовая техника для красоты. Бритвы, триммеры, станки, насадки для бритв. Фены, фены-стайлеры, выпрямители.'
  };
}

export default function Page({ params }: Props) {
  const { id } = params;
  const product = allItems.find(i => i.id === id);
  if (!product) {
    return {
      notFound: true
    };
  }
  return <ProductPage product={product} />;
}
