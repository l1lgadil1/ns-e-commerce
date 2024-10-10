'use client';

import styles from './styles.module.scss';
import { MainBanner } from "./ui/main-banner";
import { useHeaderStore, useThemeStore } from "@/shared/lib/store";
import { Genders } from "@/shared/consts";
import { Flex } from "@/shared/ui/flex";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { H1 } from "@/shared/ui/h1";

export const AnalysisList = () => {
  const gender = useThemeStore(state => state.theme);
  const womenBanners = [
    {
      // imgSrc: `/images/products/dryer/ns-superair/_-24.jpg`,
      imgSrc: `/images/lab-photos/longevity.png`,
      // imgSrc: `/images/products/dryer/ns-superair/test.png`,
      id: 'superair',
      title: 'SUPER',
      highlightText: 'AIR',
      text: 'Анализы SUPERAIR',
      href: `/${gender}/analysis/superair`
    },
  ];
  // @ts-ignore
  const menBanner = [
  ];
  // @ts-ignore
  const currentArr = gender === Genders.Women ? womenBanners : (menBanner as any);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const changeHeaderColor = useHeaderStore(state => state.changeHeaderColor);
  const resetHeaderColor = useHeaderStore(state => state.resetHeaderColor);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });
  useEffect(() => {
    if ((intersection && intersection.isIntersecting)) {
      changeHeaderColor();
    } else {
      resetHeaderColor();
    }
  }, [intersection]);
  return (
    <div className={styles.container}>
      <Flex>
        <H1 className='hidden'>NS</H1>
        {/* @ts-ignore */}
        {currentArr.map(i => (
          <MainBanner analysis bannerInfo={i} key={i.imgSrc} />
        ))}
      </Flex>
      {currentArr?.length > 1 && <div ref={intersectionRef} />}
    </div>
  );
};
