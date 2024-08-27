'use client';

import styles from './styles.module.scss';
import { IProps } from './props';
import { Button } from "@/shared/ui/button";
import { Phone, X } from "lucide-react";
import { Flex } from "@/shared/ui/flex";
import { Logo } from "@/shared/ui/logo";
import { cn } from "@/shared/lib";
import { Burger } from "@/shared/ui/burger";
import { P } from "@/shared/ui/p";
import Link from "next/link";
import { Colors, Genders, returnColors } from "@/shared/consts";
import { useState } from "react";
import { BurgerMenu } from "./ui/burger";
import { useHeaderStore, useThemeStore } from "@/shared/lib/store";
import { usePathname } from "next/navigation";

export const HeaderV2 = (props: IProps) => {
  const { className } = props;
  const pathname = usePathname();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const gender = useThemeStore(state => state.theme);
  const changeGender = useThemeStore(state => state.changeTheme);
  const onClickGender = (val:Genders) => {
    changeGender(val);
    setBurgerOpen(false);
  };

  const isHeaderChangeColor = useHeaderStore(state => state.isHeaderChangeColor) || (pathname.includes('courses') || pathname.includes('about-us'));
  return (
    <Flex mode='row' justify='space-between' className={cn(styles.container, isHeaderChangeColor && styles.color, className, 'px-4 relative py-3 header')}>
      {isBurgerOpen && (
        <BurgerMenu
          gender={gender as Genders}
          onClickGender={onClickGender}
          close={() => setBurgerOpen(false)}
        />
      )}
      <Flex align='center' justify='center'>
        {isBurgerOpen ? <Button variant='ghost' className='p-0'><X color={Colors.White} /></Button> : <Burger onClick={() => setBurgerOpen(p => !p)} color={returnColors(gender).TextPrimary} className='md:hidden' />}
        <Flex mode='row' gap={24} className='!hidden md:!flex min-w-[60px]'>
          {/* <NavBtn name={GendersRussian.Women} href={`/${Genders?.Women}`} onClick={() => onClickGender(Genders.Women)} isActive={gender === Genders.Women} /> */}
          {/* <NavBtn name={GendersRussian.Men} href={`/${Genders?.Men}`} onClick={() => onClickGender(Genders.Men)} isActive={gender === Genders.Men} /> */}
        </Flex>
      </Flex>

      <Flex>
        <Flex className='w-full' justify='center' align='center'>
          <Logo color={gender === Genders.Women ? 'black' : 'white'} />
        </Flex>
      </Flex>
      <Flex align='center' justify='center'>
        <Button className='p-0 hover:bg-transparent' variant='ghost'>
          <Link href="tel:+77762918098">
            <Phone color={returnColors(gender).TextPrimary} className='md:hidden' />
            <P className='md:block hidden' color={returnColors(gender).TextPrimary} fontWeight={400}>+7 776 291 80 98</P>
          </Link>
        </Button>
      </Flex>

    </Flex>
  );
};
