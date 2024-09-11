'use client';

import { IProps } from './props';
import { PropsWithChildren } from "react";
import { HeaderV2 } from "@/widgets/_header";
import { cn } from "@/shared/lib";
import { Footer } from "@/widgets/footer";
import { useThemeStore } from "@/shared/lib/store";
import { useParams } from "next/navigation";

export const AppContainer = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const params = useParams();

  const theme = useThemeStore(state => state.theme);

  return (
    <div className={cn(theme, 'app')}>
      <HeaderV2 />
      <div
        // style={{ paddingTop: headerMargins }}
        className={cn('w-full h-full flex-1 flex flex-col')}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};
