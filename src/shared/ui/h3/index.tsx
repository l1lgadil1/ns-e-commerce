import styles from './styles.module.scss';
import { IProps } from './props';
import { PropsWithChildren } from "react";
import classNames from "classnames";

export const H3 = (props: PropsWithChildren<IProps>) => {
  const { children, className, lineHeight, color, mode, fontSize, size, fontWeight, style, ...otherProps } = props;
  return (
    <h3
      className={classNames(styles.container, mode && mode, size && styles[size], className)}
      style={{
        fontSize,
        lineHeight: lineHeight && `${lineHeight}px`,
        fontWeight,
        color,
        ...style
      }}
      {...otherProps}
    >
      {children}
    </h3>
  );
};
