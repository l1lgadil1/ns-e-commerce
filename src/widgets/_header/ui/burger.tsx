import { BaseModal } from "@/shared/ui/base-modal";
import { Flex } from "@/shared/ui/flex";
import { Button } from "@/shared/ui/button";
import { P } from "@/shared/ui/p";
import { Colors, Genders, GendersRussian } from "@/shared/consts";
import { cn } from "@/shared/lib";
import { MoveRight } from "lucide-react";
import { menus } from "@/widgets/_header/lib/mock";

interface IProps {
    close: () => void;
    gender:Genders;
    onClickGender:(val:Genders)=>void;
}

export const BurgerMenu = (props: IProps) => {
  const { close, gender, onClickGender } = props;

  return (
    <BaseModal className='bg-[var(--bg-main)] mt-[var(--header-height)]  h-full w-full py-3 px-4' close={close}>
      <Flex gap={24}>
        <Flex mode='row' gap={24}>
          <Button onClick={() => onClickGender(Genders.Women)} variant='ghost' className='p-0'>
            <P color={Colors.White} fontWeight={gender === Genders.Women ? 600 : 300} className={cn(gender === Genders.Women && 'underline underline-offset-8')}>{GendersRussian.Women}</P>
          </Button>
          <Button onClick={() => onClickGender(Genders.Men)} variant='ghost' className='p-0'>
            <P color={Colors.White} fontWeight={gender === Genders.Men ? 600 : 300} className={cn(gender === Genders.Men && 'underline underline-offset-8')}>{GendersRussian.Men}</P>
          </Button>
        </Flex>
        <Flex className=''>
          {menus?.map(i => (
            <Button variant='ghost' key={i.name} className='py-4 px-0 border-b-[1px] h-auto border-[var(--white)] rounded-none flex justify-between'>
              <P fontWeight={300} color={Colors.White}>{i.name}</P>
              <MoveRight color={Colors.White} />
            </Button>
          ))}
        </Flex>

        <Flex>
          {/* bottom */}
        </Flex>
      </Flex>
    </BaseModal>
  );
};
