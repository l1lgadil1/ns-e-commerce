'use client';

import styles from './styles.module.scss';
import { ProductModel } from "@/entities/product";
import { CheckoutButton } from "./ui/checkout-button";
import { useIntersection } from "react-use";
import { Suspense, useEffect, useRef, useState } from "react";
import { ParallaxBox } from "@/_pages/test/ui/parallax-box";

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

export const TestPage = ({ product }: IProps) => {
// const { scrollYProgress } = useScroll();
// const scaleX = useSpring(scrollYProgress);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCheckoutVisible, setCheckoutVisible] = useState(true);
  const intersectionRef = useRef<HTMLDivElement>(null);
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

  return (
    <Suspense fallback={<>...</>}>
      <div className={styles.container}>
        {/* <div className='fixed z-10 bottom-0 left-0 w-full bg-white h-[10px]'> */}
        {/*  <motion.div style={{ scaleX }} className='bg-red-800 h-full' /> */}
        {/* </div> */}
        {/* MAIN CONTENT LIST */}
        <div className='relative'>
          {product?.sellContent.map((i, index) => (
            <>
              {(index === product.sellContent.length - 1) && <div ref={intersectionRef} />}
              <ParallaxBox
                isFirst={index === 0}
                imgUrl={i.imageUrl}
                subHeading={i.title}
                heading={i.text}
                href={product.kaspiUrl}
              />
              {/* <TextParallaxContent */}
              {/*  isFirst={index === 0} */}
              {/*  // && product.id === 'ns-superair' */}
              {/*  imgUrl={i.imageUrl} */}
              {/*  subheading={i.title} */}
              {/*  key={i.imageUrl} */}
              {/*  heading={i.text} */}
              {/*  isLast={index === product.sellContent.length - 1} */}
              {/* /> */}
            </>
          ))}
          {/* {isCheckoutVisible && */}
          <CheckoutButton href={product.kaspiUrl} />
          {/* } */}
          {/* TODO BOTTOM SECTION */}
          {/* <FeaturesSection mainFeatures={product.bottomArr} /> */}
        </div>
        {/* <ReviewGallery href={product.kaspiUrl} /> */}
        {/* <div> */}
        {/*  <TextParallaxContent */}
        {/*    imgUrl="/images/products/razor/ns-11/_-5.jpg" */}
        {/*    subheading="NS 11" */}
        {/*    heading="Все самое лучшее собрано в одном месте" */}
        {/*  > */}

        {/*    /!* <ExampleContent /> *!/ */}
        {/*  </TextParallaxContent> */}
        {/*  <TextParallaxContent */}
        {/*    imgUrl="/images/products/razor/ns-11/_-6.jpg" */}
        {/*    subheading="Для всех типов кожи" */}
        {/*    heading="Бритва NS 11 идеально подойдет под любой тип кожи" */}
        {/*  > */}
        {/*    /!* <ExampleContent /> *!/ */}
        {/*  </TextParallaxContent> */}
        {/*  <TextParallaxContent */}
        {/*    imgUrl="/images/products/razor/ns-11/_-31.jpg" */}
        {/*    subheading="Долгая работа" */}
        {/*    heading="NS 11 может проработать 120 мин от аккумулятора" */}
        {/*  > */}
        {/*    /!* <ExampleContent /> *!/ */}
        {/*  </TextParallaxContent> */}
        {/* </div> */}
      </div>
    </Suspense>
  );
};
