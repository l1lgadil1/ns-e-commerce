'use client';

import { IProps } from './props';
import { PropsWithChildren, useState } from "react";
import { HeaderV2 } from "@/widgets/_header";
import { cn } from "@/shared/lib";
import { Footer } from "@/widgets/footer";

export const AppContainer = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [theme, setTheme] = useState('women');
  return (
    <>
      <HeaderV2 />
      <div
        // style={{ paddingTop: headerMargins }}
        className={cn('w-full h-full flex-1 flex flex-col', theme)}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
