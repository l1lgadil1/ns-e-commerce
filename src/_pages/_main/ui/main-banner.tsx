import { Flex } from "@/shared/ui/flex";
import styles from "./main-banner.module.scss";
import { H1 } from "@/shared/ui/h1";
import { P } from "@/shared/ui/p";
import { Button } from "@/shared/ui/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { useHeaderStore, useThemeStore } from "@/shared/lib/store";
import { cn } from "@/shared/lib";
import { Genders } from "@/shared/consts";

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
  const gender = useThemeStore(state => state.theme);
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
    <Flex className={cn(styles.pictureContainer, gender === Genders.Women && styles.women)}>
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
              <Button variant='outline' className='border-[1px] rounded-xl !text-[var(--white)] border-[var(--text-primary)]'>
                {/* <P mode='primary' fontWeight={500} size='s'>{btnText || "Перейти"}</P> */}
                {btnText || "Перейти"}
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <div ref={intersectionRef} />
    </Flex>
  );
};
