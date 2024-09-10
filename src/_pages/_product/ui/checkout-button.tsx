import { Flex } from "@/shared/ui/flex";
import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { cn } from "@/shared/lib";

interface IProps{
    href:string;
    isVisible:boolean;
}
export const CheckoutButton = ({ href, isVisible }:IProps) => (
  <Flex className={cn('p-4 md:hidden fixed w-full bottom-2 left-0 transition-all ease-in z-10', isVisible ? 'opacity-100' : 'opacity-0')}>
    <Link href={href} className='flex justify-center' target='_blank' rel='noreferrer'>
      <Button
        style={{
          background: `#8B253E`,
          width: '100%',
        }}
        className='md:max-w-[600px] mx-auto h-[44px] text-[18px]'
      >
        Оформить заказ
      </Button>
    </Link>
  </Flex>

);
