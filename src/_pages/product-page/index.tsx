'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import styles from './styles.module.scss';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ItemCardModel } from "@/entities/item-card";
import { productsArr } from "@/shared/mock";
import { cn } from "@/shared/lib";
import { containerStyles } from "@/shared/styles";
import { formatPrice } from "@/shared/helpers";
import { Button } from "@/shared/ui/button";
import { Link } from "@/i18n/routing";

export const ProductPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setLoading] = useState(true);
  const isMobile = window.innerWidth <= 768;
  const params = useParams();
  const productId = params?.id;
  const [product, setProduct] = useState<ItemCardModel>();

  const settings = {
    dots: true,
    infinite: false,
  };
  useEffect(() => {
    setProduct(productsArr.find(i => i.id === +(productId)));
    setLoading(false);
  }, [productId]);

  return (
    <div className={cn(styles.container, 'bg-secondary')}>
      <div className={cn(styles.content, !isMobile && containerStyles)}>
        <div className={styles.left}>
          <div className={styles.images}>
            {isMobile ? (
              <Slider {...settings}>
                {product?.images.map((img) => (
                  <Image key={img} src={img} alt={img} width={220} height={340} />
                ))}
              </Slider>
            ) : product?.images.map((img) => (
              <Image key={img} src={img} alt={img} width={220} height={340} />
            )) }
          </div>
        </div>
        <div className={cn(styles.right, 'bg-primary')}>
          <div className={styles.name}>
            <h1>{product?.name}</h1>
            <h2>{formatPrice(product?.price || 0)}</h2>
          </div>
          <div className={cn('bg-secondary p-3 md:p-5', styles.description)}>
            <p>{product?.description}</p>
          </div>
          <div className={styles.kaspi}>
            <Link href={product?.kaspiUrl || ''}>
              <Button className='bg-secondary  flex gap-2 font-[500] w-full'>
                Купить <Image src='/images/kaspi-logo.svg' width={24} height={24} alt='kaspi -img' />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
