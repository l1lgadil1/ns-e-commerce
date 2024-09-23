import Link from "next/link";
import { H3 } from "@/shared/ui/h3";
import { FiArrowUpRight } from "react-icons/fi";
import { useThemeStore } from "@/shared/lib/store";
import { Genders } from "@/shared/consts";
import { AdvertisingModel } from "@/entities/advertising";

interface IProps{
    advertising:AdvertisingModel
}
export const Advertising = ({ advertising }:IProps) => {
  const gender = useThemeStore(state => state.theme);
  return (
    <div className=' fixed bottom-0  right-0 left-0 py-2 px-4 h-[46px] flex items-center     bg-[var(--advertising)] w-full'>
      <Link href='/women/product/ns-superair' className='w-full flex justify-between items-center'>
        <H3 color={gender === Genders.Women ? 'white' : 'black'} fontWeight={500} fontSize={16} lineHeight={22}>{advertising?.name}</H3>
        <FiArrowUpRight color={gender === Genders.Women ? 'white' : 'black'} />
      </Link>
    </div>
  );
};
