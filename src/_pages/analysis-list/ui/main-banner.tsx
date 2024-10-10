import { Flex } from "@/shared/ui/flex";
import styles from "./main-banner.module.scss";
import { P } from "@/shared/ui/p";
import { Button } from "@/shared/ui/button";
import { useThemeStore } from "@/shared/lib/store";
import { cn } from "@/shared/lib";
import { Genders } from "@/shared/consts";
import { H2 } from "@/shared/ui/h2";
import Image from 'next/image';
import { ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface IProps {
    analysis?:boolean;
    bannerInfo: {
        imgSrc: string;
        title: string;
        highlightText?: string;
        text: string;
        btnText?: string;
        href: string;
        id:string;
    }
}

export const MainBanner = (props: IProps) => {
  const { bannerInfo, analysis } = props;
  const { imgSrc,
    title,
    text,
    btnText,
    id,
    href, highlightText } = bannerInfo;
  const t = useTranslations('home');
  const gender = useThemeStore(state => state.theme);
  return (
    <Flex className={cn(styles.pictureContainer, gender === Genders.Women && styles.women)}>
      <picture className={styles.picture}>
        {/* <img alt='bg-main' src='/images/banner-women.JPG' /> */}
        {/* <img alt='bg-main' src={imgSrc} /> */}
        <Image
          alt='bg-main'
          className='aspect-[287/438]'
          src={imgSrc}
          height={450}
          width={300}
          unoptimized
          priority
        />
      </picture>
      <Flex mode='row' justify='center' className={styles.text}>
        <Flex gap={12} className={styles.center}>
          <Flex gap={4} className={styles.between}>
            <Flex mode='row' className='w-full' justify='center'>
              <H2 mode='primary' fontSize={22} lineHeight={28}>{title}</H2>
              {highlightText && <H2 mode='primary' fontSize={22} lineHeight={28} className={styles.highlightText}>{highlightText}</H2>}
            </Flex>
            <P mode='secondary'>{!analysis ? t(id) : text}</P>
          </Flex>
          <Flex mode='row' justify='center'>
            <Link prefetch href={href}>
              <Button variant='outline' className='border-[1px] rounded-xl !text-[var(--white)] border-[var(--text-primary)]'>
                {/* <P mode='primary' fontWeight={500} size='s'>{btnText || "Перейти"}</P> */}
                {btnText || t("Перейти")}
                <ChevronRight />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
