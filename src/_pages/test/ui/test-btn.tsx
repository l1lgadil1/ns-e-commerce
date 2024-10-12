"use client";

import { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { cn, setLocalStorage, ymReachGoal } from "@/shared/lib";
import { formatPrice } from "@/shared/helpers";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useHeaderStore } from "@/shared/lib/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/shared/ui/button";
import { StorageIds } from "@/shared/consts";
import axios from "axios";

interface OrderButtonProps {
    currentPrice: number
    oldPrice?: number
    count?: number;
    href: string
  name:string
}

export function TestBtn({ currentPrice, href, oldPrice, count, name }: OrderButtonProps) {
  const t = useTranslations('product');
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(true);
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const hideHeader = useHeaderStore(state => state.hideHeader);
  const resetHideHeader = useHeaderStore(state => state.resetHideHeader);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(false);
        // setIsHeaderVisible(false);
        hideHeader();
      } else {
        resetHideHeader();
        setIsVisible(true);
        // setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState('');

  const redirectToKaspi = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = `${href}`;
    downloadLink.target = '_blank';

    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const redirectToWhatsapp = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = `https://api.whatsapp.com/send?phone=7762918098&text=${encodeURI(`Здравствуйте!\nХочу купить ${name}`)}`;
    downloadLink.target = '_blank';

    document.body.appendChild(downloadLink);

    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  const handleCheckout = () => {
    if (params?.id) {
      ymReachGoal(params.id as string);
      console.log(params.id);
    }
    if (country !== 'Kazakhstan' || !country) {
      setIsOpen(true);
    } else {
      redirectToKaspi();
    }
  };

  // useEffect(() => {
  //   const header = document.querySelector('header');
  //   if (header) {
  //     if (isHeaderVisible) {
  //       // isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
  //       header.style.transform = `translateY(0px)`;
  //     } else {
  //       header.style.transform = `translateY(100%)`;
  //     }
  //   }
  // }, [isHeaderVisible]);

  const discount = oldPrice ? oldPrice - currentPrice : null;
  const discountPercentage = (oldPrice && discount) ? Math.round((discount / oldPrice) * 100) : null;

  const handleConfirm = () => {
    setIsOpen(false);
    setLocalStorage(StorageIds.Country, 'Kazakhstan');

    redirectToKaspi();
    // Здесь можно добавить дополнительную логику, если пользователь подтверждает, что он из Казахстана
  };

  const handleDeny = () => {
    setIsOpen(false);
    setLocalStorage(StorageIds.Country, 'Another');
    // Здесь можно добавить дополнительную логику, если пользователь не из Казахстана

    redirectToWhatsapp();
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      handleDeny();
      // console.log('Модальное окно было закрыто');
      // Здесь вы можете добавить любую дополнительную логику,
      // которая должна выполняться при закрытии модального окна
    }
  };

  const detectCountry = async () => {
    try {
      const response = await axios.get('https://ipapi.co/json/');

      setCountry(response.data.country_name);
      // Открываем модальное окно только если страна не Казахстан
      if (response.data.country_name !== 'Kazakhstan') {
        // setIsOpen(true);
        // setCountry(response.data.country_name);
      } else {
        setLocalStorage(StorageIds.Country, 'Kazakhstan');
      }
    } catch (error) {
      // console.error('Ошибка при определении страны:', error);
      // setError('Не удалось определить вашу страну. Пожалуйста, попробуйте позже.');
    } finally {
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    detectCountry();
  }, []);
  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Подтверждение страны</DialogTitle>
            <DialogDescription>
              Ваша страна Казахстан?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={handleConfirm}>Да</Button>
            <Button variant="outline" onClick={handleDeny}>Нет</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div
        className={cn('fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-[#CB1243] to-[#E91E63] text-white transition-all duration-300 z-10 ease-in-out',
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
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
            {/* <Link className='w-full' onClick={handleCheckout} href={href} target='_blank'> */}
            <button
              type='button'
              className="bg-white text-[#CB1243] px-3 py-2 rounded-full w-full font-semibold flex items-center justify-center space-x-2 hover:bg-[#FFCDD2] transition-colors duration-300 whitespace-nowrap"
              aria-label="Оформить заказ"
              onClick={handleCheckout}
            >
              <ShoppingCart size={20} />
              <span className='text-xs font-bold'>{`${t('checkout')}`}</span>
            </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
