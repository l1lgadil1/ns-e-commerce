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
import { Colors, Genders, GendersRussian } from "@/shared/consts";
import { useState } from "react";
import { BurgerMenu } from "./ui/burger";
import { NavBtn } from "@/widgets/_header/ui/nav-btn";

export const HeaderV2 = (props: IProps) => {
  const { className } = props;
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const [gender, setGender] = useState(Genders.Women);
  const onClickGender = (val:Genders) => setGender(val);

  return (
    <Flex mode='row' justify='space-between' className={cn(styles.container, className, 'px-4 relative py-3 header')}>
      {isBurgerOpen && (
        <BurgerMenu
          gender={gender}
          onClickGender={onClickGender}
          close={() => setBurgerOpen(false)}
        />
      )}
      <Flex align='center' justify='center'>
        {isBurgerOpen ? <Button variant='ghost' className='p-0'><X color={Colors.White} /></Button> : <Burger onClick={() => setBurgerOpen(p => !p)} color={Colors.White} className='md:hidden' />}
        <Flex mode='row' gap={24} className='!hidden md:!flex'>
          <NavBtn name={GendersRussian.Women} href={`/${Genders?.Women}`} onClick={() => onClickGender(Genders.Women)} isActive={gender === Genders.Women} />
          <NavBtn name={GendersRussian.Men} href={`/${Genders?.Men}`} onClick={() => onClickGender(Genders.Men)} isActive={gender === Genders.Men} />
        </Flex>
      </Flex>

      <Flex className='w-full' justify='center' align='center'>
        <Logo />
      </Flex>
      <Flex align='center' justify='center'>
        <Button className='p-0 hover:bg-transparent' variant='ghost'>
          <Link href="tel:+77762918098">
            <Phone color={Colors.White} className='md:hidden' />
            <P className='md:block hidden' color={Colors.White} fontWeight={400}>+7 776 291 80 98</P>
          </Link>
        </Button>
      </Flex>

    </Flex>
  );
};
