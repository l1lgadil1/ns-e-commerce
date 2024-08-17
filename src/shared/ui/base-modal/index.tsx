import styles from './styles.module.scss';
import { IProps } from './props';
import { cn } from "@/shared/lib";
import { PropsWithChildren } from "react";

export const BaseModal = (props: PropsWithChildren<IProps>) => {
  const { className, wrapperClassName, close, children } = props;
  return (
    <div className={cn(styles.wrapper, wrapperClassName)} onClick={close}>
      <div className={cn(styles.container, className)} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
