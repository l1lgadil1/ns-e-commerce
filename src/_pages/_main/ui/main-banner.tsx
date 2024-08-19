import { Flex } from "@/shared/ui/flex";
import styles from "./main-banner.module.scss";
import { H1 } from "@/shared/ui/h1";
import { P } from "@/shared/ui/p";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useHeaderStore } from "@/shared/lib/store";

interface IProps {
    bannerInfo: {
        imgSrc: string;
        title: string;
        text: string;
        btnText?: string;
        href: string;
    }
}

export const MainBanner = (props: IProps) => {
  const { bannerInfo } = props;
  const { imgSrc,
    title,
    text,
    btnText,
    href } = bannerInfo;
  const intersectionRef = useRef<HTMLDivElement>(null);
  const resetHeaderColor = useHeaderStore(state => state.resetHeaderColor);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  useEffect(() => {
    if ((intersection && intersection.isIntersecting)) {
      resetHeaderColor();
    }
  }, [intersection]);
  return (
    <Flex className={styles.pictureContainer}>
      <picture className={styles.picture}>
        {/* <img alt='bg-main' src='/images/banner-women.JPG' /> */}
        <img alt='bg-main' src={imgSrc} />
      </picture>
      <Flex mode='row' justify='center' className={styles.text}>
        <Flex gap={12} className={styles.center}>
          <Flex gap={4}>
            <H1 mode='primary' fontSize={22} lineHeight={28}>{title}</H1>
            <P mode='secondary'>{text}</P>
          </Flex>
          <Flex mode='row' justify='center'>
            <Link href={href}>
              <Button className='border-[var(--text-primary)]' variant='outline'>
                <P mode='primary' size='s'>{btnText || "Перейти"}</P>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <div ref={intersectionRef} />
    </Flex>
  );
};
