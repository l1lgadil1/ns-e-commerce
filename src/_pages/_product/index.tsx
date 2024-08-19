'use client';

import styles from './styles.module.scss';
import { H1 } from "@/shared/ui/h1";
import { Flex } from "@/shared/ui/flex";
import { P } from "@/shared/ui/p";
import { formatPrice } from "@/shared/helpers";
import { Button } from "@/shared/ui/button";
import { Colors } from "@/shared/consts";
import { H2 } from "@/shared/ui/h2";
import { Globe, ShieldCheck, Box, Castle, Plus, Minus } from "lucide-react";
import { cn } from "@/shared/lib";
import { H3 } from "@/shared/ui/h3";
import { useMemo, useState } from "react";

const featuresArr = [
  {
    title: 'Казахстанский бренд',
    icon: <Globe color={Colors.White} />,
    description: 'Все детали произведены по стандартам новейших технологий',
    imgSrc: 'https://st.bork.kz/components/product/beauty/fen/f730-gg/gallery/gallery-05-new.jpg?t=1682089627'
  },
  {
    title: 'Высококачественная система ионизации',
    icon: <Castle color={Colors.White} />,
    description: 'Запатентованная система ионизации PLASMA COATING ухаживает за локонами, сохраняя влагу в структуре волос и помогая сделать их более гладкими и блестящими.',
    imgSrc: 'https://st.bork.kz/components/product/beauty/fen/f730-gg/feature/03-new.jpg?t=1679915942'
  },
  {
    title: 'Защита волос',
    icon: <ShieldCheck color={Colors.White} />,
    description: 'Благодаря мощному воздушному потоку сушка будет быстрой. Двухуровневый фильтр очищает воздух и защищает волосы от загрязнений, а система подавления шума гарантирует тихое и приятное звучание фена.',
    imgSrc: 'https://st.bork.kz/components/product/beauty/fen/f730-gg/feature/02-new.jpg?t=1679915933'
  },
  {
    title: '7 насадок в комплекте',
    icon: <Box color={Colors.White} />
  }
];
const characteristics = [
  {
    title: 'Потребляемая мощность',
    value: '1600 Вт'
  },
  {
    title: 'Скорость потока',
    value: 'До 33 м/сек'
  },
  {
    title: 'Число темп. режимов',
    value: '3'
  },
  {
    title: 'Число скоростей',
    value: '3'
  },
  {
    title: 'Холодный обдув',
    value: 'Есть'
  },
  {
    title: 'Функция ионизации',
    value: 'Есть'
  },
  {
    title: 'Кол-во насадок',
    value: '3'
  },
  {
    title: 'Насадка стайлер',
    value: 'Есть'
  },
  {
    title: 'Насадака концентратор',
    value: 'Есть'
  },
  {
    title: 'Насадка диффузор',
    value: '3'
  },
  {
    title: 'Вес фена без насадок',
    value: '0,3 кг'
  },
  {
    title: 'Срок гарантии',
    value: '1 год'
  },
  {
    title: 'Длина кабеля',
    value: '2 м'
  },
  {
    title: 'Материал корпуса',
    value: 'Титан'
  },
  {
    title: 'Цвет',
    value: 'натуральный титан'
  },
  {
    title: 'Страна производства',
    value: 'Китай'
  },
];
export const ProductPage = () => {
  const [isCharacteristicsFull, setCharacteristicsFull] = useState(false);
  const characteristicsArr = useMemo(() => (isCharacteristicsFull ? characteristics : characteristics?.slice(0, 4)), [isCharacteristicsFull]);
  const handleCharacteristics = () => setCharacteristicsFull(p => !p);
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.progress}>
          {/* asd */}
        </div>

        <img src="https://st.bork.kz/components/product/beauty/fen/f730-gg/gallery/01.jpg?t=1693204811" alt="product" />
        {/* <img src="/images/products/dryer/dryer1.png" alt="product" /> */}
        <Flex className={styles.name} justify='center' align='center' mode='row'>
          <Flex gap={24} className={styles.info}>
            <H1 color={Colors.White}>NS Superair</H1>
            <Flex gap={18} align='center'>
              <H2 size='xs' color={Colors.White} className='opacity-80'>{formatPrice(75000)} тг.</H2>
              <Button>
                Купить
              </Button>
            </Flex>
          </Flex>

        </Flex>
        {/* Features desktop */}
        <Flex mode='row' justify='center' className={cn('!hidden md:!flex w-full ', styles.featuresDesktop)}>
          <Flex gap={24} mode='row' justify='center' className='container'>
            {featuresArr?.map(i => (
              <Flex mode='row' gap={4} align='center'>
                {i.icon}
                <P size='m' color={Colors.White} key={i?.title}>
                  {i.title}
                </P>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </div>
      {/* Features mobile */}
      <Flex className='my-8 container md:!hidden'>
        <Flex gap={12}>
          {featuresArr?.map(i => (
            <Flex mode='row' gap={12} align='center'>
              {i.icon}
              <P size='m' color={Colors.White} key={i?.title}>
                {i.title}
              </P>
            </Flex>
          ))}
        </Flex>
      </Flex>
      {/* Features details */}
      <Flex gap={24} className='!my-6 container bg-[var(--bg-secondary)] md:bg-transparent'>
        {featuresArr?.filter(i => i.imgSrc).map(i => (
          <Flex key={i.imgSrc} gap={18} className={styles.featureCard}>
            <img src={i.imgSrc} alt={i.title} />
            <H3 size='s' color={Colors.White} className='opacity-80'>{i?.description}</H3>
          </Flex>
        ))}
      </Flex>
      <Flex gap={18} className='container !py-6'>
        <H3 size='m' color={Colors.White} className='underline underline-offset-8 '>
          Характеристики
        </H3>
        <Flex gap={24}>
          {characteristicsArr?.map(i => (
            <Flex mode='row' className='w-full border-b-[1px] border-[var(--tab-border)] py-[10px]' justify='flex-start'>
              <Flex gap={4}>
                <P color={Colors.White} size='m' className='opacity-40'>{i.title}</P>
                <P color={Colors.White} size='m'>{i.value}</P>
              </Flex>
            </Flex>
          ))}
          <Flex align='flex-start'>
            <Button onClick={handleCharacteristics} className='h-auto p-0 flex gap-4 items-center' variant='ghost'>
              {isCharacteristicsFull ? <Minus color={Colors.ProductBtn} /> : <Plus color={Colors.ProductBtn} />}
              <P color={Colors.White} fontWeight={500} size='s' className='opacity-40 uppercase'>{isCharacteristicsFull ? "Свернуть" : "Больше характеристик"}</P>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify='center' mode='row' className='container !py-5'>
        <Button>
          <P color={Colors.White} className='uppercase' fontWeight={500}>Инструкция</P>
        </Button>
      </Flex>
    </div>
  );
};
