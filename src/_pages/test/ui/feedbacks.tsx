"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/shared/ui/button";
import { Flex } from "@/shared/ui/flex";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

// const reviews = [
//   {
//     id: 1,
//     name: "Анна С.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//     comment: "Отличный продукт! Мои волосы выглядят потрясающе после использования."
//   },
//   {
//     id: 2,
//     name: "Михаил Д.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 4,
//     comment: "Очень удобно использовать дома. Экономит время и деньги на салоны."
//   },
//   {
//     id: 3,
//     name: "Елена П.",
//     avatar: "/placeholder.svg?height=40&width=40",
//     rating: 5,
//     comment: "Профессиональное качество укладки в домашних условиях. Рекомендую!"
//   }
// ];

export function ReviewGallery({ href, reviews }:{href:string, reviews:{author:string, review:string, stars:number}[]}) {
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState(0);
  const t = useTranslations('common');

  const nextReview = () => {
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextReview,
    onSwipedRight: prevReview,
    // @ts-ignore
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const variants = {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    // eslint-disable-next-line @typescript-eslint/no-shadow
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Flex className="w-full overflow-hidden bg-white !pb-24">
      <Flex className=' max-w-md mx-auto w-full'>
        <Flex className="p-6" {...handlers} gap={20}>
          <h2 className="text-2xl font-bold  text-center">{t('Отзывы клиентов')}</h2>
          <div className="relative h-[400px]">
            <div className="flex justify-between my-5">
              <Button variant="outline" size="icon" onClick={prevReview}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous review</span>
              </Button>
              <Button variant="outline" size="icon" onClick={nextReview}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next review</span>
              </Button>
            </div>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentReview}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <Flex mode='row' align='center' gap={2}>
                    {/* Отзыв с */}
                    <Image src='/images/kaspi-logo.svg' width={24} height={24} alt='kaspi -img' />
                  </Flex>
                  {/* <Avatar> */}
                  {/*  <AvatarImage src={reviews[currentReview].avatar} alt={reviews[currentReview].name} /> */}
                  {/*  <AvatarFallback>{reviews[currentReview].name.charAt(0)}</AvatarFallback> */}
                  {/* </Avatar> */}
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={(i < reviews[currentReview]?.stars && reviews && reviews[currentReview]) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-2">{reviews[currentReview]?.review}</p>
                <p className="text-right font-semibold">{reviews[currentReview]?.author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="">
            <Link className='w-full' href={href} target='_blank'>
              <Button className="w-full bg-[var(--btn-main)]">
                {t('Прочитать все отзывы')}
              </Button>
            </Link>
          </div>

        </Flex>
      </Flex>
    </Flex>
  );
}
