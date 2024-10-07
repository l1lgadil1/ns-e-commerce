import { MenuCard } from "./ui/menu-card";
import Image from 'next/image';

export const QrWomens = () => (
  <main className="flex min-h-screen flex-col items-center justify-center  md:p-24">
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200  backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:hidden lg:p-4 lg:dark:bg-zinc-800/30">
        {/* <code className="font-mono font-bold">src/app/page.tsx</code> */}
        <a href="/ru/women/qr">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/images/ns-logo.png"
            alt="Next.js Logo"
            width={54}
            height={54}
            priority
          />
        </a>
      </div>
    </div>

    <div className="relative z-[-1] hidden  lg:flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      <a href="/ru/women/qr">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/images/ns-logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </a>
    </div>

    <div className="px-4 mt-[100px] py-5 md:p-0 grid text-center gap-4 lg:mb-0 w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left ">
      {/* <MenuCard href='https://kaspi.kz/shop/info/merchant/17533621/address-tab/?merchantId=17533621' title='Kaspi магазин' iconSrc='/images/kaspi-logo.svg' /> */}
      {/* <MenuCard href='https://kaspi.kz/shop/search/?q=%3AallMerchants%3A16272231' title='Все товары' description='Все наши товары в Kaspi магазине' iconSrc='/images/kaspi-logo.svg' /> */}
      <MenuCard href='https://api.whatsapp.com/send?phone=7762918098' title='Тех. поддержка' description='Если у вас возникли проблемы,то пишите сюда. Мы с радостью ответим на все ваши вопросы' />
      <MenuCard href='https://www.instagram.com/nshair.w/' title='Instagram' description='Здесь мы регулярно делимся уникальными советами по уходу за волосами, простыми и стильными прическами, а также полезными гайдами для создания вашего идеального образа!' iconSrc='/images/instagram.svg' />
      <MenuCard href='https://nsbeauty.kz' title='Наш сайт -&gt;' />
      <MenuCard href='https://nsbeauty.kz/ru/women/course' title='Курс по укладкам' description='Авторский курс от профессионального стилиста' />
    </div>
  </main>
);
