'use client';

import styles from './styles.module.scss';
import { MainBanner } from "./ui/main-banner";
import { useHeaderStore, useThemeStore } from "@/shared/lib/store";
import { Genders } from "@/shared/consts";
import { Flex } from "@/shared/ui/flex";
import { useEffect, useRef } from "react";
import { useIntersection } from "react-use";
import { H1 } from "@/shared/ui/h1";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coursesWomen = [
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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const coursesMen = [
  {
    imgPreview: 'https://mi-home.kz/templates/yootheme/cache/06/Xiaomi_Soocas_Electric_Shaver_S32_2-0662427c.webp',
    title: 'NS борода',
    subtitle: 'Идеальное бритье',
    description: 'Для всех типов кожи'
  },

];

// const womenItems = [
//   {
//     name: 'NS Super Air',
//     id: '1',
//     imgSrc: "https://st.bork.kz/original/common/1248155/1_1248155.png?1720709244",
//     price: 76000
//   }
// ];
// const menItems = [
//   {
//     name: 'NS 11',
//     id: 'ns-11',
//     imgSrc: "/images/products/razor/ns-11/main.png",
//     price: 13900
//   },
//   {
//     name: 'NS 81',
//     id: 'ns-81',
//     imgSrc: "/images/products/razor/ns-81/main.png",
//     price: 12500
//   },
//   {
//     name: 'NS 4D',
//     id: 'ns-4d',
//     imgSrc: "/images/products/razor/ns4d/main.png",
//     price: 15890
//   },
// ];

export const MainPageV2 = () => {
  const gender = useThemeStore(state => state.theme);
  const womenBanners = [
    {
      imgSrc: `/images/products/dryer/ns-superair/_-24.jpg`,
      title: 'Новая Эра Стиля и Ухода',
      text: 'NS Superair — это ваш ключ к безупречному стилю. Откройте для себя возможности для создания идеальных укладок и заботы о волосах.',
      href: '/women/product/ns-superair'
    },
  ];
  const menBanner = [
    {
      imgSrc: '/images/products/razor/ns4d/_.jpg',
      title: 'NS 4D',
      text: 'Испытайте революцию в уходе за собой с NS 4D. Передовые технологии для идеального бритья.',
      href: '/men/product/ns-4d'
    },
    {
      imgSrc: '/images/products/razor/ns-11/_-38.jpg',
      title: 'NS 11',
      text: 'NS 11 — это сочетание точности и комфорта. Наслаждайтесь современными технологиями бритья с каждым использованием.',
      href: '/men/product/ns-11'
    },
    {
      imgSrc: '/images/products/razor/ns-81/_-42.jpg',
      title: 'NS 81',
      text: 'NS 81 сочетает в себе новейшие технологии и элегантный дизайн. Отличный выбор для тех, кто ищет максимальный комфорт и эффективность.',
      href: '/men/product/ns-81'
    },
  ];
  const currentArr = gender === Genders.Women ? womenBanners : menBanner;
  const intersectionRef = useRef<HTMLDivElement>(null);
  const changeHeaderColor = useHeaderStore(state => state.changeHeaderColor);
  const resetHeaderColor = useHeaderStore(state => state.resetHeaderColor);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });

  useEffect(() => {
    if ((intersection && intersection.isIntersecting)) {
      changeHeaderColor();
    } else {
      resetHeaderColor();
    }
  }, [intersection]);
  return (
    <div className={styles.container}>
      <Flex>
        <H1 className='hidden'>NS</H1>
        {currentArr.map(i => (
          <MainBanner bannerInfo={i} key={i.imgSrc} />
        ))}
      </Flex>
      {currentArr?.length > 1 && <div ref={intersectionRef} />}

      {/* {!(intersection && intersection?.intersectionRatio < 1) ? <div>intersected</div> : <div>no</div>} */}

      {/* <ItemsList arrList={(gender === Genders?.Women ? womensItems : mensItems).map(i => ({ */}
      {/*  imgSrc: i.images.find(_i => _i.includes('png')) || i.images[0], */}
      {/*  id: i.id, */}
      {/*  price: i.price, */}
      {/*  name: i.name */}
      {/* }))} */}
      {/* /> */}
      {/* {gender === Genders.Women ? <CoursesList className='py-10 px-4 bg-[var(--bg-secondary)]' list={coursesWomen} title='Уход за волосами' /> : <CoursesList className='py-10 px-4 bg-[var(--bg-secondary)]' list={coursesMen} title='Уход за бородой' />} */}
    </div>
  );
};
