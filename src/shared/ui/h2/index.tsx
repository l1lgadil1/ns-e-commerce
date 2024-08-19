import styles from './styles.module.scss';
import { IProps } from './props';
import { PropsWithChildren } from "react";
import classNames from "classnames";

export const H2 = (props: PropsWithChildren<IProps>) => {
  const { children, className, lineHeight, mode, fontSize, size, color, fontWeight, style, ...otherProps } = props;
  return (
    <h1
      className={classNames(styles.container, mode && mode, size && styles[size], className)}
      style={{
        fontSize,
        lineHeight: `${lineHeight}px`,
        fontWeight,
        color,
        ...style
      }}
      {...otherProps}
    >
      {children}
    </h1>
  );
};
