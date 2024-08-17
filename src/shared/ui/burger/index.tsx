import styles from './styles.module.scss';
import { IProps } from './props';
import { cn } from "@/shared/lib";
import { Menu } from "lucide-react";

export const Burger = (props: IProps) => {
  const { className, onClick, color } = props;
  return (
    <button onClick={onClick} type='button' className={cn(styles.container, className)}>
      <Menu color={color} />
    </button>
  );
};
