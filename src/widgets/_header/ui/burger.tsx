import { BaseModal } from "@/shared/ui/base-modal";
import { Flex } from "@/shared/ui/flex";
import { Button } from "@/shared/ui/button";
import { P } from "@/shared/ui/p";
import { Genders, GendersRussian, returnColors } from "@/shared/consts";
import { MoveRight } from "lucide-react";
import { menus } from "@/widgets/_header/lib/mock";
import { NavBtn } from "@/widgets/_header/ui/nav-btn";
import Link from "next/link";

interface IProps {
    close: () => void;
    gender:Genders;
    onClickGender:(val:Genders)=>void;
}

export const BurgerMenu = (props: IProps) => {
  const { close, gender, onClickGender } = props;

  return (
    <BaseModal wrapperClassName='!bg-[transparent]' className='bg-[var(--bg-main)] mt-[var(--header-height)]  h-full w-full py-3 px-4' close={close}>
      <Flex gap={24}>
        <Flex mode='row' gap={24}>
          <NavBtn name={GendersRussian.Women} href={`/${Genders?.Women}`} onClick={() => onClickGender(Genders.Women)} isActive={gender === Genders.Women} />
          <NavBtn name={GendersRussian.Men} href={`/${Genders?.Men}`} onClick={() => onClickGender(Genders.Men)} isActive={gender === Genders.Men} />
        </Flex>
        <Flex className=''>
          {menus?.map(i => (
            <Link href={`/${gender}/${i.href}`} className=''>
              <Button variant='ghost' key={i.name} className='py-4 px-0 w-full border-b-[1px] h-auto border-[var(--text-primary)] rounded-none flex justify-between'>
                <P fontWeight={300} mode='primary'>{i.name}</P>
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
