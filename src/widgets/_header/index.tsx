'use client';

import styles from './styles.module.scss';
import { IProps } from './props';
import { Button } from "@/shared/ui/button";
import { Globe, Phone, X } from "lucide-react";
import { Flex } from "@/shared/ui/flex";
import { Logo } from "@/shared/ui/logo";
import { cn } from "@/shared/lib";
import { Burger } from "@/shared/ui/burger";
import { P } from "@/shared/ui/p";
import { Colors, Genders, GendersRussian, locales, returnColors } from "@/shared/consts";
import { useEffect, useState } from "react";
import { BurgerMenu } from "./ui/burger";
import { useHeaderStore, useThemeStore } from "@/shared/lib/store";
import { useParams, usePathname } from "next/navigation";
import { NavBtn } from "@/widgets/_header/ui/nav-btn";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/routing";

export const HeaderV2 = (props: IProps) => {
  const { className } = props;
  const pathname = usePathname();
  const { locale } = useParams();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const gender = useThemeStore(state => state.theme);
  const changeGender = useThemeStore(state => state.changeTheme);
  const onClickGender = (val:Genders) => {
    console.log(val);
    changeGender(val);
    setBurgerOpen(false);
  };

  const isHeaderChangeColor = useHeaderStore(state => state.isHeaderChangeColor) || (pathname.includes('courses') || pathname.includes('about-us'));
  const changeTheme = useThemeStore(state => state.changeTheme);
  const params = useParams();
  const setGender = () => {
    if (!params.gender || params.gender === Genders.Women) {
      changeTheme('women');
    } else if (params?.gender && params.gender === Genders.Men) {
      changeTheme('men');
    }
  };
  useEffect(() => {
    // setGender()
  }, []);
  setGender();
  return (
    //   TODO cкрывать хэдер при скролле
    <Flex mode='row' justify='space-between' className={cn(styles.container, isHeaderChangeColor && styles.color, className, 'px-4 relative py-3 header')}>
      {isBurgerOpen && (
        <BurgerMenu
          gender={gender as Genders}
          onClickGender={onClickGender}
          close={() => setBurgerOpen(false)}
        />
      )}
      <Flex align='flex-start' justify='center' className='min-w-[74px]'>
        {isBurgerOpen ? <Button variant='ghost' className='p-0'><X color={Colors.White} /></Button> : <Burger onClick={() => setBurgerOpen(p => !p)} color={returnColors(gender).TextPrimary} className='p-3 md:hidden' />}
        <Flex mode='row' gap={24} className='!hidden md:!flex min-w-[60px]'>
          <NavBtn name={GendersRussian.Women} href={`/${Genders?.Women}`} onClick={() => onClickGender(Genders.Women)} isActive={gender === Genders.Women} />
          <NavBtn name={GendersRussian.Men} href={`/${Genders?.Men}`} onClick={() => onClickGender(Genders.Men)} isActive={gender === Genders.Men} />
        </Flex>
      </Flex>

      <Flex>
        <Flex className='w-full' justify='center' align='center'>
          <Logo color={gender === Genders.Women ? 'black' : 'white'} />
        </Flex>
      </Flex>
      <Flex align='center' justify='center' mode='row' gap={2}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant='ghost' className='uppercase p-0 flex items-center gap-1'>
              <Globe color={returnColors(gender).TextPrimary} />
              <P className='hidden md:block' color={returnColors(gender).TextPrimary}>{locale}</P>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {locales.map(i => (
              <Link href={`/${gender}`} locale={i}><DropdownMenuItem className='uppercase'>{i}</DropdownMenuItem></Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className='p-0 hover:bg-transparent' variant='ghost'>
          <Link href="https://api.whatsapp.com/send?phone=7762918098&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%9F%D0%B8%D1%88%D1%83%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%BD%D0%B0%D1%81%D0%B0%D0%B4%D0%BE%D0%BA" target='_blank' className='p-3'>
            <Phone color={returnColors(gender).TextPrimary} className='md:hidden' />
            <P className='md:block hidden' color={returnColors(gender).TextPrimary} fontWeight={400}>+7 776 291 80 98</P>
          </Link>
        </Button>
      </Flex>
    </Flex>
  );
};
