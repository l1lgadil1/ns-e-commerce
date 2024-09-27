'use client';

import { IProps } from './props';
import { PropsWithChildren, useEffect } from "react";
import { HeaderV2 } from "@/widgets/_header";
import { cn } from "@/shared/lib";
import { Footer } from "@/widgets/footer";
import { useThemeStore } from "@/shared/lib/store";
import { useParams, usePathname } from "next/navigation";

export const AppContainer = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const params = useParams();
  const pathname = usePathname();
  const excludePagesFooter = ['product', 'test', 'qr'];
  const excludePagesHeader = ['qr'];

  const theme = useThemeStore(state => state.theme);
  const isHideHeader = excludePagesHeader.some(i => pathname.includes(i));
  const isHideFooter = excludePagesFooter.some(i => pathname.includes(i));
  // const [advertising, setAdvertisings] = useState<AdvertisingModel>(null);

  const fetchAdvertising = async () => {
    // const res = await getAdvertisings();
    // if (res) {
    //   if (res[0]) {
    //     setAdvertisings(res[0]);
    //   }
    // }
  };
  const appHeight = () => {
    const doc = document?.documentElement;
    doc?.style?.setProperty('--app-height', `${window.innerHeight}px`);
  };
  useEffect(() => {
    fetchAdvertising();
    appHeight();
  }, []);

  return (
    <div className={cn(theme, 'app')}>
      {!isHideHeader && <HeaderV2 />}
      <section>
        {children}
      </section>
      {!isHideFooter && <Footer />}
    </div>
  );
};
