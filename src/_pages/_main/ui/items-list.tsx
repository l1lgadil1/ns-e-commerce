import { H2 } from "@/shared/ui/h2";
import { Flex } from "@/shared/ui/flex";
import { CardItem, CardItemModel } from "@/entities/card-item";
import { Hr } from "@/shared/ui/hr";
import { useHeaderStore } from "@/shared/lib/store";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";

interface IProps{
  arrList:CardItemModel[]
}
export const ItemsList = ({ arrList }:IProps) => {
  const isMobile = window.innerWidth <= 768;
  const headerChangeColor = useHeaderStore(state => state.changeHeaderColor);

  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  useEffect(() => {
    if ((intersection && intersection.isIntersecting)) {
      headerChangeColor();
    }
  }, [intersection]);

  return (
    <Flex gap={18} className='!pt-10 pb-5 mx-4 container'>
      {/*  Нужно сохранять картинки в соотношение 1:1 с минимальной шириной в 220 и высотой 220 */}
      {/* <CardItem name='NS Super Air' id='1' imgSrc="/images/products/dryer/dryer1.png" price={76000} /> */}
      <H2 mode='primary' size='m'>Товары</H2>
      <Flex gap={isMobile ? 16 : 32} flexWrap mode='row'>
        {arrList?.map(i => (
          <CardItem
            key={i.imgSrc}
            name={i.name}
            id={i.id}
            imgSrc={i.imgSrc}
            price={i.price}
          />
        ))}
        <div ref={intersectionRef} />
        <Hr className='my-10' />
      </Flex>
    </Flex>
  );
};
