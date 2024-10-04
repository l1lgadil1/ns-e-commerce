"use client";

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { cn, ymReachGoal } from "@/shared/lib";
import { formatPrice } from "@/shared/helpers";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface OrderButtonProps {
    currentPrice: number
    oldPrice?: number
    count?: number;
    href: string
}

export function TestBtn({ currentPrice, href, oldPrice, count }: OrderButtonProps) {
  const t = useTranslations('product');
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(false);
        setIsHeaderVisible(false);
      } else {
        setIsVisible(true);
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleCheckout = () => {
    if (params?.id) {
      ymReachGoal(params.id as string);
    }
  };

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      if (isHeaderVisible) {
        // isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        header.style.transform = `translateY(0px)`;
      } else {
        header.style.transform = `translateY(100%)`;
      }
    }
  }, [isHeaderVisible]);

  const discount = oldPrice ? oldPrice - currentPrice : null;
  const discountPercentage = (oldPrice && discount) ? Math.round((discount / oldPrice) * 100) : null;

  return (
    <>
      {/* <header */}
      {/*  className={`fixed top-0 left-0 right-0 bg-white shadow-md transition-all duration-300 ease-in-out z-10 ${ */}
      {/*    isHeaderVisible ? 'translate-y-0' : '-translate-y-full' */}
      {/*  }`} */}
      {/* > */}
      {/*  <div className="max-w-4xl mx-auto px-4 py-2 flex justify-between items-center"> */}
      {/*    <h1 className="text-xl font-bold text-[#CB1243]">Ваш магазин</h1> */}
      {/*    <nav> */}
      {/*      <ul className="flex space-x-4"> */}
      {/*        <li><a href="#" className="text-[#CB1243] hover:text-[#E91E63]">Главная</a></li> */}
      {/*        <li><a href="#" className="text-[#CB1243] hover:text-[#E91E63]">Каталог</a></li> */}
      {/*        <li><a href="#" className="text-[#CB1243] hover:text-[#E91E63]">Контакты</a></li> */}
      {/*      </ul> */}
      {/*    </nav> */}
      {/*  </div> */}
      {/* </header> */}

      <div
        className={cn('fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-[#CB1243] to-[#E91E63] text-white transition-all duration-300 z-10 ease-in-out'
          // , isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        )}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center space-x-1">
            <div className='flex flex-col gap-1'>
              <div className="text-m font-bold whitespace-nowrap">{formatPrice(currentPrice)} ₸</div>
              {oldPrice && (
                <div
                  className="text-s line-through opacity-75 whitespace-nowrap"
                >{formatPrice(oldPrice)} ₸
                </div>
              )}
            </div>
            <div className='flex flex-col gap-1'>
              {oldPrice && (
                <div
                  className="bg-[#FFCDD2] text-[#CB1243] px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                >
                  -{discountPercentage}%
                </div>
              )}
            </div>
          </div>
          <div className='flex flex-col-reverse w-full items-center justify-center gap-1'>
            {count && (
              <div className="text-xs font-bold whitespace-nowrap">
                {t('left')}: {count} {t('count')}
              </div>
            )}
            <Link className='w-full' onClick={handleCheckout} href={href} target='_blank'>
              <button
                type='button'
                className="bg-white text-[#CB1243] px-3 py-2 rounded-full w-full font-semibold flex items-center justify-center space-x-2 hover:bg-[#FFCDD2] transition-colors duration-300 whitespace-nowrap"
                aria-label="Оформить заказ"
              >
                <ShoppingCart size={20} />
                <span className='text-xs font-bold'>{`${t('checkout')}`}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
