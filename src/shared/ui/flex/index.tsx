import styles from './styles.module.scss';
import { IProps } from './props';
import { forwardRef, PropsWithChildren } from "react";
import classNames from "classnames";

export const Flex = forwardRef<HTMLDivElement, PropsWithChildren<IProps>>((props:PropsWithChildren<IProps>, ref) => {
  const { className, children, gap, justify, align, flexWrap, mode = 'column' } = props;
  return (
    <div
      ref={ref}
      className={classNames(styles.container, className, styles[mode], justify && styles[justify], align && styles[align])}
      style={{
        justifyContent: justify,
        alignItems: align,
        gap,
        flexWrap: flexWrap ? 'wrap' : 'nowrap'
      }}
    >
      {children}
    </div>
  );
});
