import styles from './styles.module.scss';
import { IProps } from './props';
import { Flex } from "@/shared/ui/flex";
import Link from "next/link";
import { P } from "@/shared/ui/p";
import { returnColors, URLS } from "@/shared/consts";
import { Hr } from "@/shared/ui/hr";
import { Button } from "@/shared/ui/button";
import { menus } from "@/widgets/_header/lib/mock";
import { Instagram, MoveRight, Youtube } from "lucide-react";
import { H4 } from "@/shared/ui/h4";
import { cn } from "@/shared/lib";
import { useThemeStore } from "@/shared/lib/store";
import { Advertising } from "./ui/advertising";
import { useTranslations } from "next-intl";

export const Footer = (props: IProps) => {
  const { className, advertising } = props;
  const gender = useThemeStore(state => state.theme);
  const t = useTranslations('common');
  return (
    <footer>
      {advertising && <Advertising advertising={advertising} />}
      <div className={cn(styles.container, className)}>
        <Flex gap={40} className='container !py-10'>
          <Flex gap={24}>
            <Flex justify='center' mode='row'>
              <Link href='https://api.whatsapp.com/send?phone=7762918098' target='_blank'>
                <P fontWeight={500} fontSize={22} lineHeight={30} className='tracking-wide'>
                  +7 776 291 80 98
                </P>
              </Link>
            </Flex>
            <Hr />
            <Flex justify='center' mode='row'>
              <Flex className='w-full'>
                {menus?.map(i => (
                  <Link key={i.href} href={!i.href.includes('tel') ? `/${gender}/${i.href}` : i.href} className=''>
                    <Button variant='ghost' key={i.name} className='py-4 px-0 w-full border-b-[1px] h-auto border-[var(--text-primary)] rounded-none flex justify-between'>
                      <P fontWeight={300}>{t(i.name)}</P>
                      <MoveRight color={returnColors(gender).TextPrimary} />
                    </Button>
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
          <Flex gap={24}>
            <Flex mode='row' justify='center'>
              <H4 size='m' mode='secondary'>{t('NS - Казахстанский бренд, который делает стиль доступнее')}</H4>
            </Flex>
            <Flex mode='row' className='w-full' justify='center' gap={16}>
              <Link target='_blank' href={URLS.insta} rel='noreferrer'>
                <Instagram color={returnColors(gender).TextPrimary} />
              </Link>
              <Link target='_blank' href={URLS.youtube} rel='noreferrer'>
                <Youtube color={returnColors(gender).TextPrimary} />
              </Link>
              <Link target='_blank' href={URLS.tiktok} rel='noreferrer'>
                <svg color={returnColors(gender).TextPrimary} width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" stroke={returnColors(gender).TextPrimary}>
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
                  </g>
                </svg>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </footer>
  );
};
