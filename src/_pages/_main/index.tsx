'use client';

import styles from './styles.module.scss';
import { CardItem } from "@/entities/card-item";
import { Flex } from "@/shared/ui/flex";
import { P } from "@/shared/ui/p";
import { H1 } from "@/shared/ui/h1";
import { Colors } from "@/shared/consts";
import { Button } from "@/shared/ui/button";
import { Hr } from "@/shared/ui/hr";
import { CoursesList } from "@/widgets/courses/list";
import { useIntersection } from "react-use";
import { useEffect, useRef } from "react";

const coursesArrMock = [
  {
    imgPreview: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/hair-care/airstrait-553-2023/haircare-category-page/styling-guides/553-haircare-category-naturally-straight-blow-out-leap.jpg?cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640',
    title: 'NS superair выпрямление',
    subtitle: 'Выпрямление волос в домашних условиях',
    description: 'Идеальные, прямые волосы'
  },
  {
    imgPreview: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/hair-care/dyson-supersonic/supersonic-nural/owners-page/605G-Owners-PW-Style-Guide-Wave-Curl-Diffuser.jpg?cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640',
    title: 'NS superair выпрямление',
    subtitle: 'Выпрямление волос в домашних условиях',
    description: 'Идеальные, прямые волосы'
  },
  {
    imgPreview: 'https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/products/hair-care/airstrait-553-2023/haircare-category-page/styling-guides/553-haircare-category-smooth-c-curl-leap.jpg?cropPathE=mobile&fit=stretch,1&fmt=pjpeg&wid=640',
    title: 'NS superair выпрямление',
    subtitle: 'Выпрямление волос в домашних условиях',
    description: 'Идеальные, прямые волосы'
  },
];

export const MainPageV2 = () => {
  const isMobile = window?.innerWidth <= 768;
  const header = document?.getElementsByName('header')[0];

  const intersectionRef = useRef<HTMLDivElement>(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  useEffect(() => {
    if (!header) return;
    if (!(intersection && intersection?.intersectionRatio < 1) && header?.style) {
      header.style.background = '#26211e';
    } else {
      header.style.background = 'transparent';
    }
  }, [intersection, header]);

  return (
    <div className={styles.container}>
      <Flex className={styles.pictureContainer}>
        <picture className={styles.picture}>
          <img alt='bg-main' src='https://st.bork.kz/components/product/beauty/beauty.jpg?t=1721730517' />
        </picture>
        <Flex mode='row' justify='center' className={styles.text}>
          <Flex gap={12}>
            <Flex gap={4}>
              <H1 fontSize={22} lineHeight={28} color={Colors.White}>Новая эра красоты</H1>
              <P color={Colors.White}>Новый NS superair позволит вам расширить ваш стиль максимально комфортно.</P>
            </Flex>
            <Flex mode='row' justify='center'>
              <Button className='border-[hsla(0,0%,100%,.1)]' variant='outline'>
                <P size='s' color={Colors.White}>Перейти</P>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex gap={isMobile ? 16 : 32} className='my-10 mx-4 container' flexWrap mode='row'>
        {/*  Нужно сохранять картинки в соотношение 1:1 с минимальной шириной в 220 и высотой 220 */}
        {/* <CardItem name='NS Super Air' id='1' imgSrc="/images/products/dryer/dryer1.png" price={76000} /> */}
        <CardItem name='NS Super Air' id='1' imgSrc="https://st.bork.kz/original/common/1248155/1_1248155.png?1720709244" price={76000} />
        <CardItem name='NS Super Air' id='1' imgSrc="https://st.bork.kz/original/common/1248155/1_1248155.png?1720709244" price={76000} />
        <Hr className='my-10' />
      </Flex>
      <div ref={intersectionRef} />

      <CoursesList className='py-10 px-4 bg-[var(--bg-secondary)]' list={coursesArrMock} title='Уход за волосами' />
    </div>
  );
};
