import styles from './styles.module.scss';
import { IProps } from './props';
import { PropsWithChildren } from "react";
import classNames from "classnames";

export const P = (props: PropsWithChildren<IProps>) => {
  const { children, className, lineHeight = 22, fontSize = 16, size, mode, fontWeight = 400, color, style, ...otherProps } = props;
  return (
    <p
      style={{
        fontSize,
        color,
        lineHeight: `${lineHeight}px`,
        fontWeight,
        ...style
      }}
      className={classNames(styles.container, mode && mode, size && styles[size], className)}
      {...otherProps}
    >
      {children}
    </p>
  );
};
