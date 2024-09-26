import Image from "next/image";
import { useThemeStore } from "@/shared/lib/store";
import { Link } from "@/i18n/routing";

interface IProps{
    color?:'black' | 'white';
}
export const Logo = ({ color }:IProps) => {
  const gender = useThemeStore(state => state.theme);

  if (color === 'black') {
    return (
      <Link href={`/${gender}`} className='flex w-full justify-center'>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert aspect-[96/120]"
          src="/images/ns-logo.png"
          alt="Next.js Logo"
          width={42}
          height={42}
          priority
        />
      </Link>
    );
  }
  return (
    <Link href={`/${gender}`} className='flex w-full justify-center'>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert aspect-[96/120]"
        src="/images/logo-white.png"
        alt="Next.js Logo"
        width={42}
        height={42}
        priority
      />
    </Link>
  );
};
