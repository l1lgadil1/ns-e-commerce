'use client';

import styles from './styles.module.scss';
import { H1 } from "@/shared/ui/h1";
import { Flex } from "@/shared/ui/flex";
import { P } from "@/shared/ui/p";
import { formatPrice } from "@/shared/helpers";
import { Button } from "@/shared/ui/button";
import { Colors, returnColors } from "@/shared/consts";
import { H2 } from "@/shared/ui/h2";
import { Globe, ShieldCheck, Box, Castle, Plus, Minus } from "lucide-react";
import { cn } from "@/shared/lib";
import { H3 } from "@/shared/ui/h3";
import { useEffect, useMemo, useRef, useState } from "react";
import { useHeaderStore, useThemeStore } from "@/shared/lib/store";
import { useIntersection } from "react-use";
import { ProductModel } from "@/entities/product";
import { allItems } from "@/shared/mock";
import { useParams } from "next/navigation";
import Link from "next/link";

export const ProductPage = () => {
  const gender = useThemeStore(state => state.theme);
  const params = useParams();
  const returnIcon = (type:string) => {
    switch (type) {
      case 'system':
        return <Castle color={returnColors(gender).TextPrimary} />;
      case "guard":
        return <ShieldCheck color={returnColors(gender).TextPrimary} />;
      case 'box':
        return <Box color={returnColors(gender).TextPrimary} />;
      default:
        return null;
    }
  };
  const [productInfo, setProductInfo] = useState<ProductModel>();
  const [isCharacteristicsFull, setCharacteristicsFull] = useState(false);
  const characteristicsArr = useMemo(() => (isCharacteristicsFull ? productInfo?.characteristics : productInfo?.characteristics?.slice(0, 4)), [isCharacteristicsFull, productInfo]);
  const handleCharacteristics = () => setCharacteristicsFull(p => !p);

  const headerChangeColor = useHeaderStore(state => state.changeHeaderColor);
  const headerRefreshColor = useHeaderStore(state => state.resetHeaderColor);

  const refreshRef = useRef<HTMLDivElement>(null);
  const refreshIntersection = useIntersection(refreshRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  useEffect(() => {
    if ((refreshRef && refreshIntersection?.isIntersecting)) {
      headerRefreshColor();
    }
  }, [refreshIntersection]);

  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  useEffect(() => {
    if ((intersection && intersection.isIntersecting)) {
      headerChangeColor();
    }
  }, [intersection]);

  useEffect(() => {
    const foundItem = allItems.find(i => i.id === params.id);
    if (foundItem) {
      setProductInfo(foundItem);
      console.log(foundItem);
    }
  }, [params]);

  if (!productInfo) {
    return <div>Загрузка...</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.progress}>
          {/* asd */}
        </div>

        <img src={productInfo?.images.find(i => i.includes('main'))} alt="product" />

        {/* <img src="/images/products/dryer/dryer1.png" alt="product" /> */}
        <Flex className={styles.name} justify='center' align='center' mode='row'>
          <Flex gap={24} className={styles.info}>
            <H1 color={Colors.White} className='text-center'>{productInfo?.name}</H1>
            <Flex gap={18} align='center'>
              <H2 size='s' color={Colors.White} className='opacity-80'>{formatPrice(productInfo?.price)} тг.</H2>
              <Link href={productInfo?.kaspiUrl} target='_blank'>
                <Button>
                  Купить
                </Button>
              </Link>
            </Flex>
          </Flex>

        </Flex>
        <div ref={refreshRef} />
        {/* Features desktop */}
        <Flex mode='row' justify='center' className={cn('!hidden md:!flex w-full ', styles.featuresDesktop, styles.features)}>
          <Flex gap={24} mode='row' justify='center' className='container'>
            {/* {featuresArr?.map(i => ( */}
            {/*  <Flex mode='row' gap={4} align='center'> */}
            {/*    {i.icon} */}
            {/*    <P size='m' mode='primary' key={i?.title}> */}
            {/*      {i.title} */}
            {/*    </P> */}
            {/*  </Flex> */}
            {/* ))} */}
            <Flex mode='row' gap={4} align='center'>
              <Globe color={returnColors(gender).TextPrimary} />
              <P size='m' mode='primary'>
                Казахстанский бренд
              </P>
            </Flex>
            {productInfo?.mainFeatures.map(i => (
              <Flex key={i.value} mode='row' gap={4} align='center'>
                {returnIcon(i.type)}
                <P size='m' mode='primary'>
                  {i.value}
                </P>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </div>
      {/* Features mobile */}
      <Flex className={cn('my-8 container md:!hidden', styles.features)}>
        <Flex gap={12}>
          <Flex mode='row' gap={4} align='center'>
            <Globe color={returnColors(gender).TextPrimary} />
            <P size='m' mode='primary'>
              Казахстанский бренд
            </P>
          </Flex>
          {productInfo?.mainFeatures.map(i => (
            <Flex key={i.value} mode='row' gap={4} align='center'>
              {returnIcon(i.type)}
              <P size='m' mode='primary'>
                {i.value}
              </P>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {/* Features details */}
      <div ref={intersectionRef} />
      <Flex gap={24} className='!py-6 container bg-[var(--bg-secondary)] md:bg-transparent'>
        {productInfo?.features?.map((i) => (
          <Flex key={i.img} gap={18} className={styles.featureCard}>
            <img src={i.img} alt={i.value} />
            <H3 size='s' mode='secondary' className='opacity-80'>{i?.value}</H3>
          </Flex>
        ))}
      </Flex>
      <Flex gap={18} className='container !py-6'>
        <H3 size='m' mode='primary' className='underline underline-offset-8 '>
          Характеристики
        </H3>
        <Flex gap={24}>
          {characteristicsArr?.map(i => (
            <Flex mode='row' className='w-full border-b-[1px] border-[var(--text-primary)] py-[10px]' justify='flex-start'>
              <Flex gap={4}>
                <P mode='secondary' size='m' className='opacity-40'>{i.title}</P>
                <P mode='secondary' size='m'>{i.value}</P>
              </Flex>
            </Flex>
          ))}
          <Flex align='flex-start'>
            <Button onClick={handleCharacteristics} className='h-auto p-0 flex gap-4 items-center' variant='ghost'>
              {isCharacteristicsFull ? <Minus color={returnColors(gender).TextPrimary} /> : <Plus color={returnColors(gender).TextPrimary} />}
              <P mode='primary' fontWeight={500} size='s' className=' uppercase'>{isCharacteristicsFull ? "Свернуть" : "Больше характеристик"}</P>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify='center' mode='row' className='container !py-5'>
        <Button>
          {/* <P mode='primary' className='uppercase' fontWeight={500}>Инструкция</P> */}
          Инструкция
        </Button>
      </Flex>
    </div>
  );
};