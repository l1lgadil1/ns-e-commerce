import { useTranslations } from "next-intl";
import { Flex } from "@/shared/ui/flex";
import { cn } from "@/shared/lib";
import styles from "@/_pages/courses/styles.module.scss";
import { Genders } from "@/shared/consts";
import Image from "next/image";
import { H2 } from "@/shared/ui/h2";
import { P } from "@/shared/ui/p";
import { Link } from "@/i18n/routing";
import { Button } from "@/shared/ui/button";
import { ChevronRight } from "lucide-react";
import { useThemeStore } from "@/shared/lib/store";

interface IProps{
  handleClickCourse:()=>void;
}
export const Preview = ({ handleClickCourse }:IProps) => {
  const bgSrc = '/images/products/dryer/ns-superair/dryer-7.png';
  const gender = useThemeStore(state => state.theme);
  const t = useTranslations('home');
  return (
    <Flex className={cn(styles.pictureContainer, gender === Genders.Women && styles.women)}>
      <picture className={styles.picture}>
        {/* <img alt='bg-main' src='/images/banner-women.JPG' /> */}
        {/* <img alt='bg-main' src={imgSrc} /> */}
        <Image
          alt='bg-main'
          className='aspect-[287/438]'
          src={bgSrc}
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
              <H2 mode='primary' fontSize={22} lineHeight={28}>Авторский курс от профессионального стилиста</H2>
              {/* {highlightText && <H2 mode='primary' fontSize={22} lineHeight={28} className={styles.highlightText}>{highlightText}</H2>} */}
            </Flex>
            <P mode='secondary'>Научитесь делать профессиональные укладки в домашних условиях. Расширьте свои знания с помощью нашего курса</P>
          </Flex>
          <Flex mode='row' justify='center'>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link prefetch href='#' onClick={handleClickCourse}>
              <Button variant='ghost' className='border-[1px] rounded-xl !text-[white] border-[var(--text-primary)]'>
                {/* <P mode='primary' fontWeight={500} size='s'>{btnText || "Перейти"}</P> */}
                {t("Перейти")}
                <ChevronRight />
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
