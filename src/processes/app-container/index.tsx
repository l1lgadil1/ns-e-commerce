'use client';

import { IProps } from './props';
import { PropsWithChildren } from "react";
import { Header } from "@/widgets/header";

export const AppContainer = (props: PropsWithChildren<IProps>) => {
  const { children } = props;
  return (
    <>
      <Header />
      <div
        // style={{ paddingTop: headerMargins }}
        className='w-full h-full flex-1 flex flex-col'
      >
        {children}
      </div>
    </>
  );
};
