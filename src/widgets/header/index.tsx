'use client';

import Link from "next/link";
import Image from "next/image";

export const Header = () => (
  <header className="fixed left-0 font-mono top-0 flex w-full px-3  items-center justify-between border-b z-10 border-gray-300 bg-primary  backdrop-blur-2xl  ">
    <div className='w-full '>
      <Link href="tel:+77762918098">
        +7 776 291 80 98
      </Link>
    </div>
    <Link href="/" className='flex w-full justify-center'>
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/images/ns-logo.png"
        alt="Next.js Logo"
        width={80}
        height={80}
        priority
      />
    </Link>
    <div className='w-full' />
  </header>
);
