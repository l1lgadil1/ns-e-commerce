import styles from './styles.module.scss';
import { IProps } from './props';
import { cn } from "@/shared/lib";

export const Hr = (props: IProps) => {
  const { className } = props;
  return (
    <div className={cn(styles.container, className, 'h-[1px] w-full relative')}>
      <div className={styles.line} />
    </div>
  );
};
