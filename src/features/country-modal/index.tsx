"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/shared/ui/button";
import { getLocalStorage, setLocalStorage } from "@/shared/lib";
import { StorageIds } from "@/shared/consts";

export default function CountryModal() {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userCountry, setUserCountry] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const savedCountry = getLocalStorage(StorageIds.Country);
  const detectCountry = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://ipapi.co/json/');
      setUserCountry(response.data.country_name);

      // Открываем модальное окно только если страна не Казахстан
      if (response.data.country_name !== 'Kazakhstan') {
        setIsOpen(true);
      } else {
        setLocalStorage(StorageIds.Country, 'Kazakhstan');
      }
    } catch (error) {
      console.error('Ошибка при определении страны:', error);
      // setError('Не удалось определить вашу страну. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (savedCountry) return;

    detectCountry();
  }, []);

  const handleConfirm = () => {
    setIsOpen(false);
    setLocalStorage(StorageIds.Country, 'Kazakhstan');
    // Здесь можно добавить дополнительную логику, если пользователь подтверждает, что он из Казахстана
  };

  const handleDeny = () => {
    setIsOpen(false);
    setLocalStorage(StorageIds.Country, 'Another');
    // Здесь можно добавить дополнительную логику, если пользователь не из Казахстана
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

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
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
  );
}
