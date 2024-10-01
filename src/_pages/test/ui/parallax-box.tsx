import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/shared/lib";
import styles from './styles.module.scss';
import Image from 'next/image';

const IMG_PADDING = 12;

const highlightedText = (text:string) => text.split(/(air)/gi).map((part, index) =>
  (part.toLowerCase() === "air" ? (
    <span key={index} className='text-[var(--btn-main)]'>
      {part}
    </span>
  ) : (
    part
  ))
);

const StickyImage = ({ imgUrl, isFirst }:any) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      style={{
        // height: `calc(var(--app-height) - ${IMG_PADDING * 2}px)`,
        // maxHeight: `calc(var(--app-height) - ${IMG_PADDING * 2}px)`,
        overflow: 'hidden'
      }}
      className={styles.img}
    >
      <motion.div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: '100%',
          // height: `calc(var(--app-height))`,
          top: !isFirst ? IMG_PADDING : 0,
          scale,
        }}
        ref={targetRef}
        className={cn("z-0 overflow-hidden",
          "sticky"
        )}
      >
        <motion.div
          className={cn("absolute inset-0",
            // !isFirst && "bg-neutral-950/70"
          )}
          style={{
            // opacity,
          }}
        />
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextParallaxContent = ({ imgUrl, subheading, heading, images, children, isFirst }:any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const settings = {
    dots: images?.length > 0,
    infinite: false,
    speed: 400,
    // slidesToShow: 1,
    // slidesToScroll: 1,
  };
  return (
    <div>
      <div className={cn("relative",
        //    "h-[150vh]"
      )}
      >
        {/* <Slider {...settings}> */}
        {/*  {images.map((img: string) => ( */}
        {/*    <StickyImage imgUrl={img} key={img} isFirst={isFirst} /> */}
        {/*  ))} */}
        {/* </Slider> */}
        {!isFirst && (
          <h2 className="col-span-1 text-2xl mb-8 px-4 text-[var(--text-primary)] font-bold md:col-span-4">
            {highlightedText(subheading)}
          </h2>
        )}
        {imgUrl && <StickyImage imgUrl={imgUrl} isFirst={isFirst} />}
        {/* <OverlayCopy heading={heading} subheading={subheading} /> */}
      </div>
      {children}
    </div>
  );
};

// const OverlayCopy = ({ subheading, heading }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end start"],
//   });
//
//   const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
//   const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
//
//   return (
//     <motion.div
//       style={{
//         y,
//         opacity,
//       }}
//       ref={targetRef}
//       className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
//     >
//       <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
//         {subheading}
//       </p>
//       <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
//     </motion.div>
//   );
// };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExampleContent = ({ title, text, href, images, isFirst }:{title:string, isFirst:boolean, href:string, text:string, images:{src:string, title?:string;text?:string, left?:string, top?:string;bottom?:string}[]}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div ref={targetRef} className={cn("mx-auto md:py-22 gap-8 px-4 pt-4 md:pt-8 flex flex-col", styles.textContainer)}>
      <div className="absolute bottom-0 left-0 top-[-1%] right-0 h-[10px] bg-gradient-to-t from-[var(--gradient)] to-transparent" />
      {/* <div className="absolute bottom-[-20%] left-0 right-0 h-[20%] bg-gradient-to-b  from-[var(--gradient)] to-transparent" /> */}
      {isFirst && (
        <motion.h2 className="col-span-1 text-2xl m text-[var(--text-primary)] font-bold md:col-span-4">
          {highlightedText(title)}
        </motion.h2>
      )}
      {images && images.length > 1 && (
        <div className='flex overflow-x-scroll md:hidden w-full pb-5 gap-3 '>
          {images.map(i => (
            // <Image src={i.src} alt='gallery image' className='w-[95%] !h-full rounded-md' width={220} height={340} />
            <picture className={cn('relative w-full aspect-[357/535]', styles.picture)}>
              <Image
                src={i.src}
                alt='gallery image'
                // className='w-[95%] aspect-[357/535] !h-full rounded-md '
                fill
                className="object-cover rounded-md"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div
                className='absolute'
                style={{
                  left: i.left,
                  top: i?.top || 'unset',
                  bottom: i?.bottom || 'unset'
                }}
              >
                {i.title && <h3 className='text-xl font-bold'>{i.title}</h3>}
                {i.text && <h4 className='text-lg leading-[18px] text-[rgb(29, 29, 31)]'>{i.text}</h4>}
              </div>
            </picture>
          ))}
        </div>
      )}
      <div className="col-span-1 md:col-span-8 flex flex-col ">
        <motion.p className="mb-4 whitespace-pre-wrap text-xl  text-[var(--text-secondary)] ">
          {highlightedText(text)}
        </motion.p>
      </div>
      {/* {images && images.length > 1 && ( */}
      {/*  <div className='overflow-x-scroll hidden md:flex w-full pb-5 gap-3 '> */}
      {/*    {images.map(i => ( */}
      {/*      <div className='relative'> */}
      {/*        <Image src={i.src} alt='gallery image' className='w-[95%] !h-full rounded-md' width={220} height={340} /> */}
      {/*        <div style={{ */}
      {/*          left: i.left, */}
      {/*          top: i?.top || 'unset', */}
      {/*          bottom: i?.bottom || 'unset' */}
      {/*        }} */}
      {/*        > */}
      {/*          {i.title && <h3 className='text-[28px] leading-[40px] font-bold'>{i.title}</h3>} */}
      {/*          {i.text && <h4 className='text-[24px] leading-[28px] text-[rgb(29, 29, 31)]'>{i.text}</h4>} */}
      {/*        </div> */}
      {/*      </div> */}
      {/*    ))} */}
      {/*  </div> */}
      {/* )} */}
    </motion.div>
  );
};
// TODO добавить общие модели везде
export const ParallaxBox = ({ imgUrl, subHeading, isLast, heading, isFirst, images, href }:{imgUrl:string, isLast:boolean, href:string, subHeading:string, heading:string, images:{src:string, title?:string;text?:string, left?:string, top?:string;bottom?:string}[], isFirst:boolean}) => (
  <>
    <div className={cn('pt-8 pb-5', isLast && 'pb-[100px]', styles.container)}>
      <TextParallaxContent
        imgUrl={imgUrl}
        images={images}
        subheading={subHeading}
        heading={heading}
        isFirst={isFirst}
      >
        {heading && subHeading && <ExampleContent isFirst={isFirst} images={images} href={href} text={heading} title={subHeading} />}
      </TextParallaxContent>
    </div>
    <hr className={styles.hr} />
  </>
);
