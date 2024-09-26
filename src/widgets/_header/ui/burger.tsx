import { BaseModal } from "@/shared/ui/base-modal";
import { Flex } from "@/shared/ui/flex";
import { Button } from "@/shared/ui/button";
import { P } from "@/shared/ui/p";
import { Genders, GendersRussian, returnColors } from "@/shared/consts";
import { MoveRight } from "lucide-react";
import { menus } from "@/widgets/_header/lib/mock";
import Link from "next/link";
import { NavBtn } from "@/widgets/_header/ui/nav-btn";
import { useTranslations } from "next-intl";

interface IProps {
    close: () => void;
    gender:Genders;
    onClickGender:(val:Genders)=>void;
}

export const BurgerMenu = (props: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { close, gender, onClickGender } = props;
  const t = useTranslations('common');
  return (
    <BaseModal wrapperClassName='!bg-[transparent]' className='bg-[var(--bg-main)] mt-[var(--header-height)]  h-full w-full py-3 px-4' close={close}>
      <Flex gap={24}>
        <Flex mode='row' gap={24}>
          <NavBtn name={GendersRussian.Women} href={`/${Genders?.Women}`} onClick={() => onClickGender(Genders.Women)} isActive={gender === Genders.Women} />
          <NavBtn name={GendersRussian.Men} href={`/${Genders?.Men}`} onClick={() => onClickGender(Genders.Men)} isActive={gender === Genders.Men} />
        </Flex>
        <Flex className=''>
          {menus?.map(i => (
            <Link key={i.href} href={!i.href.includes('tel') ? `/${gender}/${i.href}` : i.href} className=''>
              <Button variant='ghost' onClick={close} key={i.name} className='py-4 px-0 w-full border-b-[1px] h-auto border-[var(--text-primary)] rounded-none flex justify-between'>
                <P fontWeight={300} mode='primary'>{t(i.name)}</P>
                <MoveRight color={returnColors(gender).TextPrimary} />
              </Button>
            </Link>
          ))}
        </Flex>

        <Flex>
          {/* bottom */}
        </Flex>
      </Flex>
    </BaseModal>
  );
};
