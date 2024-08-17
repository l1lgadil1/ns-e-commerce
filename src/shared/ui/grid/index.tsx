import cn from "classnames";
import { PropsWithChildren } from "react";

interface IProps {
    className?: string;
    cols?: number;
    gap?: number;
}

export const Grid = (props: PropsWithChildren<IProps>) => {
  const { className = '', cols = 1, children, gap = 0 } = props;
  return (
    <div className={cn(className, 'grid', cols && `grid-cols-${cols}`)} style={{ gap }}>
      {children}
    </div>
  );
};
