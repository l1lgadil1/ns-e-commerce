import styles from './styles.module.scss';
import { cn } from "@/shared/lib";
import { Flex } from "@/shared/ui/flex";
import { CardItemModel } from "./model/types";
import Link from "next/link";
import { H3 } from "@/shared/ui/h3";
import { H4 } from "@/shared/ui/h4";
import { formatPrice } from "@/shared/helpers";

export type { CardItemModel };

export const CardItem = (props: CardItemModel) => {
  const { className, imgSrc, name, id, price } = props;
  return (
    <Link href={`/product/${id}`} className={cn(styles.container, className)}>
      <picture className={styles.picture}>
        <img className={styles.img} src={imgSrc} width={150} height={150} alt={name} />
      </picture>
      <Flex gap={4}>
        <H3 mode='primary' size='xs'>{name}</H3>
        <H4 size='s' mode='secondary'>{formatPrice(price)} ₸</H4>
      </Flex>
    </Link>
  );
};
