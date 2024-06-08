import styles from './styles.module.scss';
import { cn } from "@/shared/lib";
import { productsArr } from "@/shared/mock";
import { ItemCard, ItemCardModel } from "@/entities/item-card";
import { containerStyles } from "@/shared/styles";

export const MainPage = () => {
  const itemsArr:ItemCardModel[] = productsArr as ItemCardModel[];

  return (
    <main className={cn(styles.container, 'bg-primary')}>
      {/* <div className='w-full h-[400px]'> */}
      {/*  slider */}
      {/* </div> */}
      <div className={cn('flex flex-wrap md:grid grid-cols-4 my-10 gap-4', containerStyles)}>
        {itemsArr.map((item) => (
          <ItemCard {...item} key={item.kaspiUrl} />
        ))}
      </div>
    </main>
  );
};
