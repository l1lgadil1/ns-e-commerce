'use client';

import styles from './styles.module.scss';
import { ProductModel } from "@/entities/product";
import { useIntersection } from "react-use";
import { useEffect, useRef, useState } from "react";
import { ParallaxBox } from "@/_pages/test/ui/parallax-box";
import { ReviewGallery } from "@/_pages/test/ui/feedbacks";
import { getProduct } from "@/_pages/test/api";
import { TestBtn } from "@/_pages/test/ui/test-btn";

// const ExampleContent = () => (
//   <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
//     <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
//       Additional content explaining the above card here
//     </h2>
//     <div className="col-span-1 md:col-span-8">
//       <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
//         blanditiis soluta eius quam modi aliquam quaerat odit deleniti minima
//         maiores voluptate est ut saepe accusantium maxime doloremque nulla
//         consectetur possimus.
//       </p>
//       <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//         reiciendis blanditiis aliquam aut fugit sint.
//       </p>
//       <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
//         Learn more <FiArrowUpRight className="inline" />
//       </button>
//     </div>
//   </div>
// );
interface IProps {
    product: ProductModel
}

interface Product {
    id: number
    name: string
    price: number
    previousPrice?:number
    count?: number
}

export const TestPage = ({ product }: IProps) => {
// const { scrollYProgress } = useScroll();
// const scaleX = useSpring(scrollYProgress);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCheckoutVisible, setCheckoutVisible] = useState(true);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const [productInfo, setProductInfo] = useState<Product | null>(null);
  const fetchProductInfo = async () => {
    try {
      const res = await getProduct(product.id);
      if (res) {
        setProductInfo(res);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });
  useEffect(() => {
    if ((intersection && intersection.isIntersecting)) {
      setCheckoutVisible(false);
    } else {
      setCheckoutVisible(true);
    }
  }, [intersection]);

  useEffect(() => {
    if (product) {
      fetchProductInfo();
    }
  }, [product]);

  console.log('test');
  return (
    <div className={styles.container}>

      <div className='relative'>
        {product?.sellContent.map((i, index) => (
          <>
            {(index === product.sellContent.length - 1) && <div ref={intersectionRef} />}
            <ParallaxBox
              isLast={index === product.sellContent.length - 1}
              isFirst={index === 0}
              imgUrl={i?.imageUrl || ''}
              images={i?.images || []}
              subHeading={i.title}
              heading={i.text}
              href={product.kaspiUrl}
            />

          </>
        ))}
        {/* {isCheckoutVisible && */}
        {/* <CheckoutButton price={productInfo?.price} href={product.kaspiUrl} /> */}
        {productInfo?.price && (
          <TestBtn
            href={product?.kaspiUrl}
            count={productInfo?.count}
            // currentPrice={79900}
            currentPrice={productInfo?.price}
            oldPrice={productInfo?.previousPrice}
          />
        )}
        {/* } */}
        {/* TODO BOTTOM SECTION */}
        {/* <FeaturesSection mainFeatures={product.bottomArr} /> */}
      </div>
      {product?.reviews && product?.reviews?.length > 0 &&
      <ReviewGallery reviews={product.reviews} href={product.kaspiUrl} />}

    </div>
  );
};
