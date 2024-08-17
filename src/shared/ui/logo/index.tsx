import Link from "next/link";
import Image from "next/image";

export const Logo = () => (
  <Link href="/" className='flex w-full justify-center'>
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/images/logo-white.png"
      alt="Next.js Logo"
      width={42}
      height={42}
      priority
      style={{
        height: 42, width: 42
      }}
    />
  </Link>
);
