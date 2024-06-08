import styles from './styles.module.scss';
import Link from "next/link";
import { ItemCardModel } from "./model";
import Image from 'next/image';
import { cn } from "@/shared/lib";

export const ItemCard = (props: ItemCardModel) => {
  const { name, price, images, id } = props;
  return (
    <Link
      // href={kaspiUrl}
      href={`/product/${id}`}
      className={cn(styles.container)}
    >
      <div className='flex flex-col gap-3'>
        <div className='bg-secondary relative'>
          <Image src={images[0]} alt={name} width={180} height={220} className={cn(styles.image)} objectFit='cover' />
          <div className='absolute left-0 bottom-4 flex justify-center w-full'>
            <div className='flex gap-1 items-center overflow-hidden '>
              {/* eslint-disable-next-line no-unsafe-optional-chaining */}
              {images.slice(1, (images?.length - 1 || 1)).map(img => (<Image key={img} width={12} height={12} alt={img} src={img} className={styles.smallImg} />))}
            </div>
          </div>
        </div>
        <div className='flex flex-col px-2'>
          <h3>{name}</h3>
          <div className='flex w-full gap-3 items-center'>
            <h4>{price} тг</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};
