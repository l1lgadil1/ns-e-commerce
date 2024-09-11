'use client';

import { IProps } from './props';
import { PropsWithChildren, useEffect } from "react";
import { HeaderV2 } from "@/widgets/_header";
import { cn } from "@/shared/lib";
import { Footer } from "@/widgets/footer";
import { useThemeStore } from "@/shared/lib/store";
import { useParams } from "next/navigation";
import { Genders } from "@/shared/consts";

export const AppContainer = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const params = useParams();

  const theme = useThemeStore(state => state.theme);
  const changeTheme = useThemeStore(state => state.changeTheme);

  useEffect(() => () => {
    console.log(params, 'first render');
    if (!params.gender || params.gender === Genders.Women) {
      changeTheme('women');
      console.log('changetheme women');
    } else if (params?.gender && params.gender === Genders.Men) {
      changeTheme('men');
      console.log('changetheme men');
    }
  }, []);

  console.log(theme, params);
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
